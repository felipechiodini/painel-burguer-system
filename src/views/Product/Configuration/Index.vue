<template>
  <b-card>
    <template #header>
      <div class="d-flex align-items-center">
        <h5 class="m-0">Configuração</h5>
      </div>
    </template>
    <div v-if="configuration">
      <label for="max_number_additionals">Máximo de adicionais</label>
      <b-input id="max_number_additionals" type="text" v-model="configuration.max_number_additionals" />
      <label for="max_number_replacements">Máximo de substituições</label>
      <b-input id="max_number_replacements" type="text" v-model="configuration.max_number_replacements" />
      <label for="unit_type">Unidade de medida</label>
      <b-form-select v-model="configuration.unit_type" :options="options" />
    </div>
    <template #footer>
      <b-button class="d-flex ml-auto" size="sm" variant="primary" @click="submit()">Salvar</b-button>
    </template>
  </b-card>
</template>

<script>
import ApiStore from '@/js/ApiStore'

export default {
  data: () => {
    return {
      configuration: null,
      options: [
        { text: 'Gramas', value: 'grams' },
        { text: 'Unidade', value: 'unit' }
      ]
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      ApiStore.get(`product/${this.$route.params.product_id}/configuration`).then(({ data }) => {
        this.configuration = data.configuration
      })
    },
    submit() {
      ApiStore.post(`product/${this.$route.params.product_id}/configuration`, this.configuration).then(({ data }) => {
        this.$bvModal.show({
          title: 'Sucesso',
          message: data.message
        })
      })
    }
  }
}
</script>
