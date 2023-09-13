<template>
  <div class="container" style="height: 100vh;">
    <div class="d-flex flex-column justify-content-center align-items-center h-100">
      <template v-if="mode === 'login'">
        <div class="text-center bg-white p-5 w-100 shadow" style="max-width: 450px;">
          <span class="text-muted">Entre com suas credenciais</span>
          <div @keypress.enter="onSubmit()">
            <b-input class="my-2" placeholder="Email" type="email" v-model="email" />
            <b-input class="my-2" placeholder="Senha" type="password" v-model="password" />
            <b-button variant="primary" type="submit" class="bg-gradient-live w-100" :disabled="loging === true" @click="onSubmit()">
              <b-spinner small v-if="loging === true"></b-spinner> Entrar
            </b-button>
            <b-button variant="secondary" class="w-100 mt-2" to="/criar-conta">Criar Conta</b-button>
          </div>
        </div>
        <div class="mt-3">
          <a class="pointer" @click="changeMode('reset-password')">Esqueci minha senha.</a>
        </div>
      </template>
      <template v-else>
        <div class="text-center bg-white p-5 w-100 shadow" style="max-width: 450px;">
          <span class="text-muted">Informe seu e-mail</span>
          <div @keypress.enter="sendMailChangePassword()">
            <b-input class="my-2" placeholder="Email" type="email" v-model="email" />
            <b-button variant="primary" type="submit" class="bg-gradient-live w-100" :disabled="loging === true" @click="sendMailChangePassword()">
              <b-spinner small v-if="loging === true"></b-spinner> Enviar
            </b-button>
          </div>
        </div>
        <div class="mt-3">
          <a class="pointer" @click="changeMode('login')">Entrar.</a>
        </div>
      </template>
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
      loging: false,
      mode: 'login'
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
    sendMailChangePassword() {
      this.setLoging(true)

      Api.post('mail-reset-password', { email: this.email }).then(({ data }) => {
        this.$bvToast.toast(data.message, {
          title: 'Sucesso',
          variant: 'success',
          autoHideDelay: 5000,
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
    changeMode(mode) {
      this.mode = mode
    }
  }
}
</script>
