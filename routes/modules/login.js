export default {
  name: 'Login',
  path: '/login',
  component: () => import(/* webpackChunkName: 'login' */ '@/views/login').then(m => m.default || m)
}
