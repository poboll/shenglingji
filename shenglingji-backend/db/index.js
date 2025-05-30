const { sequelize } = require('../src/models');
const generateUsers = require('./seeders/userSeeder');
const generatePosts = require('./seeders/postSeeder');
const generateFollowings = require('./seeders/followingSeeder');
const initializeMedia = require('./seeders/mediaSeeder');
const fs = require('fs');
const path = require('path');

// 确保上传目录存在
const createUploadDirs = () => {
  const dirs = [
    path.join(__dirname, '../public/uploads/images'),
    path.join(__dirname, '../public/uploads/videos'),
    path.join(__dirname, '../public/uploads/avatars')
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`创建目录: ${dir}`);
    }
  });
};

// 初始化数据库并填充测试数据
const initializeDatabase = async () => {
  try {
    console.log('开始初始化数据库...');

    // 创建必要的目录
    createUploadDirs();

    // 初始化虚拟媒体文件
    try {
      await initializeMedia();
      console.log('虚拟媒体文件初始化完成');
    } catch (error) {
      console.error('初始化媒体文件失败:', error.message);
    }

    // 禁用外键约束检查（仅在开发环境）
    if (process.env.NODE_ENV === 'development') {
      await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
      console.log('已禁用外键约束检查');
    }

    // 同步数据库模型 - 强制重建表
    await sequelize.sync({ force: true });
    console.log('数据库表已成功同步');

    // 重新启用外键约束检查
    if (process.env.NODE_ENV === 'development') {
      await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
      console.log('已重新启用外键约束检查');
    }

    // 按顺序创建数据，确保外键关系正确
    let users = [];

    // 1. 首先创建用户数据
    try {
      console.log('正在创建用户数据...');
      users = await generateUsers();
      console.log(`✓ 成功创建用户数据: ${users.length} 个用户`);
    } catch (error) {
      console.error('✗ 创建用户数据失败:', error.message);
      throw error; // 用户数据是基础，失败则停止
    }

    // 2. 创建用户关注关系
    if (users && users.length > 0) {
      try {
        console.log('正在创建用户关注关系...');
        await generateFollowings();
        console.log('✓ 成功创建用户关注关系');
      } catch (error) {
        console.error('✗ 创建用户关注关系失败:', error.message);
        // 关注关系失败不影响后续操作
      }

      // 3. 创建帖子数据（依赖用户数据）
      try {
        console.log('正在创建帖子数据...');
        await generatePosts();
        console.log('✓ 成功创建帖子数据');
      } catch (error) {
        console.error('✗ 创建帖子数据失败:', error.message);
        console.error('详细错误信息:', error);
        // 帖子数据失败不影响整体初始化
      }
    } else {
      console.log('⚠️  没有用户数据，跳过创建帖子和关注关系');
    }

    console.log('🎉 数据库初始化完成!');
    console.log('📊 数据统计:');

    // 显示数据统计
    try {
      const { User, Post, PostImage, PostVideo, Following } = require('../src/models');
      const userCount = await User.count();
      const postCount = await Post.count();
      const imageCount = await PostImage.count();
      const videoCount = await PostVideo.count();
      const followingCount = await Following.count();

      console.log(`   - 用户数量: ${userCount}`);
      console.log(`   - 帖子数量: ${postCount}`);
      console.log(`   - 图片数量: ${imageCount}`);
      console.log(`   - 视频数量: ${videoCount}`);
      console.log(`   - 关注关系: ${followingCount}`);
    } catch (error) {
      console.log('   - 无法获取数据统计');
    }

  } catch (error) {
    console.error('💥 数据库初始化错误:', error.message);
    console.error('详细错误信息:', error);
    process.exit(1);
  }
};

// 如果直接运行此文件，则执行初始化
if (require.main === module) {
  initializeDatabase();
}

module.exports = initializeDatabase;