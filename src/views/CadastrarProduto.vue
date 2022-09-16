<template>
  <div
    class="w-100 h-100 d-flex flex-column justify-content-around align-items-center"
  >
    <Voltar />
    <h2 class="mb-5 mt-3">Cadastrar produto</h2>
    <b-form
      class="d-flex justify-content-center align-items-start h-100 flex-wrap w-100"
      @submit.prevent="cadastrarProduto"
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
          >
          </b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          class="mb-2 w-100"
          label="Cor:"
          label-for="input-1"
        >
          <b-form-input
            id="type-color"
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
            v-model="item.expiration_date"
          >
          </b-form-input>
        </b-form-group>
        <div class="d-flex justify-content-end align-items-center w-100">
          <b-button type="submit" variant="primary">Cadastrar</b-button>
        </div>
      </div>
    </b-form>

    <b-modal ref="modal-confirmar-cadastro" hide-footer>
      <!-- Mostrar msg do response da api -->
      {{ status }}
    </b-modal>
  </div>
</template>

<script>
import Voltar from "../components/Voltar.vue";

export default {
  name: "CadastrarProduto",
  components: {
    Voltar,
  },
  data() {
    return {
      item: {},
      status: "",
    };
  },
  methods: {
    cadastrarProduto() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.item),
      };

      fetch("http://127.0.0.1:5000/product/", requestOptions)
        .then((response) => {
          if (response.status === 201) {
            this.status = "Seu produto foi cadastrado com sucesso!";
            this.abrirModal();

            //limpa valores dos campos
            this.item = {};
          } else {
            this.status = "Não foi possível cadastrar esse produto!";
          }
        })
        .catch((error) => console.log(error));
    },
    abrirModal() {
      this.$refs["modal-confirmar-cadastro"].show();
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
