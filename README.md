# 打哈欠的树 · YawningTree

Tree 的个人数字花园。用 Markdown 写作，Git 管理，Hugo 静态生成，GitHub Pages 免费发布。

## 技术栈

| 环节 | 方案 |
| --- | --- |
| 静态生成 | [Hugo](https://gohugo.io/)（自研主题 `yawningtree`） |
| 内容 | 本地 Markdown + 图片（页面级 bundle） |
| 版本管理 | Git |
| 发布 | GitHub Actions 自动构建 → GitHub Pages（免费） |

## 目录结构

```text
.
├── content/
│   ├── articles/   # 文章：技术 / 学习笔记 / 项目总结 / 深度思考
│   ├── notes/      # 随记：短文本 / 日常 / 灵感（可无标题、可纯图片）
│   └── about/      # 关于页
├── themes/
│   └── yawningtree/  # 自研主题（四个模块共用同一套设计系统）
├── static/         # 全站静态资源（favicon 等）
└── .github/workflows/hugo.yml  # 自动部署
```

## 本地开发

```bash
hugo server -D        # 本地预览（含草稿），默认 http://localhost:1313
hugo                  # 构建静态文件到 public/
```

> 依赖：Hugo ≥ 0.120（推荐 0.164+）。macOS 可用 `brew install hugo`。

## 写作

### 文章

```bash
hugo new articles/我的新文章/index.md
```

在 `content/articles/<名称>/` 下写作：`index.md` 为正文，图片放在同目录，
用 `![](图片名.svg)` 引用。文章支持标题、代码块、图片、自动目录（H2/H3）。

### 随记

```bash
hugo new notes/2026-08-04/index.md
```

随记可以没有标题（省略 front matter 中的 `title`），支持 Markdown 与图片；
想要「纯图片随记」，正文只放一张图片即可。

### Front matter 说明

```yaml
---
title: "标题"          # 随记可省略
date: 2026-08-04       # 发布时间（决定首页时间线排序）
tags: ["标签"]
summary: "列表页摘要"   # 文章推荐填写
draft: true            # 草稿不会发布
---
```

## 部署到 GitHub

1. 新建 GitHub 仓库（例如 `yawningtree`），把本目录推上去：

   ```bash
   git init -b main
   git add .
   git commit -m "init: 打哈欠的树"
   git remote add origin git@github.com:<你的用户名>/yawningtree.git
   git push -u origin main
   ```

2. 仓库设置 → **Settings → Pages → Build and deployment → Source** 选择
   **GitHub Actions**（无需手动开启 Pages，首次 push 后 Actions 会自动部署）。
3. 部署完成后，站点地址为 `https://<用户名>.github.io/yawningtree/`。

> ⚠️ 若仓库名不同，请修改 `hugo.toml` 中的 `baseURL`。

## 自定义

- 配色 / 字体 / 间距：编辑 `themes/yawningtree/static/css/style.css` 顶部的
  CSS 变量（`--bg`、`--ink`、`--accent` 等），四个页面会同步生效。
- 导航与页脚：`themes/yawningtree/layouts/partials/`。
- 关于页内容：`content/about/index.md`。

## 说明

`content/` 下现有内容为示例，可按需修改或删除。

## 访客统计

使用 [不蒜子](https://busuanzi.ibruce.info/)（免费、无服务器、无需注册）：

- 页脚显示站点总访问量与总访客数
- 文章页显示每篇阅读量
- 数字永久累计、不过期；不蒜子服务不可用时计数自动隐藏，不影响页面
- 本地 `hugo server` 预览不请求不蒜子（不产生任何计数），改用示例数字展示排版效果
