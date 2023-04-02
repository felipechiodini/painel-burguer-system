<template>
  <div class="container my-4">
    <div class="row my-2">
      <h5 class="col-auto">Produtos</h5>
      <b-button variant="primary" class="ml-auto">Novo Produto</b-button>
    </div>

    <div class="table-responsive">
      <table class="table border rounded">
        <div>
          <b-input placeholder="Pesquisar" class="w-25 my-2"></b-input>
        </div>
        <tr>
          <th>Nome</th>
          <th>Ativo</th>
          <th>Preço</th>
        </tr>
        <tr v-for="(product, key) in page.data" :key="key">
          <td>{{ product.name }}</td>
          <td>true</td>
          <td>{{ product.price }}</td>
        </tr>
        <div>

        </div>
      </table>
    </div>

  </div>
</template>

<script>
import Api from '@/js/Api'

export default {
  name: 'Products',
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
      try {
        const { data } = await Api.get('/product')
        this.page = data
      } catch (error) {
        alert('ocorreu um erro')
      }
    },
    teste(product) {
      this.$router.push({
        name: 'product.new',
      })
    }
  }
}
</script>

<style scoped>

  .image {
    object-fit: cover;
  }

</style>