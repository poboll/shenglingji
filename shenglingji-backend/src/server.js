const app = require('./app');
const { sequelize } = require('./models');
const dotenv = require('dotenv');

// 加载环境变量
dotenv.config();

const PORT = process.env.PORT || 3000;

// 数据库同步并启动服务器
sequelize.sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`服务器在端口 ${PORT} 上运行`);
      console.log(`环境: ${process.env.NODE_ENV || 'development'}`);
    });
  })
  .catch(error => {
    console.error('数据库同步失败:', error);
  }); 