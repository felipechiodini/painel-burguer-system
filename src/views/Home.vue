<template>
  <div class="container">
    <div v-if="loading === false">
      <!-- <store-status @update="load()" class="mb-4" :status="home.store_status" /> -->

      <div class="dwaoifjwaoifwa">
        <div class="fpoawkopfawj">
          <span>Pedidos Em aberto</span>
          <h5>5</h5>
        </div>

        <div class="fpoawkopfawj">
          <span>Pedidos Finalizados</span>
          <h5>2</h5>
        </div>

        <div class="fpoawkopfawj">
          <span>Faturado</span>
          <h5>{{ currency(589) }}</h5>
        </div>

        <div class="fpoawkopfawj">
          <span>Ticket Médio</span>
          <h5>{{ currency(45) }}</h5>
        </div>

        <div class="fpoawkopfawj">
          <span>Mais Vendido</span>
          <h5>Plankton</h5>
        </div>

        <div class="fpoawkopfawj">
          <span>Novos Clientes</span>
          <h5>5</h5>
        </div>

      </div>


    </div>
    <div v-else>
      <b-spinner></b-spinner>
    </div>
  </div>
</template>

<script>
  import StoreStatus from '@/components/StoreStatus.vue'
  import Card from '@/components/Utils/Card.vue'
  import ApiStore from '@/js/ApiStore'

  export default {
    name: 'Home',
    components: {
      StoreStatus,
      Card
    },
    data: () => {
      return {
        home: null,
        loading: false
      }
    },
    mounted() {
      // this.load()
    },
    methods: {
      load() {
        this.loading = true
        ApiStore.get('home').then(({
          data
        }) => {
          this.home = data.home
        }).finally(() => {
          this.loading = false
        })
      },
      currency(val){
        return val.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      }

    }
  }

</script>

<style scoped>

  .dwaoifjwaoifwa {
    display: flex;
    flex-wrap: wrap;
  }

  .fpoawkopfawj {
    display: flex;
    background-color: var(--primary);
    color: var(--light);
    justify-content: center;
    flex-direction: column;
    margin-right: 1rem;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 1px 0 5px #ccc;
    margin-bottom: 1rem;
  }

  .fpoawkopfawj h5 {
    font-size: 2rem;
  }

</style>
