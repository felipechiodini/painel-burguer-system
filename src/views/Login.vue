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
