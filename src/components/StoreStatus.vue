<template>
  <b-card class="shadow">
    <b-icon icon="circle-fill" :class="open ? 'text-success' : 'text-danger'" />
    <span class="mx-2">{{ label }}</span>
  </b-card>
</template>

<script>
export default {
  props: {
    status: {
      type: String
    }
  },
  computed: {
    open() {
      return this.status === 'open' ? true : false
    },
    label() {
      return this.open ? 'Loja Aberta' : 'Loja Fechada'
    }
  }
}
</script>

<style>

</style>