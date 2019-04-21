<template>
  <div class="theme-container">
    <Navbar />
    <div class="content">
      <img src="/404.png" alt="">
      <h1> 404，该页面暂时出错</h1>
      <p><router-link to="/">回首页</router-link></p>
    </div>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>

<style lang="stylus" scoped>
.content
  max-width 300px
  margin 20px auto
  text-align center
  img
    width 200px
</style>
