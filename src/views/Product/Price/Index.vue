<template>
  <b-card class="mb-3">
    <div class="d-flex align-items-center" slot="header">
      <h5 class="m-0">Preço</h5>
      <b-button class="ml-auto" variant="primary" size="sm" @click="store()">Editar</b-button>
    </div>
    <div class="table-responsive">
      <table class="table border w-100">
        <tr>
          <th>Preço</th>
        </tr>
        <tr v-for="(price, key) in page?.data" :key="key">
          <td>{{ currency(price.value) }}</td>
        </tr>
      </table>
    </div>
  </b-card>
</template>

<script>
import ApiStore from '@/js/ApiStore'

export default {
  data: () => {
    return {
      page: null
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      ApiStore.get(`product/${this.$route.params.product_id}/prices`).then(({ data }) => {
        this.page = data.page
      })
    },
    store() {
      this.$router.push({
        name: 'photo.store',
        params: {
          product_id: this.$route.params.product_id
        }
      })
    }
  }
}
</script>
