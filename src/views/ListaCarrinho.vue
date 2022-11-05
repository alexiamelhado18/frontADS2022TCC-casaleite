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
              :nome="item.name"
              :quantidade="item.quantity"
              :preco="item.price"
              @verDescricao="verDescricao(item.description)"
            />
          </tbody>
        </table>
      </div>
    </div>
    <b-modal ref="modal-ver-descricao" hide-footer>
      {{ description }}
    </b-modal>
  </div>
</template>

<script>
import ItemCarrinho from "../components/ItemCarrinho.vue";

export default {
  name: "ListaCarrinho",
  components: {
    ItemCarrinho,
  },
  data() {
    return {
      cart: {},
      description: "",
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    async getAll() {
      await fetch("http://127.0.0.1:5000/shopping_cart/1")
        .then((response) => {
          response.json().then((data) => {
            this.cart = data;
          });
        })
        .catch((error) => console.log(error));
    },
    verDescricao(description) {
      this.description = description;
      this.$refs["modal-ver-descricao"].show();
    },
  },
};
</script>
