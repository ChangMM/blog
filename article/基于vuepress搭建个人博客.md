---
author: sakamoto
date: 2019/04/24
categorys: ['个人博客', '教程']
tags: ['vuepress']
title: '基于vuepress搭建个人博客'
excerpt: 本篇文章主要开源这个博客的源代码，并记录了基于vuepress的一些自定义主题开发过程中的一些问题。
top: true
---
## 博客支持功能
- 文章分类功能
- 打赏模块
- 按年归档
- 文章置顶
- 文章创建时间支持
- 文章阅读量统计与评论

## 开发环境
- [VuePress 1.x](https://v1.vuepress.vuejs.org/zh/guide/)
- Node.js v10.8.0

## 本博客的开源代码地址
- [Github](https://github.com/ChangMM/blog)

## 开始
具体的开发细节官网上已经说得很详细了，而且代码已经开源，所以这里不在说具体的细节，主要列举开发过程中遇到的一些问题。

## 如何添加分类的路由
只需要在 `enhanceApp.js` 中获取 `Vue` 以及 `router` 这两个对象，然后像在开发Vue项目中给应用添加正常的路由即可。

代码如下：
```javascript
const CategoryLayout = () => import('@theme/layouts/CategoryLayout')

const CATEGORYPATH = '/category/'

const install = (Vue, { router }) => {
  let routes = []
  routes.push({
    path: `${CATEGORYPATH}:category?`,
    component: CategoryLayout,
    meta: { tag: true }
  })
  router.addRoutes(routes)
}

export default { install }
```

## 文章创建时间支持
`VuePress` 默认是没有文章的创建时间这个字段的，其实实现这个功能也比较简单，就是通过 `Vuepress` 提供的 `Plugin` 的功能。

需要知道的是， vuepress 中的 plugin 是运行在 node 的环境中的。所以只需要，利用 node 提供的 `fs.statSync` 这个api即可。

具体代码如下：

``` javascript
const fs = require('fs')

module.exports = (options = {}, context) => ({
  extendPageData ($page) {
    $page.publishDate = getFilePublishDate($page._filePath)
  }
})

function getFilePublishDate (filePath) {
  let publishDate
  try {
    publishDate = fs.statSync(filePath).birthtime
  } catch (e) { /* do not handle for now */ }
  return publishDate
}
```

只需要在 vuepress 的 `config.js` 中加载这个plugin即可。
 ```javascript
  ···
  plugins: [
    require('./plugins/page-publish-date.js')
  ],
  ···
 ```
## 文章阅读量统计与评论
文章的阅读量与统计功能其用的是 `Valine` 这个库。好像只有这个库可以同时有这两个功能，所以就选了这个。

实现起来也是比较简单的，但是中间遇到了两个问题。
### 1. vuepress 无法编译成功
```javascript
window.AV = require('leancloud-storage')
const Valine = require('valine')

new Valine({
    el:'#comment',
    ...
})
```
如果按照下面的方式初始化评论组件的话，在本地dev模式是可以通过的，但是 `npm run build` 的时候会提示 `window is not undefied` 的错误，即使在评论组件加上 VuePress 提供的 `ClientOnly` 的标识符也会出现这个问题。

最后的解决办法是，以 `script` 标签的方式引入 leancloud-storage 和 valine 两个库。并在评论组件中轮询检查这两个库是否加载完成，在加载完成之后在初始化评论组件。
代码如下：
```javascript
<script>
let valine = null
const checkValine = () => {
  if (window.Valine) {
    valine = new Valine({
      appId: '******',
      appKey: '******',
      el: '#comment',
      placeholder: '评论在此',
      avatar: 'monsterid',
      path: window.location.pathname,
      recordIP: true,
      visitor: true
    })
  } else {
    setTimeout(checkValine, 50)
  }
}
export default {
  props: ['show'],
  watch: {
    '$route': 'refresh'
  },
  mounted () {
    checkValine()
  },
  methods: {
    refresh () {
      checkValine()
    }
  }
}
</script>
```

### 2.按照教程配置好后，发现文章切换时，评论内容并没有切换
这个主要是由于 `Valine` 这个库在初始化全局对象时，如果没有传入path这个属性，其内部会缓存当前页面的 path。解决的办法也很简单，只要在传 path 的时候指定的值即可，也即👆上面代码中的 `window.location.pathname`。

## 一些其他问题
其实在开发过程中还是有一些其他的问题，比如 分类的路由通过首页页面点进去可以直接访问，但是如果直接在浏览器的地址栏输入地址的话 Nginx 会索引不到相应的文件 提示 404 的错误。

这个问题的话，只需要在 `nginx` 的配置中添加下面👇的配置即可
```Nginx
location / {
  try_files $uri $uri/ /index.html /404.html;
}
```

## 最后
如果还有其他问题的话，建了一个群，可以进群大家互相学习。
![VuePress开发问题指导群](https://cdn.iizhi.cn/blog/vuepress-qrcode.jpeg)

<ZanShang />
