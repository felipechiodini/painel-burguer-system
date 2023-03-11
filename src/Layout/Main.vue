<template>
  <div>
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  components: {
    NavBar,
    SideBar,
  }
}

</script>