<template>
  <b-card class="m-4 shadow">
    <template #header>
      <div class="d-flex align-items-center">
        <h5>Combos</h5>
        <b-button class="ml-auto" variant="primary" size="sm" to="combos/novo">Novo Combo</b-button>
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
        <tr v-for="(combo, key) in combos" :key="key">
          <td>{{ combo.name }}</td>
          <td>{{ combo.description }}</td>
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
      combos: [
        { name: 'Teste' },
      ]
    }
  }

}
</script>

<style>

</style>