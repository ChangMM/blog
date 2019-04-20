<template>
  <div id="footer">
    <p>
      <span class="copyright">© 2017-{{year}} Sakamoto 保留权利. 鄂ICP备12009978号-4. </span>
      |
      <span>总访问量：122434</span>
      |
      <NavLink v-for="item in links" class="friend-link" :item="item" :key="item.link" />
    </p>
  </div>
</template>
<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: "footerbar",
  components: { NavLink },
  data: () => ({
    year: new Date().getFullYear(),
    links: [
      {
        text: '冰岩作坊',
        link: 'https://www.bingyan.net'
      }
    ]
  })
}
</script>
<style lang="stylus">
#footer
  padding 15px
  font-size 13px
  text-align center
  .friend-link
    margin-left 6px
</style>
