const express = require('express');
const router = express.Router();
const { generateRandomNickname, generateRandomAvatar } = require('../utils/randomGenerator');

// 获取随机昵称
router.get('/random-nickname', (req, res) => {
  try {
    const nickname = generateRandomNickname();
    res.json({
      nickname: nickname
    });
  } catch (error) {
    console.error('生成随机昵称时出错:', error);
    res.status(500).json({ message: '服务器错误，生成随机昵称失败' });
  }
});

// 获取随机头像
router.get('/random-avatar', async (req, res) => {
  try {
    // 使用请求参数作为种子，如果没有则使用随机值
    const seed = req.query.seed || Math.random().toString(36).substring(2, 10);
    const avatarUrl = await generateRandomAvatar(seed);

    res.json({
      avatarUrl: avatarUrl
    });
  } catch (error) {
    console.error('生成随机头像时出错:', error);
    res.status(500).json({ message: '服务器错误，生成随机头像失败' });
  }
});

module.exports = router;