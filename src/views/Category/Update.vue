<template>
  <b-card>
    <template #header>
      <div class="d-flex align-items-center">
        <h5 class="m-0">Editando Categoria</h5>
      </div>
    </template>
    <template v-if="loading === false">
      <label for="category-name">Nome</label>
      <b-input id="category-name" v-model="category.name"></b-input>
    </template>
    <div class="d-flex justify-content-center" v-else>
      <b-spinner></b-spinner>
    </div>
    <div class="d-flex" slot="footer">
      <b-button class="ml-auto" variant="primary" @click="save()">Salvar</b-button>
    </div>
  </b-card>
</template>

<script>
import ApiStore from '@/js/ApiStore'

export default {
  data: () => {
    return {
      category: null,
      loading: true
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      ApiStore.get(`category/${this.$route.params.category_id}`).then(({ data }) => {
        this.category = data.category
      }).finally(() => {
        this.loading = false
      })
    },
    save() {
      ApiStore.put(`category/${this.$route.params.category_id}`, this.category).then(({ data }) => {
        this.$bvToast.toast(data.message, {
          title: 'Sucesso',
          variant: 'success'
        })
      })
    }
  }
}
</script>
