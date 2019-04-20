<template>
  <div class="category-wrap">
    <template v-if="categorys.length > 0">
      <h4>文章分类</h4>
      <ul>
        <li v-for="item in categorys">{{item}}</li>
      </ul>
    </template>
  </div>
</template>
<script>
import { isArray, PATHS } from '../util'
export default {
  computed: {
    categorys () {
      let array = []
      this.$site.pages.forEach(item => {
        if (!PATHS.includes(item.path)) {
          let categorys = item.frontmatter.categorys
          if (categorys && isArray(categorys)) {
            array = array.concat(categorys)
          } else if (categorys) {
            array.push(categorys)
          }
        }
      })
      return [...new Set(array)]
    },
  }
}
</script>
<style lang="stylus" scoped>
.category-wrap
  h4
    font-size 1rem
    display inline-block
    padding-bottom 4px
    border-bottom 2px solid $textColor
  ul
    padding 10px 15px
    li
      color $accentColor
</style>
