# 黄鈺茜 · Youcy Huang 作品集网站

纯静态网站（无构建步骤），直接打开 `index.html` 或部署到 GitHub Pages 即可。

## 结构

| 文件 / 文件夹 | 内容 |
|---|---|
| `index.html` | 全部页面结构、样式和逻辑（首页、绘画、摄影、项目、文字、关于；中英双语） |
| `paintings.js` | 绘画数据：系列、标题、年份、材料、尺寸（cm）、图片像素 `px` |
| `photos.js` | 摄影数据：系列、曝光参数、文件对应关系 |
| `projects.js` | 项目文字与配图 |
| `essays.js` | 文章（中英） |
| `profile.js` | 简介、教育、创作理念 |
| `paint/full`、`paint/thumb` | 绘画大图（长边 ≤ 2400）与缩略图（长边 900），文件名为作品编号 `code` |
| `photo/B1`、`photo/B2` | 摄影 `full` / `mid` / `thumb` 三种尺寸 |
| `projimg/`、`img/` | 项目图、文章插图 |

## 修改约定

- 改作品信息只改对应的 `*.js` 数据文件；换图时同步更新 `paintings.js` 里该作品的 `px`。
- 入口页（留白 → 细线 → 水墨晕染 → 字从墨中浮现）在 `index.html` 的 `INK` 模块，各段时长在其中的 `D`。
- 颜色变量在 `index.html` 顶部 `:root`，并分别定义了深色模式。
