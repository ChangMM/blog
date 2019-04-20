<template>
  <header class="navbar">
    <div class="inner-block">
      <!-- <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/> -->

      <router-link :to="$localePath" class="home-link">
        <img class="logo" v-if="$site.themeConfig.logo" :src="$withBase($site.themeConfig.logo)" :alt="$siteTitle">
        <span ref="siteName" class="site-name" v-if="$siteTitle" :class="{ 'can-hide': $site.themeConfig.logo }">{{ $siteTitle }}</span>
      </router-link>

      <div class="links" :style="linksWrapMaxWidth ? { 'max-width': linksWrapMaxWidth + 'px' } : {}">
        <NavLinks class="can-hide"/>
      </div>
    </div>
  </header>
</template>

<script>
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$inner-height = 20px

.navbar
  padding 5px
  .inner-block
    position relative
  a, span, img
    display inline-block
  .home-link
    height $inner-height
    line-height $inner-height
    &:hover
      text-decoration none

  .logo
    height $inner-height
    margin-right 6px
    vertical-align top
  .site-name
    vertical-align middle
    font-size 16px
    font-weight 600
    height $inner-height
    line-height $inner-height
    color $accentColor
    position relative
  .links
    padding-left 1.5rem
    white-space nowrap
    font-size 0.9rem
    position absolute
    right 10px
    top 0
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
</style>
