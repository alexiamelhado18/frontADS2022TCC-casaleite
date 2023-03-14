<template>
  <footer
    class="d-flex justify-content-end align-items-center w-100 position-fixed"
    style="background-color: #ececec; padding: 10px; bottom: 0"
  >
    <p class="text-uppercase" style="margin: 0 10px; color: #6c757d">
      <b style="font-weight: 100">total: </b>r${{ total }}
    </p>

    <router-link
      class="btn btn-red btn-pluss flex-wrap"
      style="background-color: #6c757d; color: #ececec; width: 200px"
      :to="{ name: 'Pedidos' }"
    >
      <span v-on:click="realizarPedido">Realizar Pedido</span>
    </router-link>
  </footer>
</template>

<script>
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
    realizarPedido() {
      const url_create_order = "http://127.0.0.1:5000/order/";
      let order_id;
      fetch(url_create_order, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: 1,
          total_price: this.$props.total,
          status: "pending",
          delivery_address: this.$props.address,
          delivery_city: this.$props.city,
          delivery_state: this.$props.state,
          delivery_zip: this.$props.zip,
          delivery_reference: this.$props.reference,
        }),
      })
        .then((response) => {
          response.json().then((data) => {
            console.log(data.id);
            order_id = data.id;
            let products = this.$props.cart.items;
            for (const product_id in products) {
              let url_add_order_product = `http://127.0.0.1:5000/order/${order_id}/product/${product_id}`;
              fetch(url_add_order_product, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  quantity: products[product_id].quantity,
                }),
              })
                .then((response) => {
                  response.json().then((data) => {
                    console.log(data);
                  });
                })
                .catch((error) => console.log(error));
            }
          });
          fetch("http://127.0.0.1:5000/shopping_cart/1", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          })
            .then((response) => {
              response.json().then((data) => {
                console.log(data);
              });
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
