<template>
  <header class="navbar">
    <div class="inner-block">
      <a class="home-link" href="https://www.iizhi.cn">
        <img class="logo" v-if="$site.themeConfig.logo" :src="$withBase($site.themeConfig.logo)" :alt="$siteTitle">
        <span ref="siteName" class="site-name" v-if="$siteTitle">{{ $siteTitle }}</span>
      </a>

      <SidebarButton @toggle-menu="$emit('toggle-menu')"/>

      <NavLinks class="nav-links"/>
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
    }
  },

  mounted () {

  }
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
  .nav-links
    font-size 0.9rem
    position absolute
    display: flex;
    right 0
    top 0
@media (max-width: $MQMobile)
  .navbar
    .nav-links
      display: none;
      top: 0
      right: 30px
      padding: 10px;
      background-color: #fff;
      z-index: 10
      text-align: center;
      border-radius: 2px
      box-shadow: -1px -1px 3px rgba(39, 44, 49, 0.1),
        1px 1px 10px rgba(39, 44, 49, 0.1);
  .menu-open
    .navbar
      .nav-links
        display: block;
</style>
