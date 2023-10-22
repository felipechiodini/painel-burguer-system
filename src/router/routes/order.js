import Manager from '@/views/Order/Manager/Index.vue'
import Index from '@/views/Order/Index.vue'

export default [{
    path: 'gerenciador-de-pedidos',
    name: 'order.manager',
    component: Manager,
    label: 'Gerenciador de Pedidos',
    menu: true
  },
  {
    path: '',
    name: 'order.index',
    component: Index,
    label: 'Pedidos',
    menu: true
  }
]
