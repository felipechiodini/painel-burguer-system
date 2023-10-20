<template>
  <div class="order-information">
    <div class="title">
      <h6 class="customer-name">{{ order.customer.name }}</h6>
      <span class="order-number">#{{ order.id }}</span>
      <span class="badge">{{ order.delivery.type.name }}</span>
    </div>
    <div class="box">
      <span>Realizado às: {{ order.made_at }}</span>
      <span>Previsão entrega: 19:00</span>
      <span>{{ order.address.street }}, {{ order.address.number }} - {{ order.address.complement }} - {{ order.address.city }}, CEP: {{ order.address.cep }}</span>
    </div>
    <div class="box">
      <div class="item" v-for="key in 3" :key="key">
        <div class="title">
          <span>1x</span>
          <span>Saint peter ao molho de limão siciliano</span>
          <span class="ml-auto">{{ currency(321) }}</span>
        </div>
        <span class="observation">Não colocar queijo</span>
      </div>
      <div>
        <table class="w-100">
          <tr>
            <td>Total</td>
            <td>{{ currency(12) }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="footer">
      <b-button class="ml-auto">Cancelar</b-button>
      <b-button class="ml-3" @click="dwaaw()">Confirmar</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'manager-content',
  data: () => {
    return {
      order: {
        id: 142,
        made_at: '18:00',
        customer: {
          name: 'Felipe C.'
        },
        delivery: {
          type: {
            name: 'Entrega'
          }
        },
        address: {
          cep: 89253390,
          street: 'Arthur Gonçalvez de Araújo',
          number: 423,
          complement: 'dwaopdopwa',
          city: 'Jaraguá do Sul'
        }
      }
    }
  },
  methods: {
    currency(val) {
      return val.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      });
    },
    dwaaw() {

    }
  }
}

</script>

<style scoped>

  .order-information {
    padding: 1rem 2rem;
  }

  .order-information .title {
    display: flex;
    align-items: center;
    line-height: normal;
    margin-bottom: .5rem;
  }

  .order-information .title * {
    margin-right: 1rem;
  }

  .order-information .title .customer-name {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .order-information .box {
    border: 1px solid #ccc;
    background-color: #fff;
    padding: .5rem;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  .box .item {
    border-bottom: 1px solid #ccc;
    padding: 10px;
  }

  .box .item:last-child {
    border: none;
  }

  .box .item .title {
    display: flex;
  }

  .box .item .observation {
    background-color: #ccc;
    padding: .3rem;
    border-radius: 10px;
    font-size: .8rem;
  }

  .footer {
    display: flex;
  }

  .badge {
    border-radius: 10px;
    background-color: var(--primary);
    padding: 5px;
    color: #fff;
    font-weight: normal;
  }

</style>
