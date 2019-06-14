import http from '@/utils/publicTools/http'
// import { stat } from 'fs'
// import { state } from 'fs'

export default {
  namespaced: true,

  state: {
    // 头部数据
    partsList: {},
    // 中部数据
    activitylist: {},
    // 底部数据
    exchangeList: {},
    hashimg: '',
    imgurl: ''
  },

  mutations: {
    GETPARTSITEM (state, list) {
      state.partsList = list
    },

    GETRECOMMENDLIST (state, list) {
      state.activitylist = list
    },

    GETBODYLIST (state, list) {
      state.exchangeList = list
    },
    GETHASHIMG (state, hashimg) {
      state.hashimg = hashimg
    },
    SETIMGURL (state, imgurl) {
      state.imgurl = imgurl
    }
    // HashImgs (state) {
    //   let newPartsImg = ''
    //   let PartsImgs = state.hashimg.split('')
    //   PartsImgs.splice(1, 0, '/')
    //   PartsImgs.splice(4, 0, '/')
    //   PartsImgs = PartsImgs.join('')
    //   newPartsImg = `https://fuss10.elemecdn.com/${PartsImgs}&${state.imgurl}`
    //   return newPartsImg
    // }
  },

  actions: {
    GetPartsList ({ commit }) {
      // 原地址为http://localhost:8080  项目上线后，这个正向代理会出问题，删除掉之后，会默认改为服务器的ip
      http.get('/ele/restapi/member/v1/discover?platform=1&block_index=0')
        .then(response => {
          commit('GETPARTSITEM', response)
        })
    },
    GetRecommendList ({ commit }) {
      http.get('/ele/restapi/shopping/v1/find/recommendation?latitude=22.54286&longitude=114.059563&offset=0&limit=6&user_id=3714206810')
        .then(response => {
          commit('GETRECOMMENDLIST', response)
        })
    },
    GetBodyList ({ commit }) {
      http.get('/ele/restapi/member/gifts/suggest')
        .then(response => {
          commit('GETBODYLIST', response)
        })
    }
  },

  getters: {
    // HashImg (state) {
    //   let newPartsImg = ''
    //   let PartsImgs = state.hashimg.split('')
    //   PartsImgs.splice(1, 0, '/')
    //   PartsImgs.splice(4, 0, '/')
    //   PartsImgs = PartsImgs.join('')
    //   newPartsImg = `https://fuss10.elemecdn.com/${PartsImgs}&${state.imgurl}`
    //   return newPartsImg
    // }
  }
}
