<template>
  <div class="bg-dark sidebar" :class="{'collapsed': collapsed}">
    <div class="d-flex flex-column p-2">
      <b-button variant="transparent" to="/produtos" class="custom-button">
        <b-icon icon="cart-fill"></b-icon>
        <span>Produtos</span>
      </b-button>
      <b-button variant="transparent" to="/produtos">
        <b-icon class="text-white" icon="gear-fill"></b-icon>
        <!-- <span>Produtos</span> -->
      </b-button>
      <b-button variant="transparent" to="/produtos">
        <b-icon icon="gear-fill"></b-icon>
        <!-- <span>Produtos</span> -->
      </b-button>
      <b-button variant="transparent" to="/produtos">
        <b-icon icon="gear-fill"></b-icon>
        <!-- <span>Produtos</span> -->
      </b-button>
      <b-button variant="transparent" to="/produtos">
        <b-icon icon="gear-fill"></b-icon>
        <!-- <span>Produtos</span> -->
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    toggleSidebar() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>

<style lang="scss" scoped>

.sidebar {
  height: 100vh;
  background-color: #fff;
  // z-index: 1;
  transition: width 0.3s ease-in-out;
}

.sidebar-body {
  width: 100%;
}

</style>
