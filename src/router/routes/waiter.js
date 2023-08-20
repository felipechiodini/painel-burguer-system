import Index from '@/views/Waiter/Index.vue'
import Store from '@/views/Waiter/Store.vue'
import Update from '@/views/Waiter/Update.vue'

export default [{
    path: 'garcons',
    name: 'waiter.index',
    component: Index,
    label: 'Garçons',
    menu: true
  },
  {
    path: 'produtos/novo',
    name: 'waiter.store',
    component: Store
  },
  {
    path: 'produto/:banner_id/editar',
    name: 'waiter.update',
    component: Update
  }
]