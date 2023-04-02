<template>
  <b-navbar class="bg-white border-bottom">
    <b-button size="sm" v-b-toggle.sidebar><b-icon icon="justify"></b-icon></b-button>
    <b-form-select size="sm" class="w-25 ml-auto" @change="loadStore" v-model="selectedStore" :options="stores" text-field="name" value-field="id" />
    <b-button size="sm" class="ml-2" to="perfil"><b-icon icon="person-fill" aria-hidden="true"></b-icon></b-button>
  </b-navbar>
</template>

<script>
import Api from '@/js/Api'
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      stores: [],
      selectedStore: null
    }
  },
  computed: {
    ...mapGetters('store', ['store'])
  },
  mounted() {
    this.load()
  },
  methods: {
    ...mapActions('store', ['loadStore']),
    async load() {
      const { data } = await Api.get('store')
      this.stores = data
      this.selectedStore = this.store.id
    }
  }
}
</script>
