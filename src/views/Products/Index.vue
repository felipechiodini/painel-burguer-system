<template>
  <b-card class="m-3 shadow">
    <template #header>
      <div class="d-flex align-items-center">
        <h5>Produtos</h5>
        <b-button class="ml-auto" variant="primary" size="sm" to="produtos/novo">Novo Produto</b-button>
      </div>
    </template>
    <div class="table-responsive">
      <table class="table w-100 border">
        <tr>
          <th>ID</th>
          <th>Foto</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
        </tr>
        <tr v-for="(product, key) in products" :key="key">
          <td>{{ product.name }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td class="d-flex">
            <b-button @click="goToEdit(product)" size="sm" variant="dark"><i class="fas fa-edit"></i></b-button>
            <b-button @click="showModalDelete(product)" class="ml-1" size="sm" variant="danger"><i class="fas fa-trash"></i></b-button>
          </td>
        </tr>
      </table>
    </div>
    <modal-delete name="produto" :path="`product/${selectedProduct?.id}`"></modal-delete>
  </b-card>
</template>

<script>
import ModalDelete from '@/components/ModalDelete.vue'

export default {
  components: {
    ModalDelete
  },
  data: () => {
    return {
      products: [
        { name: 'Teste', description: 'Descrição' },
        { name: 'Teste', description: 'Descrição' },
        { name: 'Teste', description: 'Descrição' },
        { name: 'Teste', description: 'Descrição' },
        { name: 'Teste', description: 'Descrição' },
        { name: 'Teste', description: 'Descrição' },
        { name: 'Teste', description: 'Descrição' },
      ],
      selectedProduct: null
    }
  },
  methods: {
    showModalDelete(product) {
      this.selectedProduct = product
      this.$bvModal.show('modal-delete')
    },
    goToEdit(product) {
      this.$router.push({
        name: 'product.edit',
        params: {
          product_id: product.id
        }
      })
    }
  }
}
</script>

<style>

</style>