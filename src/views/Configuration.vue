<template>
  <div class="container my-3">

    <div>
      <b-tabs content-class="mt-3" >
        <b-tab title="Configurações">
          <label for="warning">Aviso</label>
          <b-input id="warning"></b-input>
          <label for="min-value-order">Valor mínimo do pedido</label>
          <b-input id="min-value-order" type="number"></b-input>
        </b-tab>

        <b-tab title="Retirada">
          <label for="allow_withdrawal">Permitir Retirada</label>
          <b-form-checkbox id="allow_withdrawal" switch></b-form-checkbox>
          <label for="withdrawal_time">Tempo médio para retirada em minutos</label>
          <b-input id="withdrawal_time" type="number"></b-input>
        </b-tab>

        <b-tab title="Entrega">
          <label for="delivery_time">Tempo médio para entrega em minutos</label>
          <b-input id="delivery_time" type="number"></b-input>
        </b-tab>

        <b-tab title="Horário de atendimento">
          <store-schedules></store-schedules>
        </b-tab>
        <b-tab title="Endereço" active>
          <store-address></store-address>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import StoreSchedules from '@/components/StoreSchedules.vue'
import StoreAddress from '@/components/StoreAddress.vue'

export default {
  name: 'Stores',
  components: {
    StoreSchedules,
    StoreAddress
  }
}
</script>