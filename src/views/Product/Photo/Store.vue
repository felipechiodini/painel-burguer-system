<template>
  <b-card class="container my-3">
    <div class="d-flex" slot="header">
      <h6>Nova Foto</h6>
    </div>
    <b-form-file v-model="photo" />
    <div class="d-flex" slot="footer">
      <b-button class="ml-auto" @click="save()">Criar Foto</b-button>
    </div>
  </b-card>
</template>

<script>
import ApiStore from '@/js/ApiStore'

export default {
  data: () => {
    return {
      photo: null
    }
  },
  methods: {
    save() {
      const data = new FormData()
      data.append('photo', this.photo)

      ApiStore.post(`product/${this.$route.params.product_id}/photo`, data, { headers: { 'Content-Type': 'multipart/form-data' } }).then(({ data }) => {
        this.data = data.page
      })
    }
  }

}
</script>
