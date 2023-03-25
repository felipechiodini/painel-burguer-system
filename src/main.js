import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@/assets/css/custom.scss'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
