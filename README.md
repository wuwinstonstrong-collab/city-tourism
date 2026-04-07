# 城市旅游指南 (City Tourism Guide)

一个简洁美观的城旅游景点展示网站。

## 功能特点

- 响应式设计，支持移动端和桌面端
- 分类筛选（自然风光、历史文化、都市景观、美食推荐）
- 模糊搜索
- 景点详情弹窗
- Docker 一键部署

## 技术栈

- HTML5 + CSS3 + JavaScript（原生）
- Tailwind CSS（CDN）
- Font Awesome 图标
- Node.js（后端服务）
- Docker + Nginx

## 本地运行

```bash
node server.js
```

## Docker 部署

```bash
docker-compose up -d
```

访问 http://localhost:3000

## 项目结构

.
├── index.html          # 主页面
├── css/                # 样式文件
├── js/                 # JavaScript 文件
├── images/              # 图片资源
├── server.js            # Node.js 服务器
├── Dockerfile           # Docker 配置
├── docker-compose.yml   # Docker Compose 配置
├── nginx.conf           # Nginx 配置
└── daemon.json          # Docker 镜像加速配置
