const CategoryLayout = () => import('@theme/layouts/CategoryLayout')

const CATEGORYPATH = '/category/'

const install = (Vue, { router }) => {
  let routes = []
  routes.push({
    path: `${CATEGORYPATH}:category?`,
    component: CategoryLayout,
    meta: { tag: true }
  })
  router.addRoutes(routes)
}

export default { install }
