<p align="center">
  <img src="https://github.com/poboll/shenglingji/raw/main/shenglingji-android/app/src/main/res/drawable/icon_logo.png" width="120" height="120" alt="生灵集">
</p>

<h1 align="center">生灵集</h1>

<p align="center">
  <a href="https://github.com/poboll/shenglingji/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/poboll/shenglingji" alt="license">
  </a>
  <img src="https://img.shields.io/badge/platform-Android%20%7C%20Web-brightgreen" alt="platform">
  <img src="https://img.shields.io/badge/Android-Jetpack%20Compose-blue" alt="Android">
  <img src="https://img.shields.io/badge/Backend-Node.js-green" alt="Backend">
</p>

<p align="center">「生命万灵的合集」—— 探索、学习和分享自然之美的平台</p>

## 📖 项目介绍

「生灵集」的寓意是"生命万灵的合集"，旨在创建一个可以探索、学习和分享自然之美的平台。通过这个平台，用户可以：

- 📱 浏览精美的动植物图文和视频内容
- 🌱 参与互动学习，增长自然知识
- 🔍 探索生物多样性，了解生态保护
- 👥 与志同道合的自然爱好者交流分享

本项目采用现代化的技术栈，包括 Android 原生应用（Jetpack Compose）和 Node.js 后端服务，打造流畅、美观且功能丰富的用户体验。

## 🏗️ 项目架构

项目采用前后端分离的架构设计：

```
shenglingji/
├── shenglingji-android/  # Android 客户端应用
└── shenglingji-backend/  # Node.js 后端服务
```

### 前端架构

Android 客户端采用 MVVM 架构模式，结合 Jetpack Compose 声明式 UI 框架，实现高效的 UI 渲染和状态管理。

### 后端架构

后端服务采用 MVC 架构模式，基于 Express 框架构建 RESTful API，使用 Sequelize ORM 进行数据库操作。

## 🚀 功能特性

### 内容浏览

- 瀑布流展示精美动植物图文内容
- 视频播放支持，展示生态环境和生物行为
- 个性化推荐算法，根据用户兴趣推送内容

### 互动学习

- 动植物知识问答和测验
- 物种识别与分类学习
- 生态知识科普与环保理念传播

### 社区功能

- 用户关注与互动系统
- 内容评论与点赞
- 收藏夹管理
- 私信交流

### 用户系统

- 账号注册与登录
- 个人资料管理
- 内容发布与管理
- 隐私设置

## 💻 技术栈

### Android 客户端

- **UI 框架**：Jetpack Compose
- **架构模式**：MVVM (Model-View-ViewModel)
- **网络请求**：Retrofit2 + OkHttp3
- **图片加载**：Coil + Glide
- **视频播放**：Media3 ExoPlayer
- **状态管理**：ViewModel + LiveData + Coroutines
- **依赖注入**：Hilt (计划中)
- **本地存储**：Room (计划中)

### 后端服务

- **运行环境**：Node.js
- **Web 框架**：Express
- **数据库**：MySQL
- **ORM**：Sequelize
- **认证**：JWT (JSON Web Token)
- **文件上传**：Multer

## 🔧 环境要求

### Android 客户端

- Android Studio Hedgehog | 2023.1.1 或更高版本
- JDK 11 或更高版本
- Android SDK 35
- Gradle 8.4 或更高版本

### 后端服务

- Node.js 16+ 
- npm 或 yarn
- MySQL 8.0+

## 📦 安装指南

### 后端服务设置

```bash
# 克隆仓库
git clone https://github.com/poboll/shenglingji.git
cd shenglingji/shenglingji-backend

# 安装依赖
npm install

# 初始化数据库
mysql -u root -p < db/init.sql

# 启动服务
npm start
```

### Android 客户端设置

```bash
# 进入 Android 项目目录
cd shenglingji/shenglingji-android

# 使用 Gradle 构建项目
./gradlew build

# 在 Android Studio 中打开项目
```

## 📱 应用截图

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/4dbcd70e-4f2d-4b3b-af9d-2d06628aa31d" width="200" alt="首页"></td>
    <td><img src="https://github.com/user-attachments/assets/937d3f49-2b34-4232-8ec0-5a0793869262" width="200" alt="发现"></td>
    <td><img src="https://github.com/user-attachments/assets/6e55ca7a-fa58-43a5-bb9a-ebbf74c3717f" width="200" alt="详情"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/2b02b5d2-3de6-430d-b533-8a066824a34f" width="200" alt="搜索"></td>
    <td><img src="https://github.com/user-attachments/assets/1ffc6d3d-31d5-482d-9c88-b5da7af630ee" width="200" alt="个人中心"></td>
    <td><img src="https://github.com/user-attachments/assets/b02778a4-1fc5-491a-9401-f4ee419e7f14" width="200" alt="设置"></td>
  </tr>
</table>

## 🤝 贡献指南

我们欢迎所有形式的贡献，无论是新功能、bug 修复还是文档改进。

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'feat: add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

### 代码规范

- Android 客户端遵循 [Kotlin 编码规范](https://kotlinlang.org/docs/coding-conventions.html)
- 后端服务遵循 [Airbnb JavaScript 风格指南](https://github.com/airbnb/javascript)
- 提交信息遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范

## 📄 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件

## 📞 联系方式

- 项目维护者：[poboll](https://github.com/poboll)
- 项目仓库：[https://github.com/poboll/shenglingji](https://github.com/poboll/shenglingji)

---

<p align="center">用科技连接人与自然，让每一次探索都充满意义</p>