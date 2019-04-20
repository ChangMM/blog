<template>
  <article class="post">
    <PostHeader :post="post" :top="top"/>
    <section class="post-excerpt">
      <p v-html="post.frontmatter.excerpt"></p>
    </section>
  </article>
</template>
<script>
import PostHeader from '@theme/components/PostHeader'
export default {
  props: ['post', 'top'],
  components: { PostHeader }
}
</script>
<style lang="stylus" scoped>
.post
  margin-bottom 20px
  border-bottom 1px solid $borderColor
  .post-excerpt
    p
      margin-top: 12px
      margin-bottom: 18px
      text-align justify
</style>
