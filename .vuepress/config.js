module.exports = {
  base: '/',
  title: '在下坂本，有何贵干。',
  port: 8001,
  description: '一个个人网站，用于记录自己在技术、产品、赚钱、读书、电影、音乐上面的思考与成果。',
  head: [
    ['meta', { name: 'description', content: '一个个人网站，用于记录自己在技术、产品、赚钱、读书、电影、音乐上面的思考与成果。'}],
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
      { text: '首页', link: '1' },
      { text: '酷站', link: '2' },
      { text: '福利', link: '3' },
      { text: 'Side Project', link: '4' },
      { text: '关于', link: '/test' },
    ]
  }
}
