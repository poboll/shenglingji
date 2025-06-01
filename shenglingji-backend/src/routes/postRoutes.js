const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { authenticateUser } = require('../middlewares/auth');
const upload = require('../middlewares/upload');

// 公共路由 - 不需要登录
// 搜索帖子
router.get('/search', postController.searchPosts);

// 获取植物帖子列表
router.get('/plants', postController.getPlantPosts);

// 获取动物帖子列表
router.get('/animals', postController.getAnimalPosts);

// 需要登录的路由
// 获取关注的帖子列表
router.get('/following/:userId', authenticateUser, postController.getFollowingPosts);

// 获取帖子详情 - 放在最后，因为':id'会匹配任何路径
router.get('/:id', postController.getPostDetail);

// 创建新帖子 - 支持上传多张图片和视频
router.post('/',
  authenticateUser,
  upload.fields([
    { name: 'images', maxCount: 9 },
    { name: 'videos', maxCount: 1 }
  ]),
  postController.createPost
);

module.exports = router; 