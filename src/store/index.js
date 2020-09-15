import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showAd:true, 
    shownav:false,  
  },
  mutations: {
    setShowAd(state,status){
      state.showAd = status
    },
    setShowNav(state,status){
      state.shownav = status
    },
  },
  actions: {
  },
  modules: {
  }
})