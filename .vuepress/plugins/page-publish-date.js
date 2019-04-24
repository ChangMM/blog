const fs = require('fs')

module.exports = (options = {}, context) => ({
  extendPageData ($page) {
    $page.publishDate = getFilePublishDate($page._filePath)
  }
})

function getFilePublishDate (filePath) {
  let publishDate
  try {
    publishDate = fs.statSync(filePath).ctime
  } catch (e) { /* do not handle for now */ }
  return publishDate
}
