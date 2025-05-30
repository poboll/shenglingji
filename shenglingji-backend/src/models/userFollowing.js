module.exports = (sequelize, DataTypes) => {
  const UserFollowing = sequelize.define('UserFollowing', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    followerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    followingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'user_followings',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['followerId', 'followingId']
      }
    ]
  });

  UserFollowing.associate = (models) => {
    // 与用户建立关联
    UserFollowing.belongsTo(models.User, {
      as: 'follower',
      foreignKey: 'followerId'
    });

    UserFollowing.belongsTo(models.User, {
      as: 'following',
      foreignKey: 'followingId'
    });
  };

  return UserFollowing;
}; 