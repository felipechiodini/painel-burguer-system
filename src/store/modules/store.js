import Api from "@/js/Api"

const state = {
  store: null
}

const getters = {
  store: (state) => {
    return state.store
  }
}

const actions = {
  async loadStore({ commit }, store) {
    try {
      const { data } = await Api.get(`/store/${store}`)
      commit('setStore', data)
    } catch (error) {
      alert('error')
    }
  },
}

const mutations = {
  setStore(state, store) {
    state.store = store
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}