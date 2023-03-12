import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../Layout/Main.vue'
import Auth from '../Layout/Auth.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import Products from '../views/Products.vue'
import Configuration from '../views/Configuration.vue'
import Waiters from '../views/Waiters.vue'
import Combos from '../views/Combos.vue'
import Cards from '../views/Cards.vue'
import Profile from '../views/Profile.vue'

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
        path: '/produtos',
        name: 'produto',
        component: Products
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
        path: '/combos',
        name: 'combo.index',
        component: Combos
      },
      {
        path: '/configuracoes',
        name: 'store.config',
        component: Configuration
      },
    ]
  },
  {
    path: '/login',
    component: Auth,
    children: [
      {
        path: '/',
        name: 'login',
        component: Login
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
