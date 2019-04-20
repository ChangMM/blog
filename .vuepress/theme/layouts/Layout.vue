<template>
  <div class="theme-container" :class="pageClasses" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />
    <div class="slogan-wrap">
      <div class="inner-block">
        <h2 class="name">明明三省</h2>
        <p class="intro">布谷鳥在城市的上空，孤獨的叫著就像我的歌。</p>
        <SearchBox class="search-box" v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
        <!-- <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/> -->
      </div>
    </div>
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
import SearchBox from '@theme/components/SearchBox'
import Category from '@theme/components/Category.vue'

export default {
  components: { Home, Page, SearchBox, Navbar, Footerbar, Category },
  data () {
    return {
      isSidebarOpen: false
    }
  },
  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },
    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },
  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },
  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.theme-container
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
      padding-top 20px
      padding-bottom 20px
      justify-content space-between
      .left-side
        width 740px
      .right-side
        width 240px
</style>

<style src="prismjs/themes/prism-tomorrow.css"></style>
