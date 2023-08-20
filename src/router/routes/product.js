import Index from '@/views/Product/Index.vue'
import Store from '@/views/Product/Store.vue'
import Update from '@/views/Product/Update.vue'

export default [{
    path: 'produtos',
    name: 'product.index',
    component: Index,
    label: 'Produtos',
    menu: true
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