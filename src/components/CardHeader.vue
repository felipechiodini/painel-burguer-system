<template>
  <div class="d-flex align-items-center">
    <h5 class="m-0">{{ name }}</h5>
    <b-button class="ml-auto" variant="primary" size="sm" @click="goTo()">{{ name }}</b-button>
  </div>
</template>

<script>
  export default {
    props: ['name', 'to'],
    methods: {
      goTo() {
        this.$router.push({
          name: this.to
        })
      }
    }
  }
</script>
