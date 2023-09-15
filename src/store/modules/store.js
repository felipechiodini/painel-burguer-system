const state = {
  store: null
}

const getters = {
  store: (state) => {
    return state.store
  }
}

const actions = {
  setStore({ commit }, payload) {
    commit('setStore', payload)
  }
}

const mutations = {
  setStore(state, payload) {
    state.store = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
