<template>
  <div>
    <store-status :status="store.status" />
  </div>
</template>


<script>
import StoreStatus from '@/components/StoreStatus.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    StoreStatus,
  },
  computed: {
    ...mapGetters('store', ['store'])
  }
  
}
</script>
