<template>
  <div
    class="w-100 h-100 d-flex flex-column justify-content-around align-items-center"
  >
    <h2 class="mb-5 mt-3">Atualizar produto #{{ idProduct }}</h2>
    <b-form
      class="d-flex justify-content-center align-items-start h-100 flex-wrap w-100"
      @submit.prevent="atualizarProduto"
    >
      <div
        class="d-flex flex-column justify-content-between align-items-start m-2"
        style="max-width: 500px; width: 500px"
      >
        <b-form-group
          id="input-group-1"
          class="mb-2 w-100"
          label="Nome:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            class="mb-2 w-100"
            type="text"
            required
            v-model="item.name"
          >
          </b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          class="mb-2 w-100"
          label="Marca:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            class="mb-2 w-100"
            type="text"
            required
            v-model="item.brand"
            @keyup="validateInputLetters($event)"
          >
          </b-form-input>
        </b-form-group>

        <b-form-group class="mb-2 w-100" label="Cor:" label-for="input-1">
          <b-form-input
            class="mb-2 w-100"
            type="text"
            required
            v-model="item.color"
            @keyup="validateInputLetters($event)"
          >
          </b-form-input>
        </b-form-group>
      </div>
      <div
        class="d-flex flex-column justify-content-between align-items-start m-2"
        style="max-width: 500px; width: 500px"
      >
        <b-form-group
          id="input-group-1"
          class="mb-2 w-100"
          label="Quantidade de produto em estoque:"
          label-for="input-1"
        >
          <b-form-input
            id="type-number"
            class="mb-2 w-100"
            type="number"
            required
            v-model="item.quantity"
          >
          </b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Descrição do produto:"
          label-for="input-2"
          class="w-100"
        >
          <b-form-textarea
            id="textarea"
            placeholder="Enter something..."
            class="mb-2 w-100"
            v-model="item.description"
          >
          </b-form-textarea>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Data de validade:"
          label-for="input-2"
          class="mb-2 w-100"
        >
          <b-form-input
            id="type-date"
            type="date"
            v-model="date"
          ></b-form-input>
        </b-form-group>
        <div class="d-flex justify-content-end align-items-center w-100">
          <b-button type="submit" variant="primary">Atualizar</b-button>
        </div>
      </div>
    </b-form>
    <b-modal ref="modal-status" hide-footer>
      {{ status }}
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "AlterarProduto",
  data() {
    return {
      item: {},
      status: "",
      idProduct: 0,
      date: "",
    };
  },
  mounted() {
    this.getProduto();
    this.idProduct = this.$route.params.id;
  },
  methods: {
    getProduto() {
      fetch("http://127.0.0.1:5000/product/" + this.$route.params.id)
        .then((response) => {
          response.json().then((data) => {
            var date = `${data.expiration_date}`;
            var newdate = date.split("/").reverse().join("-");
            this.date = newdate;
            this.item = data;
          });
        })
        .catch((error) => console.log(error));
    },
    atualizarProduto() {
      this.item.expiration_date = this.date;
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.item),
      };

      fetch(
        "http://127.0.0.1:5000/product/" + this.$route.params.id,
        requestOptions
      )
        .then((response) => {
          this.abrirModal();
          this.getProduto();
          if (response.status === 200) {
            this.status = "Seu produto foi atualizado com sucesso!";
          } else {
            this.status = "Não foi possível atualizar esse produto!";
          }
        })
        .catch((error) => {
          this.abrirModal();
          if (error.status !== 200) {
            this.status = "Não foi possível atualizar esse produto!";
          }
        });
    },
    abrirModal() {
      this.$refs["modal-status"].show();
    },
    fecharModal() {
      this.$refs["modal-status"].hide();
    },
    validateInputLetters(event) {
      event.target.value = event.target.value.replace(
        /[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g,
        ""
      );
    },
  },
};
</script>
