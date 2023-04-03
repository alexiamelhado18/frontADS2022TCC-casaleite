<template>
  <div class="main w-100">
    <div
      class="d-flex flex-column w-100 justify-content-between align-items-center"
      style="padding: 0 5% 5% 5%; margin-top: 100px"
    >
      <div class="table-responsive w-100">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Foto</th>
              <th scope="col">Nome</th>
              <th scope="col">Descricao</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Preço</th>
            </tr>
          </thead>
          <tbody v-for="(item, key) in cart.items" :key="key">
            <ItemCarrinho
              :id="key"
              :imagem="item.picture"
              :nome="item.name"
              :quantidade="item.quantity"
              :preco="item.price"
              @verDescricao="verDescricao(item.description)"
            />
            <b-button class="m-3" @click="removerProduto(key)"
              >Remover</b-button
            >
          </tbody>
        </table>
      </div>
    </div>
    <b-modal ref="modal-ver-descricao" hide-footer>
      {{ description }}
    </b-modal>
    <FooterCarrinho :total="total" />
  </div>
</template>

<script>
import FooterCarrinho from "@/components/FooterCarrinho.vue";
import ItemCarrinho from "../components/ItemCarrinho.vue";
import axios from "axios";

export default {
  name: "ListaCarrinho",
  components: {
    ItemCarrinho,
    FooterCarrinho,
  },
  data() {
    return {
      cart: {},
      description: "",
      total: 0,
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    async getAll() {
      var response = await axios.get("/shopping_cart");
      this.cart = response.data;
      this.total = response.data.total_price;
    },
    verDescricao(description) {
      this.description = description;
      this.$refs["modal-ver-descricao"].show();
    },
    async removerProduto(product_id) {
      await axios.post("/shopping_cart/remove", {
        product_id: product_id,
      });
      window.location.reload();
    },
  },
};
</script>
<style>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
