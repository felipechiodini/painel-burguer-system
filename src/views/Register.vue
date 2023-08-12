<template>
  <div class="d-flex align-items-center" style="height: 100vh; width: 100%;">
    <div class="shadow-lg p-4 mx-auto bg-white rounded">
      <label for="">Nome</label>
      <b-input v-model="user.name"></b-input>
      <label for="">Email</label>
      <b-input v-model="user.email"></b-input>
      <label for="">Celular</label>
      <b-input v-model="user.cellphone"></b-input>
      <label for="">Senha</label>
      <b-input type="password" v-model="user.password"></b-input>
      <b-button variant="primary" class="mt-3 w-100" @click="register()">Criar Conta</b-button>
      <b-button class="mt-3 w-100" @click="goToLogin()">Já Possui conta? Entrar</b-button>
    </div>
  </div>
</template>

<script>
import Api from '@/js/Api'

export default {
  data: () => {
    return {
      user: {
        name: null,
        email: null,
        cellphone: null,
        password: null,
      },
      loading: false
    }
  },
  methods: {
    register() {
      this.loading = true
      Api.post('register').then(({ data }) => {
        this.$bvToast.toast(data.message, {
          title: 'Sucesso',
          variant: 'success'
        })
      }).catch((error) => {
        this.$bvToast.toast(error.data?.message ?? 'Ocorreu um erro', {
          title: 'Erro',
          variant: 'danger'
        })
      }).finally(() => {
        this.loading = false
      })
    },
    goToLogin() {
      this.$router.push({
        name: 'auth.login'
      })
    }
  }
}
</script>
