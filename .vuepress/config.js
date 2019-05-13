module.exports = {
  base: '/',
  title: '在下坂本',
  port: 8001,
  description: '一个个人网站，用于记录自己在技术、产品、赚钱、读书、电影、音乐上面的思考与成果。',
  head: [
    ['meta', { name: 'keywords', content: '全栈开发，前端开发，后端开发，技术，产品，赚钱，读书，电影，音乐'}],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0'}],
    ['link', { rel: 'icon', href: '/favicon.png'}],
    ['script', { src: '//cdn.jsdelivr.net/npm/leancloud-storage@3.13.0/dist/av-min.js'}],
    ['script', { src: '//unpkg.com/valine/dist/Valine.min.js'}]
  ],
  plugins: [
    require('./plugins/page-publish-date.js'),
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-139665684-1'
      }
    ]
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
      { text: '个人博客', link: '/' },
      { text: '电子书下载', link: 'https://www.iizhi.cn/book/' },
      { text: '每日系列', link: 'https://www.iizhi.cn/daily/' },
      { text: '新标签页插件', link: 'https://www.iizhi.cn/newtab' },
      { text: 'Scihub论文', link: 'https://www.iizhi.cn/scihub' },
      { text: 'Unicode字符集', link: 'https://www.iizhi.cn/unicode/' }
    ]
  }
}
