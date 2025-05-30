const app = require('./app');
const { sequelize } = require('./models');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

// 加载环境变量
dotenv.config();

const PORT = process.env.PORT || 3000;

// 执行数据库更新脚本
async function runUpdateScript() {
  try {
    const scriptPath = path.join(__dirname, '../db/update_post_table.sql');
    if (!fs.existsSync(scriptPath)) {
      console.log('没有找到数据库更新脚本，跳过执行');
      return;
    }

    const sqlScript = fs.readFileSync(scriptPath, 'utf8');
    console.log('正在执行数据库更新脚本...');

    // 创建单独的数据库连接执行脚本
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'shenglingji',
      multipleStatements: true
    });

    await connection.query(sqlScript);
    console.log('数据库更新脚本执行成功');
    await connection.end();
  } catch (error) {
    console.error('执行数据库更新脚本出错:', error);
  }
}

// 数据库同步并启动服务器
async function startServer() {
  try {
    // 首先运行更新脚本
    await runUpdateScript();

    // 然后同步数据库并启动服务器
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`服务器在端口 ${PORT} 上运行`);
      console.log(`环境: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error('启动服务器失败:', error);
  }
}

startServer(); 