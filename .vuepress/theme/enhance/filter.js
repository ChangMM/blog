const install = (Vue) => {
  Vue.filter('toLocaleString', (date, locales) => {
    return new Date(date).toLocaleString(locales || 'en-US')
  })

  Vue.filter('formatLocaleString', (value) => {
    return value.split(',')[0]
  })
}

export default { install }
