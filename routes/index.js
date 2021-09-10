export default [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/pages/home').then(m => m.default || m)
  },
  {
    name: 'About-Us',
    path: '/about-us',
    component: () => import('@/pages/aboutUs').then(m => m.default || m)
  },
  {
    name: 'Menu',
    path: '/menu',
    component: () => import('@/pages/menu').then(m => m.default || m)
  },
  {
    name: 'Blog',
    path: '/blog',
    component: () => import('@/pages/blog').then(m => m.default || m)
  },
  {
    name: 'Shop',
    path: '/shop',
    component: () => import('@/pages/shop').then(m => m.default || m)
  },
  {
    name: 'Shop-Detail',
    path: '/shop/:id',
    component: () => import('@/pages/shop/Detail.vue').then(m => m.default)
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/pages/login').then(m => m.default || m)
  }
]
