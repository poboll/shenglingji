# 生灵记后端API服务

这是生灵记应用的后端API服务，提供用户注册、登录和个人信息管理功能。

## 技术栈

- Node.js
- Express
- MySQL
- Sequelize ORM
- JWT认证

## 安装与运行

### 环境要求

- Node.js 14+
- MySQL 5.7+

### 安装依赖

```bash
npm install
```

### 配置环境变量

创建.env文件并配置以下环境变量：

```
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_NAME=shenglingji
JWT_SECRET=your_jwt_secret_key_for_shenglingji
```

### 创建数据库

```bash
mysql -u root -p < db/init.sql
```

### 启动服务

```bash
# 开发模式
npm run dev

# 生产模式
npm start
```

## API文档

### 用户认证

#### 注册用户

- POST /api/users/register
- 请求体: { username, email, password, nickname?, phone? }
- 响应: { message, user, token }

#### 用户登录

- POST /api/users/login
- 请求体: { username, password }
- 响应: { message, user, token }

### 用户资料（需要认证）

#### 获取当前用户信息

- GET /api/users/profile
- 请求头: { Authorization: "Bearer TOKEN" }
- 响应: { user }

#### 更新用户基本信息

- PUT /api/users/profile
- 请求头: { Authorization: "Bearer TOKEN" }
- 请求体: { nickname?, bio?, avatar?, gender?, birthday?, phone? }
- 响应: { message, user }

#### 更新用户详细资料

- PUT /api/users/profile/details
- 请求头: { Authorization: "Bearer TOKEN" }
- 请求体: { location?, website?, education?, occupation?, interests?, social_links?, preferences? }
- 响应: { message, profile }

#### 修改密码

- PUT /api/users/password
- 请求头: { Authorization: "Bearer TOKEN" }
- 请求体: { currentPassword, newPassword }
- 响应: { message }