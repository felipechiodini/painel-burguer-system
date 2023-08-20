<template>
  <div class="table-responsive">
    <table class="table w-100 border">
      <slot name="header" />
      
      <slot name="table" />
      
    </table>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>