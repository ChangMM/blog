<template>
  <div class="theme-container" :class="pageClasses">
    <Navbar @toggle-menu="toggleMenu" />
    <div class="content">
      <img src="https://res.oodcd.cn/zhi/error.png" alt="404">
      <h1> 404，该页面暂时出错</h1>
      <p><router-link to="/">回首页</router-link></p>
    </div>
    <Footerbar />
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'
import Footerbar from '@theme/components/Footerbar.vue'

export default {
  components: { Navbar, Footerbar },
  data () {
    return {
      isMenuOpen: false
    }
  },
  computed: {
    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'menu-open': this.isMenuOpen
        },
        userPageClass
      ]
    }
  },
  mounted () {
    this.$router.afterEach(() => {
      this.isMenuOpen = false
    })
  },
  methods: {
    toggleMenu (to) {
      this.isMenuOpen = typeof to === 'boolean' ? to : !this.isMenuOpen
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  max-width 300px
  margin 20px auto
  text-align center
  img
    width 200px
    border none
</style>
