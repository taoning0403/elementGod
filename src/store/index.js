import Vue from 'vue'
import Vuex from 'vuex'
import shop from './shop'
import discover from './discover'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop,
    discover
  }
})
