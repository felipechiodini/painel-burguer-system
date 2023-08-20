<template>
  <b-card>
    <label for="combo-name">Nome</label>
    <b-input id="combo-name" v-model="category.name"></b-input>
    <template #footer>
      <b-button variant="primary" @click="save()">Criar</b-button>
    </template>
  </b-card>
</template>

<script>
import Api from '@/js/Api'

export default {
  data: () => {
    return {
      category: {
        name: null
      }
    }
  },
  methods: {
    save() {
      Api.post('category', this.category).then(({ data }) => {
        this.$bvToast.toast(data.message, {
          title: 'Sucesso',
          variant: 'success'
        })
      })
    }
  }
}
</script>

<style>

</style>