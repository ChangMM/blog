const fs = require('fs')

module.exports = (options = {}, context) => ({
  extendPageData ($page) {
    if (!$page.frontmatter.date) {
      $page.publishDate = getFilePublishDate($page._filePath)
    } else {
      $page.publishDate = $page.frontmatter.date
    }
  }
})

function getFilePublishDate (filePath) {
  let publishDate
  try {
    publishDate = fs.statSync(filePath).birthtime
    console.log(publishDate)
  } catch (e) { /* do not handle for now */ }
  return publishDate
}
