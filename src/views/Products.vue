<template>
  <div class="container-fluid px-5">
    <div class="row my-3">
      <h3 class="col-auto" style="font-size: 1.5rem;">Produtos</h3>
      <b-button size="sm" variant="primary" class="ml-auto shadow" to="/produtos/novo">Novo Produto</b-button>
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
    // this.load()
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