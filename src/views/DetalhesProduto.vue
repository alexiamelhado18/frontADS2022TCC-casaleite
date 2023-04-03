<template>
  <div
    class="d-flex justify-content-between flex-column align-items-center w-100 position-relative"
  >
    <Voltar />
    <h2 class="w-100" style="text-align: start; padding: 0 5%">
      {{ item.name }}
    </h2>
    <div
      class="d-flex justify-content-between flex-column align-items-center w-100"
      style="padding: 0 5% 5% 5%"
    >
      <div
        class="d-flex flex-wrap justify-content-between align-items-start w-100"
      >
        <img
          :src="item.picture"
          alt=""
          style="
            max-width: 100%;
            margin: 17px 0;
            height: 300px;
            border-radius: 8px;
          "
        />
        <div
          class="d-flex justify-content-between flex-column align-items-start"
        >
          <h4>Descrição</h4>
          <div
            class="d-flex flex-column justify-content-between align-items-center"
          >
            <span style="max-width: 400px; margin-bottom: 0.5rem">{{
              item.description
            }}</span>
            <div class="input-group">
              <span class="input-group-btn">
                <button
                  v-on:click="counter > 0 ? (counter -= 1) : counter"
                  class="btn btn-white btn-minuse"
                  type="button"
                >
                  -
                </button>
              </span>
              <input
                type="text"
                class="form-control no-padding add-color text-center height-25"
                maxlength="3"
                :value="counter"
              />
              <span class="input-group-btn">
                <button
                  v-on:click="
                    counter <= item.quantity ? (counter += 1) : counter
                  "
                  class="btn btn-red btn-pluss"
                  type="button"
                >
                  +
                </button>
              </span>
            </div>
            <span style="max-width: 400px" class="w-100"
              ><b>Estoque:</b> {{ item.quantity }}</span
            >
            <b-button class="mt-5" @click="adicionarCarrinho">
              Adicionar no carrinho
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      id="myModal"
      ref="modal-adicionar-carrinho"
      @hidden="refreshPage"
      hide-footer
    >
      <!-- Mostrar msg do response da api -->
      {{ status }}
    </b-modal>
  </div>
</template>

<script>
import Voltar from "../components/Voltar.vue";
import axios from "axios";

export default {
  name: "DetalhesProduto",
  components: { Voltar },
  data() {
    return { id: 0, item: {}, counter: 0, status: "" };
  },
  created() {
    this.id = this.$route.params.id;
    this.getProduto();
    console.log(this.item);
  },
  methods: {
    async getProduto() {
      var response = await axios.get("/product/" + this.id);
      this.item = response.data;
    },
    async adicionarCarrinho() {
      if (this.counter > 0) {
        try {
          const responseUser = await axios.get("/user/current-user");
          var response = await axios.post("/shopping_cart/add", {
            product_id: this.$route.params.id,
            quantity: this.counter,
          });
          console.log(response.status);
          if (response.status === 200) {
            this.status = "O produto foi adicionado ao carrinho";
            this.abrirModal();
          } else {
            this.status = "Houve algum erro ao adicionar ao carrinho!";
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    abrirModal() {
      this.$refs["modal-adicionar-carrinho"].show();
    },
    refreshPage() {
      window.location.reload();
    },
  },
};
</script>
<style scoped></style>
