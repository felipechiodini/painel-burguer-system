<template>
  <b-card>
    <template #header>
      <div class="d-flex align-items-center">
        <h5 class="m-0">Substituições</h5>
        <b-button class="ml-auto" variant="primary" size="sm" @click="newReplacement()">Nova Substituição</b-button>
      </div>
    </template>
    <div class="table-responsive">
      <table class="table border w-100">
        <tr>
          <th>Nome</th>
          <th>Valor</th>
        </tr>
        <tr v-for="(replacement, key) in page?.data" :key="key">
          <td>{{ replacement.name }}</td>
          <td>{{ currency(replacement.value) }}</td>
          <td>
            <b-button size="sm" variant="dark"><i class="fas fa-edit"></i></b-button>
            <b-button class="ml-1" size="sm" variant="danger"><i class="fas fa-trash"></i></b-button>
          </td>
        </tr>
      </table>
    </div>
  </b-card>
</template>

<script>
import ApiStore from '@/js/ApiStore'

export default {
  data: () => {
    return {
      page: null
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      ApiStore.get(`product/${this.$route.params.product_id}/replacements`).then(({ data }) => {
        this.page = data.page
      })
    },
    newReplacement() {
      this.$router.push({
        name: 'replacement.store',
        params: {
          product_id: this.$route.params.product_id
        }
      })
    },
  }
}
</script>
