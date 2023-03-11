import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../Layout/Main.vue'
import Auth from '../Layout/Auth.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import Products from '../views/Products.vue'
import Stores from '../views/Stores.vue'
import Subscription from '../views/Subscription.vue'
import Waiters from '../views/Waiters.vue'

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
        path: '/configuracoes',
        name: 'stores.config',
        component: Stores
      },
      {
        path: '/assinatura',
        name: 'subscription.index',
        component: Subscription
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
