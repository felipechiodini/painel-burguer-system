<template>
  <div>
    <label for="">Nome da Loja</label>
    <b-input type="text" />
    <b-button @click="create()">Criar</b-button>
  </div>
</template>

<script>
import Api from '@/js/Api'
export default {

  data: () => {
    return {
      store: {
        name: null
      }
    }
  },
  methods: {
    create() {
      this.loading = true
      Api.post('store', this.store).then(({ data }) => {
        this.$bvToast.show({ title: 'Criado com sucesso' })
      }).finally(() => {
        this.loading = true
      })
    }
  }
}
</script>

<style>

</style>
