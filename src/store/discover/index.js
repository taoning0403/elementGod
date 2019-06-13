import http from '@/utils/publicTools/http'

export default {
  namespaced: true,

  state: {
    partsList: {}
  },

  mutations: {
    GETPARTSITEM (state, list) {
      state.partsList = list
    }
  },

  actions: {
    GetPartsList ({ commit }) {
      http.get('http://localhost:8080/ele/restapi/member/v1/discover?platform=1&block_index=0')
        .then(response => {
          commit('GETPARTSITEM', response)
        })
    }
  }
}
