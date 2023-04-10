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
        path: 'Custom',
        name: 'About',
        component: () => import('../views/front/CustomView.vue'),
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/front/ProductView.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/front/ProductsView.vue'),
        children:[
          {
            path: '/AllProducts',
            name: 'AllProducts',
            component: () => import('../views/front/CategoryView.vue'),
          },
          {
            path: '/brandy',
            name: 'brandy',
            component: () => import('../views/front/BrandyView.vue'),
          },
          {
            path: '/gin',
            name: 'gin',
            component: () => import('../views/front/GinView.vue'),
          },
          {
            path: '/rum',
            name: 'rum',
            component: () => import('../views/front/RumView.vue'),
          },
          {
            path: '/vodka',
            name: 'vodka',
            component: () => import('../views/front/VodkaView.vue'),
          },
          {
            path: '/wiskey',
            name: 'wiskey',
            component: () => import('../views/front/WiskeyView.vue'),
          },
        ]
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/front/CartView.vue'),
      },
      {
        path: 'info',
        name: 'info',
        component: () => import('../views/front/InfoView.vue'),
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/front/OrderView.vue'),
      },
      {
        path: 'game',
        name: 'game',
        component: () => import('../views/front/GameView.vue'),
      },
      {
        path: 'Login',
        name: 'Login',
        component: () => import('../views/front/LoginView.vue'),
      }
    ]
  },
      {
        path: '/Admin',
        component: () => import('../views/DashBoard.vue'),
        children:[
          {
            path: 'AdminOrders',
            component: () => import('../views/admin/adminOrders.vue'),
          },
          {
            path: 'AdminProducts',
            component: () => import('../views/admin/adminProducts.vue'),
          }
        ]
      }
]



const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass:'active',
})

export default router
