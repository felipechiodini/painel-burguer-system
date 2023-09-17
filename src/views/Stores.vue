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
          <b-button variant="transparent" class="mb-3 border text-left border-dark shadow p-3 rounded pointer" v-for="(store, key) in stores" :key="key" @click="chooseStore(store)">
            <span class="mr-2">
              <i class="fas fa-store"></i>
            </span>
            <span>{{ store.name }}</span>
          </b-button>
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
import { mapActions } from 'vuex'

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
    ...mapActions('store', ['setStore']),
    load() {
      this.loading = true
      Api.get('store/all').then(({ data }) => {
        this.stores = data.stores
      }).finally(() => {
        this.loading = false
      })
    },
    chooseStore(store) {
      this.setStore(store)

      this.$router.push({
        name: 'store.index',
        params: {
          slug: store.slug
        }
      })

      this.$router.go()
    }
  }
}
</script>
