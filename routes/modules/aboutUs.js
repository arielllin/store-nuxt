export default {
  name: 'About Us',
  path: '/about-us',
  component: () => import(/* webpackChunkName: 'aboutUs' */ '@/views/aboutUs').then(m => m.default || m)
}
