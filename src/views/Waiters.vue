<template>
  <div class="container my-4">
    <h5 class="mb-4">Garçons</h5>
    <b-button class="py-1 px-2" variant="primary"><b-icon icon="plus"></b-icon> Novo Garçom</b-button>

    <div class="row align-items-center shadow m-3 border rounded p-1 py-2" v-for="(product, key) in products" :key="key">
      <div class="col-auto">
        <b-img class="rounded image" height="60" width="60" :src="product.src" alt="" />
      </div>
      <div class="col-3">
        <h5>{{ product.name }}</h5>
      </div>
      <div class="col-3">
        <span>Pedidos: <b>{{ product.orders }}</b></span>
      </div>
      <div class="col">
        <b-button class="py-1 px-2" variant="primary"><b-icon icon="pencil"></b-icon></b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Waiters',
  data: () => {
    return {
      products: [
        { name: 'Felipe', price: 20, orders: 3, src: 'https://cdn-icons-png.flaticon.com/512/306/306011.png' },
        { name: 'Fabio', price: 20, orders: 3, src: 'https://cdn-icons-png.flaticon.com/512/306/306011.png' },
        { name: 'Gustavo', price: 20, orders: 3, src: 'https://cdn-icons-png.flaticon.com/512/306/306011.png' },
        { name: 'Camila', price: 20, orders: 3, src: 'https://cdn-icons-png.flaticon.com/512/306/306011.png' },
      ]
    }
  },
  mounted() {
    this.loadOrders()
  },
  methods: {
    loadOrders() {
      
      
    }
  }
}
</script>

<style scoped>

  .image {
    object-fit: cover;
  }

</style>