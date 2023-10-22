<template>
  <div class="container-fluid p-5">
    <b-tabs>
      <b-tab title="Configurações" active>
        <store-configuration></store-configuration>
      </b-tab>
      <b-tab title="Horário de atendimento">
        <store-schedules></store-schedules>
      </b-tab>
      <b-tab title="Endereço">
        <store-address></store-address>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import StoreSchedules from '@/components/StoreSchedules.vue'
import StoreConfiguration from '@/components/StoreConfiguration.vue'
import StoreAddress from '@/components/StoreAddress.vue'

export default {
  name: 'Configuration',
  components: {
    StoreSchedules,
    StoreConfiguration,
    StoreAddress
  }
}
</script>
