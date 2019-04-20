<template>
  <main class="home" aria-labelledby="main-title">
    <Content class="custom"/>
    <div class="post-wrap">
      <PostItem v-for="item in $tops" :post="item" :top='true' :key="item.key + item.frontmatter.title" />
      <PostItem v-for="item in $posts" :post="item" :top='false' :key="item.key" />
    </div>
  </main>
</template>

<script>
import PostItem from '@theme/components/PostItem.vue'
export default {
  components: { PostItem },
}
</script>
