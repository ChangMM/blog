import { isArray } from '../util'

const install = (Vue, { pages }) => {
  let tagsMap = {}
  let categorysMap = {}
  let top = []
  const posts = pages.filter(item => {
    if (!item.frontmatter.lastUpdated && !item.frontmatter.date) {
      return false
    }
    return item.path.indexOf('/article/') > -1
  }).sort((item1, item2) => {
      return item2.frontmatter.date.replace(/\//g, '').replace(/-/g, '') - item1.frontmatter.date.replace(/\//g, '').replace(/-/g, '')
  }).map((item, index)=> {
    if (item.frontmatter.categorys instanceof String) {
      item.frontmatter.categorys = [item.frontmatter.categorys]
    }
    if (item.frontmatter.tags instanceof String) {
      item.frontmatter.tags = [item.frontmatter.tags]
    }
    item.index = index
    return item
  })


  posts.forEach(item => {
    if (item.frontmatter.top !== undefined) {
      top.push(item)
    }

    let categorys = item.frontmatter.categorys
    if (!categorys) {
      categorys = []
    }
    categorys.forEach(cate => {
      if (!categorysMap[cate]) {
        categorysMap[cate] = [item]
      } else {
        categorysMap[cate].push(item)
      }
    })

    let tags = item.frontmatter.tags
    if (tags) {
      if (!isArray(tags)) {
        tags = [tags]
      }
    } else {
      tags = []
    }
    tags.forEach(tag => {
      if (!tagsMap[tag]) {
        tagsMap[tag] = [item]
      } else {
        tagsMap[tag].push(item)
      }
    })
  })

  Vue.mixin({
    computed: {
      $tops () {
        return top.sort((item1, item2) => item2.frontmatter.top - item1.frontmatter.top)
      },
      $posts () {
        return posts
      },
      $tags () {
        return tagsMap
      },
      $categorys () {
        return categorysMap
      }
    }
  })
}

export default { install }
