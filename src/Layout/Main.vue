<template>
  <div class="d-flex">
    <b-sidebar bg-variant="white" id="sidebar-left" left shadow>
      <div class="d-flex flex-column p-3">
        <b-form-select class="mb-2" :options="stores" text-field="name" value-field="id" />
        <b-button class="mb-2" :to="'/' + item.path" v-for="(item, key) in menuItems" :key="key">
          {{ item.label }}
        </b-button>
      </div>
    </b-sidebar>
    <div class="w-100">
      <nav-bar />
      <router-view class="m-4" />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Api from '@/js/Api'

export default {
  components: {
    NavBar
  },
  data: () => {
    return {
      stores: []
    }
  },
  computed: {
    menuItems() {
      return this.$router.options.routes[0].children.filter(route => route.menu)
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      Api.get('store/all').then(({ data }) => {
        this.stores = data.stores
      })
    },
    setStore(store) {
      this.$router.push({
        name: 'store.index',
        params: {
          store_slug: store.slug
        }
      })
    }
  }
}
</script>
