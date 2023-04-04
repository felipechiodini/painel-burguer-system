<template>
  <div class="table-responsive border shadow-lg bg-white border" style="border-radius: 10px;" v-if="page">
    
    <div class="row m-2">
      <div class="col-auto ml-auto p-0">
        <b-input-group>
          <b-form-input v-model="searchTerm" placeholder="Pesquisar" debounce="700"></b-form-input>
          <template #append>
            <b-input-group-text class="pointer" @click="searchTerm = ''"><strong class="text-danger">X</strong></b-input-group-text>
          </template>
        </b-input-group>
      </div>
    </div>

    <b-table
      :items="page.data"
      :per-page="perPage"
      :current-page="currentPage"
      :filter="searchTerm"
      :fields="tableFields" 
      :filter-debounce="5000"
      :filter-included-keys="filterIncludedFields"
      :sort-by.sync="sortBy"
      :sort-direction.sync="sortDirection"
      @head-clicked="onHeadClicked"
    >
     
      <template #cell(edit)="data">
        <b-button size="sm" variant="primary" @click="editRow(data.item)">Editar</b-button>
      </template>
      <template #cell(delete)="data">
        <b-button size="sm" variant="danger" @click="deleteRow(data.item)">Deletar</b-button>
      </template>

    </b-table>

    <div class="row justify-content-center align-items-center m-2">
      <div class="col-auto">
        <span>
          Mostrando {{ (page.current_page - 1) * page.current_page + 1 }} a {{ Math.min(page.current_page * perPage, page.total) }} de
          {{ pagination.total }} linhas
        </span>
      </div>
      <div class="d-flex col-auto align-items-center">
        <b-form-select class="w-auto" v-model="perPage" :options="[10, 20, 50, 100]" />
        <label class="ml-2">por página</label>
      </div>
      <b-pagination class="col" v-if="page.last_page > 1" :total-rows="page.total" :per-page="perPage" :current-page="page.current_page" @input="onPageChange" />  
    </div>

  </div>
</template>

<script>
import Api from '@/js/Api';

export default {
  name: 'Table',
  props: {
    columns: {
      type: Array,
      // required: true,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    filterIncludedFields: {
      type: Array,
      default: () => [],
    },
    selectable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      page: null,
      searchTerm: '',
      columnsToShow: ['name'],
      currentPage: 1,
      selectedItems: [],
      sortBy: '',
      sortDirection: 'asc',
      pagination: {},
      selectedColumns: [],
      tableFields: [
        { key: 'name', label: 'Nome' },
        { key: 'edit', label: '' },
        { key: 'delete', label: '' },
      ],
    };
  },
  computed: {
    columnOptions() {
      return this.tableFields.map(field => {
        return { value: field.key, text: field.label }
      })
    },
    visibleColumns() {
      return this.columns.filter((column) => this.columnsToShow.includes(column.key));
    },
    showDeleteButton() {
      return this.selectable && this.selectedItems.length > 0;
    },
  },
  watch: {
    columnsToShow() {
      this.saveColumnsToShow();
    },
    searchTerm() {
      this.fetchData(1, this.searchTerm);
    },
  },
  created() {
    // this.columnsToShow = this.loadColumnsToShow();
    // this.columnOptions = this.columns.map((column) => {
    //   return { text: column.label, value: column.key }
    // });
  },
  created() {
    this.fetchData();
  },
  methods: {
    updateTableColumns() {
      this.tableFields = this.tableFields.filter(field => {
        return this.selectedColumns.includes(field.key)
      })
    },
    fetchData(page = 1, searchTerm = '') {
      Api.get(`/products?page=${page}&searchTerm=${searchTerm}`).then((response) => {
        this.page = response.data;
      });
    },
    onColumnsShown() {
      this.$emit('columnsShown', this.columnsToShow);
    },
    onPageChange(page) {
      this.fetchData(page, this.searchTerm);
    },
    onFiltered(filteredItems) {
      this.pagination.total = filteredItems.length;
      this.pagination.last_page = Math.ceil(this.pagination.total / this.perPage);
      this.pagination.current_page = 1;
      this.items = filteredItems.slice(0, this.perPage);
    },
    onRowClick(item) {
      this.$emit('rowClicked', item);
    },
    editRow(product) {
      this.$router.push({
        name: 'product.edit',
        params: {
          id: product.id
        }
      })
    },
    deleteRow(item) {
      const index = this.items.indexOf(item)
      this.items.splice(index, 1)
    },
    onHeadClicked(event) {
      console.log('Header clicked:', event.column);
      // adicione aqui a lógica desejada para manipular o clique no cabeçalho
    }
  }
}
</script>