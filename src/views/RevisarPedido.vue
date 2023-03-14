<template>
  <div class="main w-100">
    <div
      class="d-flex flex-column w-100 justify-content-between align-items-center"
      style="padding: 0 5% 5% 5%; margin-top: 100px"
    >
      <h2>Resumo do Pedido</h2>
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
          </tbody>
        </table>
        <form>
          <h3>Dados de entrega</h3>
          <div class="form-group">
            <label for="address">Endereço de entrega</label>
            <input
              class="form-control"
              v-model="address"
              placeholder="Avenida Brasil, 123"
            />
          </div>
          <div class="form-group">
            <label for="city">Cidade</label>
            <input
              class="form-control"
              v-model="city"
              placeholder="São Paulo"
            />
          </div>
          <div class="form-group">
            <label for="state">Estado</label>
            <input class="form-control" v-model="state" placeholder="SP" />
          </div>
          <div class="form-group">
            <label for="zip">CEP</label>
            <input class="form-control" v-model="zip" placeholder="00000-000" />
          </div>
          <div class="form-group">
            <label for="reference">Referência</label>
            <input
              class="form-control"
              v-model="reference"
              placeholder="Próximo ao Colégio"
            />
          </div>
        </form>
      </div>
    </div>
    <b-modal ref="modal-ver-descricao" hide-footer>
      {{ description }}
    </b-modal>
    <FooterRevisarPedido
      :total="total"
      :cart="cart"
      :address="address"
      :city="city"
      :state="state"
      :zip="zip"
      :reference="reference"
    />
  </div>
</template>

<script>
import FooterRevisarPedido from "@/components/FooterRevisarPedido.vue";
import ItemCarrinho from "../components/ItemCarrinho.vue";

export default {
  name: "ListaCarrinho",
  props: {
    endereco: String,
    cep: String,
    referencia: String,
  },
  components: {
    ItemCarrinho,
    FooterRevisarPedido,
  },
  data() {
    return {
      cart: {},
      description: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      reference: "",
      total: 0,
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
            this.total = data.total_price;
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
<style>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
