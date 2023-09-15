<template>
  <div class="row m-0 doawjdowa">
    <div class="col-lg-4 col-md-6 col-sm-12 col-12 p-0 h-100">
        <div class="bg-white py-4 px-md-5 px-3 h-100 shadow-lg">
          <div class="m-md-0 m-5">
            <h1 class="display-4 mb-5">Burguer System</h1>
            <h4 class="mb-4">Entre para administrar</h4>
            <div v-if="mode === 'login'">
              <label class="mb-0" for="email">E-mail</label>
              <b-input id="email" type="email" v-model="email" />
              <label class="mb-0" for="password">Senha</label>
              <b-input id="password" type="password" v-model="password" />
              <b-button class="btn-login w-100 mt-3" :disabled="loging === true" @click="onSubmit()">
                <b-spinner small v-if="loging === true"></b-spinner> Entrar
              </b-button>
              <div class="d-flex flex-column text-center">
                <a class="forget-password my-4 pointer" @click="changeMode('reset-password')">Esqueci minha senha</a>
              </div>
            </div>
            <div v-else>
              <label class="mb-0" for="email">E-mail</label>
              <b-input id="email" type="email" v-model="email" />
              <b-button class="btn-login w-100 mt-3" :disabled="loging === true" @click="onSubmit()">
                <b-spinner small v-if="loging === true"></b-spinner> Enviar
              </b-button>
              <div class="text-center mt-4">
                <a class="forget-password pointer" @click="changeMode('login')">Entrar</a>
              </div>
            </div>
            <div class="mt-3 text-center">
              <span>Ainda não tem acesso? <a class="forget-password pointer" @click="changeMode('reset-password')"> Crie sua conta.</a></span>
            </div>
          </div>
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

<style scoped>

.doawjdowa {
  background-color: #ea8b25;
  height: 100vh;
}

.btn-login {
  padding: .9rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  border-radius: 50px;
}

.forget-password {
  color: #006bc8;
  font-size: 1.1rem;
}

</style>
