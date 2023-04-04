<template>
  <div class="d-flex">
    <side-bar></side-bar>
      <b-sidebar id="sidebar-right" right shadow>
        <div class="px-3 py-2">

          <div class="row border-bottom border-top pointer p-3">
            <div class="row">
              <h5 class="title">Teste</h5>
              <b-button class="ml-auto" size="sm" variant="transparent">
                <b-icon class="text-primary" icon="trash"></b-icon>
              </b-button>
            </div>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit similique quod eaque eius placeat voluptates dolores, minima nemo voluptatibus repudiandae ex earum quos. Officiis aperiam esse laborum, sunt dolorem fugit?</span>
          </div>
          <div class="row border-bottom pointer p-3">
            <h5 class="title">Teste</h5>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit similique quod eaque eius placeat voluptates dolores, minima nemo voluptatibus repudiandae ex earum quos. Officiis aperiam esse laborum, sunt dolorem fugit?</span>
          </div>
          <div class="row border-bottom pointer p-3">
            <h5 class="title">Teste</h5>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit similique quod eaque eius placeat voluptates dolores, minima nemo voluptatibus repudiandae ex earum quos. Officiis aperiam esse laborum, sunt dolorem fugit?</span>
          </div>
         

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
import SideBar from '@/components/SideBar.vue'

export default {
  components: {
    NavBar,
    SideBar
  }
}

</script>

<style scoped>

  .title {
    font-weight: bold;
    margin: 0 0 10px 0;
  }

</style>