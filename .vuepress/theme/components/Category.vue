<template>
  <div class="category-wrap">
    <template>
      <h4>文章分类</h4>
      <ul>
        <li v-for="_,key in $categorys" :key="key">
          <router-link class="category-item" :to="{ path: '/category/' + key }">
            <span class="category-text">{{key}}</span>
          </router-link>
        </li>
      </ul>
    </template>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
.category-wrap
  h4
    font-size 1.2rem
    display inline-block
    padding-bottom 4px
    border-bottom 2px solid $borderColor
  ul
    padding 10px 15px
    li
      color $accentColor
</style>
