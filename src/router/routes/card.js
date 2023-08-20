import Index from '@/views/Card/Index.vue'
import Store from '@/views/Card/Store.vue'
import Update from '@/views/Card/Update.vue'

export default [{
    path: 'comandas',
    name: 'card.index',
    component: Index,
    label: 'Comandas',
    menu: true
  },
  {
    path: 'combos/novo',
    name: 'card.store',
    component: Store
  },
  {
    path: 'combos/:combo_id',
    name: 'card.update',
    component: Update
  }
]