<template>
  <b-navbar class="bg-dark">
    <b-button v-b-toggle.sidebar-left variant="transparent" class="text-white p-0">
      <b-icon icon="list"></b-icon>
    </b-button>
    <!-- <b-form-select class="w-25 ml-auto" @change="loadStore" v-model="selectedStore" :options="stores" text-field="name" value-field="id" /> -->
    <b-button v-b-toggle.sidebar-right size="sm" variant="transparent" class="mr-4 p-0 ml-auto text-white">
      <b-icon icon="bell-fill"></b-icon>
    </b-button>
    <b-button variant="transparent" class="circle p-0" to="/perfil">
      <b-avatar class="pointer" src="https://placekitten.com/300/300" size="2rem"></b-avatar>
    </b-button>
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
    // this.load()
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
