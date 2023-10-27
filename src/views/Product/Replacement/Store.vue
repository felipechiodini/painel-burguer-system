<template>
  <b-card class="container my-3">
    <div slot="header">
      <div class="d-flex align-items-center">
        <h5>Nova Substituição</h5>
      </div>
    </div>
    <div>
      <label for="replacement-name">Nome</label>
      <b-input id="replacement-name" v-model="replacement.name"></b-input>
      <label for="replacement-value">Valor</label>
      <b-input id="replacement-value" v-model="replacement.value"></b-input>
    </div>
    <div slot="footer" class="d-flex">
      <b-button class="ml-auto" variant="primary" @click="submit()">Criar Substituição</b-button>
    </div>
  </b-card>
</template>

<script>
import Currency from '@/components/Currency.vue'
import ApiStore from '@/js/ApiStore'

export default {
  components: {
    Currency
  },
  data: () => {
    return {
      replacement: {
        name: null,
        value: null,
      }
    }
  },
  methods: {
    submit() {
      ApiStore.post(`product/${this.$route.params.product_id}/replacements`, this.replacement).then(({ data }) => {
        this.$bvToast.toast(data.message, {
          title: 'Sucesso',
          variant: 'success'
        })
      }).catch(() => {
        this.$bvToast.show('dwad')
      })
    }
  }
}
</script>

<style>

</style>
