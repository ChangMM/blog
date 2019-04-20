<template>
  <article class="post">
    <h3 class="post-title">
      <a :href="post.path"><span v-if="top" class="top">[置顶]</span>{{ post.title }}</a>
    </h3>
    <div class="post-meta">
      <span class="author post-meta-item">
        作者:
        <span class="em">{{ post.frontmatter.author || '坂本' }}</span>
      </span>
      |
      <span class="time post-meta-item">
        时间:
        <time >{{ post.frontmatter.date }}</time>
      </span>
      |
      <span class="categorys post-meta-item" v-if="post.frontmatter.categorys && post.frontmatter.categorys.length > 0">
        分类:
        <router-link class="category-item em" v-for="item in post.frontmatter.categorys" :to="{ path: '/category/' + item }">{{item}}</router-link>
      </span>
      |
      <span class="tags post-meta-item" v-if="post.frontmatter.tags && post.frontmatter.tags.length > 0">
        标签:
        <span class="tag-item em" v-for="item in post.frontmatter.tags">{{item}}</span>
      </span>
    </div>
    <section class="post-excerpt">
      <p v-html="post.frontmatter.excerpt"></p>
    </section>
  </article>
</template>
<script>
export default {
  props: ['post', 'top'],
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.post
  margin-top 20px
  border-bottom 1px solid $borderColor
  .post-title
    font-weight normal
    line-height 1.4;
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
      padding-left 5px
      padding-right 5px
      &:first-child
        padding-left 0
    .em
      color $accentColor
      border-bottom 1px dashed #ddd
  .categorys, .tags
    .tag-item, .category-item
      margin-right 6px
  .post-excerpt
    p
      margin-top: 12px
      margin-bottom: 18px
</style>
