<template>
  <div class="container">
    <h4>Loja</h4>
    <div class="d-flex flex-column align-items-center justify-content-center">
      <b-button variant="primary" class="w-100 border border-primary rounded m-3" v-for="(store, key) in stores" :key="key" @click="setStore(store)">
        <span>{{ store.name }}</span>
      </b-button>
    </div>
  </div>
</template>

<script>
import Api from '@/js/Api'

export default {
  data: () => {
    return {
      stores: []
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
