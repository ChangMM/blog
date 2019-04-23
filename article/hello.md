---
author: sakamoto
categorys: [个人博客]
tags: [测试]
date: 2019/04/21
title: 这是测试帖，用来测试这个博客支持的样式。
excerpt: 简单完成了这个博客的搭建，这是一篇测试博客样式的文章。博客已经开源，欢迎 `github` 上 `star` 一下
---
## 这是H2标签
这是一个 P 标签的内容，P 标签的 `margin-bottom` 的值是 `0.6rem` 。

这是另一个 P 标签的内容。为了填充内容，下面准备了一段话。

这是被历史遗忘的一代，没有大战争，没有经济大恐慌，没有目的，只有内心之间的斗争。我们大部分都一样，都会感到痛苦，都会遭遇生活的混乱琐碎，都会认识到生活的复杂，都没有没有生活的答案，都无法理解自己所为之奋斗的目标究竟是什么，上学，工作，恋爱，结婚，生子，生老病死，一切都是按部就班。在一个没有变革的平庸时代，缺乏精神领袖而丧失灵魂皈依的源动力，麻木地饰演自己的社会角色，忠诚地履行自己的社会责任。

## 这是H2标签
这是一个有序列表
1. 列表一的内容  
    - 内嵌的无序列表
    - 内嵌的无序列表
    - 内嵌的无序列表
2. 列表二的内容
3. 这一段的内容比较长，这一段的内容比较长，这一段的内容比较长，这一段的内容比较长，这一段的内容比较长，这一段的内容比较长，这一段的内容比较长。

## 这是一段代码的样式
```javascript
export function isActive (route, path) {
  const routeHash = route.hash
  const linkHash = getHash(path)
  if (linkHash && routeHash !== linkHash) {
    return false
  }
  const routePath = normalize(route.path)
  const pagePath = normalize(path)
  return routePath === pagePath
}
```

## 这是表格的样式
|    name    | age |    name    | age |
| ---------- | --- | ---------- | --- |
| LearnShare |  12 | LearnShare |  12 |
| Mike       |  32 | LearnShare |  12 |

## 这是一张图片
![南京李志](../images/lizhi.png)

## 参考
[1] [测试下链接](https://github.com/ChangMM)

<ZanShang />
