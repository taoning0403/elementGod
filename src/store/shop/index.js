import http from '@/utils/publicTools/http'

export default {
  namespaced: true,

  state: {
    imgList: {},

    rttList: {}
  },

  mutations: {
    GETIMGLIST (state, list) {
      state.imgList = list
    },

    GETRTTLIST (state, list) {
      state.rttList = list
    }
  },

  actions: {
    GetImgList ({ commit }) {
      http.get('http://localhost:8080/elme/restapi/shopping/v2/entries?latitude=22.547&longitude=114.085947&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5')
        .then(response => {
          commit('GETIMGLIST', response)
        })
    },

    GetRttList ({ commit }) {
      http.get('./shopData.json', {
        // headers: {
        //   'X-Shard': 'loc=114.085947,22.547',
        //   'x-uab':'118#ZVWZzZCofXEqHZ4ABZJtZYquZYT4zHWzZgC2Voq4mMO4/LgTyHRxZZgZZzqhzHRzZgCZXfquZg2zZZFhHluhzZ2ZZ0NTzeWzzgeuVfq4zH2ZZZChXHR4ZggZZzqhzHRZZXquVfq4zH2z5HK6DHW46NX0sXnVcP+JDZZZRM9B3msY4ezWQDu2U01VK1cObCEaDz6HB/fkhpnkgYwZugZCmrDtKHZzhXezzQJ1RZZTtW+v+jgn5grodu+nl/L4Gsk7N6dsYEZfVc25kWlOClnBjBEKJl2EKS5aEsLRW2TCbXHuo4DzPRwg4CfUe9oviV6uN+EKsIh7BZGKvVm64m8SjqDETqLnd1TCsx0epY9PO/+Qrpa077Ki65hoeFD7yS+PCHV+mJJUoLoxrfFcsdvXbpNEYLyVk1Ro84vxs3OWGAUdUU7UVCy5usJkNmwWLrzw3JZb5A67cKRnZjDDdsd4a+WVv0U0MyrluVcTVgqsHi0rJnOd0wCm6H91cs8b691BmwVoGOuAl+adpbdZsLZIoL15t1M4E+PTOcw7bGDtXoA='
        // }
      })
      .then(response => {
        commit('GETRTTLIST', response)
      })
    }
  }
}
