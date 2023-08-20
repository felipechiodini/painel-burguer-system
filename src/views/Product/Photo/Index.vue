<template>
  <b-card>
    <div class="d-flex align-items-center" slot="header">
      <h5>Fotos</h5>
      <b-button class="ml-auto" variant="primary" size="sm" @click="store()">Nova Foto</b-button>
    </div>
    <div class="table-responsive">
      <table class="w-100">
        <tr>
          <th>Nome</th>
          <th>Ordem</th>
        </tr>
        <tr v-for="(page, key) in page?.data" :key="key">
          <td><img :src="page.name" alt=""></td>
          <td>{{ page.order }}</td>
        </tr>
      </table>
    </div>
  </b-card>
</template>

<script>
import Api from '@/js/Api'

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
      Api.get(`products/${this.$route.params.product_id}/photo`).then(({ data }) => {
        this.data = data.page
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

<style>

</style>