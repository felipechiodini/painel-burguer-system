<template>
  <div>
    <label for="cep">Cep</label>
    <b-input id="cep" v-model="address.cep"></b-input>
    <label for="street">Rua</label>
    <b-input id="street" v-model="address.street"></b-input>
    <label for="">Número</label>
    <b-input v-model="address.number"></b-input>
    <label for="">Bairro</label>
    <b-input v-model="address.district"></b-input>
    <label for="">Cidade</label>
    <b-input v-model="address.city"></b-input>
    <label for="">Estado</label>
    <b-input v-model="address.state"></b-input>
    <label for="">Latitude</label>
    <b-input disabled v-model="address.latitude"></b-input>
    <label for="">Longitude</label>
    <b-input disabled v-model="address.longitude"></b-input>
    <b-button @click="save()">Salvar</b-button>
  </div>
</template>

<script>
import Api from '@/js/Api'

export default {
  name: 'StoreAddress',
  data: () => {
    return {
      address: null
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      const { data } = await Api.get('/address')
      this.address = data
    },
    async save() {
      const { data } = await Api.post('/address', this.address)

      this.$bvToast.toast(data.message, {
        title: 'Sucesso',
        variant: 'success'
      })
    }
  }
}
</script>

<style>

</style>