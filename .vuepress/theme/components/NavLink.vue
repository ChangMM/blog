<template>
  <router-link class="nav-link" :to="link" v-if="!isExternal(link)" :exact="exact">{{ item.text }}</router-link>
  <a v-else :href="link" class="nav-link external">{{ item.text }}</a>
</template>

<script>
import { isExternal, ensureExt } from '../util'

export default {
  props: {
    item: {
      required: true
    }
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    }
  },

  methods: {
    isExternal
  }
}
</script>
