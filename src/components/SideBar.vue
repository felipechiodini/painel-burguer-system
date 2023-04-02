<template>
  <div class="sidebar" :class="{'collapsed': collapsed}">
    <div class="sidebar-header">
      <b-button @click="toggleSidebar">
        teste
        <!-- <i :class="{'fa-bars': !collapsed, 'fa-arrow-left': collapsed}"></i> -->
      </b-button>
    </div>
    <div class="sidebar-body">
      <b-button variant="transparent" to="/produtos">
        <b-icon icon="gear-fill"></b-icon>
        <span>Produtos</span>
      </b-button>
      <b-button variant="transparent" to="/produtos">
        <b-icon icon="gear-fill"></b-icon>
        <span>Produtos</span>
      </b-button>
      <b-button variant="transparent" to="/produtos">
        <b-icon icon="gear-fill"></b-icon>
        <span>Produtos</span>
      </b-button>
      <b-button variant="transparent" to="/produtos">
        <b-icon icon="gear-fill"></b-icon>
        <span>Produtos</span>
      </b-button>
      <b-button variant="transparent" to="/produtos">
        <b-icon icon="gear-fill"></b-icon>
        <span>Produtos</span>
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

<style>

.sidebar {
  width: 200px;
  height: 100%;
  position: fixed;
  background-color: #ccc;
  top: 0;
  left: 0;
  z-index: 1;
  transition: width 0.3s ease-in-out;
}

.sidebar-header {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
}

.sidebar-header button {
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}

.sidebar-header i {
  font-size: 24px;
  color: #333;
  transition: transform 0.3s ease-in-out;
}

.sidebar-header i.fa-arrow-left {
  transform: rotate(180deg);
}

.sidebar-body {
  /* padding: 20px; */
  transition: width 0.3s ease-in-out;
}

.sidebar.collapsed {
  width: 70px;
}

.sidebar.collapsed .sidebar-body span {
  display: none;
}

</style>
