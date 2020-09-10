module.exports = {
  base: '/',
  title: '毕方铺',
  port: 8001,
  description: '我在技术、思想、产品、设计上的个人成长',
  head: [
    ['meta', { name: 'keywords', content: '全栈开发，前端开发，后端开发，技术，产品，赚钱，读书，电影，音乐'}],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0'}],
    ['link', { rel: 'icon', href: '/favicon.png'}],
    ['script', { src: '//cdn.jsdelivr.net/npm/leancloud-storage@3.13.0/dist/av-min.js'}],
    ['script', { src: '//unpkg.com/valine/dist/Valine.min.js'}]
  ],
  plugins: [
    require('./plugins/page-publish-date.js'),
    '@vuepress/pagination',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-139665684-1'
      }
    ],
    require('./plugins/rss.js'),
  ],
  markdown: {
   config: md => {
     md.set({ breaks: true })
   },
   anchor: {
     permalinkSymbol: '¶'
   },
  },
  themeConfig: {
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 6,
    displayAllHeaders: true,
    lastUpdated: '上次修改时间',
    editLinks: true,
    editLinkText: 'Github修改此页面',
    repo: 'ChangMM/blog',
    nav: [
      { text: '网盘资源搜索', link: 'https://www.iizhi.cn' },
      { text: '电子书下载', link: 'https://www.iizhi.cn/book/' },
      { text: '资源排行', link: 'https://www.iizhi.cn/rank' },
      { text: '我的店铺', link: 'https://shop117651010.taobao.com/' }
    ]
  }
}
