import Home from '@/views/Home.vue'
import Configuration from '@/views/Configuration.vue'

export default [{
    path: '',
    name: 'home',
    component: Home,
    label: 'Home',
    menu: true
  },
  {
    path: '/configuracoes',
    name: 'store.config',
    component: Configuration
  },
]
