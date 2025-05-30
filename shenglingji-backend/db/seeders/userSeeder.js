const { User, Profile } = require('../../src/models');
const bcrypt = require('bcrypt');

// 示例用户数据
const usersData = [
  {
    username: '小花花',
    email: 'xiaohuahua@example.com',
    password: 'password123',
    nickname: '小花花',
    avatar: '/uploads/avatars/avatar-1.jpg',
    bio: '热爱自然与生态摄影',
    gender: 'male',
    phone: '13800138001',
    status: 'active'
  },
  {
    username: '绿叶君',
    email: 'luyejun@example.com',
    password: 'password123',
    nickname: '绿叶君',
    avatar: '/uploads/avatars/avatar-2.jpg',
    bio: '专注植物学研究多年',
    gender: 'male',
    phone: '13800138002',
    status: 'active'
  },
  {
    username: '森林小精灵',
    email: 'senlinxiaojingling@example.com',
    password: 'password123',
    nickname: '森林小精灵',
    avatar: '/uploads/avatars/avatar-3.jpg',
    bio: '野生动物保护志愿者',
    gender: 'male',
    phone: '13800138003',
    status: 'active'
  },
  {
    username: '花花子',
    email: 'huahuazi@example.com',
    password: 'password123',
    nickname: '花花子',
    avatar: '/uploads/avatars/avatar-4.jpg',
    bio: '自然摄影爱好者',
    gender: 'female',
    phone: '13800138004',
    status: 'active'
  },
  {
    username: '生态小卫士',
    email: 'shengtaixiaoweishi@example.com',
    password: 'password123',
    nickname: '生态小卫士',
    avatar: '/uploads/avatars/avatar-5.jpg',
    bio: '关注生物多样性保护',
    gender: 'female',
    phone: '13800138005',
    status: 'active'
  },
  {
    username: '动物君',
    email: 'dongwujun@example.com',
    password: 'password123',
    nickname: '动物君',
    avatar: '/uploads/avatars/avatar-6.jpg',
    bio: '专注动物科普与保护',
    gender: 'other',
    phone: '13800138006',
    status: 'active'
  }
];

// 示例用户资料数据
const profilesData = [
  {
    location: '北京市海淀区',
    website: 'https://zhangsan-blog.com',
    education: '北京大学生物学系',
    occupation: '生物学研究员',
    interests: '植物学,生态保护,摄影',
    social_links: JSON.stringify({
      weibo: 'https://weibo.com/zhangsan',
      wechat: 'zhangsan_wechat'
    })
  },
  {
    location: '上海市浦东新区',
    website: 'https://lisi-plants.com',
    education: '复旦大学环境科学系',
    occupation: '植物学教授',
    interests: '植物分类学,花卉种植,生态保护',
    social_links: JSON.stringify({
      weibo: 'https://weibo.com/lisi',
      wechat: 'lisi_wechat'
    })
  },
  {
    location: '广州市天河区',
    website: 'https://wangwu-wildlife.org',
    education: '中山大学动物学系',
    occupation: '野生动物保护专家',
    interests: '动物行为学,野生动物保护,生态摄影',
    social_links: JSON.stringify({
      weibo: 'https://weibo.com/wangwu',
      wechat: 'wangwu_wechat'
    })
  },
  {
    location: '深圳市南山区',
    website: 'https://zhaoliu-photo.com',
    education: '深圳大学艺术系',
    occupation: '自由摄影师',
    interests: '自然摄影,户外探险,生态旅行',
    social_links: JSON.stringify({
      weibo: 'https://weibo.com/zhaoliu',
      wechat: 'zhaoliu_wechat'
    })
  },
  {
    location: '成都市锦江区',
    website: 'https://sunqi-eco.org',
    education: '四川大学环境工程系',
    occupation: '环保NGO工作者',
    interests: '生物多样性,环境保护,科普教育',
    social_links: JSON.stringify({
      weibo: 'https://weibo.com/sunqi',
      wechat: 'sunqi_wechat'
    })
  },
  {
    location: '全国各地',
    website: 'https://dongwu-kepu.com',
    education: '中国科学院动物研究所',
    occupation: '动物科普专家',
    interests: '动物科普,野生动物保护,生物多样性',
    social_links: JSON.stringify({
      weibo: 'https://weibo.com/dongwu',
      wechat: 'dongwu_kepu'
    })
  }
];

// 生成用户数据
const generateUsers = async () => {
  try {
    // 清空原有数据
    await User.destroy({ where: {}, force: true });

    const createdUsers = [];

    // 创建用户
    for (let i = 0; i < usersData.length; i++) {
      const userData = usersData[i];

      // 密码加密
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);

      // 创建用户
      const user = await User.create({
        ...userData,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      createdUsers.push(user);

      // 创建用户资料
      if (profilesData[i]) {
        await Profile.create({
          ...profilesData[i],
          userId: user.id,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }

    console.log(`成功创建了 ${createdUsers.length} 个用户`);
    return createdUsers;
  } catch (error) {
    console.error('用户数据填充错误:', error);
    throw error;
  }
};

module.exports = generateUsers;