const fs = require('fs')

module.exports = (options = {}, context) => ({
  extendPageData ($page) {
    if (!$page.frontmatter.date) {
      $page.publishDate = getFilePublishDate($page._filePath)
    } else {
      $page.publishDate = $page.frontmatter.date
    }

    $page.lastUpdated = getFileLastUpdateDate()
  }
})

function getFilePublishDate (filePath) {
  let publishDate
  try {
    publishDate = fs.statSync(filePath).birthtime
  } catch (e) { /* do not handle for now */ }
  return publishDate
}

function getFileLastUpdateDate (filePath) {
  let updateDate = new Date()
  try {
    updateDate = fs.statSync(filePath).mtime
  } catch (e) { /* do not handle for now */ }
  return updateDate
}
