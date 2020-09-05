<template>
  <div id="footer">
    <p>
      <span class="copyright">© 2017-{{year}} 毕方铺 保留权利. 豫ICP备19013762号-1. </span>
      |
      <NavLink v-for="item in links" class="friend-link" :item="item" :key="item.link" />
    </p>
    <div style="display:none;">
      <script type="text/javascript" src="https://s5.cnzz.com/z_stat.php?id=1277447336&web_id=1277447336"></script>
    </div>
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
        text: 'Github',
        link: 'https://github.com/ChangMM'
      },
      {
        text: '微博',
        link: 'https://weibo.com/3897687414'
      },
      // {
      //   text: 'Scihub论文',
      //   link: 'https://www.iizhi.cn/scihub'
      // },
      {
        text: 'Unicode字符集',
        link: 'https://www.iizhi.cn/unicode/'
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
    margin-left 8px
    border-bottom: 1px dashed $borderColor
</style>
