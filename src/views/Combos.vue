<template>
  <div class="container my-4">
    <h5 class="mb-4">Combos</h5>
    <b-button class="py-1 px-2" variant="primary"><b-icon icon="plus"></b-icon> Novo Combo</b-button>
    <div class="row align-items-center shadow m-3 border rounded p-1 py-2" v-for="(waiter, key) in page.data" :key="key">
      <div class="col-3">
        <h3>{{ waiter.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/Axios/Api'

export default {
  name: 'Combos',
  data: () => {
    return {
      page: null
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      try {
        const { data } = await Api.get('/combo')
        this.page = data
      } catch (error) {
        this.$bvToast.toast(`Toast with action link`, {
          href: '#foo',
          title: 'Example'
        })
      }
    }
  }
}
</script>

<style scoped>

  .image {
    object-fit: cover;
  }

</style>