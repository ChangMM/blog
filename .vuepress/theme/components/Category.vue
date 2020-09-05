<template>
  <div class="category-wrap">
    <h4>文章分类</h4>
    <ul>
      <li v-for="_,key in $categorys" :key="key">
        <router-link class="category-item" :to="{ path: '/category/' + key }">
          <span class="category-text">{{key}}</span>
        </router-link>
      </li>
    </ul>
    <div class="xinqiu-wrap">
      <h4>认识我</h4>
      <p>个人微信:『cmm020304』请备注博客</p>
    </div>
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
    padding-bottom 1px
    border-bottom 2px solid #ccc
    margin-bottom 10px
  ul
    padding 0 15px
    margin-bottom 20px
    li
      color $accentColor
  .xinqiu-wrap
    p
      color #666
    
</style>
