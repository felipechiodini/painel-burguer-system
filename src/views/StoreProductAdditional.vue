<template>
  <div>
    <label for="name">Nome</label>
    <b-input id="name" type="text" v-model="replacement.name" />
    <label for="value">Valor</label>
    <b-input id="value" type="text"></b-input>
  </div>
</template>

<script>
import Api from '@/js/Api'

export default {
  data: () => {
    return {
      additional: {
        name: null,
        value: null
      }
    }
  },
  methods: {
    save() {
      Api.post('product/1/additional', this.additional).then(({ data }) => {
        // this.$bvToast.show()
      })
    }
  }
}
</script>

<style>

</style>