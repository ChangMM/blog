<template>
  <div id="zanshang">
    <div class="pay-wrap" v-if="show" :class="{'show': show}">
      <img src="/wechatpay.png" class="wechat qrcode" alt="微信赞赏">
      <img src="/alipay.png" class="alipay qrcode" alt="支付宝赞赏">
    </div>
    <span class="zan-button" ref="button" @click="zan">赞赏作者</span>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: false
  }),
  methods: {
    zan() {
      this.show = !this.show
      if (this.show) { // 展开后该按钮是出现在视野中的
        this.$refs.button.scrollIntoView()
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
#zanshang {
  margin: 20px auto;
  text-align: center;
  .pay-wrap {
    margin: 0 auto;
    visibility: hidden;
    opacity: 0;
    width: 494px;
    padding: 20px;
    transition: all ease 0.3s;
    font-size: 0;
    &.show {
      visibility: visible;
      opacity: 1;
    }
    img {
      border: 1px solid #ddd;
      width: 220px;
      vertical-align: bottom;
      &.wechat {
        margin-right: 10px;
      }
    }
  }
  .zan-button {
    color: #fff;
    display: inline-block;
    border-radius: 4px;
    padding: 8px 20px;
    cursor: pointer;
    transition: all ease 0.3s;
    background-color: #FF5746;
    &:hover {
      background-color: darken(#FF5746, 10%);
    }
    &:active {
      background-color: darken(#FF5746, 20%);
    }
  }
}
</style>
