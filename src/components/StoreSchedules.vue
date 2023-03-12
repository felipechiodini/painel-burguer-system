<template>
  <div class="row">
    <div class="col-2" v-for="(weeDay, key) in weekDays" :key="key">
      <h5>{{ weeDay }}</h5>
      <b-form-checkbox switch>Fechado</b-form-checkbox>
      <label for="">Abre</label>
      <b-input type="time"></b-input>
      <label for="">Fecha</label>
      <b-input type="time"></b-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoreSchedules',
  data: () => {
    return {
      weekDays: ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo']
    }
  }
}
</script>

<style>

</style>