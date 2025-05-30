const https = require('https');

/**
 * 随机生成工具 - 用于生成随机昵称和头像
 */

// 昵称前缀列表
const nicknamePrefix = [
  '快乐', '开心', '阳光', '微笑', '梦想', '勇敢', '智慧', '活力',
  '自由', '清新', '明亮', '温暖', '淡雅', '清风', '星辰', '幽默',
  '灵动', '柔和', '朝气', '无忧'
];

// 昵称后缀列表
const nicknameSuffix = [
  '花花', '星星', '月亮', '太阳', '水滴', '云朵', '小鹿', '小猫',
  '小狗', '小鸟', '蝴蝶', '青草', '树叶', '风铃', '小鱼', '小熊',
  '兔子', '猴子', '松鼠', '小象'
];

// 随机头像API的基础URL和参数
const avatarApiUrl = 'https://api.zxki.cn/api/sjtx';
const avatarType = 'json'; // 我们需要JSON格式返回
// const avatarForm = '随机头像'; // 根据用户要求，此参数不再使用

/**
 * 生成随机昵称
 * @returns {string} 随机生成的昵称
 */
function generateRandomNickname() {
  const prefix = nicknamePrefix[Math.floor(Math.random() * nicknamePrefix.length)];
  const suffix = nicknameSuffix[Math.floor(Math.random() * nicknameSuffix.length)];
  return `${prefix}${suffix}`;
}

/**
 * 生成随机头像URL (使用新的API: api.zxki.cn)
 * @param {string} seed - 此参数在新API中可能不直接使用，但保留以兼容旧接口签名。
 * @returns {Promise<string>} 解析后的随机头像URL，如果失败则返回默认或空
 */
async function generateRandomAvatar(seed) {
  // 构建请求URL，移除 form 参数
  const requestUrl = `${avatarApiUrl}?type=${avatarType}`;
  console.log(`[randomGenerator] 请求新的头像API URL: ${requestUrl}`);

  return new Promise((resolve, reject) => {
    https.get(requestUrl, (res) => {
      let rawData = '';
      console.log(`[randomGenerator] 新头像API响应状态码: ${res.statusCode}`);
      res.on('data', (chunk) => {
        rawData += chunk;
      });
      res.on('end', () => {
        console.log(`[randomGenerator] 新头像API原始响应数据: ${rawData}`);
        try {
          const parsedData = JSON.parse(rawData);
          console.log('[randomGenerator] 新头像API解析后数据:', parsedData);
          if (parsedData && parsedData.code === 1 && parsedData.text) {
            console.log(`[randomGenerator] 成功获取头像 URL: ${parsedData.text}`);
            resolve(parsedData.text);
          } else {
            const errorMessage = `新头像API返回无效数据或code不为1: ${JSON.stringify(parsedData)}`;
            console.error(`[randomGenerator] ${errorMessage}`);
            reject(new Error(errorMessage));
          }
        } catch (error) {
          const errorMessage = `解析新头像API响应JSON错误: ${error.message}`;
          console.error(`[randomGenerator] ${errorMessage} (原始数据: ${rawData})`);
          reject(new Error(errorMessage));
        }
      });
    }).on('error', (err) => {
      const errorMessage = `请求新头像API时发生网络错误: ${err.message}`;
      console.error(`[randomGenerator] ${errorMessage}`);
      reject(new Error(errorMessage));
    });
  });
}

module.exports = {
  generateRandomNickname,
  generateRandomAvatar
}; 