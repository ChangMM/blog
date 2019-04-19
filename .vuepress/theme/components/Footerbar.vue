<template>
  <div id="footer">
    <p>
      <span class="copyright">Copyright ©2016-{{year}} All Right Reserved. </span>
      <NavLink v-for="item in links" class="friend-link" :item="item" :key="item.link" />
    </p>
    <p>鄂ICP备12009978号-4.</p>
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
