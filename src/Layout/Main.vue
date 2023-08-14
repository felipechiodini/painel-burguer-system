<template>
  <div class="d-flex">
    <b-sidebar bg-variant="white" id="sidebar-left" left shadow>
      <div class="d-flex flex-column p-3 doawjfiow">
        <b-button to="/">Home</b-button>
        <b-button to="/pedidos">Pedidos</b-button>
        <b-button to="/produtos">Produtos</b-button>
        <b-button to="/combos">Combos</b-button>
      </div>
    </b-sidebar>

    <div class="w-100">
      <nav-bar />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar,
  }
}

</script>

<style scoped>

  .doawjfiow a {
    margin: 5px;
    background-color: black;
  }

</style>