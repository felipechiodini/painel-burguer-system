import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../Layout/Main.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Store from '../views/Store.vue'
import Home from '../views/Home.vue'
import Configuration from '../views/Configuration.vue'
import NotFound from '../views/NotFound.vue'
import Profile from '../views/Profile.vue'
import UserRouters from './routes/user.js'
import PhotoRouters from './routes/photo.js'
import CategoryRouters from './routes/category.js'
import CardRouters from './routes/card.js'
import WaiterRouters from './routes/waiter.js'
import BannerRouters from './routes/banner.js'
import ComboRouters from './routes/combo.js'
import ProductRouters from './routes/product.js'
import OrderRouters from './routes/order.js'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Store
  },
  {
    path: '/:store_slug',
    name: 'store.index',
    component: Main,
    beforeEnter: (to, from, next) => {
      if (store.getters['user/isLoggedin']) next()
      else next('/login')
    },
    children: [
      {
        path: '',
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
        path: '/configuracoes',
        name: 'store.config',
        component: Configuration
      },
      ...UserRouters,
      ...CategoryRouters,
      ...CardRouters,
      ...WaiterRouters,
      ...BannerRouters,
      ...PhotoRouters,
      ...ProductRouters,
      ...ComboRouters,
      ...OrderRouters,
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
