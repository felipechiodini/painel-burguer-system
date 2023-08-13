<template>
  <b-card class="m-4 shadow">
    <template #header>
      <div class="d-flex align-items-center">
        <h5>Produtos</h5>
        <b-button class="ml-auto" variant="primary" size="sm" to="produtos/novo">Novo Produto</b-button>
      </div>
    </template>
    <div class="p-3 table-responsive">
      <table class="table w-100 border">
        <tr>
          <th>ID</th>
          <th>Foto</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
        </tr>
        <tr v-for="(product, key) in products" :key="key">
          <td>{{ product.name }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>
            <b-button size="sm" variant="dark"><i class="fas fa-edit"></i></b-button>
            <b-button class="ml-1" size="sm" variant="danger"><i class="fas fa-trash"></i></b-button>
          </td>
        </tr>
      </table>
    </div>
  </b-card>
</template>

<script>
export default {
  data: () => {
    return {
      products: [
        { name: 'Teste', description: 'Descrição' },
        { name: 'Teste', description: 'Descrição' },
        { name: 'Teste', description: 'Descrição' },
        { name: 'Teste', description: 'Descrição' },
        { name: 'Teste', description: 'Descrição' },
        { name: 'Teste', description: 'Descrição' },
        { name: 'Teste', description: 'Descrição' },
      ]
    }
  }

}
</script>

<style>

</style>