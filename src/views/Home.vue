<template>
  <div class="container-fluid p-3" v-if="home">
    <store-status :status="home.store_status" />
    <div v-for="(chart, key) in home.dashboard.charts" :key="key" class="col-auto border rounded shadow p-3 m-2">
      <h6>{{ chart.name }}</h6>
      <apexchart :type="chart.config.type" :width="chart.config.width" :options="chart.options" :series="chart.series"></apexchart>
    </div>
  </div>
</template>

<script>
import StoreStatus from '@/components/StoreStatus.vue'
import { mapGetters } from 'vuex'
import Api from '@/js/Api'

export default {
  name: 'Home',
  components: {
    StoreStatus,
  },
  data: () => {
    return {
      home: null
    }
  },
  computed: {
    ...mapGetters('store', ['store'])
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      const { data } = await Api.get('home')
      this.home = data
    }
  }
}
</script>
