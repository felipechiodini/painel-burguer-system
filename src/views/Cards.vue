<template>
  <div class="container my-4">
    <h5 class="mb-4">Comandas</h5>
    <b-button class="py-1 px-2" variant="primary"><b-icon icon="plus"></b-icon> Nova Comanda</b-button>
    <div class="row align-items-center shadow m-3 border rounded p-1 py-2" v-for="(card, key) in page.data" :key="key">
      <div class="col-auto">
        <b-img class="rounded image" height="60" width="60" :src="card.src" alt="" />
      </div>
      <div class="col-3">
        <h5>{{ card.number }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/js/Api'

export default {
  name: 'Cards',
  data: () => {
    return {
      page: []
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      const { data } = await Api.get('/card')
      this.page = data
    }
  }
}
</script>

<style scoped>

  .image {
    object-fit: cover;
  }

</style>