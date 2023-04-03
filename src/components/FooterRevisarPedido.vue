<template>
  <footer
    class="d-flex justify-content-end align-items-center w-100 position-fixed"
    style="background-color: #ececec; padding: 10px; bottom: 0"
  >
    <p class="text-uppercase" style="margin: 0 10px; color: #6c757d">
      <b style="font-weight: 100">total: </b>r${{ total }}
    </p>

    <a
      class="btn btn-red btn-pluss flex-wrap"
      style="background-color: #6c757d; color: #ececec; width: 200px"
      href="#"
      @click.prevent="realizarPedido"
    >
      Realizar Pedido
    </a>
  </footer>
</template>

<script>
import axios from "axios";
export default {
  name: "FooterRevisarPedido",
  props: {
    total: {
      type: Number,
      default: 0,
    },
    cart: Object,
    address: String,
    city: String,
    state: String,
    zip: String,
    reference: String,
  },
  methods: {
    async realizarPedido() {
      var responseCreateOrder = await axios.post("/order", {
        total_price: this.$props.total,
        status: "pending",
        delivery_address: this.$props.address,
        delivery_city: this.$props.city,
        delivery_state: this.$props.state,
        delivery_zip: this.$props.zip,
        delivery_reference: this.$props.reference,
      });
      var order_id = responseCreateOrder.data.id;
      let products = this.$props.cart.items;
      for (const product_id in products) {
        await axios.post(`/order/${order_id}/product/${product_id}`, {
          quantity: products[product_id].quantity,
        });
      }
      await axios.delete("/shopping_cart");
      this.$router.push("/Pedidos");
      window.location.reload();
    },
  },
};
</script>
