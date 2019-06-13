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
    hashimg: '8389c9aea0e856149083d84af3444b78jpeg',
    imgurl: 'jpeg?imageMogr/format/webp/'
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
  },

  actions: {
    GetPartsList ({ commit }) {
      http.get('http://localhost:8080/ele/restapi/member/v1/discover?platform=1&block_index=0')
        .then(response => {
          commit('GETPARTSITEM', response)
        })
    },
    GetRecommendList ({ commit }) {
      http.get('http://localhost:8080/ele/restapi/shopping/v1/find/recommendation?latitude=22.54286&longitude=114.059563&offset=0&limit=6&user_id=3714206810')
        .then(response => {
          commit('GETRECOMMENDLIST', response)
        })
    },
    GetBodyList ({ commit }) {
      http.get('http://localhost:8080/ele/restapi/member/gifts/suggest')
        .then(response => {
          commit('GETBODYLIST', response)
        })
    }
  },

  getters: {
    HashImg (state) {
      let newPartsImg = ''
      let PartsImgs = state.hashimg.split('')
      PartsImgs.splice(1, 0, '/')
      PartsImgs.splice(4, 0, '/')
      PartsImgs = PartsImgs.join('')
      newPartsImg = `https://fuss10.elemecdn.com/${PartsImgs}${state.imgurl}`
      return newPartsImg
    }
  }
}
