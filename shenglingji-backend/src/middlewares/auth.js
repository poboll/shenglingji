const { verifyToken, extractToken } = require('../utils/jwt');
const { User } = require('../models');

// 验证用户是否已登录
exports.authenticateUser = async (req, res, next) => {
  try {
    // 从请求头中提取token
    const token = extractToken(req);
    if (!token) {
      return res.status(401).json({ message: '未提供授权令牌' });
    }

    // 验证token
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ message: '无效或过期的令牌' });
    }

    // 查找用户
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(401).json({ message: '用户不存在' });
    }

    // 检查用户状态
    if (user.status !== 'active') {
      return res.status(403).json({ message: '账号已被禁用' });
    }

    // 将用户信息添加到请求对象
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({ message: '认证过程中出现错误' });
  }
}; 