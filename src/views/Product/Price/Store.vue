<template>
  <b-card class="m-4 shadow">
    <template #header>
      <div class="d-flex align-items-center">
        <h5>Novo Preço</h5>
      </div>
    </template>
    <label for="">Valor</label>
    <b-input></b-input>
    <template #footer>
      <b-button variant="primary" @click="save()">Criar Preço</b-button>
    </template>
  </b-card>
</template>

<script>
import Api from '@/js/Api'

export default {
  data: () => {
    return {
      price: {
        value: null,
        start: null,
        end: null,
      }
    }
  },
  methods: {
    save() {
      Api.post(`product/${this.$router.product_id}/price`, this.price).then(({ data }) => {
        this.$bvToast.toast(data.message, {
          title: 'Sucesso',
          variant: 'success'
        })
      })
    }
  }
}
</script>

<style>

</style>
