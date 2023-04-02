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
import Echo from "laravel-echo"

export default {
  components: {
    NavBar,
    SideBar,
  }
}

</script>