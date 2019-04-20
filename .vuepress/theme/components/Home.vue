<template>
  <main class="home" aria-labelledby="main-title">
    <div class="slogan-wrap">
      <div class="inner-block">
        <h2 class="name">明明三省</h2>
        <p class="intro">布谷鳥在城市的上空，孤獨的叫著就像我的歌。</p>
        <SearchBox class="search-box" v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
        <!-- <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/> -->
      </div>
    </div>

    <Content class="custom"/>

    <div class="content-wrap">
      <div class="inner-block">
        <div class="post-wrap">
          <PostItem v-for="item in $tops" :post="item" :top='true' :key="item.key + item.frontmatter.title" />
          <PostItem v-for="item in $posts" :post="item" :top='false' :key="item.key" />
        </div>
        <aside class="aside">
          <Category />
        </aside>
      </div>
    </div>
  </main>
</template>

<script>
// import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@theme/components/SearchBox'
import NavLink from '@theme/components/NavLink.vue'
import PostItem from '@theme/components/PostItem.vue'
import Category from '@theme/components/Category.vue'
import { PATHS } from '../util'

export default {
  components: { NavLink, PostItem, SearchBox, Category },
  mounted() {
    console.log('all pages', this.$site.pages)
    console.log('top posts', this.$tops)
    console.log('all posts', this.$posts)
    console.log('all tags', this.$tags)
    console.log('all categorys', this.$categorys)
  },
  computed: {
    // 暂时不用 AlgoliaSearchBox
    // algolia () {
    //   return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    // },
    //
    // isAlgoliaSearch () {
    //   return this.algolia && this.algolia.apiKey && this.algolia.indexName
    // }
  }
}
</script>

<style lang="stylus" scoped>
.home
  .slogan-wrap
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
  .content-wrap
    .inner-block
      position relative
      display flex
      justify-content  space-between
    .post-wrap
      width 680px
    .aside
      margin-top 20px
      width 240px
</style>
