<template>
  <router-link :to="item.route" class="sidebar-item">
    <i class="material-icons">{{ item.icon }}</i>
    <span>{{ item.text }}</span>
  </router-link>
</template>

<style scoped>
.sidebar-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.sidebar-item:hover {
  background-color: #444;
}

i.material-icons {
  margin-right: 8px;
}

/* Personalize os estilos conforme necessário */
</style>
