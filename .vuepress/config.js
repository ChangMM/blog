module.exports = {
  base: '/',
  title: '在下坂本，有何贵干。',
  port: 8001,
  description: '一个个人网站，用于记录自己在技术、产品、赚钱、读书、电影、音乐上面的思考与成果。',
  head: [
    ['meta', { name: 'keywords', content: '全栈开发，前端开发，后端开发，技术，产品，赚钱，读书，电影，音乐'}],
    ['link', { rel: 'icon', href: '/favicon.png'}]
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
      { text: '个人博客', link: 'https://www.iizhi.cn' },
      { text: '每日一文', link: 'https://www.iizhi.cn' },
      { text: '新标签页插件', link: 'https://www.iizhi.cn' },
      { text: '精品电子书', link: 'https://www.iizhi.cn' },
      { text: '视频下载器', link: 'https://www.iizhi.cn' }
    ]
  }
}
