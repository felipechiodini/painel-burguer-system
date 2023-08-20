<template>
  <b-card class="m-4 shadow">
    <template #header>
      <div class="d-flex align-items-center">
        <h5>Novo Produto</h5>
      </div>
    </template>
    <label for="">Nome</label>
    <b-input v-model="product.name"></b-input>
    <label for="">Descrição</label>
    <b-input v-model="product.description"></b-input>
    <template #footer>
      <b-button variant="primary" @click="save()">Criar Produto</b-button>
    </template>
  </b-card>
</template>

<script>
import Api from '@/js/Api'
export default {
  data: () => {
    return {
      product: {
        name: null,
        description: null,
      }
    }
  },
  methods: {
    save() {
      Api.post('product').then(({ data }) => {
        this.$bvToast.toast(data.message)
      })
    }
  }
}
</script>

<style>

</style>