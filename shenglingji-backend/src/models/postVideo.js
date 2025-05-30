module.exports = (sequelize, DataTypes) => {
  const PostVideo = sequelize.define('PostVideo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    postId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    videoUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // 视频封面图
    coverUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // 视频时长 (秒)
    duration: {
      type: DataTypes.INTEGER,
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
    tableName: 'post_videos',
    timestamps: true
  });

  PostVideo.associate = (models) => {
    // 与帖子建立关联
    PostVideo.belongsTo(models.Post, {
      foreignKey: 'postId',
      as: 'post'
    });
  };

  return PostVideo;
}; 