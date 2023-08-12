<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh;" @keypress.enter="login()">
    <div class="row shadow-lg p-4 mx-3 bg-white rounded">
      <div class="col-12 p-0">
        <label class="m-0" for="email">E-mail</label>
        <b-input id="email" v-model="form.email"></b-input>
      </div>
      <div class="col-12 p-0 mt-3">
        <label class="m-0" for="password">Senha</label>
        <b-input id="password" type="password" v-model="form.password"></b-input>
      </div>
      <b-button class="w-100 mt-3" variant="danger" @click="login()">Entrar</b-button>
      <b-button class="w-100 mt-3" @click="goToRegister()">Crie sua conta, é grátis</b-button>
      <a @click="recoveryPassword()">Esqueci a senha</a>
    </div>
  </div>
</template>

<script>
import Api from '@/js/Api'
import Storage from '@/js/Storage'

export default {
  name: 'Auth',
  data: () => {
    return {
      form: {
        email: null,
        password: null
      },
      loading: false
    }
  },
  methods: {
    login() {
      this.loading = true
      Api.post('auth/login', this.form).then(({ data }) => {
        Storage.set('token', data.access_token)
        this.$router.push({ name: 'home' })
      }).catch((error) => {
        this.$bvToast.toast(error.data?.message ?? 'Ocorreu um erro', {
          title: 'Erro',
          variant: 'danger'
        })
      }).finally(() => {
        this.loading = false
      })
    },
    goToRegister() {
      this.$router.push({
        name: 'auth.register'
      })
    },
    recoveryPassword() {
      Api.post('').then(({ data }) => {
        this.$bvToast.toast(data.message, {
          title: 'Sucesso',
          variant: 'sucess'
        })
      })
    }
  }
}
</script>
