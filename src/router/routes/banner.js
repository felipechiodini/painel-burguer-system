import Index from '@/views/Banner/Index.vue'
import Store from '@/views/Banner/Store.vue'
import Update from '@/views/Banner/Update.vue'

export default [{
    path: 'banners',
    name: 'banner.index',
    component: Index,
    label: 'Banners',
    menu: true
  },
  {
    path: 'produtos/novo',
    name: 'banner.store',
    component: Store
  },
  {
    path: 'produto/:banner_id/editar',
    name: 'banner.update',
    component: Update
  }
]