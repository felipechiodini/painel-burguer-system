<template>
  <b-card>
    <CardHeader slot="header" name="Categoria" path="/categorias/novo" />
    <div class="table-responsive">
      <table class="table w-100 border">
        <tr>
          <th>Name</th>
          <th></th>
        </tr>
        <template v-if="loading === false">
          <tr v-for="(category, key) in page?.data" :key="key">
            <td>{{ category.name }}</td>
            <td class="d-flex">
              <b-button @click="goToEdit(category)" size="sm" variant="dark">
                <i class="fas fa-edit"></i>
              </b-button>
              <b-button @click="showModalDelete(category)" class="ml-1" size="sm" variant="danger">
                <i class="fas fa-trash"></i>
              </b-button>
            </td>
          </tr>
        </template>
      </table>
    </div>
  </b-card>
</template>

<script>
import ApiStore from '@/js/ApiStore'
import CardHeader from '@/components/CardHeader.vue'
import CustomTable from '@/components/CustomTable.vue'

export default {
  name: 'Garçons',
  components: {
    CardHeader,
    CustomTable
  },
  data: () => {
    return {
      page: null,
      loading: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      ApiStore.get('category').then(({ data }) => {
        this.page = data.page
      }).finally(() => {
        this.loading = false
      })
    },
    goToEdit(category) {
      this.$router.push({
        name: 'category.update',
        params: {
          category_id: category.id
        }
      })
    }
  }
}
</script>