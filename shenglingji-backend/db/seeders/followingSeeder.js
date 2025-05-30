const { User, UserFollowing } = require('../../src/models');

// 生成用户关注关系
const generateFollowings = async () => {
  try {
    // 获取所有用户
    const users = await User.findAll();
    if (!users || users.length < 2) {
      console.log('用户数量不足，无法创建关注关系');
      return [];
    }

    // 清空原有关注关系
    try {
      await UserFollowing.destroy({ where: {}, force: true });
    } catch (error) {
      console.error('清除旧关注关系失败:', error.message);
      // 继续执行，尝试创建新的关注关系
    }

    const followings = [];

    // 创建随机的关注关系
    for (let i = 0; i < users.length; i++) {
      const follower = users[i];
      if (!follower || !follower.id) {
        console.log(`跳过无效用户 ${i}`);
        continue;
      }

      // 每个用户随机关注1-3个其他用户
      const followCount = Math.floor(Math.random() * 3) + 1;
      const availableUsers = users.filter(u => u && u.id && u.id !== follower.id);

      if (availableUsers.length === 0) {
        console.log(`用户 ${follower.username} 没有可关注的其他用户`);
        continue;
      }

      // 随机选择要关注的用户
      const shuffled = availableUsers.sort(() => 0.5 - Math.random());
      const selectedUsers = shuffled.slice(0, Math.min(followCount, shuffled.length));

      for (const following of selectedUsers) {
        followings.push({
          followerId: follower.id,
          followingId: following.id,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }

    if (followings.length === 0) {
      console.log('没有生成任何关注关系');
      return [];
    }

    // 批量创建关注关系
    const createdFollowings = await UserFollowing.bulkCreate(followings, {
      ignoreDuplicates: true
    });
    console.log(`成功创建了 ${createdFollowings.length} 个关注关系`);
    return createdFollowings;
  } catch (error) {
    console.error('创建关注关系出错:', error);
    throw error;
  }
};

module.exports = generateFollowings; 