const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateUser } = require('../middlewares/auth');

// 公开路由
router.post('/register', userController.register);
router.post('/login', userController.login);

// 需要鉴权的路由
router.get('/profile', authenticateUser, userController.getCurrentUser);
router.put('/profile', authenticateUser, userController.updateUser);
router.put('/profile/details', authenticateUser, userController.updateProfile);
router.put('/password', authenticateUser, userController.changePassword);

module.exports = router; 