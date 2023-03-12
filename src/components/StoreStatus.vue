<template>
  <div>
    <b-icon icon="circle-fill" :class="status ? 'text-success' : 'text-danger'" />
    <span class="mx-2">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean
    }
  },
  computed: {
    label() {
      return this.status ? 'Loja aberta' : 'Loja fechada'
    }
  }
}
</script>

<style>

</style>