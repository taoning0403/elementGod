import http from '@/utils/publicTools/http'

export default {
  namespaced: true,

  state: {
    imgList: {}
  },

  mutations: {
    GETIMGLIST (state, list) {
      state.imgList = list
    }
  },

  actions: {
    GetImgList ({ commit }) {
      http.get('http://localhost:8080/elme/restapi/shopping/v2/entries?latitude=22.547&longitude=114.085947&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5')
        .then(response => {
          commit('GETIMGLIST', response)
        })
    }
  }
}
