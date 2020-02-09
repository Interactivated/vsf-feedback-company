import { Module } from 'vuex'
import rootStore from '@vue-storefront/core/store'

export const module: Module<any, any> = {
  namespaced: true,
  mutations: {
    updateRating (state, rating) {
      state.rating = rating
    }
  },
  state: {
    rating: []
  },
  getters: {
    allRating: state => state.rating
  },
  actions: {
    async fetchRating (ctx) {
      const res = await fetch(
        rootStore.state.config.api.url + '/api/ext/feedback-company/getFeedbackReview'
      )
      const rating = await res.json()
      console.log(res)
      if (rating.code === 200) {
        console.log(rating.result)
        const afterParse = JSON.parse(rating.result)
        console.log(afterParse)
        ctx.commit('updateRating', afterParse)
      }
    }
  }
}
