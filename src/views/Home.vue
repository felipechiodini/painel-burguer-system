<template>
  <div class="container-fluid p-3" v-if="home">

    <div class="d-flex">
      <store-status class="border bg-white rounded shadow p-3 mx-2" :status="home.store_status" />

      <div v-for="(chart, key) in home.dashboard.charts" :key="key" class="border bg-white rounded shadow p-4">
        <h6>{{ chart.name }}</h6>
        <apexchart :type="chart.config.type" :width="chart.config.width" :options="chart.options" :series="chart.series"></apexchart>
      </div>

    </div>

  </div>
</template>

<script>
import StoreStatus from '@/components/StoreStatus.vue'
import { mapGetters } from 'vuex'
import Api from '@/js/Api'
import Echo from 'laravel-echo'

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
    // Echo.private(`teste`)
    //   .notification((notification) => {
    //       console.log('Nova notificação:', notification);
    //       // Lidar com a notificação recebida no frontend
    //   });
      
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
