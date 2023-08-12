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
      replacement: {
        name: null,
        value: null
      }
    }
  },
  methods: {
    save() {
      Api.post('product/1/replacement', this.replacement).then(({ data }) => {
        // this.$bvToast.show()
      })
    }
  }
}
</script>

<style>

</style>