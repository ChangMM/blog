const path = require('path')
const RSS = require('rss')
const chalk = require('chalk')

module.exports = (pluginOptions, ctx) => {
  return {
    name: 'rss',

    generated () {
      const fs = require('fs-extra')
      const { pages, sourceDir } = ctx
      const siteData = require(path.resolve(sourceDir, '.vuepress/config.js'))

      const feed = new RSS({
        title: siteData.title,
        description: siteData.description,
        feed_url: `https://blog.iizhi.cn/rss.xml`,
        site_url: `https://blog.iizhi.cn`,
        copyright: `明明三省`,
        language: 'en',
      })

      pages
        .filter(page => {
          if (page.frontmatter.title === undefined) {
            return false
          }
          return page.path.indexOf('/article/') > -1
        })
        .map(page => ({...page, date: new Date(page.frontmatter.date || '')}))
        .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
        .map(page => ({
          title: page.frontmatter.title,
          description: page.excerpt,
          url: `https://blog.iizhi.cn${page.path}`,
          date: page.publishDate,
        }))
        .slice(0, 20)
        .forEach(page => feed.item(page))

      fs.writeFile(
        path.resolve(ctx.outDir, 'rss.xml'),
        feed.xml()
      );
      console.log(chalk.green.bold('RSS has been generated!'))
    }
  }
}
