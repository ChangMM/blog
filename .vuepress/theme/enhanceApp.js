import routes from './enhance/routes'
import mixin from './enhance/mixin'
import optionHandler from './enhance/optionHandle'
import filter from './enhance/filter.js'

export default ({ Vue, router, siteData }) => {
    const { themeConfig, pages } = siteData
    Vue.use(mixin, { pages })
    Vue.use(optionHandler, { themeConfig })
    Vue.use(routes, { router, themeConfig })
    Vue.use(filter)
}
