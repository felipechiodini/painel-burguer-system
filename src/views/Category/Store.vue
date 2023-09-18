<template>
  <b-card>
    <template #header>
      <div class="d-flex align-items-center">
        <h5 class="m-0">Nova Categoria</h5>
      </div>
    </template>
    <label for="category-name">Nome</label>
    <b-input id="category-name" v-model="category.name" />
    <div class="d-flex" slot="footer">
      <b-button class="ml-auto" variant="primary" @click="save()">Criar</b-button>
    </div>
  </b-card>
</template>

<script>
import ApiStore from '@/js/ApiStore'

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
      ApiStore.post('category', this.category).then(({ data }) => {
        this.$bvToast.toast(data.message, {
          title: 'Sucesso',
          variant: 'success'
        })

        this.$router.push({
          name: 'category.index'
        })
      })
    }
  }
}
</script>
