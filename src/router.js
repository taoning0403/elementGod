import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        component: () => import('./views/index/index.vue'),
        children: [
          {
            path: 'shop',
            name: 'shop',
            component: () => import('./views/index/shop.vue')
          },
          {
            path: 'discover',
            name: 'discover',
            component: () => import('./views/index/discover.vue')
          },
          {
            path: 'profile',
            name: 'profile',
            component: () => import('./views/index/profile.vue')
          },
          {
            path: 'order',
            name: 'order',
            component: () => import('./views/index/order.vue')
          },
          {
            path: '',
            redirect: '/shop'
          }
        ]
      }
  ]
})
