import Index from '@/views/Products/Index.vue'
import Store from '@/views/Products/Store.vue'
import Update from '@/views/Products/Update.vue'

export default [{
    path: 'produtos',
    name: 'product.index',
    component: Index,
  },
  {
    path: 'produtos/novo',
    name: 'product.new',
    component: Store,
  },
  {
    path: 'produto/:product_id/editar',
    name: 'product.edit',
    component: Update,
  }
]