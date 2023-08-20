<template>
  <b-card class="m-3 shadow">
    <div class="d-flex align-items-center" slot="header">
      <h5 class="m-0">Produtos</h5>
      <b-button class="ml-auto" variant="primary" size="sm" to="produtos/novo">Novo Produto</b-button>
    </div>
    <div class="table-responsive">
      <table class="table w-100 border">
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
        </tr>
        <template v-if="loading === false && error === false">
          <tr v-for="(product, key) in page?.data" :key="key">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td class="d-flex">
              <b-button @click="goToEdit(product)" size="sm" variant="dark"><i class="fas fa-edit"></i></b-button>
              <b-button @click="showModalDelete(product)" class="ml-1" size="sm" variant="danger"><i class="fas fa-trash"></i></b-button>
            </td>
          </tr>
        </template>
      </table>
    </div>
    <modal-delete name="produto" :path="`product/${selectedProduct?.id}`"></modal-delete>
  </b-card>
</template>

<script>
import ModalDelete from '@/components/ModalDelete.vue'
import Api from '@/js/Api'

export default {
  components: {
    ModalDelete
  },
  data: () => {
    return {
      page: null,
      loading: false,
      error: false,
      selectedProduct: null
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      Api.get('products').then(({ data }) => {
        this.page = data.page
      }).catch(() => {
        this.error = true
      }).finally(() => {
        this.loading = false
      })
    },
    showModalDelete(product) {
      this.selectedProduct = product
      this.$bvModal.show('modal-delete')
    },
    goToEdit(product) {
      this.$router.push({
        name: 'product.update',
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