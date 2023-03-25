<template>
  <div class="container-fluid col-md-6 col-12">
    <label for="email">E-mail</label>
    <b-input id="email" v-model="form.email"></b-input>
    <label for="password">Senha</label>
    <b-input id="password" type="password" v-model="form.password"></b-input>
    <b-button class="btn w-100 mt-3 bg-primary" variant="danger" @click="login()">Entrar</b-button>
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
        password: null,
      }
    }
  },
  methods: {
    login() {
      Api.post('auth/login', this.form).then(({ data }) => {
        Storage.set('token', data.access_token)
        this.$router.push({ name: 'home' })
      }).catch(() => {
        alert('Verifique suas credenciais')
      })
    }
  }
}
</script>
