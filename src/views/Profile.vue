<template>
  <div class="container my-3">
    <h4>Minha Assinatura</h4>
    <h5>Plano: Básico</h5>
    <h5>Valor: 50</h5>
    <h5>Status: Ativa</h5>
    <h5>Expira em: 31/31/2026 00:00:00</h5>

    <b-button @click="logout()">Sair</b-button>
  </div>
</template>

<script>
import Api from '@/js/Api'
import Storage from '@/js/Storage'

export default {
  name: 'Subscription',
  mounted() {
    this.loadOrders()
  },
  methods: {
    loadOrders() {
      
    },
    logout() {
      Api.post('auth/logout').then(() => {
        Storage.clear('token')
        this.$router.push({ name: 'login' })
      })
    }
  }
}




</script>