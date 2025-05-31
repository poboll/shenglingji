const { Comment, User } = require('../models');
const { Op } = require('sequelize');

/**
 * 获取帖子评论
 */
exports.getPostComments = async (req, res) => {
  try {
    const { postId } = req.params;

    if (!postId) {
      return res.status(400).json({
        success: false,
        message: '需要帖子ID'
      });
    }

    const comments = await Comment.findAll({
      where: { postId },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'username', 'avatar', 'nickname']
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    // 转换评论数据格式以符合前端需求
    const formattedComments = comments.map(comment => {
      const user = comment.user;
      return {
        id: comment.id,
        postId: comment.postId,
        content: comment.content,
        likes: comment.likes,
        createdAt: comment.createdAt,
        user: {
          id: user.id.toString(),
          name: user.nickname || user.username,
          userName: user.username,
          userAvatar: user.avatar
        }
      };
    });

    return res.status(200).json({
      success: true,
      message: '获取评论成功',
      data: formattedComments
    });
  } catch (error) {
    console.error('获取评论出错:', error);
    return res.status(500).json({
      success: false,
      message: '获取评论失败',
      error: error.message
    });
  }
};

/**
 * 发表评论
 */
exports.createComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { content } = req.body;
    const userId = req.user ? req.user.userId : null; // 假设通过认证中间件获取当前用户ID

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: '未授权，请先登录'
      });
    }

    if (!postId || !content) {
      return res.status(400).json({
        success: false,
        message: '帖子ID和评论内容是必须的'
      });
    }

    // 创建评论
    const comment = await Comment.create({
      postId,
      userId,
      content
    });

    // 获取完整的评论信息（包含用户数据）
    const createdComment = await Comment.findByPk(comment.id, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'username', 'avatar', 'nickname']
        }
      ]
    });

    // 格式化评论数据
    const formattedComment = {
      id: createdComment.id,
      postId: createdComment.postId,
      content: createdComment.content,
      likes: createdComment.likes,
      createdAt: createdComment.createdAt,
      user: {
        id: createdComment.user.id.toString(),
        name: createdComment.user.nickname || createdComment.user.username,
        userName: createdComment.user.username,
        userAvatar: createdComment.user.avatar
      }
    };

    return res.status(201).json({
      success: true,
      message: '评论发表成功',
      data: formattedComment
    });
  } catch (error) {
    console.error('发表评论出错:', error);
    return res.status(500).json({
      success: false,
      message: '评论发表失败',
      error: error.message
    });
  }
};

/**
 * 点赞评论
 */
exports.likeComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findByPk(commentId);

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: '评论不存在'
      });
    }

    // 增加点赞数
    comment.likes += 1;
    await comment.save();

    return res.status(200).json({
      success: true,
      message: '点赞成功',
      data: { likes: comment.likes }
    });
  } catch (error) {
    console.error('点赞评论出错:', error);
    return res.status(500).json({
      success: false,
      message: '点赞失败',
      error: error.message
    });
  }
};

/**
 * 删除评论
 */
exports.deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const userId = req.user ? req.user.userId : null;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: '未授权，请先登录'
      });
    }

    const comment = await Comment.findByPk(commentId);

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: '评论不存在'
      });
    }

    // 检查是否是评论作者
    if (comment.userId !== userId) {
      return res.status(403).json({
        success: false,
        message: '无权删除此评论'
      });
    }

    await comment.destroy();

    return res.status(200).json({
      success: true,
      message: '评论删除成功'
    });
  } catch (error) {
    console.error('删除评论出错:', error);
    return res.status(500).json({
      success: false,
      message: '删除评论失败',
      error: error.message
    });
  }
}; 