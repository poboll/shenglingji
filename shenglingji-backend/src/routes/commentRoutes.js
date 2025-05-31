const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middlewares/auth');

/**
 * @route   GET /api/comments/post/:postId
 * @desc    获取帖子的所有评论
 * @access  Public
 */
router.get('/post/:postId', commentController.getPostComments);

/**
 * @route   POST /api/comments/post/:postId
 * @desc    发表评论
 * @access  Private
 */
router.post('/post/:postId', auth.authenticateUser, commentController.createComment);

/**
 * @route   POST /api/comments/like/:commentId
 * @desc    点赞评论
 * @access  Public
 */
router.post('/like/:commentId', commentController.likeComment);

/**
 * @route   DELETE /api/comments/:commentId
 * @desc    删除评论
 * @access  Private
 */
router.delete('/:commentId', auth.authenticateUser, commentController.deleteComment);

module.exports = router; 