-- 使用数据库
USE shenglingji;

-- 检查coverImage字段是否存在
SELECT COUNT(*) INTO @coverImageExists 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = 'shenglingji' 
AND TABLE_NAME = 'posts' 
AND COLUMN_NAME = 'coverImage';

-- 如果不存在，添加coverImage字段
SET @addCoverImage = IF(@coverImageExists = 0, 'ALTER TABLE posts ADD COLUMN coverImage VARCHAR(255) DEFAULT NULL;', 'SELECT "coverImage already exists";');
PREPARE addCoverImageStmt FROM @addCoverImage;
EXECUTE addCoverImageStmt;
DEALLOCATE PREPARE addCoverImageStmt;

-- 检查mediaUrl字段是否存在
SELECT COUNT(*) INTO @mediaUrlExists 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = 'shenglingji' 
AND TABLE_NAME = 'posts' 
AND COLUMN_NAME = 'mediaUrl';

-- 如果不存在，添加mediaUrl字段
SET @addMediaUrl = IF(@mediaUrlExists = 0, 'ALTER TABLE posts ADD COLUMN mediaUrl VARCHAR(255) DEFAULT NULL;', 'SELECT "mediaUrl already exists";');
PREPARE addMediaUrlStmt FROM @addMediaUrl;
EXECUTE addMediaUrlStmt;
DEALLOCATE PREPARE addMediaUrlStmt;

-- 检查mediaType字段是否存在
SELECT COUNT(*) INTO @mediaTypeExists 
FROM information_schema.COLUMNS 
WHERE TABLE_SCHEMA = 'shenglingji' 
AND TABLE_NAME = 'posts' 
AND COLUMN_NAME = 'mediaType';

-- 如果不存在，添加mediaType字段
SET @addMediaType = IF(@mediaTypeExists = 0, 'ALTER TABLE posts ADD COLUMN mediaType ENUM("image", "video") NOT NULL DEFAULT "image";', 'SELECT "mediaType already exists";');
PREPARE addMediaTypeStmt FROM @addMediaType;
EXECUTE addMediaTypeStmt;
DEALLOCATE PREPARE addMediaTypeStmt;

-- 更新现有帖子的mediaType
UPDATE posts SET mediaType = 'image' WHERE mediaType IS NULL;

-- 更新现有帖子的coverImage和mediaUrl（基于现有数据）
UPDATE posts p 
LEFT JOIN post_videos pv ON p.id = pv.postId
LEFT JOIN post_images pi ON p.id = pi.postId AND pi.position = 0
SET 
    p.coverImage = COALESCE(pv.coverUrl, pi.imageUrl),
    p.mediaUrl = CASE 
        WHEN p.mediaType = 'video' THEN pv.videoUrl
        ELSE pi.imageUrl
    END
WHERE p.coverImage IS NULL OR p.mediaUrl IS NULL; 