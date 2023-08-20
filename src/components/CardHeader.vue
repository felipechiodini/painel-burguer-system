<template>
  <div class="d-flex">
    <h5>{{ name }}</h5>
    <b-button class="ml-auto" variant="primary" size="sm" :to="path">Novo {{ name }}</b-button>
  </div>
</template>

<script>
  export default {
    props: ['name', 'path']
  }
</script>
