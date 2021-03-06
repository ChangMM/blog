<template>
  <nav class="nav-links" v-if="userLinks.length">
    <div class="nav-item" v-for="item,index in userLinks" :key="item.link+index">
      <DropdownLink v-if="item.type === 'links'" :item="item"/>
      <NavLink v-else :item="item"/>
    </div>
  </nav>
</template>

<script>
import DropdownLink from '@theme/components/DropdownLink.vue'
import { resolveNavLinkItem } from '../util'
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink, DropdownLink },

  computed: {
    userNav () {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },

    nav () {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [...this.userNav, languageDropdown]
      }
      return this.userNav
    },

    userLinks () {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    },
  }
}
</script>

<style lang="stylus">
.nav-links
  a
    color inherit
    transition all ease 0.3s
    &:hover, &.router-link-active
      color $accentColor
      text-decoration none
      margin-bottom -2px
      border-bottom 2px solid lighten($accentColor, 8%)
  .nav-item
    display inline-block
    margin-left 1.5rem
    height 20px;
    line-height 20px;
    &:first-child
      margin-left 0
@media (max-width: $MQMobile)
  .nav-links
    .nav-item
      display: block;
      margin-left: 0;
      margin-bottom: 10px
      &:last-child {
        margin-bottom: 0;
      }
</style>
