<template>
  <div class="container">
    <div class="row">
      <store-status :status="data.store_status"></store-status>
      <div class="col">
        <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
      </div>
    </div>
  </div>
</template>


<script>
import Api from '@/Axios/Api'
import StoreStatus from '@/components/StoreStatus.vue'

export default {
  name: 'Home',
  components: {
    StoreStatus
  },
  data: () => {
    return {
      data: null,

      options: {
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]


    }
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      const { data } = await Api.get('home')
      this.data = data
    }
  }
}
</script>
