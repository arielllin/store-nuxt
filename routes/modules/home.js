export default {
  name: 'Home',
  path: '/',
  component: () => import(/* webpackChunkName: "home" */ '@/views/home').then(m => m.default || m)
}
