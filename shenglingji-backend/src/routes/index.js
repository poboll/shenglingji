const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const utilsRoutes = require('./utils');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// API路由
router.use('/users', userRoutes);
router.use('/utils', utilsRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// 健康检查
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API服务运行正常' });
});

module.exports = router; 