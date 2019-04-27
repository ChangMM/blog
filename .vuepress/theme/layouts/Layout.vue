<template>
  <div class="theme-container" :class="pageClasses">
    <Navbar @toggle-menu="toggleMenu" />
    <Slogan />
    <div class="content-wrap">
      <div class="inner-block">
        <div class="left-side">
          <Home v-if="$page.frontmatter.home"/>
          <Page v-else>
            <slot name="page-top" slot="top"/>
            <slot name="page-bottom" slot="bottom"/>
          </Page>
        </div>
        <aside class="right-side">
          <Category />
        </aside>
      </div>
    </div>
    <Footerbar />
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Footerbar from '@theme/components/Footerbar.vue'
import Category from '@theme/components/Category.vue'
import Slogan from '@theme/components/Slogan.vue'

export default {
  components: { Home, Page, Navbar, Footerbar, Category, Slogan },
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
.theme-container
  .content-wrap
    .inner-block
      position relative
      display flex
      padding-top 20px
      justify-content space-between
      .left-side
        width 780px
      .right-side
        width 240px

@media (max-width: $MQMobile)
  .theme-container
    .content-wrap
      .inner-block
        padding: 20px 10px 0
        .left-side
          width: 100%;
        .right-side
          display: none
</style>

<style src="prismjs/themes/prism-tomorrow.css"></style>
