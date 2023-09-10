<template>
  <div class="d-flex flex-column m-4">
    <store-status class="mb-4" status="open" />

    <div>
      <div class="w-100" ref="map" style="width: 100%; height: 400px;"></div>
    </div>


  </div>
</template>

<script>
import StoreStatus from '@/components/StoreStatus.vue'
import Card from '@/components/Utils/Card.vue'
import { Loader } from '@googlemaps/js-api-loader'

export default {
  name: 'Home',
  components: {
    StoreStatus,
    Card
  },
  data: () => {
    return {
      home: null,
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Vendas',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
    }
  },
  computed: {
    // ...mapGetters('store', ['store'])
  },
  mounted() {
    this.loadMap()
  },
  methods: {
    loadMap() {
      new Loader({
        apiKey: process.env.GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries: ['places']
      }).load().then((google) => {
        const map = new google.maps.Map(this.$refs.map, {
          center: {
            lat: parseFloat(-26.4456024),
            lng: parseFloat(-49.0640873)
          },
          zoom: 11,
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false
        })

        new google.maps.Marker({
          position: {
            lat: parseFloat(-26.4456024),
            lng: parseFloat(-49.0640873)
          },
          map: map,
          title: 'kkkkkkkkkk',
          // animation: google.maps.Animation.BOUNCE,

        });
      })
    },

  }
}
</script>
