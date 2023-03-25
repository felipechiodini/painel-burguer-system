<template>
  <b-modal id="select-store" centered title="Selecione uma loja" @show="loadStores()">
    <div>
      <b-button variant="transparent" class="w-100 border" v-for="(store, key) in stores" :key="key" @click="selectStore(store)">
        {{ store.name }}
      </b-button>
    </div>
  </b-modal>
</template>

<script>
import Api from '@/js/Api'
import Storage from '@/js/Storage'

export default {
  data: () => {
    return {
      stores: null
    }
  },
  methods: {
    loadStores() {
      Api.get('store').then(({ data }) => {
        this.stores = data
      })
    },
    selectStore(store) {
      Storage.set('store', store)
      this.$bvModal.hide('select-store')
      document.location.reload()
    }
  }
}
</script>

<style>

</style>