<template>
  <div>
    <div class="row mx-2 my-4">
      <div class="col-auto">
        <h4>Edit De-engineered assymetric focusgroup</h4>
      </div>
      <div class="col-auto ml-auto">
        <b-button variant="danger">Deletar</b-button>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row mx-2">
        <b-card class="row">
          <div class="col-6">
            <label for="">Name</label>
            <b-input></b-input>
          </div>
          <label for="">Slug</label>
          <b-input></b-input>
          <label for="">Description</label>
          <b-textarea name="" id="" cols="30" rows="10">
          </b-textarea>
        </b-card>
        <b-card>
          <template #header>
            <h5 class="m-0">Preço</h5>
          </template>
          <label for="">Preço</label>
          <b-input></b-input>
          <b-img src=""></b-img>
        </b-card>
        <b-card>
          <template #header>
            <h5 class="m-0">Preço</h5>
          </template>
          <label for="">Preço</label>
          <b-input></b-input>
          <b-img src=""></b-img>
        </b-card>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  components: {

  },

  mounted() {
    this.load()
  },
  methods: {
    load() {
      
    }
  }
}
</script>
