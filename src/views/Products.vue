<template>
  <div class="container my-4">
    <h5 class="mb-4">Produtos</h5>
    <b-button class="py-1 px-2" variant="primary"><b-icon icon="plus"></b-icon> Novo Produto</b-button>
    <div>
      <label for="">Categoria</label>
    </div>

    <div class="row align-items-center shadow m-3 border rounded p-1 py-2" v-for="(product, key) in products" :key="key">
      <div class="col-auto">
        <b-img class="rounded image" height="60" width="60" :src="product.src" alt="" />
      </div>
      <div class="col-3">
        <h5>{{ product.name }}</h5>
        <span>{{ product.description }}</span>
      </div>
      <div class="col-auto">
        <span>{{ product.price }}</span>
      </div>
      <div class="col-auto mr-auto">
        <b-button><b-icon icon="edit"></b-icon></b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  metaInfo: {
    title: 'Produtos',
  },
  data: () => {
    return {
      products: [
        { name: 'Teste', price: 20, description: 'DESCRICAO', src: 'https://media.cnn.com/api/v1/images/stellar/prod/220428140436-04-classic-american-hamburgers.jpg?c=original' },
        { name: 'Teste', price: 20, description: 'DESCRICAO', src: 'https://media.cnn.com/api/v1/images/stellar/prod/220428140436-04-classic-american-hamburgers.jpg?c=original' },
        { name: 'Teste', price: 20, description: 'DESCRICAO', src: 'https://media.cnn.com/api/v1/images/stellar/prod/220428140436-04-classic-american-hamburgers.jpg?c=original' },
        { name: 'Teste', price: 20, description: 'DESCRICAO', src: 'https://media.cnn.com/api/v1/images/stellar/prod/220428140436-04-classic-american-hamburgers.jpg?c=original' },
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