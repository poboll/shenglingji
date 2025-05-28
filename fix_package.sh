#!/bin/bash

# 替换Kotlin文件中的包声明
find ./app/src -name "*.kt" -exec sed -i '' 's/package com\.venus\.xiaohongshu/package com.caiths.shenglingji/g' {} \;

# 替换Kotlin和XML文件中的导入声明和引用
find ./app/src -name "*.kt" -o -name "*.xml" -exec sed -i '' 's/com\.venus\.xiaohongshu/com.caiths.shenglingji/g' {} \;

# 替换布局文件中的自定义视图引用
find ./app/src -name "*.xml" -exec sed -i '' 's/com\.venus\.xiaohongshu\./com.caiths.shenglingji./g' {} \;

# 更新资源文件中的引用
find ./app/src -name "*.xml" -exec sed -i '' 's/Theme\.VenusXiaohongshu/Theme.Shenglingji/g' {} \;

echo "包名替换完成！" 