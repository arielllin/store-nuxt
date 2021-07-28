export default {
  name: 'Menu',
  path: '/menu',
  component: () => import(/* webpackChunkName: 'menu' */ '@/views/menu').then(m => m.default || m)
}
