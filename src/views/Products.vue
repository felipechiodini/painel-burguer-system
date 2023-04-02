<template>
  <div class="container my-4">
    <div class="row my-2">
      <h3 class="col-auto">Produtos</h3>
      <b-button variant="primary" class="ml-auto">Novo Produto</b-button>
    </div>

    <div class="row my-2">
      <b-card class="col-auto shadow p-0" style="border-radius: 10px;">
        <h3>Quantidade</h3>
        <h5>50</h5>
      </b-card>
    </div>

    <table-vue></table-vue>
    
  </div>
</template>

<script>
import Api from '@/js/Api'
import TableVue from '@/components/Utils/Table.vue'

export default {
  name: 'Products',
  components: {
    TableVue
  },
  data: () => {
    return {
      page: []
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      try {
        const { data } = await Api.get('/product')
        this.page = data
      } catch (error) {
        alert('ocorreu um erro')
      }
    },
    teste(product) {
      this.$router.push({
        name: 'product.new',
      })
    }
  }
}
</script>

<style scoped>

  .image {
    object-fit: cover;
  }

</style>