import Vue from 'vue'
import Vuex from 'vuex'
import store from './modules/store'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    store
  },
  plugins: [
    createPersistedState()
  ],
})
