<template>
  <main class="home" aria-labelledby="main-title">
    <!-- <Content class="custom"/> -->
    <div class="post-wrap">
      <PostItem v-for="item in $tops" :post="item" :top='true' :key="item.key + item.frontmatter.title" />
      <PostItem v-for="item in $posts" :post="item" :top='false' v-if="!item.frontmatter.top" :key="item.key" />
    </div>
    <ClientOnly>
      <CommentBar :show="false"/>
    </ClientOnly>
  </main>
</template>

<script>
import PostItem from '@theme/components/PostItem'
import CommentBar from '@theme/components/Comment'
export default {
  components: { PostItem, CommentBar },
}
</script>
