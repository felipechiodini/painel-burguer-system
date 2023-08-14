<template>
  <aside :class="{ 'sidebar-open': isOpen }">
    <div class="sidebar-header">
      Sidebar Header
      <button @click="toggleSidebar">Toggle</button>
    </div>
    <div class="sidebar-content">
      <sidebar-item v-for="(item, index) in sidebarItems" :key="index" :item="item" />
    </div>
  </aside>
</template>

<style scoped>
aside {
  width: 240px;
  height: 100%;
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: -240px;
  transition: left 0.3s ease;
}

.sidebar-open {
  left: 0;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #444;
  font-size: 1.2rem;
}

.sidebar-content {
  padding: 16px;
}

button {
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
}

/* Estilize os demais elementos conforme necessário */
</style>
