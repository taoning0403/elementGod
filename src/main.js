import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Swipe, SwipeItem, AddressEdit, Toast, Actionsheet,   GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn } from 'vant'

import './styles/base.less'

Vue.use(ElementUI)
  .use(Swipe)
  .use(SwipeItem)
  .use(AddressEdit)
  .use(Toast)
  .use(Actionsheet)
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
