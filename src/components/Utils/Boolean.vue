<template>
  <div>
    {{ value ? 'true' : 'false' }}
  </div>
</template>

<script>
export default {
    props: ['value']

}
</script>

<style>

</style>