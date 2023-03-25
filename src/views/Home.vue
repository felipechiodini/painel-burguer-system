<template>
  <div class="container">
    <div class="row">
      <h5>Selecione uma loja para gerenciar</h5>
      <b-button @click="showStores()">Ver Lojas</b-button>
    </div>
    <select-store></select-store>
  </div>
</template>


<script>
import Api from '@/js/Api'
import StoreStatus from '@/components/StoreStatus.vue'
import SelectStore from '@/components/SelectStore.vue'

export default {
  name: 'Home',
  components: {
    StoreStatus,
    SelectStore
  },
  data: () => {
    return {
      
    }
  },
  mounted() {
    // this.load()
  },
  methods: {
    async load() {
      const { data } = await Api.get('home')
      this.data = data
    },
    showStores() {
      this.$bvModal.show('select-store')
    }
  }
}
</script>
