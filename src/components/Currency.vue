<template>
  <b-input type="text" v-model="formattedValue" @input="updateValue" />
</template>

<script>
  export default {
    data() {
      return {
        rawValue: 0, // Valor numérico não formatado
      };
    },
    computed: {
      formattedValue: {
        get() {
          // Formate this.rawValue como um valor de moeda
          return this.formatCurrency(this.rawValue);
        },
        set(newValue) {
          // Convertemos o valor formatado em um valor numérico não formatado
          this.rawValue = this.parseCurrency(newValue);
        },
      },
    },
    methods: {
      formatCurrency(value) {
        // Implemente sua lógica de formatação de moeda aqui
        return value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
      },
      parseCurrency(value) {
        // Implemente sua lógica de conversão de valor formatado para numérico aqui
        return parseFloat(value.replace(/[^\d.,]/g, '').replace(',', '.'));
      },
      updateValue(event) {
        // Atualize o valor bruto com base no evento de entrada
        this.rawValue = this.parseCurrency(event.target.value);
      },
    },
  };
</script>