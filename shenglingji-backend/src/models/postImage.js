module.exports = (sequelize, DataTypes) => {
  const PostImage = sequelize.define('PostImage', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    postId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // 排序位置
    position: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    // 图片描述
    description: {
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
    tableName: 'post_images',
    timestamps: true
  });

  PostImage.associate = (models) => {
    // 与帖子建立关联
    PostImage.belongsTo(models.Post, {
      foreignKey: 'postId',
      as: 'post'
    });
  };

  return PostImage;
}; 