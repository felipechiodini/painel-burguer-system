<template>
  <b-card class="shadow">
    <div class="d-flex align-items-center">
      <b-icon icon="circle-fill" :class="status ? 'text-success' : 'text-danger'" />
      <span class="mx-2">{{ label }}</span>
      <b-button class="ml-auto" @click="changeStatus()" v-if="status">Fechar</b-button>
      <b-button class="ml-auto" @click="changeStatus()" v-else>Abrir</b-button>
    </div>
  </b-card>
</template>

<script>
import ApiStore from '@/js/ApiStore'
export default {
  props: {
    status: {
      type: Boolean
    }
  },
  computed: {
    label() {
      return this.status ? 'Loja Aberta' : 'Loja Fechada'
    }
  },
  methods: {
    changeStatus() {
      ApiStore.post('store/status', {
        status: !this.status
      }).then(({ data }) => {
        this.$emit('update')
      })
    }
  }
}
</script>
