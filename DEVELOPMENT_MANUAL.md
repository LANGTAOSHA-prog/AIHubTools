AIHubTools 项目开发手册 V1.0

项目名称：
AIHubTools

中文名称：
智汇工具

GitHub仓库：
AIHubTools

项目网址：
https://langtaosha-prog.github.io/AIHubTools/

更新时间：
2026-06-06

━━━━━━━━━━━━━━━━━━━━
第一章 项目定位
━━━━━━━━━━━━━━━━━━━━

项目定位：

AI工具导航

AI工具教程

AI工具评测

AI工具使用指南

目标用户：

普通用户

学生

自媒体创作者

程序员

办公人员

核心目标：

帮助用户快速找到合适的AI工具

帮助用户学习AI工具使用方法

建立高质量AI工具数据库

形成工具导航 + 教程内容双流量模式

━━━━━━━━━━━━━━━━━━━━
第二章 项目目录结构规范
━━━━━━━━━━━━━━━━━━━━

统一结构：

AIHubTools/

├─ index.html

├─ tutorials/

├─ categories/

├─ tools/

├─ assets/

│   ├─ images/

│   ├─ icons/

│   └─ tutorials/

├─ js/

├─ css/

├─ locales/

├─ data/

├─ sitemap.xml

└─ robots.txt

说明：

tutorials/
存放教程页

categories/
存放分类页

tools/
存放工具详情页

assets/
存放图片资源

locales/
存放多语言文件

━━━━━━━━━━━━━━━━━━━━
第三章 首页规范
━━━━━━━━━━━━━━━━━━━━

当前首页：

AIHubTools 2.0

注意：

保持现有首页结构

未经明确要求不得直接升级为3.0

首页包含：

Hero区域

搜索框

工具分类

热门工具

最新工具

教程入口

统计数据

页脚信息

首页目标：

工具发现

分类导航

教程引流

SEO入口

━━━━━━━━━━━━━━━━━━━━
第四章 工具分类规范
━━━━━━━━━━━━━━━━━━━━

推荐分类：

聊天助手

AI搜索

AI写作

AI绘图

AI视频

AI音频

AI办公

AI编程

AI翻译

AI学习

AI效率

AI营销

分类页结构：

分类介绍

工具列表

相关推荐

FAQ

SEO内容

━━━━━━━━━━━━━━━━━━━━
第五章 工具详情页规范
━━━━━━━━━━━━━━━━━━━━

每个工具独立页面

示例：

tools/chatgpt.html

tools/claude.html

tools/gemini.html

tools/perplexity.html

包含内容：

工具名称

工具Logo

工具简介

主要功能

优点

缺点

适合人群

使用场景

官方网站

相关教程

相关推荐

FAQ

Schema结构化数据

━━━━━━━━━━━━━━━━━━━━
第六章 教程页规范
━━━━━━━━━━━━━━━━━━━━

目录：

tutorials/

示例：

tutorials/chatgpt-guide.html

tutorials/claude-guide.html

tutorials/cursor-guide.html

教程结构：

什么是工具

工具能做什么

如何注册

界面介绍

基础功能

高级功能

使用技巧

常见问题

总结

要求：

真人口吻

图文结合

2000字以上

SEO优化

多语言支持

━━━━━━━━━━━━━━━━━━━━
第七章 SEO规范
━━━━━━━━━━━━━━━━━━━━

每页必须包含：

title

description

keywords

canonical

Open Graph

Twitter Card

Article Schema

FAQ Schema

Breadcrumb Schema

要求：

标题唯一

描述唯一

URL规范

内容原创

内部链接完整

━━━━━━━━━━━━━━━━━━━━
第八章 多语言规范
━━━━━━━━━━━━━━━━━━━━

默认支持：

中文

English

日本語

한국어

统一结构：

js/i18n.js

locales/common.json

locales/tutorials/

locales/tools/

所有文本必须支持：

data-i18n

禁止硬编码语言内容

━━━━━━━━━━━━━━━━━━━━
第九章 图片规范
━━━━━━━━━━━━━━━━━━━━

优先格式：

WebP

图片目录：

assets/images/

教程图片：

assets/tutorials/

命名示例：

chatgpt-home.webp

chatgpt-login.webp

claude-chat.webp

要求：

压缩优化

移动端友好

支持懒加载

━━━━━━━━━━━━━━━━━━━━
第十章 教程图片规范
━━━━━━━━━━━━━━━━━━━━

教程图片统一放置：

assets/tutorials/

示例：

assets/tutorials/chatgpt/

assets/tutorials/claude/

assets/tutorials/gemini/

每个教程：

步骤截图

功能截图

结果截图

统一尺寸：

1200px宽

WebP格式

━━━━━━━━━━━━━━━━━━━━
第十一章 数据文件规范
━━━━━━━━━━━━━━━━━━━━

工具数据：

data/tools.json

教程数据：

data/tutorials.json

分类数据：

data/categories.json

统一字段：

名称

描述

分类

标签

官网链接

教程链接

Logo地址

━━━━━━━━━━━━━━━━━━━━
第十二章 广告规范
━━━━━━━━━━━━━━━━━━━━

暂不强制接入广告

预留位置：

顶部广告位

正文广告位

底部广告位

后续支持：

Google AdSense

其他广告平台

要求：

不影响用户体验

━━━━━━━━━━━━━━━━━━━━
第十三章 GitHub规范
━━━━━━━━━━━━━━━━━━━━

主仓库：

AIHubTools

提交说明：

新增工具

新增教程

修复问题

优化SEO

更新翻译

定期备份：

重要版本打Tag

保留历史记录

━━━━━━━━━━━━━━━━━━━━
第十四章 新增工具流程
━━━━━━━━━━━━━━━━━━━━

步骤：

1. 添加工具数据

2. 添加工具详情页

3. 添加分类页入口

4. 添加教程页

5. 更新首页

6. 更新sitemap

7. 提交GitHub

8. 检查链接

9. 检查SEO

10. 发布上线

━━━━━━━━━━━━━━━━━━━━
第十五章 教程生成流程
━━━━━━━━━━━━━━━━━━━━

教程名称

↓

教程内容

↓

HTML页面

↓

截图预留

↓

SEO优化

↓

多语言支持

↓

上传GitHub

↓

更新网站

建议优先完成：

ChatGPT

Claude

Gemini

Cursor

Perplexity

Canva

Midjourney

Notion AI

━━━━━━━━━━━━━━━━━━━━
第十六章 PDF工具规范
━━━━━━━━━━━━━━━━━━━━

统一结构：

pdf/

├─ index.html

├─ merge.html

├─ split.html

├─ compress.html

├─ pdf-to-word.html

├─ word-to-pdf.html

每个工具独立链接

保留分类首页

━━━━━━━━━━━━━━━━━━━━
第十七章 AIHubTools长期规划
━━━━━━━━━━━━━━━━━━━━

工具数量目标：

100+

300+

500+

教程数量目标：

50+

100+

300+

长期目标：

形成工具导航

工具教程

工具评测

SEO流量矩阵

━━━━━━━━━━━━━━━━━━━━
第十八章 最终执行标准
━━━━━━━━━━━━━━━━━━━━

以后新增页面默认包含：

✓ SEO优化

✓ Open Graph

✓ Schema结构化数据

✓ 多语言支持

✓ 深色模式

✓ 手机适配

✓ 面包屑导航

✓ 返回顶部

✓ 相关推荐

✓ 内部链接

✓ AIHubTools统一风格

✓ GitHub兼容

✓ 教程目录结构规范

✓ 工具详情页规范

✓ 分类页规范

✓ 首页规范

✓ PDF工具规范

版本：

AIHubTools Development Standard V1.0

状态：

正式启用