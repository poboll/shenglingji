const fs = require('fs');
const path = require('path');

// 初始化虚拟媒体文件
const initializeMedia = async () => {
  try {
    // 定义目录
    const publicDir = path.join(__dirname, '../../public');
    const uploadsDir = path.join(publicDir, 'uploads');
    const defaultsDir = path.join(__dirname, '../defaults');

    // 确保默认媒体目录存在
    if (!fs.existsSync(defaultsDir)) {
      fs.mkdirSync(defaultsDir, { recursive: true });
    }

    // 创建上传目录
    const dirs = [
      path.join(uploadsDir, 'images'),
      path.join(uploadsDir, 'videos'),
      path.join(uploadsDir, 'avatars')
    ];

    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    // 创建虚拟植物图片
    for (let i = 1; i <= 10; i++) {
      const filename = `plant-${i}.jpg`;
      const placeholder = createPlaceholderImage(`植物图片 ${i}`, 800, 600);
      fs.writeFileSync(path.join(uploadsDir, 'images', filename), placeholder);
    }

    // 创建虚拟动物图片
    for (let i = 1; i <= 10; i++) {
      const filename = `animal-${i}.jpg`;
      const placeholder = createPlaceholderImage(`动物图片 ${i}`, 800, 600);
      fs.writeFileSync(path.join(uploadsDir, 'images', filename), placeholder);
    }

    // 创建视频封面图片
    for (let i = 1; i <= 5; i++) {
      const filename = `video-cover-${i}.jpg`;
      const placeholder = createPlaceholderImage(`视频封面 ${i}`, 640, 360);
      fs.writeFileSync(path.join(uploadsDir, 'images', filename), placeholder);
    }

    // 创建用户头像
    for (let i = 1; i <= 5; i++) {
      const filename = `avatar-${i}.jpg`;
      const placeholder = createPlaceholderImage(`用户头像 ${i}`, 200, 200);
      fs.writeFileSync(path.join(uploadsDir, 'avatars', filename), placeholder);
    }

    // 创建虚拟视频文件
    for (let i = 1; i <= 3; i++) {
      const filename = `video-${i}.mp4`;
      // 视频文件较大，这里仅创建一个很小的占位文件
      const placeholder = Buffer.from('This is a video placeholder file');
      fs.writeFileSync(path.join(uploadsDir, 'videos', filename), placeholder);
    }

    console.log('虚拟媒体文件创建成功');
  } catch (error) {
    console.error('创建虚拟媒体文件失败:', error);
  }
};

// 创建一个简单的占位图片（仅文本，不是真实图片）
function createPlaceholderImage(text, width, height) {
  // 这里只是创建一个文本文件作为占位，实际应用中可以使用图形库生成真实图片
  return Buffer.from(`This is a placeholder for "${text}" with dimensions ${width}x${height}`);
}

module.exports = initializeMedia; 