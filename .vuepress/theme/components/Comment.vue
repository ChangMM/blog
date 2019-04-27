<template>
  <div class="comment-page" v-if="show">
    <div ref="comment" id="comment"></div>
  </div>
</template>
<script>
let valine = null
const checkValine = () => {
  if (window.Valine) {
    valine = new Valine({
      appId: 'Olf3zqnXyrLW8oQPjVbBJpfN-gzGzoHsz',
      appKey: '9XOKcIB80L7DKcKUiYQ2paY0',
      el: '#comment',
      placeholder: '评论在此',
      avatar: 'monsterid',
      path: window.location.pathname,
      recordIP: true,
      visitor: true
    })
  } else {
    setTimeout(checkValine, 50)
  }
}

export default {
  props: ['show'],
  watch: {
    '$route': 'refresh'
  },
  mounted () {
    checkValine()
  },
  methods: {
    refresh () {
      checkValine()
    }
  }
}
</script>
<style lang="stylus">
.comment-page {
  margin-top: 30px;
  #comment {
    * {
      line-height: 1.5;
    }
    .vheader {
      .vinput:focus {
        border-bottom-color: $accentColor;
      }
    }
    .vedit {
      .veditor {
        min-height: 100px;
      }
    }
    .vcontrol {
      .vsubmit {
        &:hover {
          color: $accentColor;
          border-color: $accentColor;
        }
      }
    }
    .vinfo {
      .vnum {
        font-size: 1.5rem;
        color: $accentColor;
      }
    }
    .vcard {
      padding-top: 0;
      .vnick,.at {
        color: $accentColor;
        margin-right: 0;
        font-size: 1rem;
        &:before {
          background-color: $accentColor;
        }
      }
      .vsys {
        margin-right: 0
        padding: 0 0.2rem
      }
      .vmeta {
        .vat {
          color: $accentColor;
        }
      }
      .vcontent {
        font-size: 1rem;
        padding-top: 0;
        margin-bottom: 0;
      }
    }
    .info {
      display: none;
    }
  }
}
</style>
