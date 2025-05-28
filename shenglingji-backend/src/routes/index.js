const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');

// API路由
router.use('/users', userRoutes);

// 健康检查
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API服务运行正常' });
});

module.exports = router; 