<template>
  <div class="d-flex">
    <b-sidebar bg-variant="white" id="sidebar-left" left shadow>
      <div class="d-flex flex-column p-3">
        <b-button class="mb-2" :to="item.path" v-for="(item, key) in menuItems" :key="key">{{ item.label }}</b-button>
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
  },
  computed: {
    menuItems() {
      return this.$router.options.routes[0].children.filter(route => route.menu)
    }
  }
}
</script>
