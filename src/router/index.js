import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'FrontLayout',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/AboutView.vue'),
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/front/productView.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/front/productsView.vue'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/front/cartView.vue'),
      },]
  }
]



const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass:'active',
})

export default router
