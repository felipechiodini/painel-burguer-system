<template>
  <div class="container" style="height: 100vh;">
    <div class="d-flex flex-column justify-content-center align-items-center h-100">
      <div class="bg-white rounded p-5 w-100 shadow-lg" style="max-width: 500px;">
        <div class="text-center text-muted mb-4">
          <span>Entre com suas credenciais</span>
        </div>
        <div @keypress.enter="onSubmit()">
          <b-input class="input-group-alternative" placeholder="Email" type="email" v-model="email" />
          <b-input class="input-group-alternative my-2" placeholder="Senha" type="password" v-model="password" />
          <b-button variant="primary" type="submit" class="bg-gradient-live w-100" :disabled="loging === true" @click="onSubmit()">
            <b-spinner small v-if="loging === true"></b-spinner> Entrar
          </b-button>
          <b-button variant="secondary" class="w-100 mt-2" to="/criar-conta">Criar Conta</b-button>
        </div>
      </div>
      <div class="mt-3">
        <span class="pointer" @click="showModalForgetPassword()">Esqueci minha senha.</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Api from '@/js/Api'

export default {
  data: () => {
    return {
      email: null,
      password: null,
      loging: false
    }
  },
  methods: {
    ...mapActions('user', ['setToken', 'setUser']),
    setLoging(value) {
      this.loging = value
    },
    onSubmit() {
      this.setLoging(true)

      Api.post('auth/login', {
        email: this.email,
        password: this.password,
      }).then(({ data }) => {
        this.setToken(data.access_token)
        this.$router.push({ name: 'home' })

        Api.get('auth/me').then(({ data }) => {
          this.setUser(data)
        })
      }).catch((error) => {
        this.$bvToast.toast(error.response.data.error, {
          title: 'Falha',
          variant: 'danger',
          autoHideDelay: 5000,
        })
      }).finally(() => {
        this.setLoging(false)
      })
    },
    showModalForgetPassword() {
      this.$bvModal.show('forgetPassword')
    }
  }
}
</script>
