module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    // 类型: 1=植物, 2=动物
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    // 媒体类型：image或video
    mediaType: {
      type: DataTypes.ENUM('image', 'video'),
      allowNull: false,
      defaultValue: 'image'
    },
    // 封面图片字段
    coverImage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // 媒体URL
    mediaUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    // 是否热门
    isHot: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    // 位置信息
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // 创建时间
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    // 更新时间
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'posts',
    timestamps: true
  });

  Post.associate = (models) => {
    // 与用户建立关联
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author'
    });

    // 与帖子图片建立关联
    Post.hasMany(models.PostImage, {
      foreignKey: 'postId',
      as: 'images'
    });

    // 与帖子视频建立关联
    Post.hasMany(models.PostVideo, {
      foreignKey: 'postId',
      as: 'videos'
    });

    // 与评论建立关联
    Post.hasMany(models.Comment, {
      foreignKey: 'postId',
      as: 'comments'
    });
  };

  return Post;
};