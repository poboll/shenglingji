/*
 Navicat Premium Data Transfer

 Source Server         : 在虎
 Source Server Type    : MySQL
 Source Server Version : 50726 (5.7.26-1)
 Source Host           : localhost:3306
 Source Schema         : shenglingji

 Target Server Type    : MySQL
 Target Server Version : 50726 (5.7.26-1)
 File Encoding         : 65001

 Date: 07/06/2025 14:53:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for Profiles
-- ----------------------------
DROP TABLE IF EXISTS `Profiles`;
CREATE TABLE `Profiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `location` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `education` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `occupation` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `interests` text COLLATE utf8mb4_unicode_ci,
  `social_links` json DEFAULT NULL,
  `preferences` json DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `Profiles_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of Profiles
-- ----------------------------
BEGIN;
INSERT INTO `Profiles` (`id`, `userId`, `location`, `website`, `education`, `occupation`, `interests`, `social_links`, `preferences`, `createdAt`, `updatedAt`) VALUES (1, 1, '北京市海淀区', 'https://zhangsan-blog.com', '北京大学生物学系', '生物学研究员', '植物学,生态保护,摄影', '\"{\\\"weibo\\\":\\\"https://weibo.com/zhangsan\\\",\\\"wechat\\\":\\\"zhangsan_wechat\\\"}\"', NULL, '2025-05-31 10:38:31', '2025-05-31 10:38:31');
INSERT INTO `Profiles` (`id`, `userId`, `location`, `website`, `education`, `occupation`, `interests`, `social_links`, `preferences`, `createdAt`, `updatedAt`) VALUES (2, 2, '上海市浦东新区', 'https://lisi-plants.com', '复旦大学环境科学系', '植物学教授', '植物分类学,花卉种植,生态保护', '\"{\\\"weibo\\\":\\\"https://weibo.com/lisi\\\",\\\"wechat\\\":\\\"lisi_wechat\\\"}\"', NULL, '2025-05-31 10:38:31', '2025-05-31 10:38:31');
INSERT INTO `Profiles` (`id`, `userId`, `location`, `website`, `education`, `occupation`, `interests`, `social_links`, `preferences`, `createdAt`, `updatedAt`) VALUES (3, 3, '广州市天河区', 'https://wangwu-wildlife.org', '中山大学动物学系', '野生动物保护专家', '动物行为学,野生动物保护,生态摄影', '\"{\\\"weibo\\\":\\\"https://weibo.com/wangwu\\\",\\\"wechat\\\":\\\"wangwu_wechat\\\"}\"', NULL, '2025-05-31 10:38:31', '2025-05-31 10:38:31');
INSERT INTO `Profiles` (`id`, `userId`, `location`, `website`, `education`, `occupation`, `interests`, `social_links`, `preferences`, `createdAt`, `updatedAt`) VALUES (4, 4, '深圳市南山区', 'https://zhaoliu-photo.com', '深圳大学艺术系', '自由摄影师', '自然摄影,户外探险,生态旅行', '\"{\\\"weibo\\\":\\\"https://weibo.com/zhaoliu\\\",\\\"wechat\\\":\\\"zhaoliu_wechat\\\"}\"', NULL, '2025-05-31 10:38:31', '2025-05-31 10:38:31');
INSERT INTO `Profiles` (`id`, `userId`, `location`, `website`, `education`, `occupation`, `interests`, `social_links`, `preferences`, `createdAt`, `updatedAt`) VALUES (5, 5, '成都市锦江区', 'https://sunqi-eco.org', '四川大学环境工程系', '环保NGO工作者', '生物多样性,环境保护,科普教育', '\"{\\\"weibo\\\":\\\"https://weibo.com/sunqi\\\",\\\"wechat\\\":\\\"sunqi_wechat\\\"}\"', NULL, '2025-05-31 10:38:31', '2025-05-31 10:38:31');
INSERT INTO `Profiles` (`id`, `userId`, `location`, `website`, `education`, `occupation`, `interests`, `social_links`, `preferences`, `createdAt`, `updatedAt`) VALUES (6, 6, '全国各地', 'https://dongwu-kepu.com', '中国科学院动物研究所', '动物科普专家', '动物科普,野生动物保护,生物多样性', '\"{\\\"weibo\\\":\\\"https://weibo.com/dongwu\\\",\\\"wechat\\\":\\\"dongwu_kepu\\\"}\"', NULL, '2025-05-31 10:38:32', '2025-05-31 10:38:32');
COMMIT;

-- ----------------------------
-- Table structure for Users
-- ----------------------------
DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nickname` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` enum('male','female','other') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `status` enum('active','inactive','banned') COLLATE utf8mb4_unicode_ci DEFAULT 'active',
  `last_login` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of Users
-- ----------------------------
BEGIN;
INSERT INTO `Users` (`id`, `username`, `email`, `password`, `nickname`, `avatar`, `bio`, `phone`, `gender`, `birthday`, `status`, `last_login`, `createdAt`, `updatedAt`) VALUES (1, '小花花', 'xiaohuahua@example.com', '$2b$10$seDJURxjxl00Eqik0OEEn.ZTKQ49m6yuKFYnNtpjFd7sSYOFBkyBW', '小花花', 'https://img.loliapi.cn/i/pp/img126.webp', '热爱自然与生态摄影', '13800138001', 'male', NULL, 'active', NULL, '2025-05-31 10:38:31', '2025-05-31 10:38:31');
INSERT INTO `Users` (`id`, `username`, `email`, `password`, `nickname`, `avatar`, `bio`, `phone`, `gender`, `birthday`, `status`, `last_login`, `createdAt`, `updatedAt`) VALUES (2, '绿叶君', 'luyejun@example.com', '$2b$10$RrhiVLhxSHP8jOeyHSg/aubEB5PegMbIpi/hfQj9pjIkk4K19Uq0K', '绿叶君', 'https://img.loliapi.cn/i/pp/img17.webp', '专注植物学研究多年', '13800138002', 'male', NULL, 'active', NULL, '2025-05-31 10:38:31', '2025-05-31 10:38:31');
INSERT INTO `Users` (`id`, `username`, `email`, `password`, `nickname`, `avatar`, `bio`, `phone`, `gender`, `birthday`, `status`, `last_login`, `createdAt`, `updatedAt`) VALUES (3, '森林小精灵', 'senlinxiaojingling@example.com', '$2b$10$o8kprYa8Rc5uvkAQnS34buQfSAjgXgNW42wmi2lqAWYzyPD0H7lrW', '森林小精灵', 'https://img.loliapi.cn/i/pp/img132.webp', '野生动物保护志愿者', '13800138003', 'male', NULL, 'active', NULL, '2025-05-31 10:38:31', '2025-05-31 10:38:31');
INSERT INTO `Users` (`id`, `username`, `email`, `password`, `nickname`, `avatar`, `bio`, `phone`, `gender`, `birthday`, `status`, `last_login`, `createdAt`, `updatedAt`) VALUES (4, '花花子', 'huahuazi@example.com', '$2b$10$4xspGkU4A6XZXrlxgTwkveNQRcEjX3L.VtMTPmUDNV25RFckevP/C', '花花子', 'https://img.loliapi.cn/i/pp/img206.webp', '自然摄影爱好者', '13800138004', 'female', NULL, 'active', NULL, '2025-05-31 10:38:31', '2025-05-31 10:38:31');
INSERT INTO `Users` (`id`, `username`, `email`, `password`, `nickname`, `avatar`, `bio`, `phone`, `gender`, `birthday`, `status`, `last_login`, `createdAt`, `updatedAt`) VALUES (5, '生态小卫士', 'shengtaixiaoweishi@example.com', '$2b$10$EI7GWczS/DGsS6GxJzIbfOaCVoufB45Odro0JowB.41eYwLdMUDHe', '生态小卫士', 'https://img.loliapi.cn/i/pp/img52.webp', '关注生物多样性保护', '13800138005', 'female', NULL, 'active', NULL, '2025-05-31 10:38:31', '2025-05-31 10:38:31');
INSERT INTO `Users` (`id`, `username`, `email`, `password`, `nickname`, `avatar`, `bio`, `phone`, `gender`, `birthday`, `status`, `last_login`, `createdAt`, `updatedAt`) VALUES (6, '动物君', 'dongwujun@example.com', '$2b$10$puLu8F9UGpbdIydnb.r2C.HLtuIJoQQc1s6Ioq1qVrV4BCUdPvirW', '动物君', 'https://img.loliapi.cn/i/pp/img64.webp', '专注动物科普与保护', '13800138006', 'other', NULL, 'active', NULL, '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `Users` (`id`, `username`, `email`, `password`, `nickname`, `avatar`, `bio`, `phone`, `gender`, `birthday`, `status`, `last_login`, `createdAt`, `updatedAt`) VALUES (7, 'uuy', 'uuy@caiths.com', '$2b$10$C3Em5v8TYwOVar9/2hDOPOtPcc9/WSxYr/XZ.RRYUittewklgk.Ly', '在在', 'http://webimg.maibaapp.com/content/img/avatars/20165521/18/55/02044.jpg', '', '', NULL, NULL, 'active', '2025-06-07 06:49:11', '2025-06-01 16:25:38', '2025-06-07 06:49:32');
COMMIT;

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `postId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userId` int(11) NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `likes` int(11) DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`),
  KEY `userId` (`userId`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of comments
-- ----------------------------
BEGIN;
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('00b16a35-7a85-4a8b-a6f7-7a29ffda4cdb', 'post-animal-9', 1, '楼主真厉害，拍得好美❤️', 40, '2025-05-23 04:13:28', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('04887c69-fbe2-42a1-8219-3d6a8efac95b', 'post-animal-2', 4, '关于\"世界上最快乐的动物-...\"，太惊艳了，从来没见过这样的小动物💯', 35, '2025-05-22 22:11:00', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('07167e49-55b2-4781-a444-edb9772e1b5a', 'post-animal-7', 2, '我也有类似的经历，👏', 14, '2025-05-20 10:16:06', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('09989f73-88b8-4c88-a30e-9b23641a5f9a', 'post-plant-8', 6, '我也有类似的经历，👍', 38, '2025-05-14 08:26:56', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('0b197276-f519-471b-bbd7-2c16814e72d8', 'post-animal-9', 3, '关于\"每天了解一种趣味动物...\"，没想到猫咪还有这样的特点🤩', 8, '2025-05-16 23:33:41', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('0b5e13fe-cf7c-4f36-a1c8-16125ae359ec', 'post-plant-5', 6, '支持支持！下次多发盆栽的照片🌟', 24, '2025-05-24 07:11:39', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('0e233f99-f995-433c-8f0c-5cb1b43c60b2', 'post-animal-2', 3, '这是我见过的最好的动物内容🎉', 48, '2025-05-19 20:55:18', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('113fb76a-25f1-42e7-9c1f-f63c2c02df82', 'post-animal-1', 6, '这真是太棒了！🤩', 18, '2025-05-17 12:15:07', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('140444b0-648a-4105-bace-da05bc8de325', 'post-plant-7', 5, '拍得真漂亮，用什么相机拍的？✨', 16, '2025-05-17 11:12:42', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('14a1e87b-8ff7-4390-9c5f-93eb6ffd459e', 'post-animal-4', 3, '这个野生动物的颜色太漂亮了🌟', 3, '2025-05-30 09:41:30', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('16304883-d6a2-4267-9daa-e6d5b62327aa', 'post-plant-7', 5, '关于\"No.67#每日一植...\"，值得收藏的好种植🌟', 2, '2025-05-15 10:26:00', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('16bc4c38-f406-426d-9d1b-2a4ef8164c3f', 'post-plant-3', 2, '这真是太棒了！✨', 24, '2025-05-14 01:51:52', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('18314798-6d3a-4bf0-8d3b-7ee2b1a63af9', 'post-plant-7', 1, '值得收藏的好盆栽❤️', 38, '2025-05-21 08:10:02', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('1e7878d1-9255-47f8-b64f-ca476708fcae', 'post-plant-1', 4, '求更多相关内容❤️', 33, '2025-05-12 22:52:05', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('203f531e-23d8-4197-a88c-1afc6867dc78', 'post-animal-10', 4, '没想到可爱动物还有这样的特点🔥', 47, '2025-05-27 01:16:37', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('20a1aeb1-be11-4761-8231-d912310c48cb', 'post-animal-3', 4, '这个太可爱了吧❤️', 3, '2025-05-10 19:43:54', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('20e7bfd0-0a2f-41cd-9700-e4db994c512f', 'post-plant-5', 1, '求更多相关内容🎉', 13, '2025-05-29 13:43:35', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('23f03a0e-f9be-47b6-9cb5-9c424afc5967', 'post-animal-10', 5, '关于\"每天了解一种动物｜象...\"，收藏了，下次去找找看😊', 15, '2025-05-01 17:54:13', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('27ce15e1-7c67-4ebc-9d29-96acac2aaeb9', 'post-plant-8', 3, '楼主真厉害，拍得好美👏', 38, '2025-05-25 18:33:52', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('28a50714-733e-4c4c-b254-f4e6114f6794', 'post-animal-3', 5, '请问这是在哪里拍的？👏', 46, '2025-05-12 16:10:45', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('299548f5-9248-4816-8d0a-b832a383004a', 'post-animal-9', 2, '太惊艳了，从来没见过这样的宠物👏', 3, '2025-05-27 00:46:36', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('2c839b1e-8fd4-4dec-83db-ffc21348a4e1', 'post-animal-1', 2, '关于\"可以光合作用的奇妙生...\"，值得收藏的好宠物🎉', 6, '2025-05-10 15:34:39', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('2d4cac82-a198-4cd4-b086-69744b212519', 'post-animal-3', 1, '这个太可爱了吧🔥', 18, '2025-05-05 18:37:50', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('2d5f2eca-cc76-47a2-8dc9-b72a31ac01e0', 'post-animal-8', 6, '今天又涨知识了🔥', 34, '2025-05-12 10:39:41', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('2eebaaba-8db3-48aa-9dfe-1f9023e3b940', 'post-animal-7', 1, '支持支持！下次多发生物的照片🎉', 2, '2025-05-16 04:18:57', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('308bf6c0-2e33-4c66-9f2e-0ce445fe61b1', 'post-animal-9', 3, '值得收藏的好狗狗😍', 36, '2025-05-26 10:20:47', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('330779cb-29c5-4ef4-ab58-a1d16d7ae36f', 'post-plant-3', 4, '关于\"最大最臭的诅咒之花：...\"，谢谢分享，学到了新知识😊', 6, '2025-05-27 11:01:58', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('33b055e1-f28a-4206-90c5-9361194b5c2e', 'post-plant-3', 4, '请问这是在哪里拍的？💯', 29, '2025-05-16 01:55:01', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('342e4a57-754c-49dd-864f-689af2b65e35', 'post-animal-4', 2, '关于\"结巴鸟|每天认识一种...\"，没想到动物还有这样的特点👏', 45, '2025-05-04 23:12:35', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('3489415c-2765-46bf-a562-6566e45f79fe', 'post-plant-8', 3, '没想到绿植还有这样的特点💯', 36, '2025-05-31 04:59:30', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('34f60643-e1d3-4c48-9b16-43aac4d1b930', 'post-animal-7', 4, '关于\"变装精灵～\"，值得收藏的好小动物👍', 30, '2025-05-26 12:44:55', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('3675d368-cce9-4c04-bada-0ea8739c8ab9', 'post-plant-6', 1, '太惊艳了，从来没见过这样的绿植🔥', 26, '2025-05-04 01:58:12', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('37fba40a-de59-4c09-9219-b1a38fca324d', 'post-animal-3', 6, '关于\"每天认识一种有趣动物...\"，拍得真漂亮，用什么相机拍的？👏', 26, '2025-05-13 08:22:49', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('3839e6fc-5e90-4aca-a521-5e398abdaa6c', 'post-plant-1', 5, '支持支持！下次多发多肉的照片✨', 7, '2025-05-06 21:11:00', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('388d82b3-7015-4095-becd-9cb303255122', 'post-animal-8', 5, '关于\"每天了解一种趣味动物...\"，这个生物的颜色太漂亮了✨', 8, '2025-05-16 16:04:51', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('3b5ad361-c9e2-412d-9d7d-d5221e55a406', 'post-plant-7', 7, '7', 0, '2025-06-01 09:04:51', '2025-06-01 09:04:51');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('3b8f65de-7aa1-4d3b-90d9-8b6b0c720867', 'post-plant-6', 5, '值得收藏的好叶子🔥', 7, '2025-05-19 17:54:40', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('3e7d8c2b-8e2f-4b8a-9afe-fd31fcad8c3d', 'post-plant-7', 6, '关于\"No.67#每日一植...\"，楼主真厉害，拍得好美✨', 47, '2025-05-18 18:53:05', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('41325595-d357-4e4c-b507-423d2b463dbf', 'post-animal-1', 4, '这个太可爱了吧😊', 44, '2025-05-07 15:34:00', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('465f4bef-dd00-4da0-890a-a572f5f19977', 'post-animal-4', 5, '我也有类似的经历，😍', 21, '2025-05-04 17:51:27', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('4d4abe1b-334b-4222-8b3f-e5b66c2c16ab', 'post-animal-8', 3, '这真是太棒了！🎉', 24, '2025-05-12 01:19:46', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('4ee1111e-91db-4f0e-8f0c-6c52f500880c', 'post-plant-3', 5, '第一次看到这样的多肉，很有意思！🎉', 5, '2025-05-07 03:16:07', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('5271c2e4-0275-46c3-9504-d3f5951e1186', 'post-animal-7', 1, '关于\"变装精灵～\"，支持支持！下次多发生物的照片🔥', 24, '2025-05-22 14:56:48', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('534473d2-18cf-42fb-80eb-3aebf4a19381', 'post-animal-10', 3, '关于\"每天了解一种动物｜象...\"，这真是太棒了！💯', 33, '2025-05-15 07:48:26', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('56b05858-8329-4aa9-96d1-9886d4654d56', 'post-plant-5', 5, '关于\"科学家发现一种新蘑菇\"，请问这是在哪里拍的？🎉', 35, '2025-05-28 17:21:00', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('5a260739-7e5e-4674-abd6-45d094e86d5e', 'post-animal-7', 6, '拍得真漂亮，用什么相机拍的？🌟', 35, '2025-05-31 10:49:38', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('5c14726d-1699-4360-afc2-057f8ca5fb69', 'post-plant-1', 6, '值得收藏的好植物👏', 3, '2025-05-14 19:18:09', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('611e980c-abec-4ee4-bab7-1d4f3714f591', 'post-plant-8', 1, '谢谢分享，学到了新知识👍', 11, '2025-05-07 14:45:30', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('63edd4af-49b1-47ba-97ab-a1b831e851f6', 'post-plant-5', 2, '谢谢分享，学到了新知识✨', 40, '2025-05-27 03:59:35', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('65d1ff53-ec42-44f1-821c-e225b337274d', 'post-animal-9', 3, '第一次看到这样的生物，很有意思！😊', 37, '2025-05-24 08:43:06', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('666200fd-1245-4dd7-a1f5-c1eba9c121b4', 'post-plant-6', 1, '求更多相关内容👍', 21, '2025-05-29 04:35:08', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('6b5cb155-5a1f-465f-a177-242303cd6290', 'post-plant-8', 5, '关于\"小白兔狸藻丨你见过\"...\"，第一次看到这样的绿植，很有意思！🌟', 47, '2025-05-17 08:54:36', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('6bc25752-1200-48dd-842b-bc185ec2d5ef', 'post-animal-4', 6, '这个太可爱了吧❤️', 17, '2025-05-05 09:58:58', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('6cd7f23d-f9a7-4d69-95df-4d09a1420156', 'post-animal-10', 6, '请问这是在哪里拍的？🎉', 30, '2025-05-17 05:41:42', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('6f893102-e3a0-4c8c-b600-671ea1a74bf2', 'post-animal-2', 6, '关于\"世界上最快乐的动物-...\"，这真是太棒了！❤️', 16, '2025-05-06 02:46:21', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('707899c1-27a7-4e6b-a885-796b6a7923da', 'post-plant-7', 1, '楼主真厉害，拍得好美😊', 15, '2025-05-09 08:26:24', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('73ef1185-ac9d-44c1-b985-934aab0fae7c', 'post-plant-6', 3, '关于\"会跳舞的小白兔狸藻\"，太惊艳了，从来没见过这样的绿植🎉', 43, '2025-05-09 22:21:42', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('7574f7e2-2d63-44c0-b82f-1ac0ea10dc77', 'post-animal-1', 6, '今天又涨知识了😍', 12, '2025-05-18 11:55:29', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('7770e833-52aa-4ee7-b4e4-ddfe67c1fdd5', 'post-animal-9', 6, '谢谢分享，学到了新知识💯', 12, '2025-05-08 12:04:02', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('7c22274a-832b-4bd4-a6a2-fffcd9e37689', 'post-plant-6', 5, '楼主真厉害，拍得好美🌟', 20, '2025-05-07 17:23:32', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('7dc70747-add1-4362-b101-8bddcdd6b398', 'post-plant-3', 2, '关于\"最大最臭的诅咒之花：...\"，楼主真厉害，拍得好美😊', 1, '2025-05-16 18:50:22', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('7ed3b957-c431-4625-90e9-288c4a646df1', 'post-animal-4', 1, '关于\"结巴鸟|每天认识一种...\"，请问这是在哪里拍的？🔥', 49, '2025-05-01 19:25:44', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('8039abd6-ccef-4dc4-9f1e-edeab4d765d6', 'post-animal-3', 2, '拍得真漂亮，用什么相机拍的？🎉', 39, '2025-05-06 00:29:29', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('80f5497a-a5a7-4ee6-9a79-bca7bfa363e8', 'post-animal-9', 1, '这个小动物的颜色太漂亮了❤️', 43, '2025-05-04 01:54:06', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('82713fe6-55df-43fa-82bd-0c6490abf54c', 'post-animal-1', 2, '求更多相关内容🌟', 4, '2025-05-05 06:34:12', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('859ed758-200a-4bfc-b49c-6499afc80a11', 'post-plant-5', 1, '我也有类似的经历，🌟', 45, '2025-05-01 18:12:15', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('8a406f2f-a991-43f6-9854-441cd8513aff', 'post-plant-3', 5, '拍得真漂亮，用什么相机拍的？✨', 33, '2025-05-08 01:48:25', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('8ede4c76-fb85-4df3-afeb-7fe74efdb421', 'post-plant-1', 4, '楼主真厉害，拍得好美👍', 0, '2025-05-28 10:07:14', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('90bbbf06-b89e-4ad2-ac49-52d5eb8238f8', 'post-plant-4', 6, '关于\"每天认识一种植物丨狸...\"，这个太可爱了吧😍', 24, '2025-05-02 02:14:48', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('9231c109-0b92-4fc2-ad9e-b96354d6d9c4', 'post-plant-1', 4, '关于\"生石花，\"屁股会蹦花...\"，请问这是在哪里拍的？👏', 48, '2025-05-22 00:16:37', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('948fa930-850b-406a-a911-a2fc3f2470c7', 'post-plant-7', 6, '今天又涨知识了👏', 37, '2025-05-10 12:45:28', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('956832df-07b6-4e5e-a026-6604703333aa', 'post-animal-3', 2, '关于\"每天认识一种有趣动物...\"，值得收藏的好狗狗😊', 32, '2025-05-27 09:25:01', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('981a6736-2abd-4957-8d21-f16624ba926a', 'post-animal-6', 6, '我也有类似的经历，👏', 40, '2025-05-03 06:44:57', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('9f7f34bf-fa6f-4d58-9ae0-0f76a4571ac7', 'post-animal-8', 6, '关于\"每天了解一种趣味动物...\"，楼主真厉害，拍得好美🌟', 42, '2025-05-05 11:34:34', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('9ff7caeb-5da5-4e6e-b893-75f740186023', 'post-plant-6', 4, '今天又涨知识了👏', 46, '2025-05-14 10:05:59', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('a35e9d81-7b7a-4f53-9492-122672ff968c', 'post-animal-7', 2, '太惊艳了，从来没见过这样的狗狗🤩', 4, '2025-05-22 00:21:39', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('a39c0b43-0742-48d1-9d54-52cb77543941', 'post-animal-10', 2, '求更多相关内容🎉', 12, '2025-05-12 19:08:33', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('a3e9dc79-0e08-4816-9a00-3dfbb1be5c40', 'post-plant-7', 5, '谢谢分享，学到了新知识👍', 10, '2025-05-20 16:59:16', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('a51363f8-0b04-49fa-a29e-b42c30664e14', 'post-plant-1', 6, '收藏了，下次去找找看😊', 45, '2025-05-03 20:25:37', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('a8581afc-4e7b-4f81-8c7a-e47125142318', 'post-animal-8', 2, '这个猫咪的颜色太漂亮了😊', 12, '2025-05-25 03:58:30', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('a8801474-77fe-4a8a-ae96-519eaec905b0', 'post-animal-10', 4, '楼主真厉害，拍得好美✨', 29, '2025-05-29 12:00:56', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('a8e56adb-7544-4239-8376-7f214c9f6456', 'post-animal-6', 1, '关于\"每天了解一种趣味动物...\"，我也有类似的经历，🔥', 8, '2025-05-18 09:12:35', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('a97377d3-c57e-4230-87dd-cbd4c12c7d6e', 'post-plant-5', 5, '太惊艳了，从来没见过这样的花卉🔥', 49, '2025-05-12 22:08:25', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('aa839fdf-fd83-4106-8e24-77684bd29e10', 'post-animal-10', 3, '关于\"每天了解一种动物｜象...\"，收藏了，下次去找找看🌟', 41, '2025-05-19 20:29:17', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('aef54941-ea2c-4353-b88e-cabd21418148', 'post-animal-2', 1, '第一次看到这样的野生动物，很有意思！👏', 36, '2025-05-29 12:20:44', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('af2b5e0e-3f10-4b4c-8de8-4cffaca5173a', 'post-animal-7', 3, '支持支持！下次多发宠物的照片🔥', 11, '2025-05-03 07:13:57', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('af84c7ca-472b-4c17-8a6d-7468a2e4b1c6', 'post-animal-9', 3, '楼主真厉害，拍得好美✨', 35, '2025-05-24 06:49:31', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('b3955860-6959-47cf-9fae-3a3e5c255248', 'post-animal-4', 4, '关于\"结巴鸟|每天认识一种...\"，收藏了，下次去找找看😍', 22, '2025-05-24 05:18:31', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('b618830a-072e-41d9-b7ed-8d19bc24b25e', 'post-plant-2', 1, '这个多肉的颜色太漂亮了🤩', 39, '2025-05-20 07:33:45', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('b7ef7b13-d6bc-4e56-a1bc-0b5f7b6eaa22', 'post-plant-2', 7, 'hi', 0, '2025-06-01 08:36:56', '2025-06-01 08:36:56');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('b9259e36-97f1-4e67-a7fc-e506aad95c2a', 'post-animal-7', 5, '关于\"变装精灵～\"，值得收藏的好狗狗❤️', 46, '2025-05-07 03:57:06', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('bb2ed0f5-3f87-4429-81f1-48353f5ef1cf', 'post-animal-7', 1, '关于\"变装精灵～\"，求更多相关内容🔥', 48, '2025-05-19 00:34:14', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('bbb63d13-116d-4d31-a0ef-bb55bb43e370', 'post-plant-7', 5, '关于\"No.67#每日一植...\"，求更多相关内容🎉', 17, '2025-05-19 22:35:15', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('beb82758-4164-452f-a082-dac9e303365c', 'post-plant-5', 2, '谢谢分享，学到了新知识🎉', 30, '2025-05-02 21:15:32', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('c046868b-810b-40c5-ad2b-1449cce95d58', 'post-plant-8', 6, '值得收藏的好花卉✨', 10, '2025-05-04 09:12:32', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('c6c06b8d-0f6e-48b1-a2d3-86018db3b64b', 'post-plant-8', 1, '第一次看到这样的花朵，很有意思！🔥', 10, '2025-05-08 13:41:07', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('c75d699f-4c0d-45d6-ad89-067b031ca09b', 'post-plant-8', 6, '这个太可爱了吧💯', 14, '2025-05-10 09:13:08', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('c8ad55f2-d295-4302-9545-49efe90e2f45', 'post-animal-2', 1, '关于\"世界上最快乐的动物-...\"，我也有类似的经历，✨', 37, '2025-05-16 09:37:16', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('c8db330d-e1ef-425b-ac4d-1ec6be72522b', 'post-plant-8', 2, '这个花卉的颜色太漂亮了🤩', 25, '2025-05-11 22:29:24', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('c9657683-6ead-4002-910e-de474561c9a7', 'post-plant-1', 1, '这个叶子的颜色太漂亮了✨', 36, '2025-05-05 11:58:24', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('ca96dbc3-fefd-46b7-a565-aad4c4fa4e9f', 'post-plant-8', 6, '我也有类似的经历，👏', 44, '2025-05-26 09:33:42', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('ce7bfc36-72ac-4d34-84fb-67c55b55bf08', 'post-plant-3', 4, '关于\"最大最臭的诅咒之花：...\"，我也有类似的经历，✨', 37, '2025-05-03 19:03:39', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('ceb02faf-eebc-4804-b712-243ed5b0988d', 'post-animal-2', 5, '太惊艳了，从来没见过这样的狗狗🌟', 22, '2025-05-25 05:14:14', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('d136600d-16dc-4359-a449-7914dc306540', 'post-plant-1', 4, '支持支持！下次多发多肉的照片😍', 21, '2025-05-18 22:37:50', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('d4a7e929-9e6e-4184-990f-b5cd4adfab10', 'post-animal-3', 1, '今天又涨知识了❤️', 27, '2025-05-04 10:51:13', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('d903b050-70f0-4731-97ee-3f5532aa3da5', 'post-plant-1', 3, '谢谢分享，学到了新知识🤩', 44, '2025-05-28 23:54:28', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('d92011a3-2441-40ce-a962-d363524d10f4', 'post-animal-10', 5, '拍得真漂亮，用什么相机拍的？💯', 36, '2025-05-29 14:13:41', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('da63aa9e-3e96-432e-9caf-68446f0fab00', 'post-animal-9', 4, '请问这是在哪里拍的？🌟', 46, '2025-05-22 16:06:45', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('da6c2c77-e80e-41cc-ad9f-770bb31b06b9', 'post-animal-3', 5, '请问这是在哪里拍的？❤️', 31, '2025-05-27 14:44:29', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('dcfe2285-8413-42a3-a0ec-0e626cf786b8', 'post-animal-10', 6, '拍得真漂亮，用什么相机拍的？🤩', 43, '2025-05-26 03:46:43', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('dd265aee-ed06-4649-8b50-04561e3bf7c1', 'post-plant-5', 2, '没想到花朵还有这样的特点❤️', 34, '2025-05-10 12:15:55', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('dd92781e-00ca-43ba-ba1c-1145229e72cb', 'post-plant-7', 7, '1', 0, '2025-06-01 09:03:37', '2025-06-01 09:03:37');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('e093392a-1a91-42b7-9bdd-973dec708f37', 'post-animal-1', 5, '我也有类似的经历，🔥', 38, '2025-05-13 15:43:41', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('e1be8988-c471-4062-9ba5-8acf55fd8223', 'post-animal-2', 2, '关于\"世界上最快乐的动物-...\"，支持支持！下次多发野生动物的照片❤️', 1, '2025-05-04 03:25:48', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('e6d10091-7b30-47a2-ac67-a4bfd1ce6ebc', 'post-animal-4', 6, '楼主真厉害，拍得好美😊', 16, '2025-05-24 08:11:26', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('eae9e8ae-8257-487b-857d-6423030a8e84', 'post-plant-7', 7, 'hi\n', 0, '2025-06-01 09:03:29', '2025-06-01 09:03:29');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('eb2b5cbd-b3b4-47b5-896c-c171175bd72d', 'post-plant-2', 7, 'hi', 0, '2025-06-01 08:37:09', '2025-06-01 08:37:09');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('ec65db23-fb47-4173-99d3-2e9717300a30', 'post-plant-5', 5, '支持支持！下次多发盆栽的照片✨', 42, '2025-05-03 04:05:07', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('f2126a52-7dec-43b4-bfd4-c9015a2219fd', 'post-animal-6', 5, '这个太可爱了吧✨', 49, '2025-05-03 22:41:47', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('f38b6226-5508-44a2-8228-b8d8ab251bae', 'post-animal-3', 2, '关于\"每天认识一种有趣动物...\"，拍得真漂亮，用什么相机拍的？👍', 43, '2025-05-03 23:04:46', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('f3bcf52f-0200-4848-8f0f-91f9ac44cc94', 'post-animal-2', 6, '没想到动物还有这样的特点💯', 38, '2025-05-05 09:19:27', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('f40b3cd4-e0e6-422e-a379-71751b832a59', 'post-animal-5', 6, '支持支持！下次多发动物的照片✨', 31, '2025-05-14 19:14:53', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('f946151a-d5fb-4113-811a-f31d48a3ae97', 'post-plant-3', 6, '请问这是在哪里拍的？💯', 4, '2025-05-24 08:22:22', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('f992323a-a07b-4d80-a88e-4d3051924735', 'post-plant-2', 7, 'hi\n', 0, '2025-06-01 09:08:30', '2025-06-01 09:08:30');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('fc19a8a9-466f-4ae0-bc84-4e0e06db1fca', 'post-plant-3', 5, '关于\"最大最臭的诅咒之花：...\"，今天又涨知识了🔥', 20, '2025-05-15 13:06:10', '2025-05-31 14:51:43');
INSERT INTO `comments` (`id`, `postId`, `userId`, `content`, `likes`, `createdAt`, `updatedAt`) VALUES ('ffac662b-e34a-4a8b-8e6b-dbdf05a2335c', 'post-animal-2', 3, '太惊艳了，从来没见过这样的狗狗✨', 14, '2025-05-24 13:47:59', '2025-05-31 14:51:43');
COMMIT;

-- ----------------------------
-- Table structure for post_images
-- ----------------------------
DROP TABLE IF EXISTS `post_images`;
CREATE TABLE `post_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `postId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `imageUrl` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` int(11) DEFAULT '0',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`),
  CONSTRAINT `post_images_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of post_images
-- ----------------------------
BEGIN;
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (1, 'post-plant-1', 'http://localhost:3000/uploads/images/plant-1.png', 0, '生石花，\"屁股会蹦花\"', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (2, 'post-plant-2', 'http://localhost:3000/uploads/images/plant-2.png', 0, '沙漠惊现\"蓝色鸡腿\"｜稀有沙生植物蓝棱柱', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (3, 'post-plant-3', 'http://localhost:3000/uploads/images/plant-3.png', 0, '最大最臭的诅咒之花：大王花', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (4, 'post-plant-4', 'http://localhost:3000/uploads/images/plant-4.png', 0, '每天认识一种植物丨狸尾豆', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (5, 'post-plant-5', 'http://localhost:3000/uploads/images/plant-5.png', 0, '科学家发现一种新蘑菇', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (6, 'post-plant-6', 'http://localhost:3000/uploads/images/plant-6.png', 0, '会跳舞的小白兔狸藻', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (7, 'post-plant-7', 'http://localhost:3000/uploads/images/plant-7.png', 0, 'No.67#每日一植#风铃草🌼', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (8, 'post-plant-8', 'http://localhost:3000/uploads/images/plant-8.png', 0, '小白兔狸藻丨你见过\"食肉植物\"小白兔？', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (9, 'post-animal-1', 'http://localhost:3000/uploads/images/animal-1.png', 0, '可以光合作用的奇妙生物丨叶羊', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (10, 'post-animal-2', 'http://localhost:3000/uploads/images/animal-2.png', 0, '世界上最快乐的动物-Quokka （短尾矮袋鼠）', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (11, 'post-animal-3', 'http://localhost:3000/uploads/images/animal-3.png', 0, '每天认识一种有趣动物｜威廉多彩海蛞蝓', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (12, 'post-animal-4', 'http://localhost:3000/uploads/images/animal-4.png', 0, '结巴鸟|每天认识一种奇妙动物041', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (13, 'post-animal-5', 'http://localhost:3000/uploads/images/animal-5.png', 0, '每天认识一种有趣动物｜狞猫', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (14, 'post-animal-6', 'http://localhost:3000/uploads/images/animal-6.png', 0, '每天了解一种趣味动物👀炉管海绵', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (15, 'post-animal-7', 'http://localhost:3000/uploads/images/animal-7.png', 0, '变装精灵～', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (16, 'post-animal-8', 'http://localhost:3000/uploads/images/animal-8.png', 0, '每天了解一种趣味动物👀紫貂', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (17, 'post-animal-9', 'http://localhost:3000/uploads/images/animal-9.png', 0, '每天了解一种趣味动物👀水滴鱼', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_images` (`id`, `postId`, `imageUrl`, `position`, `description`, `createdAt`, `updatedAt`) VALUES (18, 'post-animal-10', 'http://localhost:3000/uploads/images/animal-10.png', 0, '每天了解一种动物｜象鼩', '2025-05-31 10:38:32', '2025-05-31 10:38:32');
COMMIT;

-- ----------------------------
-- Table structure for post_videos
-- ----------------------------
DROP TABLE IF EXISTS `post_videos`;
CREATE TABLE `post_videos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `postId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `videoUrl` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `coverUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`),
  CONSTRAINT `post_videos_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of post_videos
-- ----------------------------
BEGIN;
INSERT INTO `post_videos` (`id`, `postId`, `videoUrl`, `coverUrl`, `duration`, `createdAt`, `updatedAt`) VALUES (1, 'post-plant-1', 'http://localhost:3000/uploads/images/plant-1.mp4', 'http://localhost:3000/uploads/images/plant-1.png', 65, '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `post_videos` (`id`, `postId`, `videoUrl`, `coverUrl`, `duration`, `createdAt`, `updatedAt`) VALUES (2, 'post-plant-3', 'http://localhost:3000/uploads/images/plant-3.mp4', 'http://localhost:3000/uploads/images/plant-3.png', 129, '2025-05-31 10:38:32', '2025-05-31 10:38:32');
COMMIT;

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `type` int(11) NOT NULL DEFAULT '1',
  `mediaType` enum('image','video') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'image',
  `coverImage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mediaUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `likes` int(11) DEFAULT '0',
  `views` int(11) DEFAULT '0',
  `isHot` tinyint(1) DEFAULT '0',
  `location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of posts
-- ----------------------------
BEGIN;
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-animal-1', '可以光合作用的奇妙生物丨叶羊', '叶羊，学名Costasiella kuroshimae，是一种生活在海洋中的小型软体动物，是海蛞蝓家族的一员，腹足纲无楯目海兔科海兔螺属。因其外形酷似陆地上的小绵羊，故得名\"叶羊\"。\n\n形态特征\n叶羊的体型非常小，成年个体体长仅约5毫米。它们有着软绵绵的身体和毛茸茸的触角，以及小而明亮的眼睛，这些特征让它们看起来非常像卡通中的小绵羊。叶羊的贝壳已经退化，只剩下一层透明的薄壳皮，通常呈白色并带有珍珠光泽。\n\n生活习性\n叶羊主要分布在日本、印度尼西亚和菲律宾的海域。它们喜欢生活在海水清澈、水流畅通、海藻丛生的环境中。叶羊以海藻为食，通过进食藻类，它们能够吸收食物中的叶绿素，并将其转化为自身的一部分，这一过程被称为盗食质体（kleptoplasty）。\n\n光合作用\n叶羊是世界上少有的可以进行光合作用的动物之一。它们通过盗食质体的方式，将进食到体内的叶绿素转化为自己所用，从而为自己制造养分。这种能力使得叶羊能够在阳光下进行光合作用，为自己合成所需的营养物质。\n\n生长发育\n叶羊在孵化后，身体最初是透明的，直到开始进食藻类后，体色才开始慢慢变化，最终变成绿色，这意味着它们已经发育成熟。它们的寿命相对较短，一般只能存活一年左右。\n\n繁殖方式\n叶羊是雌雄同体的生物，繁殖方式为异体受精。它们的交配行为相当特别，有时几只甚至十几只叶羊会进行连锁式的交配。交配后，叶羊会排出受精卵，这些卵会形成细长如绳索状的卵索带。\n\n环境影响\n叶羊对海水水质的要求非常高，海水污染会严重影响它们的生存。随着人类活动的扩大，叶羊的生存空间正在逐渐缩小，许多海域的叶羊已经因为污染而绝迹。\n\n#动植物挖掘官# #有趣的动植物# #自然的精灵# #叶羊# #海蛞蝓# #每天认识一种动物# #神奇动物# #神奇动物在小红书# #地球不只是人类的地球# #奇幻海洋生物#', 2, 'image', 'http://localhost:3000/uploads/images/animal-1.png', 'http://localhost:3000/uploads/images/animal-1.png', 92, 1394, 0, NULL, '2025-05-10 17:38:23', '2025-06-03 08:25:21', 6);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-animal-10', '每天了解一种动物｜象鼩', '🍭中文名：象鼩\n🍭别名：跳鼩\n🍡象鼩生活在非洲的热带森林中，象鼩身形像松鼠，但更小巧。它们会不停地奔跑于地面或爬上树寻找昆虫蠕虫、小型脊椎动物和果实。象鼩的脚趾外张，爪子锋利，非常适合抓住树皮或岩石；而且它们的长尾巴可以起到平衡作用。象鼩一般手捧食物坐着吃，这种做法可以使它们更好地防御鸟类、蛇和细尾象鼩等天敌的偷袭。\n🍡象鼩白天在其领域周围用其强壮的后腿和长尾像袋鼠一样跳跃寻食。主要是吃昆虫及其他细小的生物，尤其是甲虫、蜘蛛、蠕虫、蚁及白蚁，大部份都是从叶子堆中找到，另外它们亦会吃一些种子及嫩枝。有些种类也以植物的芽、浆果和其他部分为食。\n🍡象鼩并非高度群居的动物，很多都是一对生活的，共同保护领土。它们会用臭腺来划分自己的领地。东非象鼩属会在泥土挖像袋狸款式的细小圆锥穴，但其他的则会利用天然裂缝或以树叶筑巢。象鼩占据各种栖息地．从岩质的小山到草地、森林下的地面等的高纬度的森林地带。\n#和大自然亲密接触# #动物百科# #可爱动物# #保护动物# #动物科普# #治愈系动物# #奇妙生物圈# #有趣的动物# #野生动物# #动物#', 2, 'image', 'http://localhost:3000/uploads/images/animal-10.png', 'http://localhost:3000/uploads/images/animal-10.png', 731, 2222, 0, NULL, '2025-05-30 02:27:23', '2025-06-01 07:59:43', 1);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-animal-2', '世界上最快乐的动物-Quokka （短尾矮袋鼠）', '短尾矮袋鼠是袋鼠科的一员，是一种小型袋鼠，同家猫一般大小，只生活在澳大利亚。因其圆胖呆萌的外表，常常被人们称为\"世界上最快乐的动物\"。', 2, 'image', 'http://localhost:3000/uploads/images/animal-2.png', 'http://localhost:3000/uploads/images/animal-2.png', 89, 3588, 0, NULL, '2025-05-04 13:42:18', '2025-05-31 10:38:32', 2);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-animal-3', '每天认识一种有趣动物｜威廉多彩海蛞蝓', '威廉多彩海蛞蝓\n『深海蓝色精灵』\n🍊拉丁学名:Chromodoris willani\n🍊别名:威廉海兔\n🍊栖息环境:栖息于珊瑚礁区浅海，以海绵为食。\n🍊外形特征:威廉多彩海蛞蝓体长可达9厘米，触角及外鳃为淡蓝色，上面有许多白点。身体周缘为白色，中央为淡蓝色，淡蓝色外围为蓝黑色环带，身体中央有一些黑色斑点及短纵线。腹部两边也有纵斑及纵走带。\n🥶冷知识:海蛞蝓是科学家发现的第一种可生成植物色素叶绿素的动物。为了保护自己，它身着可变化的\"迷彩服\"，爬到什么环境里都能随机应变。不过，当它们在遭遇敌害难以逃脱时便会分泌出带有毒素和紫色的液体，前者可使敌害神经麻醉而失去攻击力，后者犹如\"烟幕弹\"，从而趁机逃遁。海蛞蝓是雌雄同体的，春天是其繁殖季节。\n#科普# #生物# #动物# #有趣冷知识# #海洋动物# #奇妙的动物# #和大自然亲密接触#', 2, 'image', 'http://localhost:3000/uploads/images/animal-3.png', 'http://localhost:3000/uploads/images/animal-3.png', 570, 1420, 0, NULL, '2025-05-03 02:27:23', '2025-05-31 10:38:32', 1);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-animal-4', '结巴鸟|每天认识一种奇妙动物041', '蓝脚鲣鸟是鹈形目鲣鸟科鲣鸟属鸟类，又叫结巴鸟。\n嘴粗壮，近似圆锥形，上下嘴缘都为锯齿状；嘴喙上没有鼻孔；喉囊发达；翅膀狭窄，长而尖；脖子粗壮。\n鸟喙为暗绿色、蓝色或灰色；眼晴呈黄色，雌鸟的瞳孔较雄鸟稍大；脸上的皮肤黝黑并有奇异的眼袋；头部和颈部有浓重的棕色和白色条纹；翅膀、尾巴和下体为黑褐色，背面和腹部羽毛为白色；脚蹼为蓝色。\n蓝脚鲣鸟的长相非常滑稽，乍看之下就像小丑一样，极具特色，是加拉帕戈斯群岛色彩最丰富的鸟类之一。已成为濒危鸟类，被列为中国国家二级保护动物。\n主要食物为鱼类，如沙丁鱼、凤尾鱼、鲭鱼以及一些鱿鱼和飞鱼等。\n蓝脚鲣鸟主要分布在美国南加利福尼亚到秘鲁北面的太平洋地区，喜欢栖息于热带海洋、海岬和岛屿上。除了繁殖期以外，大多数时间都在海上活动。\n#和大自然亲密接触# #鸟类# #鸟类科普# #野生动物# #神奇动物# #奇妙动物# #万物皆有灵性# #科普# #动物科普# #萌宠# #动物园# #动物世界# #人与自然# #动物# #动物百科# #鸟类图鉴# #亲子教育# #搞笑图片#', 2, 'image', 'http://localhost:3000/uploads/images/animal-4.png', 'http://localhost:3000/uploads/images/animal-4.png', 749, 3715, 0, NULL, '2025-05-29 09:10:32', '2025-05-31 10:38:32', 5);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-animal-5', '每天认识一种有趣动物｜狞猫', '『凶狠的美丽野猫』\n🍊拉丁学名：Caracal caracal\n🍊外文名：Caracal cat\n🍊别称：狞猫因栖息在干旱地带，又被称为沙漠猞猁。\n🍊分类：界 动物界、门 脊索动物门、纲 哺乳纲、目 食肉目、科 猫科、属 狞猫属、种 狞猫、亚门 脊椎动物亚门、亚属 猫亚属、亚纲 兽亚纲、亚科 猫亚科、亚种 9亚种\n🍊驯养：狞猫很容易被驯服，在伊朗和印度等国曾被当作猎猫，在美国，它们又成了圈养于家中的宠物。它们性情温顺，能很快适应和人类一起生活。\n🍊栖息环境：狞猫主要分布在非洲以及亚洲的西部、中部和南部等地。狞猫栖息在森林、多石的高山、热带稀树草原和灌木丛林地一带，常在洞穴和岩石裂缝中休息。\n🍊生活习性：狞猫是夜行性动物，喜欢独居，擅长爬树，领域性较强，跳跃能力较强，不爱叫，偶尔发出和豹相似的叫声，白天躺在洞穴中，半夜外出捕猎。狞猫主要以大小哺乳动物和鸟类等为食，有时会袭击家畜。\n🍊繁殖方式：狞猫全年可繁殖，妊娠期为68-81天，每胎2-3只。在人工饲养下狞猫寿命可达19年。\n#保护动物# #奇妙生物圈# #动物# #小动物# #科普# #生物# #动物# #猫# #狞猫# #灵感# #素材# #福瑞控# #和大自然亲密接触# #绘画素材#', 2, 'image', 'http://localhost:3000/uploads/images/animal-5.png', 'http://localhost:3000/uploads/images/animal-5.png', 635, 1514, 0, NULL, '2025-05-16 18:59:04', '2025-05-31 10:38:32', 6);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-animal-6', '每天了解一种趣味动物👀炉管海绵', '🌿中文名：炉管海绵\n🌿英文名：stove-pipe sponge\n🍀炉管海绵是一种海生生物，它凸出的眼睛、宽宽的大嘴、蓝色的外表，都像极了甜饼怪。\n🍀据英国《每日邮报》2013年9月22日报道，摄影师Mauricio Handler在加勒比海水域潜水时，意外拍到一种罕见动物—炉管海绵(stove-pipe sponge)。画面中，一只炉管海绵张大管状的眼睛和嘴巴，十分怪异恐怖，让人想起了美国儿童节目《芝麻街》中张大眼睛和嘴巴吃饼干的玩偶的样子，但炉管海绵可不喜欢吃饼干，而是以浮游生物为生。\n🍀谈起这段神奇的邂逅，摄影师毛利西奥说：\"我是无意中发现这个不寻常的海洋生物的。看到它时，我非常吃惊，从来没有人拍过这个东西。我把它翻过来摆成个更像人物的造型拍了下来。\"\n#和大自然亲密接触# #动物百科# #动物科普# #奇妙生物圈# #奇妙的动物# #动物# #海洋生物# #海洋动物# #炉管海绵# #邂逅海洋动物# #惊艳我的海洋动物# #神奇动物# #自然教育# #亲子教育# #趣味知识科普# #涨知识# #分享知识#', 2, 'image', 'http://localhost:3000/uploads/images/animal-6.png', 'http://localhost:3000/uploads/images/animal-6.png', 624, 2184, 0, NULL, '2025-05-16 15:13:35', '2025-06-06 06:52:46', 4);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-animal-7', '变装精灵～', '———\n中文名：白鼬\n英文名：Stoat\n拉丁名：Mustela erminea\n命名作者：林奈Linnaeus, 1758\n.\n界：动物界 Animalia\n门：脊索动物门 Chordata\n纲：哺乳纲 Mammalia\n目：食肉目 Carnivora\n科：鼬科 Mustelidae\n属：鼬属 Mustela\n📍分布范围：分布于从欧洲和前苏联到达日本和北美北部以及中国的黑龙江、内蒙古、甘肃、吉林、新疆、辽宁等地\n🕊️外形特征：形似黄鼬，身体细长，四肢短小；体长25～35厘米，尾长6～10厘米；毛色随季节变化，夏季背部毛色为灰棕色，腹部为白色，足背为灰白色；冬季除了尾部毛黑色，全身纯白。\n🪺繁殖方式：白鼬发情期约在5～6月，孕期9～10个月，每产8～12崽，哺乳期30～40天，幼崽由雌雄共同抚育，寿命3～4年。\n🍒食物：夜行，一般单独活动，以鼠、鸟、兔、鱼等为食，也吃植物、浆果等，捕捕能力顶端，听觉、十分灵敏。\n🌳栖息地：多见于森林地区到荒漠、及3000米以上的高山林区。草原草甸、沼泽地、河谷地以及半荒漠的沙丘及耕作地，会用大象、蟑螂和气味标记自己的领地，它们不会自己筑巢，而是占领其他动物的洞穴。\n✅保护级别：IUCN3.1 无危（LC），白鼬的食物以对人类有害的啮齿动物为主，已被列入中国《国家保护的有益的或者有重要经济、科学研究价值的陆生野生动物名录》。\n#白鼬##小白鼬##可爱小动物##自然美学##自然教育##自然科普# #地球生物# #神奇生物##动物##保护动物##动物科普##博物学#', 2, 'image', 'http://localhost:3000/uploads/images/animal-7.png', 'http://localhost:3000/uploads/images/animal-7.png', 780, 1382, 0, NULL, '2025-05-04 03:33:39', '2025-06-06 06:48:43', 5);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-animal-8', '每天了解一种趣味动物👀紫貂', '🌿中文名：紫貂\n🌿拉丁学名：Martes zibellina\n🌿别称：黑貂、林貂、貂、貂鼠、赤貂、大叶子\n🍀形态特征：紫貂四肢短健，但躯体细长；后肢比前肢稍长，前后肢均具五趾，具肉垫；弯曲的利爪有半伸缩性；眼睛大而有神，耳壳大且直立，略呈三角形；尾巴粗大而尾毛蓬松，鼻部中央有明显纵沟，耳下缘有双层附耳；通体毛色基本一致，为黑褐色或黄褐色，稍掺有白色针毛；头部具不明显或不规则的黄白色喉斑。\n🍀分布范围：紫貂分布于中国黑龙江的大兴安岭、小兴安岭、老爷岭、张广才岭、完达山、吉林的长白山、辽宁的林海雪原，以及新疆北部的阿尔泰山地等地。在芬兰、日本、韩国、朝鲜、蒙古、波兰、俄罗斯也有分布。栖息于海拔800-1600米气候寒冷的针阔叶混交林和亚寒带针叶林中。\n🍀生活习性：紫貂善于攀树，行动敏捷灵巧，活动于密林深处。筑巢于石缝、树洞及树根下；通常营定居生活，但因食物的丰度和气候变化而常游荡迁移，亦常住简单的临时休息的巢穴。除交配期外，多独居；其视、听敏锐，行动快捷，一受惊扰，瞬间便消失在树林中。昼夜均能活动觅食，但以夜间居多。食物短缺时，白天也出来猎食，活动范围在5-10平方公里之内。多在地上捕捉猎物，攀援爬树也很灵活。冬季食物短缺时，就迁移到低山地带，待天气转暖时再返回。\n🍀保护现状：列入中国《国家重点保护野生动物名录》（2021年2月5日）一级。\n#和大自然亲密接触# #动物百科# #动物科普# #动物# #野生动物# #紫貂# #自然教育# #亲子教育# #奇妙的动物# #趣味知识科普#', 2, 'image', 'http://localhost:3000/uploads/images/animal-8.png', 'http://localhost:3000/uploads/images/animal-8.png', 352, 3342, 0, NULL, '2025-05-15 16:54:03', '2025-05-31 10:38:32', 6);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-animal-9', '每天了解一种趣味动物👀水滴鱼', '🌿中文名：水滴鱼\n🌿拉丁学名：Psychrolutes marcidus\n🌿别名：忧伤鱼、波波鱼、软隐棘杜父鱼\n🍀形态特征：水滴鱼全身没有骨头和肌肉，全身成凝胶状；体态延长，头部宽大而向后渐细小；头部没有棱棘；脑颅上有发达的骨弓，骨弓上无骨棘；眼间宽阔，大于眼睛的直径；身体上没有鱼鳞；口大，上下颌有数列圆锥状齿；皮肤松垮，腹鳍很小，背鳍通常连续，棘常隐于皮下。\n🍀栖息环境：水滴鱼生活在澳大利亚和塔斯马尼亚沿岸600~1200米的海底当中，水压比海平面高数十倍，人类很难达到其栖息地，所以很少被发现。\n🍀趣味新闻：为了保护濒危的丑陋动物，英国动物保护人士想了一个办法：发起\"没有最丑，只有更丑\"的\"选丑\"比赛。这场比赛结果出炉，生活在大洋深处的怪鱼水滴鱼\"荣登\"榜首。\n#和大自然亲密接触# #海洋生物# #海洋动物# #惊艳我的海洋动物# #奇妙生物圈# #大自然# #奇妙的动物# #动物百科# #神奇动物# #惊艳我的海洋动物# #神奇动物在这里# #自然教育# #知识分享# #趣味知识科普# #知识科普# #涨知识#', 2, 'image', 'http://localhost:3000/uploads/images/animal-9.png', 'http://localhost:3000/uploads/images/animal-9.png', 359, 78, 0, NULL, '2025-05-09 23:19:13', '2025-05-31 10:38:32', 4);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-plant-1', '生石花，\"屁股会蹦花\"', '#植物微观世界# #神奇植物# #生石花# #那些奇奇怪怪的植物们# #搞笑配音#', 1, 'video', 'http://localhost:3000/uploads/images/plant-1.png', 'http://localhost:3000/uploads/images/plant-1.mp4', 865, 3833, 0, NULL, '2025-05-13 21:27:00', '2025-06-06 06:50:47', 3);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-plant-2', '沙漠惊现\"蓝色鸡腿\"｜稀有沙生植物蓝棱柱', '蓝棱柱（Cipocereus bradei）\n因通体灰蓝、棱角分明的柱状茎干而得名，\n堪称\"沙漠中的蓝宝石\"，\n仙人掌界的\"高冷系颜值担当\"\n全身灰蓝自带「冷白皮滤镜」\n棱角分明+黑刺炸毛，\n赛博朋克风拉满，\n夏夜开奶白花，\n暗香浮动仅绽放1晚。\n#植物# #景观# #植物设计#\n#植物科普# #沙生植物# #神奇植物#\n#植物的世界# #仙人掌# #奇特的植物#\n#闯入我生活的新奇植物#', 1, 'image', 'http://localhost:3000/uploads/images/plant-2.png', 'http://localhost:3000/uploads/images/plant-2.png', 969, 2410, 0, NULL, '2025-05-18 04:07:50', '2025-06-06 06:53:23', 6);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-plant-3', '最大最臭的诅咒之花：大王花', '#植物的故事# #植物科普# #植物冷知识# #不一样的花# #独一无二的花#', 1, 'video', 'http://localhost:3000/uploads/images/plant-3.png', 'http://localhost:3000/uploads/images/plant-3.mp4', 862, 168, 0, NULL, '2025-05-05 15:08:32', '2025-06-06 06:52:33', 1);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-plant-4', '每天认识一种植物丨狸尾豆', '在自然界的万千植物中，狸尾豆以其独特的名字和形态吸引了我们的注意，它们因其花穗柔软而毛茸茸，酷似狸猫的尾巴，因此得名。\n基础信息\n• 学名：Uraria lagopodioides L.\n• 别名：兔尾草、狗尾豆、猫尾豆、猴尾豆、象豆\n• 科：豆科\n• 属：狸尾豆属\n形态特征\n狸尾豆是一种一年生草本植物，它的植株不高，通常在40厘米左右，但它们以群体的形式生长，形成了一片片绿色的小丘。叶片细长，边缘有锯齿，给人一种清新脱俗的感觉。最吸引人的是它的花序，它们从叶腋中抽出，形似狸猫的尾巴，因此得名。这些花序上覆盖着细软的绒毛，随风轻轻摇曳，如同小动物的尾巴在摆动，非常可爱。\n生长习性\n狸尾豆对环境的适应性很强，它们可以在多种气候条件下生长，无论是炎热的夏季还是寒冷的冬季，都能看到它们的身影。它们喜欢阳光充足的环境，但也能忍受半阴。狸尾豆对土壤的要求不高，无论是肥沃的土壤还是贫瘠的土地，它们都能生长，但排水良好的土壤更有利于它们的生长。\n用途与价值\n狸尾豆不仅外观吸引人，还具有一定的药用价值。在传统医学中，狸尾豆的全草被用来治疗一些疾病，如消肿和驱虫。此外，狸尾豆的花序也是园林中一道亮丽的风景线，它们可以单独种植，也可以与其他植物搭配，形成丰富多彩的景观。\n栽培与护理\n栽培狸尾豆相对简单，它们对环境的适应性强，不需要特别的照顾。在种植时，选择阳光充足的地方，确保土壤排水良好。在生长季节，适量的浇水和施肥可以促进它们的生长。由于狸尾豆的自播能力较强，它们可以在适宜的环境中自我繁殖，形成自然的群落。\n#生活美学# #动植物挖掘官# #不懂就问有问必答# #植物# #每天认识一种植物# #每天认识一种花# #神奇植物# #植物小知识#', 1, 'image', 'http://localhost:3000/uploads/images/plant-4.png', 'http://localhost:3000/uploads/images/plant-4.png', 958, 3549, 0, NULL, '2025-05-28 03:09:37', '2025-06-06 06:53:41', 1);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-plant-5', '科学家发现一种新蘑菇', '科学家最近发现了一种新蘑菇，颜色呈醒目的蓝色。这种蘑菇名为 Mycena subcyanocephala，最早是在 2019 年 12 月发表的一篇论文中描述的。它是由台湾师范大学和国立自然科学博物馆的研究人员在台湾发现的。\n蓝蘑菇是世界上最小的蘑菇之一，高度只有 1 毫米左右。它生长在腐朽的木头上，喜欢潮湿的环境。蘑菇盖的蓝色是由一种叫做蓝藻蓝蛋白的色素引起的，这种色素也存在于一些藻类和蓝藻中。这种颜色可以在成熟的蘑菇中持续存在，尽管它可能会褪成淡蓝色或灰白色。\n这一新物种的发现为真菌王国增添了多样性和美丽。研究人员希望他们的发现能激发人们对这些微小而迷人的生物的更多兴趣和保护努力。\n2023 年 10 月，另一项研究显示，一些小蘑菇，包括 M. subcyanocephala，可以寄居在活植物上，甚至与它们形成互利关系。这表明，在有利条件下，小蘑菇正在进化，从独特的非生物植物材料分解者转变为活植物的寄居者。\n图片来源：Eric Cho（cho_fungi - Instagram 评论区）\n文字来源：Earth Unreal', 1, 'image', 'http://localhost:3000/uploads/images/plant-5.png', 'http://localhost:3000/uploads/images/plant-5.png', 713, 2153, 0, NULL, '2025-05-12 03:20:14', '2025-06-06 06:48:06', 2);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-plant-6', '会跳舞的小白兔狸藻', '一群勤快的小白兔狸藻，果然还是需要一些光照才能爆兔兔呀#食虫植物# #植物生长日记# #狸藻# #小白兔狸藻#', 1, 'image', 'http://localhost:3000/uploads/images/plant-6.png', 'http://localhost:3000/uploads/images/plant-6.png', 143, 2609, 0, NULL, '2025-05-11 07:18:11', '2025-06-06 06:48:55', 3);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-plant-7', 'No.67#每日一植#风铃草🌼', '宝子们，今天来分享超美的风铃草啦🎐\n🌸外观：风铃草的花朵宛如小巧精致的铃铛，俏皮地悬挂在细长的花茎上，微风拂过，仿佛能听见它们轻轻碰撞发出的悦耳声响。花色丰富多样，有清新淡雅的蓝色、浪漫迷人的粉色、纯洁无暇的白色等。每一朵花都有独特的纹理，花瓣微微卷曲，像是精心雕琢的艺术品，在绿叶衬托下，愈发显得灵动可爱。\n🌱生长习性：风铃草偏好凉爽、光照充足的环境，不过也能忍受一定程度的半阴。它对土壤要求不算苛刻，疏松肥沃、排水良好的土壤最适合它扎根生长。它就像个不挑环境的小仙子，只要条件不太差，都能努力绽放美丽。\n💡养护要点：浇水要遵循见干见湿原则，别让土壤太干或太湿，不然风铃草会不开心哦。施肥不用太频繁，生长旺季适当补充稀薄肥料，就能助力它茁壮成长。日常要注意通风，预防病虫害来袭。\n宝子们，有没有被风铃草的独特魅力吸引呢？要是你打算养一盆风铃草，最关心它哪方面的养护问题呀🧐快来评论区聊聊～\n#风铃草# #花卉养护# #室内植物# #庭院花卉# #室内绿植# #植物# #每天认识一种植物#', 1, 'image', 'http://localhost:3000/uploads/images/plant-7.png', 'http://localhost:3000/uploads/images/plant-7.png', 813, 3402, 0, NULL, '2025-05-12 09:00:22', '2025-06-01 09:03:22', 5);
INSERT INTO `posts` (`id`, `title`, `content`, `type`, `mediaType`, `coverImage`, `mediaUrl`, `likes`, `views`, `isHot`, `location`, `createdAt`, `updatedAt`, `userId`) VALUES ('post-plant-8', '小白兔狸藻丨你见过\"食肉植物\"小白兔？', '💚名称：小白兔狸藻\n💚季节：花期6月（白色花朵）、8月（蓝色花朵）\n💚原产地：原产南非\n-\n💚小白兔狸藻的\"三度一法\"\n喜水度：⭐⭐⭐⭐\n喜光度：⭐⭐\n耐热度：⭐⭐⭐\n食肉法：狸藻是具有可活动囊状捕虫结构的小型食虫植物，能将小生物吸入囊中，并消化吸收\n-\n💚自身价值\n小白兔狸藻因其可爱的花型而得名，小白兔狸藻是最受欢迎的陆生狸藻之一\n🌿 科研价值\n由于其特殊的食虫习性，也是科学家研究食虫植物生理和生态学的重要对象\n🌼观赏价值\n其可爱的小白兔形态深受人们喜爱，是一种非常受欢迎的观赏植物，尤其是水族箱或者玻璃瓶中的微型景观\n-\n♻️图片来源于网络\n❤️欢迎走进 @Plants pharmacy 真不二 的世界，尽情期待更多关于植物的故事吧～\n#小白兔狸藻# #植物# #植物科普# #闯入我生活的新奇植物# #鲜花分享# #花都开好了# #每周一花# #点缀生活的鲜花#', 1, 'image', 'http://localhost:3000/uploads/images/plant-8.png', 'http://localhost:3000/uploads/images/plant-8.png', 230, 7, 0, NULL, '2025-05-03 01:38:46', '2025-06-06 06:52:37', 6);
COMMIT;

-- ----------------------------
-- Table structure for user_followings
-- ----------------------------
DROP TABLE IF EXISTS `user_followings`;
CREATE TABLE `user_followings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `followerId` int(11) NOT NULL,
  `followingId` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_followings_follower_id_following_id` (`followerId`,`followingId`),
  KEY `followingId` (`followingId`),
  CONSTRAINT `user_followings_ibfk_1` FOREIGN KEY (`followerId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `user_followings_ibfk_2` FOREIGN KEY (`followingId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of user_followings
-- ----------------------------
BEGIN;
INSERT INTO `user_followings` (`id`, `followerId`, `followingId`, `createdAt`, `updatedAt`) VALUES (1, 1, 5, '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `user_followings` (`id`, `followerId`, `followingId`, `createdAt`, `updatedAt`) VALUES (2, 1, 6, '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `user_followings` (`id`, `followerId`, `followingId`, `createdAt`, `updatedAt`) VALUES (3, 1, 3, '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `user_followings` (`id`, `followerId`, `followingId`, `createdAt`, `updatedAt`) VALUES (4, 2, 6, '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `user_followings` (`id`, `followerId`, `followingId`, `createdAt`, `updatedAt`) VALUES (5, 2, 5, '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `user_followings` (`id`, `followerId`, `followingId`, `createdAt`, `updatedAt`) VALUES (6, 3, 2, '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `user_followings` (`id`, `followerId`, `followingId`, `createdAt`, `updatedAt`) VALUES (7, 4, 3, '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `user_followings` (`id`, `followerId`, `followingId`, `createdAt`, `updatedAt`) VALUES (8, 5, 6, '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `user_followings` (`id`, `followerId`, `followingId`, `createdAt`, `updatedAt`) VALUES (9, 5, 3, '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `user_followings` (`id`, `followerId`, `followingId`, `createdAt`, `updatedAt`) VALUES (10, 6, 5, '2025-05-31 10:38:32', '2025-05-31 10:38:32');
INSERT INTO `user_followings` (`id`, `followerId`, `followingId`, `createdAt`, `updatedAt`) VALUES (11, 6, 3, '2025-05-31 10:38:32', '2025-05-31 10:38:32');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
