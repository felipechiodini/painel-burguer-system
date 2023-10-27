import Store from '@/views/Product/Replacement/Store.vue'
import Update from '@/views/Product/Replacement/Update.vue'

export default [
  {
    path: 'produto/:product_id/substituicao/nova',
    name: 'replacement.store',
    component: Store,
  },
  {
    path: 'produto/:product_id/substituicao/:replacement_id',
    name: 'replacement.update',
    component: Update,
  }
]
