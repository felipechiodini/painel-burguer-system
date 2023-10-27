<template>
  <div class="container my-3">
    <div class="d-flex align-items-center">
      <b-button @click="$router.back()"><i class="fas fa-arrow-left"></i></b-button>
      <b-breadcrumb class="mb-0 ml-3 bg-white" :items="breadcrumb"></b-breadcrumb>
    </div>
    <b-card class="my-3">
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
      <div class="d-flex justify-content-center" v-else>
        <b-spinner />
      </div>
      <div class="d-flex" slot="footer">
        <b-button class="ml-auto" size="sm" variant="primary" @click="save()">Salvar</b-button>
      </div>
    </b-card>

    <Photo class="mb-3" />
    <Price class="mb-3" />
    <Additional class="mb-3" />
    <Replacement class="mb-3" />
    <Configuration class="mb-3" />

  </div>
</template>

<script>
import ApiStore from '@/js/ApiStore'
import Photo from '@/views/Product/Photo/Index.vue'
import Price from '@/views/Product/Price/Index.vue'
import Additional from '@/views/Product/Additional/Index.vue'
import Replacement from '@/views/Product/Replacement/Index.vue'
import Configuration from '@/views/Product/Configuration/Index.vue'

export default {
  components: {
    Photo,
    Price,
    Additional,
    Replacement,
    Configuration
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
      breadcrumb: [ { text: 'Home', href: '/' }, { text: 'Produtos' } ],
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
      this.loading = true
      this.mode = 'edit'
      ApiStore.get(`product/${this.$route.params.product_id}`).then(({ data }) => {
        this.product = data.product
      }).finally(() => {
        this.loading = false
      })
    },
    save() {
      this.saving = true
      ApiStore.put(`product/${this.$route.params.product_id}`, this.product).then(({ data }) => {
        this.$bvToast.toast(data.message, {
          title: 'Sucesso',
          variant: 'success'
        })
      }).finally(() => {
        this.saving = false
      })
    }
  }
}
</script>
