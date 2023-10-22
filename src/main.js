import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import router from './router'
import VueApexCharts from 'vue-apexcharts'
import { VueMaskDirective } from 'v-mask'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store'
import Helpers from '@/js/Helpers'

Vue.config.productionTip = false

import '@/assets/css/custom.scss'
import '@/assets/css/reset.scss'

Vue.use(VueMeta)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueApexCharts)
Vue.mixin(Helpers)
Vue.component('apexchart', VueApexCharts)
Vue.directive('mask', VueMaskDirective)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
