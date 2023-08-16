<template>
  <div class="d-flex align-items-center" style="height: 100vh; width: 100%;">
    <div class="shadow-lg p-4 mx-auto bg-white rounded">
      <b-input class="my-3" placeholder="Nome" v-model="user.name"></b-input>
      <b-input class="my-3" placeholder="Email" v-model="user.email"></b-input>
      <b-input class="my-3" placeholder="Celular" v-mask="'(##) # ####-####'" v-model="user.cellphone"></b-input>
      <b-input class="my-3" placeholder="Senha" type="password" v-model="user.password"></b-input>
      <b-button variant="primary" class="mt-1 w-100" @click="register()">Criar Conta</b-button>
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
      Api.post('register', this.user).then(({ data }) => {
        this.$bvToast.toast(data.message, {
          title: 'Sucesso',
          variant: 'success'
        })

        this.$router.push({
          name: 'auth.login'
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
