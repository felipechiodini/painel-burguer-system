import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../Layout/Main.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import Configuration from '../views/Configuration.vue'
import NotFound from '../views/NotFound.vue'
import Profile from '../views/Profile.vue'
import StoreProductReplacement from '@/views/Product/Replacement/Store.vue'
import StoreProductAdditional from '@/views/Product/Additional/Store.vue'
import StoreProductPrice from '@/views/Product/Price/Store.vue'
import CardRouters from './routes/card.js'
import WaiterRouters from './routes/waiter.js'
import BannerRouters from './routes/banner.js'
import ComboRouters from './routes/combo.js'
import ProductRouters from './routes/product.js'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    beforeEnter: (to, from, next) => {
      if (store.getters['user/isLoggedin']) next()
      else next('/login')
    },
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
        menu: true,
        label: 'Home'
      },
      {
        path: '/perfil',
        name: 'profile',
        component: Profile
      },
      {
        path: '/pedidos',
        name: 'orders',
        component: Orders
      },
      {
        path: 'produto/:product_id/preco/novo',
        name: 'product.replacement',
        component: StoreProductPrice,
      },
      {
        path: 'produto/:product_id/substituicao/novo',
        name: 'product.replacement',
        component: StoreProductReplacement,
      },
      {
        path: 'produto/:product_id/adicional/novo',
        name: 'product.replacement',
        component: StoreProductAdditional,
      },
      {
        path: '/configuracoes',
        name: 'store.config',
        component: Configuration
      },
      ...CardRouters,
      ...WaiterRouters,
      ...BannerRouters,
      ...ProductRouters,
      ...ComboRouters,
    ]
  },
  {
    path: '/login',
    name: 'auth.login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.getters['user/isLoggedin']) next('/')
      else next()
    }
  },
  {
    path: '/criar-conta',
    name: 'auth.register',
    component: Register
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
