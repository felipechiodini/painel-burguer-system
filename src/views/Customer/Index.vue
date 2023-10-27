<template>
  <b-card class="container my-3">
    <div class="d-flex align-items-center" slot="header">
      <h5 class="m-0">Clientes</h5>
    </div>
    <div class="table-responsive">
      <table class="table w-100 border">
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Celular</th>
        </tr>
        <template v-if="loading === false && error === false">
          <tr v-for="(order, key) in page?.data" :key="key">
            <td>{{ order.name }}</td>
            <td>{{ order.document }}</td>
            <td>{{ order.cellphone }}</td>
          </tr>
        </template>
      </table>
    </div>
  </b-card>
</template>

<script>
import ApiStore from '@/js/ApiStore'

export default {
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
      ApiStore.get('customer').then(({ data }) => {
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
    goToEdit(customer) {
      this.$router.push({
        name: 'customer.update',
        params: {
          customer_id: customer.id
        }
      })
    }
  }
}
</script>

<style>

</style>
