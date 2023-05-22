<template>
  <div class="main w-100">
    <div
      class="d-flex flex-column w-100 justify-content-between align-items-center"
      style="padding: 0 5% 5% 5%; margin-top: 100px"
    >
      <div class="table-responsive w-100">
        <h2>Pedidos</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Número</th>
              <th scope="col">Data</th>
              <th scope="col">Dados de Entrega</th>
              <th scope="col">Total</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody v-for="order in orders" :key="order.id">
            <Pedido
              :id="order.id"
              :data="order.created_at"
              :endereco="order.delivery_address"
              :cidade="order.delivery_city"
              :estado="order.delivery_state"
              :referencia="order.delivery_reference"
              :cep="order.delivery_zip"
              :total="order.total_price"
              :status="order.status"
              @verDescricao="verDescricao(item.description)"
            />
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
import Pedido from "@/components/Pedido.vue";
import axios from "axios";

export default {
  name: "ListaCarrinho",
  components: {
    Pedido,
  },
  data() {
    return {
      orders: [],
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    async getAll() {
      var response = await axios.get("/order/current-user");
      this.orders = response.data;
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
