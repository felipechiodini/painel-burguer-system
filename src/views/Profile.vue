<template>
  <div class="container my-3">
    <b-button @click="logout()">Sair</b-button>
  </div>
</template>

<script>
import Api from '@/js/Api'
import Storage from '@/js/Storage'

export default {
  name: 'Profile',
  methods: {
    logout() {
      Api.post('auth/logout').then(() => {
        Storage.clear('token')
        this.$router.push({ name: 'login' })
      })
    }
  }
}
</script>