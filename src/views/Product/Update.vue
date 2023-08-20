<template>
  <div class="container">
    <b-card class="shadow my-3">
      <template v-if="loading === false">
        <div class="row mb-2">
          <div class="col-auto">
            <label for="product-active">Ativo</label>
            <b-form-checkbox id="product-active" switch v-model="product.active"></b-form-checkbox>
          </div>
          <div class="col">
            <label for="product-name">Nome</label>
            <b-input size="sm" id="product-name" v-model="product.name" />
          </div>
        </div>
        <label for="product-description">Descrição</label>
        <b-textarea id="product-description" rows="5" v-model="product.description"></b-textarea>
      </template>
      <template v-else>
        <b-icon icon="spin"></b-icon>
      </template>
      <template #footer>
        <b-button class="d-flex ml-auto" size="sm" variant="primary" @click="save()">Salvar</b-button>
      </template>
    </b-card>

    <b-card class="shadow mb-3">
      <template #header>
        <div class="d-flex align-items-center">
          <span>Imagens</span>
          <b-button class="ml-auto" variant="primary" size="sm">Nova Imagem</b-button>
        </div>
      </template>
      <div class="table-responsive">
        <table class="w-100">
          <tr>
            <th>Image</th>
            <th>Ordem</th>
          </tr>
          <tr v-for="(image, key) in images" :key="key">
            <td><img :src="image.src"></td>
            <td>{{ image.order }}</td>
          </tr>
        </table>
      </div>
    </b-card>

    <b-card class="shadow mb-3">
      <template #header>
        <div class="d-flex align-items-center">
          <h5>Adicionais</h5>
          <b-button class="ml-auto" variant="primary" size="sm" :to="'product/1/substituicao/nova'">Novo Adicional</b-button>
        </div>
      </template>
      <div class="table-responsive">
        <table class="w-100">
          <tr>
            <th>Nome</th>
            <th></th>
          </tr>
          <tr v-for="(replacement, key) in replacements" :key="key">
            <td>{{ replacement.name }}</td>
            <td>{{ replacement.value }}</td>
          </tr>
        </table>
      </div>
    </b-card>

    <b-card class="shadow mb-3">
      <template #header>
        <div class="d-flex align-items-center">
          <h5>Substituições</h5>
          <b-button class="ml-auto" variant="primary" size="sm" :to="'product/1/substituicao/nova'">Nova Substituição</b-button>
        </div>
      </template>
      <div class="table-responsive">
        <table class="w-100">
          <tr>
            <th>Nome</th>
            <th>Substituição</th>
          </tr>
          <tr v-for="(replacement, key) in replacements" :key="key">
            <td>{{ replacement.name }}</td>
            <td>{{ replacement.value }}</td>
          </tr>
        </table>
      </div>
    </b-card>

    <b-card class="shadow mb-3">
      <template #header>
        <div class="d-flex align-items-center">
          <span>Preços</span>
          <b-button class="ml-auto" variant="primary" size="sm">Novo Preço</b-button>
        </div>
      </template>
      <table>
        <tr>
          <th>Preço</th>
        </tr>
        <tr>
          <td>{{ 20 }}</td>
        </tr>
      </table>
    </b-card>

  </div>
</template>

<script>
import Api from '@/js/Api'

export default {
  components: {

  },
  data: () => {
    return {
      product: {
        active: null,
        name: null,
        description: null
      },
      images: [{ order: 'fleipe', src: 'teste.jpg' }],
      replacements: [{ order: 'fleipe', src: 'teste.jpg' }],
      loading: false,
      prices: null,
      mode: null
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      let idProduct = this.$route.params.id ?? null

      if (idProduct) {
        this.loading = true
        this.mode = 'edit'
        Api.get(`products/${idProduct}`).then(({ data }) => {
          this.product = data
          this.loadPrice()
        }).finally(() => {
          this.loading = false
        })
      } else {
        this.mode = 'store'
      }
    },
    loadPrice() {
      Api.get(`products/${this.$route.params.id}/prices`).then(({ data }) => {
        this.prices = data
      }).catch((error) => {

      })
    },
    async save() {
      const { data } = await Api.put(`products/${this.$route.params.id}`, {
        active: this.product.active,
        name: this.product.name,
        description: this.product.description,
      })

      this.$bvToast.toast(data.message, {
        title: 'Sucesso',
        variant: 'success'
      })

    }
  }
}
</script>
