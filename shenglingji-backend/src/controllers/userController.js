const { User, Profile } = require('../models');
const { generateToken } = require('../utils/jwt');
const { Op } = require('sequelize');
const { generateRandomNickname, generateRandomAvatar } = require('../utils/randomGenerator');

// 用户注册
exports.register = async (req, res) => {
  try {
    const { username, email, password, nickname, phone } = req.body;

    // 检查用户名或邮箱是否已被注册
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ username }, { email }]
      }
    });

    if (existingUser) {
      return res.status(409).json({ message: '用户名或邮箱已被注册' });
    }

    // 生成随机昵称和头像
    const randomNickname = generateRandomNickname();
    const randomAvatar = await generateRandomAvatar(username);

    // 创建用户
    const newUser = await User.create({
      username,
      email,
      password,
      nickname: nickname || randomNickname,
      avatar: randomAvatar,
      phone
    });

    // 创建用户资料
    await Profile.create({
      userId: newUser.id
    });

    // 生成JWT令牌
    const token = generateToken(newUser);

    // 返回用户信息（不包括密码）
    const userData = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      nickname: newUser.nickname,
      status: newUser.status,
      createdAt: newUser.createdAt
    };

    res.status(201).json({
      message: '注册成功',
      user: userData,
      token
    });
  } catch (error) {
    console.error('注册错误:', error);
    res.status(500).json({ message: '服务器错误，注册失败' });
  }
};

// 用户登录
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: '用户名和密码不能为空' });
    }

    console.log(`尝试登录: 用户名=${username}, 密码长度=${password.length}`);

    // 查找用户（通过用户名或邮箱）
    const user = await User.findOne({
      where: {
        [Op.or]: [
          { username },
          { email: username } // 支持通过邮箱登录
        ]
      }
    });

    if (!user) {
      console.log('用户不存在:', username);
      return res.status(401).json({ message: '无效的用户名或密码' });
    }

    // 验证密码
    const isPasswordValid = await user.validPassword(password);
    if (!isPasswordValid) {
      console.log('密码验证失败:', username);
      return res.status(401).json({ message: '无效的用户名或密码' });
    }

    // 检查用户状态
    if (user.status !== 'active') {
      console.log('账号已被禁用:', username);
      return res.status(403).json({ message: '账号已被禁用' });
    }

    // 更新最后登录时间
    await user.update({ last_login: new Date() });

    // 生成JWT令牌
    const token = generateToken(user);

    // 返回用户信息（不包括密码）
    const userData = {
      id: user.id,
      username: user.username,
      email: user.email,
      nickname: user.nickname,
      avatar: user.avatar,
      status: user.status,
      createdAt: user.createdAt
    };

    console.log('登录成功:', username);
    res.json({
      message: '登录成功',
      user: userData,
      token
    });
  } catch (error) {
    console.error('登录错误:', error);
    res.status(500).json({ message: '服务器错误，登录失败' });
  }
};

// 获取当前用户信息
exports.getCurrentUser = async (req, res) => {
  try {
    // req.user 由鉴权中间件添加
    const userId = req.user.userId;

    // 获取完整的用户信息
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: '用户不存在' });
    }

    // 获取用户资料
    const profile = await Profile.findOne({ where: { userId } });

    res.json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        nickname: user.nickname,
        avatar: user.avatar,
        bio: user.bio,
        phone: user.phone,
        gender: user.gender,
        birthday: user.birthday,
        status: user.status,
        createdAt: user.createdAt,
        profile: profile || {}
      }
    });
  } catch (error) {
    console.error('获取用户信息错误:', error);
    res.status(500).json({ message: '服务器错误，获取用户信息失败' });
  }
};

// 更新用户信息
exports.updateUser = async (req, res) => {
  try {
    const { nickname, bio, avatar, gender, birthday, phone } = req.body;
    const userId = req.user.userId;

    // 1. 更新用户基本信息
    await User.update(
      {
        nickname,
        bio,
        avatar,
        gender,
        birthday,
        phone
      },
      {
        where: { id: userId }
      }
    );

    // 2. 重新获取更新后的用户信息
    const updatedUserDetails = await User.findByPk(userId, {
      attributes: { exclude: ['password'] } // 确保不返回密码
    });

    if (!updatedUserDetails) {
      return res.status(404).json({ message: '用户未找到' });
    }

    res.json({
      user: updatedUserDetails // 返回完整的、更新后的用户信息对象
    });
  } catch (error) {
    console.error('更新用户信息错误:', error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: error.errors.map(e => e.message).join(', ') });
    }
    res.status(500).json({ message: '服务器错误，更新用户信息失败' });
  }
};

// 更新用户资料
exports.updateProfile = async (req, res) => {
  try {
    const { location, website, education, occupation, interests, social_links, preferences } = req.body;
    const userId = req.user.userId;

    // 查找或创建用户资料
    const [profile, created] = await Profile.findOrCreate({
      where: { userId },
      defaults: { userId }
    });

    // 更新资料
    await profile.update({
      location,
      website,
      education,
      occupation,
      interests,
      social_links,
      preferences
    });

    res.json({
      message: '用户资料更新成功',
      profile
    });
  } catch (error) {
    console.error('更新用户资料错误:', error);
    res.status(500).json({ message: '服务器错误，更新用户资料失败' });
  }
};

// 修改密码
exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user.userId;

    // 获取用户
    const user = await User.findByPk(userId);

    // 验证当前密码
    const isPasswordValid = await user.validPassword(currentPassword);
    if (!isPasswordValid) {
      return res.status(401).json({ message: '当前密码不正确' });
    }

    // 更新密码
    user.password = newPassword;
    await user.save();

    res.json({ message: '密码修改成功' });
  } catch (error) {
    console.error('修改密码错误:', error);
    res.status(500).json({ message: '服务器错误，修改密码失败' });
  }
};

// 上传头像
exports.uploadAvatar = async (req, res) => {
  try {
    const userId = req.user.userId;
    if (!req.file) {
      return res.status(400).json({ message: '没有上传文件' });
    }

    // 构建相对文件路径
    const relativeAvatarPath = `/uploads/avatars/${req.file.filename}`;
    // ^ 假设multer将文件存储在 public/uploads/avatars/ 目录下
    // ^ 如果你的public目录直接通过 express.static('public') 提供服务，
    // ^ 那么客户端可访问的URL路径可能是 /uploads/avatars/filename.jpg
    // ^ 但如果 public/avatars 是静态服务目录，路径应为 /avatars/filename.jpg
    // 请根据你的静态文件服务配置调整此路径

    // 更新用户头像URL (存储相对路径或完整路径，取决于你的偏好)
    // 这里我们存储相对路径，并在返回时构建完整URL
    await User.update({ avatar: relativeAvatarPath }, { where: { id: userId } });

    // 构建完整的头像URL给客户端
    // 注意: process.env.BASE_URL 应该在你的 .env 文件或环境变量中定义
    // 例如: BASE_URL=http://localhost:3000 或 https://yourdomain.com
    const serverBaseUrl = process.env.BASE_URL || `${req.protocol}://${req.get('host')}`;
    const fullAvatarUrl = `${serverBaseUrl}${relativeAvatarPath}`;

    console.log(`[userController] 头像上传成功。相对路径: ${relativeAvatarPath}, 完整URL: ${fullAvatarUrl}`);

    res.json({ message: '头像上传成功', avatarUrl: fullAvatarUrl }); // 返回完整URL

  } catch (error) {
    console.error('上传头像错误:', error);
    res.status(500).json({ message: '服务器错误，上传头像失败' });
  }
};

// 获取随机头像
exports.getRandomAvatar = async (req, res) => {
  // 定义一个永远可用的默认头像
  const FALLBACK_AVATAR = 'https://webimg.maibaapp.com/content/img/avatars/20174125/17/41/43940.jpg';

  // 默认头像URL列表
  const defaultAvatars = [
    'http://webimg.maibaapp.com/content/img/avatars/20165010/20/50/22996.jpg',
    'https://webimg.maibaapp.com/content/img/avatars/20164511/21/45/22228.jpg',
    'https://webimg.maibaapp.com/content/img/avatars/20165308/18/53/03617.jpg',
    'https://webimg.maibaapp.com/content/img/avatars/20184319/14/43/41369.jpeg'
  ];

  // 从列表中随机选择一个头像
  const getRandomDefaultAvatar = () => {
    const randomIndex = Math.floor(Math.random() * defaultAvatars.length);
    return defaultAvatars[randomIndex];
  };

  try {
    // 声明一个字符串变量用于存储头像URL
    let avatarUrl = "";

    try {
      const seed = req.query.seed || Date.now().toString();
      const generatedAvatarUrl = await generateRandomAvatar(seed);

      // 仅当generatedAvatarUrl是非空字符串时才使用它
      if (typeof generatedAvatarUrl === 'string' && generatedAvatarUrl.trim() !== '') {
        console.log(`[userController] 成功获取外部API头像URL: ${generatedAvatarUrl}`);
        avatarUrl = generatedAvatarUrl;
      } else {
        console.warn(`[userController] 外部API返回的不是有效字符串: ${JSON.stringify(generatedAvatarUrl)}`);
        avatarUrl = getRandomDefaultAvatar();
      }
    } catch (error) {
      console.error(`[userController] 获取随机头像时出错: ${error.message}`);
      avatarUrl = getRandomDefaultAvatar();
    }

    // 最终安全检查 - 确保avatarUrl一定是非空字符串
    if (typeof avatarUrl !== 'string' || avatarUrl.trim() === '') {
      console.error(`[userController] 严重错误 - avatarUrl仍然不是有效字符串，使用最终后备方案`);
      avatarUrl = FALLBACK_AVATAR;
    }

    // 直接使用对象字面量而不是变量，避免可能的引用问题
    console.log(`[userController] 发送随机头像响应: {"avatarUrl": "${avatarUrl}"}`);

    // 明确返回字符串字段
    res.json({
      "avatarUrl": String(avatarUrl)
    });
  } catch (error) {
    console.error(`[userController] 获取随机头像过程中发生未捕获的错误: ${error.message}`);
    // 即使在这种情况下也返回有效的头像URL，而不是错误信息
    res.json({
      "avatarUrl": String(FALLBACK_AVATAR)
    });
  }
};

// 获取随机昵称
exports.getRandomNickname = async (req, res) => {
  try {
    const nickname = generateRandomNickname();
    res.json({ nickname });
  } catch (error) {
    console.error('获取随机昵称失败 (controller):', error);
    res.status(500).json({ message: '生成随机昵称失败' });
  }
}; 