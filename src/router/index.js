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
          name: '',
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
      component: () => import('../views/goods/goods.vue'),
      children: [
        {
          path:'/goods/commodity',
          name:'commodity',
          component: () => import('../components/Details/commodity.vue')
        },
        {
          path:'/goods/ratings',
          name:'ratings',
          component: () => import('../components/Details/ratings.vue')
        },
        {
          path:'/goods/seller',
          name:'seller',
          component: () => import('../components/Details/seller.vue')
        },
        {
          path: '/goods',
          redirect: '/goods/commodity'
        }
      ]
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
      path: '/checkout/notes',
      name: 'notes',
      component: () => import('../views/checkout/notes.vue')
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
