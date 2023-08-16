<template>
  <div class="container my-3">
    <b-button @click="logout()">Sair</b-button>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  methods: {
    logout() {
      localStorage.clear()
      document.location.reload()
    }
  }
}
</script>