<template>
  <main class="page">
    <slot name="top"/>
    <PostHeader :post="post" />
    <div class="password-wrap" v-if="!contentShow">
      <p class="password-tip">本文内容已被加密，请输入密码后访问。</p>
      <div class="input-wrap">
        <input type="password" name="password" ref="password" placeholder="请输入密码">
        <button type="button" @click="showContent">确认</button>
      </div>
    </div>
    <Content v-if="contentShow" />
    <ClientOnly>
      <Copyright />
    </ClientOnly>
    <footer class="page-edit">
      <div class="edit-link" v-if="editLink">
        <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
        <OutboundLink/>
      </div>
      <div class="last-updated" v-if="lastUpdated">
        <span class="prefix">{{ lastUpdatedText }}:{{ lastUpdated }}</span>
      </div>
    </footer>
    <div class="page-nav" v-if="prev || next">
      <p class="inner">
        <span v-if="prev" class="prev">
          上一篇:
          <router-link :to="prev.path" :title="prev.frontmatter.title">{{ prev.frontmatter.title || prev.path }}</router-link>
        </span>
        <span v-if="next" class="next">
          下一篇:
          <router-link :to="next.path" :title="next.frontmatter.title">{{ next.frontmatter.title || next.path }}</router-link>
        </span>
      </p>
    </div>
    <ClientOnly>
      <CommentBar :show="true" />
    </ClientOnly>
    <slot name="bottom"/>
  </main>
</template>

<script>
import PostHeader from '@theme/components/PostHeader'
import Copyright from '@theme/components/Copyright'
import CommentBar from '@theme/components/Comment'
import { outboundRE, endingSlashRE } from '../util'

export default {
  components: { PostHeader, Copyright, CommentBar },
  data () {
    return {
      password: ''
    }
  },
  computed: {
    contentShow () {
      return !this.$page.frontmatter.password || this.password == this.$page.frontmatter.password
    },
    post () {
      return this.$page
    },
    lastUpdated () {
      return this.$page.lastUpdated
    },
    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Last Updated'
    },
    prev () {
      const prev = this.$page.frontmatter.prev
      if (prev === false || this.$page.index <= 0) {
        return
      } else {
        return this.$posts[this.$page.index - 1]
      }
    },

    next () {
      const next = this.$page.frontmatter.next
      if (next === false || this.$page.index >= this.$posts.length - 1) {
        return
      } else {
        return this.$posts[this.$page.index + 1]
      }
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
    },
    editLinkText () {
      return (
        this.$themeLocaleConfig.editLinkText
        || this.$site.themeConfig.editLinkText
        || `Edit this page`
      )
    }
  },
  methods: {
    showContent () {
      this.password = this.$refs.password.value
    },
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

<style lang="stylus">
.page
  display block
.password-wrap
  margin-top 40px
  margin-bottom: 40px
  border: 1px dashed #ddd
  padding 40px
  text-align: center;
  .password-tip
    font-weight: bold;
    margin-bottom: 15px;
    font-size: 16px;
    color: red
  .input-wrap
    height: 40px;
    line-height: 40px
    input
      height: 100%;
      outline: none;
      width: 300px
      padding-left: 10px
      border-radius: 2px
      border: 1px solid #ddd
      transition: border ease 0.2s
      &:focus
        border-color: $accentColor
    button
      height: 40px;
      width: 80px
      cursor: pointer;
      border: none
      outline: none
      color: #fff
      border-radius: 2px
      background-color: $accentColor
      transition: background ease 0.2s
      &:hover
        background-color: darken($accentColor, 10%)
.page-edit
  padding-top 1rem
  padding-bottom 1rem
  overflow auto
  display flex
  justify-content space-between
  .edit-link
    display inline-block
    a
      color lighten($textColor, 25%)
  .last-updated
    display inline-block
    font-size 0.9em
    .prefix
      font-weight 500
      color lighten($textColor, 25%)
    .time
      font-weight 400
      color #aaa
.page-nav
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid $borderColor
    padding-top 1rem
    overflow auto // clear float
  a
    border-bottom 1px dashed #ddd
  .prev,.next
    display inline-block
    max-width: 340px
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  .next
    float right

@media (max-width: $MQMobile)
  .page-edit
    display: none;
  .page-nav
    .next, .prev
      display: block;
      text-align: center;
      max-width: 100%;
      float: none
      margin-top: 5px;
</style>
