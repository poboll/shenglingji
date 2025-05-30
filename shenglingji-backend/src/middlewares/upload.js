const multer = require('multer');
const path = require('path');
const fs = require('fs');

// 确保上传目录存在
const createUploadDirs = () => {
  const dirs = [
    path.join(__dirname, '../../public/uploads/images'),
    path.join(__dirname, '../../public/uploads/videos')
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

createUploadDirs();

// 配置存储
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 根据文件类型选择不同的目录
    let uploadPath = '';
    if (file.fieldname === 'images') {
      uploadPath = path.join(__dirname, '../../public/uploads/images');
    } else if (file.fieldname === 'videos') {
      uploadPath = path.join(__dirname, '../../public/uploads/videos');
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    // 生成唯一文件名
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

// 文件过滤器
const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'images') {
    // 只接受图片
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('只允许上传JPG, JPEG, PNG和GIF格式的图片!'), false);
    }
  } else if (file.fieldname === 'videos') {
    // 只接受视频
    if (!file.originalname.match(/\.(mp4|mov|avi|wmv)$/)) {
      return cb(new Error('只允许上传MP4, MOV, AVI和WMV格式的视频!'), false);
    }
  }
  cb(null, true);
};

// 文件大小限制
const limits = {
  fileSize: {
    images: 5 * 1024 * 1024, // 5MB
    videos: 50 * 1024 * 1024 // 50MB
  }
};

// 创建Multer实例
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024 // 默认最大50MB
  }
});

module.exports = upload; 