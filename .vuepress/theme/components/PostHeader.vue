<template>
  <div class="post-header">
    <h2 class="post-title">
      <a :href="post.path">
        <span v-if="top" class="top">[置顶]</span>
        <span v-if="post.frontmatter.password" class="top">[密]</span>
        {{ post.title }}</a>
    </h2>
    <div class="post-meta">
      <!-- <span class="author post-meta-item">
        作者:
        <span class="em">{{ post.frontmatter.author || '坂本' }}</span>
      </span>
      | -->
      <span class="time post-meta-item">
        时间:
        <time>{{ post.publishDate | toLocaleString | formatLocaleString }}</time>
      </span>
      |
      <span class="categorys post-meta-item" v-if="post.frontmatter.categorys && post.frontmatter.categorys.length > 0">
        分类:
        <router-link 
          class="category-item em" 
          v-for="item in post.frontmatter.categorys" 
          :to="{ path: '/category/' + item }"
          :key="item"
        >
          {{item}}
        </router-link>
      </span>
      |
      <span class="tags post-meta-item" v-if="post.frontmatter.tags && post.frontmatter.tags.length > 0">
        标签:
        <span 
          class="tag-item em" 
          v-for="item in post.frontmatter.tags"
          :key="item"
        >
          {{item}}
        </span>
      </span>
      |
      <span :id="post.path" class="leancloud-visitors" :data-flag-title="post.title">
        阅读量:
        <i class="leancloud-visitors-count em"></i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['post', 'top']
}
</script>
<style lang="stylus" scoped>
.post-header
  .post-title
    font-weight normal
    line-height 1.4;
    font-size 1.5rem
    .top
      color red
      font-size 0.9em
    a
      color $accentColor
      transition color ease 0.2s
      &:hover
        text-decoration none
        color $textColor
        border-bottom 1px dashed #ddd
  .post-meta
    margin-top 10px
    font-size 0.8rem
    color: #999
    .post-meta-item
      /* padding-left 5px */
      /* padding-right 5px */
      &:first-child
        padding-left 0
    .em
      color $accentColor
      border-bottom 1px dashed #ddd
    leancloud-visitors
      font-style normal
  .categorys, .tags
    .tag-item, .category-item
      margin-right 6px
</style>
