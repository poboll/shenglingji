const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/database')[env];

// 创建Express应用
const app = express();

// 中间件
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API路由
app.use('/api', routes);

// 处理404
app.use((req, res) => {
  res.status(404).json({
    message: '请求的资源不存在'
  });
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || '服务器内部错误'
  });
});

module.exports = app; 