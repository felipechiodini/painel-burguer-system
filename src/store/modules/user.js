import Api from '@/js/Api'
import Router from '@/router'

const state = {
  user: null,
  token: null,
  permissions: []
}

const getters = {
  getUser: (state) => {
    return state.user
  },
  isLoggedin: (state) => {
    return state.token !== null
  },
  getToken: (state) => {
    return state.token
  },
  permissions: (state) => {
    return state.permissions
  }
}

const actions = {
  setPermissions({ commit }, permissions) {
    commit('setPermissions', permissions)
  },
  setToken({ commit }, token) {
    commit('setToken', token)
  },
  setUser({ commit }, user) {
    commit('setUser', user)
  },
  logout({ commit }) {
    Api.post('auth/logout').then(() => {
      commit('setToken', null)
      commit('setUser', null)
      Router.push({ name: 'auth.login' })
    })
  }
}

const mutations = {
  setPermissions(state, permissions) {
    state.permissions = permissions
  },
  setUser(state, user) {
    state.user = user
  },
  setToken(state, token) {
    state.token = token
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}