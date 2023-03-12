<template>
  <div class="container my-4">
    <h5 class="mb-4">Produtos</h5>
    <b-button class="py-1 px-2" variant="primary"><b-icon icon="plus"></b-icon> Novo Produto</b-button>
    <div class="row align-items-center shadow m-3 border rounded p-1 py-2" v-for="(product, key) in page.data" :key="key">
      <div class="col-auto">
        <b-img class="rounded image" height="60" width="60" :src="product.photos[0].src" alt="" />
      </div>
      <div class="col-3">
        <h5>{{ product.name }}</h5>
        <span>{{ product.description }}</span>
      </div>
      <div class="col-auto">
        <span>{{ product.price }}</span>
      </div>
      <div class="col-auto mr-auto">
        <b-button variant="primary"><b-icon icon="pencil"></b-icon></b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/js/Api'

export default {
  name: 'Products',
  data: () => {
    return {
      page: null
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      try {
        const { data } = await Api.get('/order')
        this.page = data
      } catch (error) {
        this.$bvToast.toast(`Toast with action link`, {
          href: '#foo',
          title: 'Example'
        })
      }
    }
  }
}
</script>

<style scoped>

  .image {
    object-fit: cover;
  }

</style>