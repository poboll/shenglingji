const { User, Profile } = require('../models');
const { generateToken } = require('../utils/jwt');

// 用户注册
exports.register = async (req, res) => {
  try {
    const { username, email, password, nickname, phone } = req.body;

    // 检查用户名或邮箱是否已被注册
    const existingUser = await User.findOne({
      where: {
        [User.sequelize.Op.or]: [{ username }, { email }]
      }
    });

    if (existingUser) {
      return res.status(409).json({ message: '用户名或邮箱已被注册' });
    }

    // 创建用户
    const newUser = await User.create({
      username,
      email,
      password,
      nickname: nickname || username,
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

    // 查找用户（通过用户名或邮箱）
    const user = await User.findOne({
      where: {
        [User.sequelize.Op.or]: [
          { username },
          { email: username } // 支持通过邮箱登录
        ]
      }
    });

    if (!user) {
      return res.status(401).json({ message: '无效的用户名或密码' });
    }

    // 验证密码
    const isPasswordValid = await user.validPassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: '无效的用户名或密码' });
    }

    // 检查用户状态
    if (user.status !== 'active') {
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
      avatar: user.avatar
    };

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
    const user = req.user;

    // 获取用户资料
    const profile = await Profile.findOne({ where: { userId: user.id } });

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
    const userId = req.user.id;

    // 更新用户基本信息
    const updatedUser = await User.update(
      {
        nickname,
        bio,
        avatar,
        gender,
        birthday,
        phone
      },
      {
        where: { id: userId },
        returning: true
      }
    );

    res.json({
      message: '用户信息更新成功',
      user: updatedUser
    });
  } catch (error) {
    console.error('更新用户信息错误:', error);
    res.status(500).json({ message: '服务器错误，更新用户信息失败' });
  }
};

// 更新用户资料
exports.updateProfile = async (req, res) => {
  try {
    const { location, website, education, occupation, interests, social_links, preferences } = req.body;
    const userId = req.user.id;

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
    const userId = req.user.id;

    // 获取用户
    const user = await User.findByPk(userId);

    // 验证当前密码
    const isPasswordValid = await user.validPassword(currentPassword);
    if (!isPasswordValid) {
      return res.status(400).json({ message: '当前密码不正确' });
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