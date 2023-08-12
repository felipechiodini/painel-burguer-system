import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../Layout/Main.vue'
import NoAuth from '../Layout/NoAuth.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import Products from '../views/Products.vue'
import Configuration from '../views/Configuration.vue'
import Waiters from '../views/Waiters.vue'
import Combos from '../views/Combos.vue'
import Cards from '../views/Cards.vue'
import NotFound from '../views/NotFound.vue'
import Profile from '../views/Profile.vue'
import { isAuthenticate } from '@/js/Auth'
import EditProduct from '@/views/Products/Update.vue'
import DetailsProduct from '@/views/Products/Details.vue'
import NewProduct from '@/views/Products/New.vue'
import StoreProductReplacement from '@/views/StoreProductReplacement.vue'
import StoreProductAdditional from '@/views/StoreProductAdditional.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/home',
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
        path: 'produtos',
        name: 'product.index',
        component: Products,
      },
      {
        path: 'produtos/novo',
        name: 'product.new',
        component: EditProduct,
      },
      {
        path: 'produtos/:id/editar',
        name: 'product.edit',
        component: EditProduct,
      },
      {
        path: 'produto/:product_id/substituicoes/nova',
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
