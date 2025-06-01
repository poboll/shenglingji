const { Post, User, PostImage, PostVideo, UserFollowing, Comment } = require('../models');
const { Op, literal } = require('sequelize');

// 获取植物帖子列表
exports.getPlantPosts = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const posts = await Post.findAndCountAll({
      where: { type: 1 }, // 植物类型
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'username', 'avatar']
        },
        {
          model: PostImage,
          as: 'images',
          attributes: ['id', 'imageUrl', 'position'],
          order: [['position', 'ASC']]
        },
        {
          model: PostVideo,
          as: 'videos',
          attributes: ['id', 'videoUrl', 'coverUrl', 'duration']
        }
      ]
    });

    return res.status(200).json({
      success: true,
      data: {
        total: posts.count,
        totalPages: Math.ceil(posts.count / limit),
        currentPage: parseInt(page),
        posts: posts.rows
      }
    });
  } catch (error) {
    console.error('获取植物帖子列表出错:', error);
    return res.status(500).json({
      success: false,
      message: '获取植物帖子列表失败',
      error: error.message
    });
  }
};

// 获取动物帖子列表
exports.getAnimalPosts = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const posts = await Post.findAndCountAll({
      where: { type: 2 }, // 动物类型
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'username', 'avatar']
        },
        {
          model: PostImage,
          as: 'images',
          attributes: ['id', 'imageUrl', 'position'],
          order: [['position', 'ASC']]
        },
        {
          model: PostVideo,
          as: 'videos',
          attributes: ['id', 'videoUrl', 'coverUrl', 'duration']
        }
      ]
    });

    return res.status(200).json({
      success: true,
      data: {
        total: posts.count,
        totalPages: Math.ceil(posts.count / limit),
        currentPage: parseInt(page),
        posts: posts.rows
      }
    });
  } catch (error) {
    console.error('获取动物帖子列表出错:', error);
    return res.status(500).json({
      success: false,
      message: '获取动物帖子列表失败',
      error: error.message
    });
  }
};

// 获取关注的帖子列表
exports.getFollowingPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    // 获取用户关注的所有用户ID
    const followingUsers = await UserFollowing.findAll({
      where: { followerId: userId },
      attributes: ['followingId']
    });

    if (followingUsers.length === 0) {
      return res.status(200).json({
        success: true,
        data: {
          total: 0,
          totalPages: 0,
          currentPage: parseInt(page),
          posts: []
        }
      });
    }

    const followingUserIds = followingUsers.map(follow => follow.followingId);

    // 获取这些用户发布的帖子
    const posts = await Post.findAndCountAll({
      where: {
        userId: { [Op.in]: followingUserIds }
      },
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'username', 'avatar']
        },
        {
          model: PostImage,
          as: 'images',
          attributes: ['id', 'imageUrl', 'position'],
          order: [['position', 'ASC']]
        },
        {
          model: PostVideo,
          as: 'videos',
          attributes: ['id', 'videoUrl', 'coverUrl', 'duration']
        }
      ]
    });

    return res.status(200).json({
      success: true,
      data: {
        total: posts.count,
        totalPages: Math.ceil(posts.count / limit),
        currentPage: parseInt(page),
        posts: posts.rows
      }
    });
  } catch (error) {
    console.error('获取关注帖子列表出错:', error);
    return res.status(500).json({
      success: false,
      message: '获取关注帖子列表失败',
      error: error.message
    });
  }
};

// 获取帖子详情
exports.getPostDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findByPk(id, {
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'username', 'avatar']
        },
        {
          model: PostImage,
          as: 'images',
          attributes: ['id', 'imageUrl', 'position', 'description'],
          order: [['position', 'ASC']]
        },
        {
          model: PostVideo,
          as: 'videos',
          attributes: ['id', 'videoUrl', 'coverUrl', 'duration']
        }
      ]
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: '帖子不存在'
      });
    }

    // 更新浏览量
    await post.update({ views: post.views + 1 });

    // 处理帖子数据，确保coverImage和mediaUrl字段正确
    const postData = post.toJSON();

    // 如果数据库中没有coverImage或mediaUrl，基于关联数据动态设置
    if (!postData.coverImage || !postData.mediaUrl) {
      // 对于视频帖子
      if (postData.videos && postData.videos.length > 0) {
        if (!postData.coverImage) {
          postData.coverImage = postData.videos[0].coverUrl;
        }
        if (!postData.mediaUrl) {
          postData.mediaUrl = postData.videos[0].videoUrl;
        }
        postData.mediaType = 'video';
      }
      // 对于图片帖子
      else if (postData.images && postData.images.length > 0) {
        if (!postData.coverImage) {
          postData.coverImage = postData.images[0].imageUrl;
        }
        if (!postData.mediaUrl) {
          postData.mediaUrl = postData.images[0].imageUrl;
        }
        postData.mediaType = 'image';
      }
    }

    return res.status(200).json({
      success: true,
      data: postData
    });
  } catch (error) {
    console.error('获取帖子详情出错:', error);
    return res.status(500).json({
      success: false,
      message: '获取帖子详情失败',
      error: error.message
    });
  }
};

// 创建新帖子
exports.createPost = async (req, res) => {
  try {
    const { title, content, type, location, images, videos } = req.body;
    const { userId } = req.user; // 假设通过认证中间件获取当前用户ID

    // 创建帖子
    const post = await Post.create({
      title,
      content,
      type,
      location,
      userId
    });

    // 处理图片
    if (images && images.length > 0) {
      const postImages = images.map((image, index) => ({
        postId: post.id,
        imageUrl: image.url,
        position: index,
        description: image.description || null
      }));
      await PostImage.bulkCreate(postImages);
    }

    // 处理视频
    if (videos && videos.length > 0) {
      const postVideos = videos.map(video => ({
        postId: post.id,
        videoUrl: video.url,
        coverUrl: video.cover || null,
        duration: video.duration || null
      }));
      await PostVideo.bulkCreate(postVideos);
    }

    // 获取完整的帖子信息并返回
    const newPost = await Post.findByPk(post.id, {
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'username', 'avatar']
        },
        {
          model: PostImage,
          as: 'images',
          attributes: ['id', 'imageUrl', 'position', 'description'],
          order: [['position', 'ASC']]
        },
        {
          model: PostVideo,
          as: 'videos',
          attributes: ['id', 'videoUrl', 'coverUrl', 'duration']
        }
      ]
    });

    return res.status(201).json({
      success: true,
      message: '帖子创建成功',
      data: newPost
    });
  } catch (error) {
    console.error('创建帖子出错:', error);
    return res.status(500).json({
      success: false,
      message: '创建帖子失败',
      error: error.message
    });
  }
};

// 获取帖子列表（支持类型筛选）
const getPosts = async (req, res) => {
  try {
    const { page = 1, limit = 10, type, category } = req.query;
    const offset = (page - 1) * limit;

    const whereClause = {};
    if (type && ['image', 'video'].includes(type)) {
      whereClause.type = type;
    }
    if (category) {
      whereClause.category = category;
    }

    const posts = await Post.findAll({
      where: whereClause,
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'username', 'avatar']
        },
        {
          model: PostImage,
          as: 'images'
        },
        {
          model: PostVideo,
          as: 'videos'
        }
      ],
      order: [['createdAt', 'DESC']],
      limit: parseInt(limit),
      offset: parseInt(offset)
    });

    // 处理帖子数据，确保类型信息正确
    const processedPosts = posts.map(post => {
      const postData = post.toJSON();

      // 根据关联的媒体文件确定类型
      if (postData.videos && postData.videos.length > 0) {
        postData.type = 'video';
        postData.mediaUrl = postData.videos[0].videoUrl;
        postData.coverImage = postData.coverImage || postData.videos[0].thumbnailUrl;
      } else if (postData.images && postData.images.length > 0) {
        postData.type = 'image';
        postData.mediaUrl = postData.images[0].imageUrl;
        postData.coverImage = postData.images[0].imageUrl;
      }

      return postData;
    });

    res.json({
      success: true,
      data: processedPosts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: await Post.count({ where: whereClause })
      }
    });
  } catch (error) {
    console.error('获取帖子列表失败:', error);
    res.status(500).json({
      success: false,
      message: '获取帖子列表失败',
      error: error.message
    });
  }
};

// 获取单个帖子详情
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findByPk(id, {
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'username', 'avatar']
        },
        {
          model: PostImage,
          as: 'images'
        },
        {
          model: PostVideo,
          as: 'videos'
        },
        {
          model: Comment,
          as: 'comments',
          include: [
            {
              model: User,
              as: 'user',
              attributes: ['id', 'username', 'avatar', 'nickname']
            }
          ],
          order: [['createdAt', 'DESC']],
          limit: 20 // 默认只返回20条评论
        }
      ]
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: '帖子不存在'
      });
    }

    const postData = post.toJSON();

    // 确定帖子类型和媒体URL
    if (postData.videos && postData.videos.length > 0) {
      postData.type = 'video';
      postData.mediaUrl = postData.videos[0].videoUrl;
      postData.coverImage = postData.coverImage || postData.videos[0].thumbnailUrl;
    } else if (postData.images && postData.images.length > 0) {
      postData.type = 'image';
      postData.mediaUrl = postData.images[0].imageUrl;
      postData.coverImage = postData.images[0].imageUrl;
    }

    // 格式化评论数据
    if (postData.comments) {
      postData.comments = postData.comments.map(comment => {
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
    }

    // 增加浏览量
    await post.increment('views');

    res.json({
      success: true,
      data: postData
    });
  } catch (error) {
    console.error('获取帖子详情失败:', error);
    res.status(500).json({
      success: false,
      message: '获取帖子详情失败',
      error: error.message
    });
  }
};

// 搜索帖子
exports.searchPosts = async (req, res) => {
  try {
    const {
      query,
      type,
      page = 1,
      limit = 10,
      sort = 'relevance', // relevance, newest, oldest
      mediaType
    } = req.query;

    if (!query) {
      return res.status(400).json({
        success: false,
        message: '搜索关键词是必须的'
      });
    }

    const offset = (parseInt(page) - 1) * parseInt(limit);

    // 构建搜索条件
    const whereClause = {
      [Op.or]: [
        { title: { [Op.like]: `%${query}%` } },
        { content: { [Op.like]: `%${query}%` } }
      ]
    };

    // 如果指定了类型，添加类型过滤
    if (type) {
      whereClause.type = parseInt(type); // 1 = 植物, 2 = 动物
    }

    // 如果指定了媒体类型，添加媒体类型过滤
    if (mediaType) {
      whereClause.mediaType = mediaType; // 'image' 或 'video'
    }

    // 确定排序规则
    let order;
    switch (sort) {
      case 'newest':
        order = [['createdAt', 'DESC']];
        break;
      case 'oldest':
        order = [['createdAt', 'ASC']];
        break;
      case 'popular':
        order = [['likes', 'DESC']];
        break;
      case 'relevance':
      default:
        // 相关性排序 - 标题匹配优先
        // 这里使用MySQL的INSTR函数模拟相关性排序
        order = [
          [literal(`CASE 
            WHEN title LIKE '%${query}%' THEN 0
            WHEN content LIKE '%${query}%' THEN 1
            ELSE 2
          END`), 'ASC'],
          ['likes', 'DESC'],
          ['createdAt', 'DESC']
        ];
        break;
    }

    // 执行搜索
    const posts = await Post.findAndCountAll({
      where: whereClause,
      limit: parseInt(limit),
      offset: offset,
      order: order,
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'username', 'avatar', 'nickname']
        },
        {
          model: PostImage,
          as: 'images',
          attributes: ['id', 'imageUrl', 'position'],
          order: [['position', 'ASC']]
        },
        {
          model: PostVideo,
          as: 'videos',
          attributes: ['id', 'videoUrl', 'coverUrl', 'duration']
        }
      ]
    });

    // 格式化返回结果
    return res.status(200).json({
      success: true,
      data: {
        total: posts.count,
        totalPages: Math.ceil(posts.count / parseInt(limit)),
        currentPage: parseInt(page),
        posts: posts.rows.map(post => {
          const formattedPost = {
            ...post.toJSON(),
            author: {
              ...post.author.toJSON(),
              name: post.author.nickname || post.author.username  // 使用昵称，如果没有则使用用户名
            }
          };

          // 确保帖子有封面图片
          if (!formattedPost.coverImage) {
            if (formattedPost.images && formattedPost.images.length > 0) {
              formattedPost.coverImage = formattedPost.images[0].imageUrl;
            } else if (formattedPost.videos && formattedPost.videos.length > 0) {
              formattedPost.coverImage = formattedPost.videos[0].coverUrl;
            }
          }

          return formattedPost;
        })
      }
    });
  } catch (error) {
    console.error('搜索帖子出错:', error);
    return res.status(500).json({
      success: false,
      message: '搜索帖子失败',
      error: error.message
    });
  }
};