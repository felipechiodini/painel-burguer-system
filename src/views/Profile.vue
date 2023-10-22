<template>
  <div class="container fajfwafwa">
    <div class="plan">
      <h6>Meu plano</h6>
      <span>Grátis</span>
    </div>
    <div>
      <b-button @click="logout()">Sair</b-button>
    </div>
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

<style scoped>

  .fajfwafwa {
    display: flex;
    padding: 1rem;
    width: 100%;
    justify-content: space-between;
  }

  .plan {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    padding: 1rem;
    background-color: #fff;
    border-radius: 10px;
  }

  .plan h6 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

</style>
