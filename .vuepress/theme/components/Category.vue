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
      <h4>我的知识星球</h4>
      <img src="https://cdn.iizhi.cn/blog/xingqiu.png" alt="我的知识星球">
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
  ul
    padding 10px 15px
    li
      color $accentColor
  .xinqiu-wrap
    img
      margin-top 12px
      max-width: 100%
</style>
