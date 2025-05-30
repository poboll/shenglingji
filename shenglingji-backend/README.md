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

## 数据库更新

### 更新 Post 表结构

数据库结构有更新，需要执行以下SQL脚本添加新的字段：

```bash
# 登录到MySQL
mysql -u root -p

# 执行更新脚本
source /path/to/db/update_post_table.sql
```

或者直接在MySQL中运行 `db/update_post_table.sql` 文件中的SQL语句。

这次更新添加了以下字段：
- `coverImage` - 帖子封面图片URL
- `mediaUrl` - 帖子主要媒体URL
- `mediaType` - 帖子媒体类型（image/video）

## 问题修复

### 500错误修复

修复了获取帖子详情API返回500错误的问题：

1. 错误原因："Unknown column 'Post.coverImage' in 'field list'"
2. 解决方案：
   - 在Post模型中添加了缺失的字段（coverImage, mediaUrl, mediaType）
   - 创建了数据库更新脚本来添加这些字段
   - 修改了getPostDetail接口的实现，确保返回的数据包含前端需要的所有字段

### 视频帖子和图片帖子预览

增强了帖子预览功能：

1. 在后端：
   - 添加了更多的帖子元数据（mediaType, coverImage, mediaUrl）
   - 为没有设置这些字段的帖子自动填充值

2. 在前端：
   - 改进了帖子模型，支持更丰富的字段
   - 添加了帖子类型判断逻辑
   - 实现了帖子预览的回退逻辑，即使API请求失败也能显示内容
   - 改进了错误处理，显示更友好的错误信息