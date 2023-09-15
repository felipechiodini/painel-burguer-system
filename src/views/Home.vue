<template>
  <div class="d-flex flex-column m-4">
    <div v-if="loading === false">
      <store-status @update="load()" class="mb-4" :status="home.store_status" />
    </div>
    <div v-else>
      <b-spinner></b-spinner>
    </div>
  </div>
</template>

<script>
import StoreStatus from '@/components/StoreStatus.vue'
import Card from '@/components/Utils/Card.vue'
import ApiStore from '@/js/ApiStore'

export default {
  name: 'Home',
  components: {
    StoreStatus,
    Card
  },
  data: () => {
    return {
      home: null,
      loading: true
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      ApiStore.get('home').then(({ data }) => {
        this.home = data.home
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
