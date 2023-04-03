<template>
  <div style="position: relative; cursor: pointer">
    <router-link to="/Carrinho" style="color: inherit">
      <b-icon style="cursor: pointer" icon="cart3" aria-hidden="true"></b-icon>
    </router-link>
    <span
      v-if="qtd > 0"
      style="
        position: absolute;
        background-color: #212529;
        color: #fff;
        display: flex;
        border-radius: 100%;
        align-items: center;
        justify-content: center;
        top: -8px;
        right: -7px;
        font-size: 10px;
        padding: 5px;
      "
      >{{ qtd }}</span
    >
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Carrinho",
  props: {
    qtd: { type: Number, default: 0 },
  },
  data() {
    return {};
  },
  async created() {
    var response = await axios.get("/shopping_cart");
    this.$props.qtd = Object.keys(response.data.items).length;
  },
};
</script>
