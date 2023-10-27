<template>
  <b-navbar variant="primary">
    <b-button v-b-toggle.sidebar-left variant="transparent" class="text-white p-0">
      <b-icon icon="list"></b-icon>
    </b-button>
    <span class="text-white ml-auto mr-3">{{ store?.name }}</span>
    <b-button v-b-toggle.sidebar-right size="sm" variant="transparent" class="mr-3 p-0 text-white">
      <b-icon icon="bell-fill"></b-icon>
    </b-button>
    <b-button variant="transparent" class="circle p-0" to="/perfil">
      <b-avatar class="pointer" src="https://placekitten.com/300/300" size="2rem" />
    </b-button>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      store: 'store/store'
    })
  }
}
</script>
