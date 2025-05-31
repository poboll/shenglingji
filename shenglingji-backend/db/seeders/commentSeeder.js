const { Comment, Post, User } = require('../../src/models');
const { v4: uuidv4 } = require('uuid');

/**
 * 为帖子生成评论数据
 */
const generateComments = async () => {
  try {
    console.log('开始创建评论数据...');

    // 获取所有帖子和用户
    const posts = await Post.findAll();
    const users = await User.findAll();

    if (!posts.length || !users.length) {
      console.log('没有找到帖子或用户数据，无法生成评论');
      return;
    }

    console.log(`找到 ${posts.length} 个帖子和 ${users.length} 个用户`);

    // 清空现有评论
    await Comment.destroy({ where: {}, truncate: true });

    // 准备评论内容模板
    const commentTemplates = [
      '这真是太棒了！{emoji}',
      '第一次看到这样的{subject}，很有意思！{emoji}',
      '我也有类似的经历，{emoji}',
      '谢谢分享，学到了新知识{emoji}',
      '拍得真漂亮，用什么相机拍的？{emoji}',
      '值得收藏的好{subject}{emoji}',
      '这个{subject}的颜色太漂亮了{emoji}',
      '请问这是在哪里拍的？{emoji}',
      '今天又涨知识了{emoji}',
      '这个太可爱了吧{emoji}',
      '没想到{subject}还有这样的特点{emoji}',
      '支持支持！下次多发{subject}的照片{emoji}',
      '太惊艳了，从来没见过这样的{subject}{emoji}',
      '楼主真厉害，拍得好美{emoji}',
      '求更多相关内容{emoji}',
      '收藏了，下次去找找看{emoji}',
      '这是我见过的最好的{subject}内容{emoji}'
    ];

    // 表情符号
    const emojis = ['😊', '👍', '❤️', '🎉', '😍', '🤩', '👏', '🌟', '✨', '🔥', '💯'];

    // 主题词替换
    const subjects = {
      1: ['植物', '花朵', '绿植', '盆栽', '多肉', '花卉', '叶子', '种植'],
      2: ['动物', '宠物', '猫咪', '狗狗', '小动物', '生物', '野生动物', '可爱动物']
    };

    const comments = [];
    let count = 0;

    // 为每个帖子创建1-10条评论
    for (const post of posts) {
      const commentCount = Math.floor(Math.random() * 10) + 1;

      for (let i = 0; i < commentCount; i++) {
        const user = users[Math.floor(Math.random() * users.length)];

        // 选择随机评论模板
        let commentTemplate = commentTemplates[Math.floor(Math.random() * commentTemplates.length)];

        // 根据帖子类型选择主题词
        const subjectType = post.type || 1; // 默认为1（植物）
        const subjectWords = subjects[subjectType] || subjects[1];
        const subject = subjectWords[Math.floor(Math.random() * subjectWords.length)];

        // 选择随机表情
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];

        // 替换模板中的占位符
        let content = commentTemplate
          .replace('{subject}', subject)
          .replace('{emoji}', emoji);

        // 针对帖子内容做特殊处理，增加相关性
        if (post.title && Math.random() > 0.7) {
          content = `关于"${post.title.substring(0, 10)}${post.title.length > 10 ? '...' : ''}"，${content}`;
        }

        comments.push({
          id: uuidv4(),
          postId: post.id,
          userId: user.id,
          content,
          likes: Math.floor(Math.random() * 50),
          createdAt: new Date(Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)),
          updatedAt: new Date()
        });

        count++;
      }
    }

    // 批量创建评论
    await Comment.bulkCreate(comments);
    console.log(`成功创建 ${count} 条评论数据`);

  } catch (error) {
    console.error('创建评论数据失败:', error.message);
    throw error;
  }
};

module.exports = generateComments; 