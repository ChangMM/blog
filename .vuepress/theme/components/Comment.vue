<template>
  <div class="comment-page" v-if="show">
    <div ref="comment" id="comment"></div>
  </div>
</template>
<script>
const checkValine = () => {
  if (window.Valine) {
    new Valine({
      appId: 'Olf3zqnXyrLW8oQPjVbBJpfN-gzGzoHsz',
      appKey: '9XOKcIB80L7DKcKUiYQ2paY0',
      el: '#comment',
      placeholder: '评论在此',
      avatar: 'monsterid',
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
      .vnick {
        color: $accentColor;
        &:before {
          background-color: $accentColor;
        }
      }
      .vmeta {
        .vat {
          color: $accentColor;
        }
      }
    }
    .info {
      display: none;
    }
  }
}
</style>
