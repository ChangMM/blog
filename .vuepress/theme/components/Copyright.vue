<template>
  <div id="copyright-info">
    <p><span>作者：</span>{{post.frontmatter.author}}</p>
    <p><span>发表日期：</span>{{post.frontmatter.date}}</p>
    <p><span>最后编辑时间：</span>{{post.lastUpdated}}</p>
    <p><span>本文 Github 地址：</span><a :href="editLink" target="_blank" rel="noopener noreferrer">{{ post.relativePath }}</a><OutboundLink/></p>
    <p><span>本文链接：</span><a :href="location.origin + post.path" target="_blank" rel="noopener noreferrer">{{ location.origin + post.path }}</a><OutboundLink/></p>
    <p><span>版权声明：本文为自己原创，未经允许，禁止转载。</span></p>
  </div>
</template>
<script>
import { outboundRE, endingSlashRE } from '../util'
export default {
  computed: {
    post() {
      return this.$page
    },
    location() {
      return window.location
    },
    editLink () {
      if (this.$page.frontmatter.editLink === false) {
        return
      }
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$site.themeConfig

      if (docsRepo && editLinks && this.$page.relativePath) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, this.$page.relativePath)
      }
    }
  },
  methods: {
    createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo)
          ? docsRepo
          : repo
        return (
          base.replace(endingSlashRE, '')
           + `/src`
           + `/${docsBranch}/`
           + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
           + path
           + `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`
      return (
        base.replace(endingSlashRE, '')
        + `/edit`
        + `/${docsBranch}/`
        + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
        + path
      )
    }
  }
}
</script>
<style lang="stylus" scoped>
#copyright-info {
  padding: 20px;
  background-color: $bgColor;
  border: 1px dashed #ddd;
  border-radius: 4px;
  color: #000;
  a {
    border-bottom: 1px dashed #ddd;
  }
}
</style>
