import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../Layout/Main.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import Configuration from '../views/Configuration.vue'
import Waiters from '../views/Waiters.vue'
import Cards from '../views/Cards.vue'
import NotFound from '../views/NotFound.vue'
import Profile from '../views/Profile.vue'
import StoreProductReplacement from '@/views/Products/Replacement/Store.vue'
import StoreProductAdditional from '@/views/Products/Additional/Store.vue'
import StoreProductPrice from '@/views/Products/Price/Store.vue'
import ComboRouters from './combo.js'
import ProductRouters from './product.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
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
        path: '/garcons',
        name: 'waiter.index',
        component: Waiters
      },
      {
        path: '/comandas',
        name: 'card.index',
        component: Cards
      },
      {
        path: '/configuracoes',
        name: 'store.config',
        component: Configuration
      },
      ...ProductRouters,
      ...ComboRouters,
    ]
  },
  {
    path: '/login',
    name: 'auth.login',
    component: Login
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

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'login' && !isAuthenticate()) next({ name: 'login' })
//   else next()
// })

export default router
