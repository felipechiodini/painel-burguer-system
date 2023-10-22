export default {
  methods: {
    currency(val) {
      return val.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })
    },
    translateStatus(status) {
      switch (status) {
        case 1:
          return {
            name: 'Aberto',
            color: 'red'
          }
        case 2:
          return {
            name: 'Preparação',
            color: 'red'
          }
        case 3:
          return {
            name: 'Enviado',
            color: 'wads'
          }
        case 4:
          return {
            name: 'Entregue',
            color: 'red'
          }
        case 5:
          return {
            name: 'Cancelado',
            color: 'red'
          }
      }
    },
    translateDelivery(delivery) {
      switch (delivery) {
        case 1:
          return 'Entrega'
        case 2:
          return 'Retirada'
        case 3:
          return 'Mesa'
      }
    }
  }
}
