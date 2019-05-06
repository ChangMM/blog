<template>
  <div class="slogan-wrap">
    <div class="inner-block">
      <h2 class="name">我的博客</h2>
      <p class="intro">{{intro}}</p>
      <SearchBox class="search-box" v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
    </div>
  </div>
</template>
<script>
import SearchBox from '@theme/components/SearchBox'
const axios = require('axios')
export default {
  components: { SearchBox },
  data () {
    return {
      intro: '',
    }
  },
  mounted () {
    this.getIntro()
  },
  methods: {
    async getIntro () {
      try {
        const result = await axios.get(`https://v1.hitokoto.cn/`)
        this.intro = result.data.hitokoto
      } catch (e) {
        console.log(e)
      }
    }
  }
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
    max-width 500px
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
