# AIHubTools 多语种底层逻辑

## 上传位置

本说明对应 GitHub 仓库 `AIHubTools` 中的以下文件：

```text
assets/js/i18n.js
assets/i18n/common.json
assets/i18n/pages/_template.json
templates/page-i18n-template.html
```

## 以后新增页面的固定规则

每个新增页面都要加：

```html
<meta name="i18n-page" content="页面slug">
<meta name="i18n-title" content="page.meta_title">
<meta name="i18n-description" content="page.meta_description">
<script src="../assets/js/i18n.js" defer></script>
```

注意：
- 根目录页面使用：`assets/js/i18n.js`
- tutorials/ 目录页面使用：`../assets/js/i18n.js`
- pdf/ 目录页面使用：`../assets/js/i18n.js`

## 页面文字写法

```html
<h1 data-i18n="page.title">中文默认标题</h1>
<p data-i18n="page.intro">中文默认说明</p>
<input data-i18n-placeholder="common.search_placeholder" placeholder="搜索工具、教程或关键词">
<img data-i18n-alt="page.cover_alt" alt="图片说明">
```

## 页面专用 JSON

例如页面是：

```text
tutorials/chatgpt-guide.html
```

则新增：

```text
assets/i18n/pages/chatgpt-guide.json
```

页面里写：

```html
<meta name="i18n-page" content="chatgpt-guide">
```

## 语言切换按钮

```html
<button data-set-lang="zh">中文</button>
<button data-set-lang="en">English</button>
<button data-set-lang="ja">日本語</button>
```

语言会自动保存到浏览器 localStorage。首页切到英文后，再打开教程页也会保持英文。
