import Axios from 'axios'
import Router from '@/router'
import store from '@/store'

const ApiStore = Axios.create({
  baseURL: 'http://' + store.getters['store/getStore'] + '.' + process.env.VUE_APP_HOST,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

ApiStore.interceptors.request.use(function (config) {
  if (store.getters['user/isLoggedin']) {
    config.headers.Authorization = 'Bearer ' + store.getters['user/getToken']
  }
  
  return config
}, function (error) {
  return Promise.reject(error)
})

ApiStore.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response.status === 401) {
    localStorage.clear()
    Router.push({ name: 'auth.login' })
  }

  if (error.response.status === 503) {
    Router.push({ name: 'maintenance' })
  }

  return Promise.reject(error)
})


export default ApiStore