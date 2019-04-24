const install = (Vue) => {
  Vue.filter('toLocaleString', (date, locales) => {
    return new Date(date).toLocaleString(locales || 'en-US')
  })
}

export default { install }
