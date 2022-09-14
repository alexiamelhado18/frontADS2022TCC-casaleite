<template>
  <div>
    <b-form @submit.prevent="atualizarProduto">
      <b-form-group
        id="input-group-1"
        class="mb-2"
        label="Nome:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          class="mb-2"
          type="text"
          required
          v-model="item.name"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        class="mb-2"
        label="Marca:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          class="mb-2"
          type="text"
          required
          v-model="item.brand"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        class="mb-2"
        label="Cor:"
        label-for="input-1"
      >
        <b-form-input
          id="type-color"
          class="mb-2"
          type="text"
          required
          v-model="item.color"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        class="mb-2"
        label="Quantidade de produto em estoque:"
        label-for="input-1"
      >
        <b-form-input
          id="type-number"
          class="mb-2"
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
      >
        <b-form-textarea
          id="textarea"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
          class="mb-2"
          v-model="item.description"
        >
        </b-form-textarea>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Data de validade:"
        label-for="input-2"
        class="mb-2"
      >
        <b-form-input
          id="type-date"
          type="date"
          v-model="item.expiration_date"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Atualizar</b-button>
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
    };
  },
  mounted() {
    this.getProduto();
  },
  methods: {
    getProduto() {
      fetch("http://127.0.0.1:5000/product/" + this.$route.params.id)
        .then((response) => {
          response.json().then((data) => {
            console.log(data);
            this.item = data;
          });
        })
        .catch((error) => console.log(error));
    },
    atualizarProduto() {
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
          this.getProduto();
          if (response.status === 200) {
            this.status = "Seu produto foi atualizado com sucesso!";
          } else {
            this.status = "Não foi possível atualizar esse produto!";
          }
          this.abrirModal();
        })
        .catch((error) => console.log(error));
    },
    abrirModal() {
      this.$refs["modal-status"].show();
    },
    fecharModal() {
      this.$refs["modal-status"].hide();
    },
  },
};
</script>
