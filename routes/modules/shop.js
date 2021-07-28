export default {
  name: 'Shop',
  path: '/shop',
  component: () => import(/* webpackChunkName: 'shop' */ '@/views/shop').then(m => m.default || m)
}
