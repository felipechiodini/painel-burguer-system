<template>
  <div class="d-flex">
    <b-sidebar bg-variant="white" id="sidebar-left" left shadow>
      <div class="d-flex flex-column p-3">
        <b-button class="mb-2" @click="goTo(item)" v-for="(item, key) in menuItems" :key="key">
          {{ item.label }}
        </b-button>
        <b-button to="/">
          <i class="fa-solid fa-chevron-left"></i>
          Lojas
        </b-button>
      </div>
    </b-sidebar>
    <div class="w-100">
      <nav-bar />
      <router-view class="m-4" />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  data: () => {
    return {
      stores: []
    }
  },
  computed: {
    menuItems() {
      return this.$router.options.routes[1].children.filter(route => route.menu)
    }
  },
  methods: {
    goTo(option) {
      this.$router.push({
        name: option.name
      })
    }
  }
}
</script>
