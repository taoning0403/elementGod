import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../views/index/index.vue'),
      children: [
        {
          path: 'shop',
          name: 'shop',
          component: () => import('../views/index/shop.vue')
        },
        {
          path: 'discover',
          name: 'discover',
          component: () => import('../views/index/discover.vue')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('../views/index/profile.vue'),
          children: [
            {
              path: '',
              name: 'ProfileItem',
              component: () => import('../components/profile/ProfileItem.vue')
            }
          ]
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('../views/index/order.vue')
        },
        {
          path: '',
          redirect: '/shop'
        }
      ]
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('../views/goods/goods.vue')
    },
    {
      path: '/login',
      name: 'logins',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/profile/benefit',
      name: 'benefits',
      component: () => import('../components/profile/profilePrivate/benefit.vue')
    },
    {
      path: '/checkout/checkout',
      name: 'checkout',
      component: () => import('../views/checkout/checkout.vue')
    },
    {
      path: '/checkout/address',
      name: 'address',
      component: () => import('../views/checkout/address.vue')
    },
    {
      path: '/shopDetails/:activityId',
      name: 'shopDetails',
      component: () => import('../components/discover/ShopDetails.vue')
    },
    {
      path: '/exchange/?exchangeId',
      name: 'ActivityBody',
      component: () => import('../components/discover/ActivityBody.vue')
    }
  ]
})
