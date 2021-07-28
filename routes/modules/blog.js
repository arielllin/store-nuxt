export default {
  name: 'Blog',
  path: '/blog',
  component: () => import(/* webpackChunkName: 'blog' */ '@/views/blog').then(m => m.default || m)
}
