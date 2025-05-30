const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const userController = require('../controllers/userController');
const { authenticateUser } = require('../middlewares/auth');

// 确保上传目录存在
const uploadsDir = path.join(__dirname, '../../public/uploads/avatars');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// 配置文件上传
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    // 生成唯一文件名
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, `avatar-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    // 检查文件类型
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('只支持上传jpg、jpeg、png和gif格式的图片'));
  }
});

// 公开路由
router.post('/register', userController.register);
router.post('/login', userController.login);

// 需要鉴权的路由
router.get('/profile', authenticateUser, userController.getCurrentUser);
router.put('/profile', authenticateUser, userController.updateUser);
router.put('/profile/details', authenticateUser, userController.updateProfile);
router.put('/password', authenticateUser, userController.changePassword);
router.post('/avatar', authenticateUser, upload.single('avatar'), userController.uploadAvatar);

module.exports = router; 