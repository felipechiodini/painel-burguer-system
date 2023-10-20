<template>
  <div class="manager">
    <manager-side-bar />
    <manager-content />
  </div>
</template>

<script>
import ManagerSideBar from './SideBar.vue'
import ManagerContent from './Content.vue'

export default {
  components: {
    ManagerSideBar,
    ManagerContent
  }
}
</script>

<style scoped>

  .manager {
    display: flex;
  }

</style>

