<template>
  <div class="category-container">
    <Navbar />
    <div class="header-wrap">
      <div class="inner-block">
        <h2 class="name">归档</h2>
        <p class="intro">種一棵樹最好的時間是十年前，其次是現在。</p>
        <SearchBox class="search-box" v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
      </div>
    </div>

    <div class="category-wrap">
      <router-link class="category-item" :to="{ path: '/category/' }">
        <span class="category-text">所有分类</span>
      </router-link>
      <router-link class="category-item" :to="{ path: '/category/' + key }"  v-for="value, key in $categorys" :key="key">
        <span class="category-text">{{key}}</span>
      </router-link>
    </div>

    <div class="archive-wrap">
      <div class="archive-item" v-for="value, key in archives" :key="key">
        <h4 class="header">{{key}}</h4>
        <ul>
          <li v-for="post in value">
            <router-link class="title" :to="{ name: 'post.path' }">{{ post.frontmatter.title }}</router-link>
            <span class="meta-info">
              (
              <span class="time">
                <time >{{ post.publishDate | toLocaleString }}</time>
              </span>
              |
              <span class="categorys" v-if="post.frontmatter.categorys && post.frontmatter.categorys.length > 0">
                分类:
                <router-link class="category-item em" v-for="item in post.frontmatter.categorys" :to="{ path: '/category/' + item }">{{item}}</router-link>
              </span>
              |
              <span class="tags" v-if="post.frontmatter.tags && post.frontmatter.tags.length > 0">
                标签:
                <template v-if="f_isArray(post.frontmatter.tags)" >
                  <span class="tag-item em" v-for="item in post.frontmatter.tags">{{item}}</span>
                </template>
                <span class="tag-item em" v-else>{{post.frontmatter.tags}}</span>
              </span>
              )
            </span>
          </li>
        </ul>
      </div>
    </div>
    <Footerbar />
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'
import Footerbar from '@theme/components/Footerbar.vue'
import SearchBox from '@theme/components/SearchBox'
import { archivePostsByCategory, isArray } from '../util'

export default {
  components: { Navbar, Footerbar, SearchBox },
  computed: {
    category () {
      return this.$route.params.category
    },
    archives () {
      return archivePostsByCategory(this.$posts, this.category)
    }
  },
  mounted () {
    console.log(this.category)
  },
  methods: {
    f_isArray (object) {
      return isArray(object)
    }
  }
}
</script>

<style lang="stylus" scoped>
$width = 960px
.category-container
  .header-wrap
    border-bottom 1px solid #eee
    padding 40px 0
    .inner-block
      position relative
    .name
      font-size 2rem
      font-weight normal
    .intro
      color #666
      font-style italic
    .search-box
      position absolute
      top 10px
      right 0
  .category-wrap
    max-width $width
    margin 20px auto
    background-color $bgColor
    padding 40px
    border-radius 4px
    font-size 0
    .category-item
      display inline-block
      padding 5px 15px
      font-size 1rem
      margin-right 4px
      transition background-color ease 0.3s
      &:hover, &.router-link-exact-active
        text-decoration none
        border-radius 4px
        background-color #ddd
      .category-text
        border-bottom 1px dashed #ccc
  .archive-wrap
    max-width $width
    margin 20px auto
    .header
      text-align center
      font-size 1.5rem
      line-height 2
      margin-bottom 10px
      border-bottom 1px solid $borderColor
    ul
      margin-top 20px
      margin-bottom 20px
      li
        line-height 2.1
        .title
          font-size 1.1rem
          /* &:hover
            text-decoration none
            border-bottom 1px dashed #ddd */
        .meta-info
          color #999
          font-size 0.9rem
          .em
            color lighten($accentColor, 20%)
            border-bottom 1px dashed #ddd
            margin-left 5px
</style>
