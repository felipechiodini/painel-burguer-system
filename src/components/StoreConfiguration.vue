<template>
  <div class="row">
    <div class="col-6">
      <label for="warning">Aviso</label>
      <b-input id="warning" v-model="configuration.warning"></b-input>
      <label for="min-value-order">Valor mínimo do pedido</label>
      <b-input id="min-value-order" type="number" v-model="configuration.minimum_order_value"></b-input>
      <label for="allow_withdrawal">Permitir Retirada</label>
      <b-form-checkbox id="allow_withdrawal" switch v-model="configuration.allow_withdrawal"></b-form-checkbox>
      <label for="withdrawal_time">Tempo médio para retirada em minutos</label>
      <b-input id="withdrawal_time" type="number" v-model="configuration.withdrawal_time"></b-input>
      <label for="delivery_time">Tempo médio para entrega em minutos</label>
      <b-input id="delivery_time" type="number" v-model="configuration.delivery_time"></b-input>
      <label for="delivery_time">Valor por kilômetro da entrega do pedido</label>
      <b-input id="delivery_time" type="number" v-model="configuration.delivery_price_per_km"></b-input>
      <b-button @click="save()">Salvar</b-button>
    </div>
  </div>
</template>

<script>
import Api from '@/js/Api'

export default {
  name: 'StoreConfiguration',
  data: () => {
    return {
      configuration: null
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      const { data } = await Api.get('/configuration')
      this.configuration = data
    },
    async save() {
      const { data } = await Api.post('/configuration', this.configuration)

      this.$bvToast.toast(data.message, {
        title: 'Sucesso',
        variant: 'success'
      })
    }
  }
}
</script>

<style>

</style>