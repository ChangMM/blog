<template>
  <div class="slogan-wrap">
    <div class="inner-block">
      <h2 class="name">明明三省</h2>
      <p class="intro">布谷鳥在城市的上空，孤獨的叫著就像我的歌。</p>
      <SearchBox class="search-box" v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
    </div>
  </div>
</template>
<script>
import SearchBox from '@theme/components/SearchBox'
export default {
  components: { SearchBox }
}
</script>
<style lang="stylus" scoped>
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
@media (max-width: $MQMobile)
  .slogan-wrap
    .inner-block
      padding 20px 10px
    .search-box
      display: none;
</style>
