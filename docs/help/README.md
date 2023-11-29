---
sidebar: auto
type: guide
---

# 如何添加API

## 介绍

欢迎阅读使用指南，了解如何创建API说明文档，需要进行简单的几步操作即可，非常easy。

## 开始

### 第一步
从组件库官网项目拉取最新分支http://git.minrow.com/adsdesk/ry-design-web.git

### 第二步
打开config.js 配置文件

```{8}
.
├── docs
│   └── .vuepress
│       └── config.js
```

### 第三步
在config.js 导航nav中添加标题，请保持Help在最后一个。

 ```js
nav: [
    { text: 'Home', link: '/' }, 
    { text:'Enum',link: '/enum/' },
    { text:'Help',link: '/help/' },
		]
```

### 第四步
在docs目录下添加文件夹，文件夹名称与config.js 导航nav中添加的link保持一致。

`例子`
 ```js
// 导航定义 => { text:'Help',link: '/help/' }
// 对应文件夹名 => help
// 文件夹内md文件命名统一使用 => README.md
```

### 第五步
在`README.md`文件中编写展示的api。

### 第六步
本地运行执行 npm run docs:dev 

### 结尾
git 提交 => 合并到master分支 => Jenkins发布
