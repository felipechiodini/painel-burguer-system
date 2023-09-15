<template>
  <div>
    <nav-bar />
    <div class="container">
      <div class="d-flex flex-column m-3">
        <div class="d-flex align-items-center mb-3">
          <p class="m-0">Qual loja você desejá administrar?</p>
          <b-button size="sm" class="ml-auto">Nova Loja</b-button>
        </div>
        <template v-if="loading === false">
          <div variant="secondary" class="mb-3 border border-dark shadow p-3 rounded pointer" v-for="(store, key) in stores" :key="key" @click="setStore(store)">
            <span class="mr-2">
              <i class="fas fa-store"></i>
            </span>
            <span>{{ store.name }}</span>
          </div>
        </template>
        <div class="d-flex justify-content-center" v-else>
          <b-spinner />
        </div>
      </div>
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
      stores: [],
      loading: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      Api.get('store/all').then(({ data }) => {
        this.stores = data.stores
      }).finally(() => {
        this.loading = false
      })
    },
    setStore(store) {
      this.$router.push({
        name: 'store.index',
        params: {
          slug: store.slug
        }
      })
    }
  }
}
</script>
