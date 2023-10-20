<template>
  <div class="sidebar">
    <div class="order" v-for="(order, key) in orders" :key="key">
      <div class="header">
        <span>{{ order.customer.name }}</span>
        <span>#{{ order.id }}</span>
        <span>{{ order.made_at }}</span>
        <span class="badge">Entrega</span>
      </div>
      <span>Aguardando confirmação</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'manager-side-bar',
    data: () => {
      return {
        orders: [{
          id: 38912,
          made_at: '18:00',
          customer: {
            name: 'Felipe C.'
          }
        }]
      }
    }
  }

</script>

<style scoped>
  .sidebar::-webkit-scrollbar {
    display: none;
  }

  .sidebar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    width: 500px;
    background-color: #fff;
    height: 90vh;
    box-shadow: 5px 1px 5px #ccc;
    overflow-y: auto;
  }

  .sidebar .order {
    display: flex;
    background-color: #fff;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    padding: 1rem;
  }

  .sidebar .order.active {
    background-color: #e2e2e2;
  }

  .sidebar .order:hover {
    background-color: #f1f1f1;
  }

  .sidebar .order .header * {
    margin-right: 1rem;
  }


  .badge {
    border: none;
    border-radius: 25px;
    padding: 5px 10px;
    font-size: .8rem;
    background-color: var(--primary);
    color: #fff;
    font-weight: bold;
  }

</style>
