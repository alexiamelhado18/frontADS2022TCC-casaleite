<template>
  <div style="position: relative; cursor: pointer">
    <a href="/Carrinho" style="color: inherit">
      <b-icon style="cursor: pointer" icon="cart3" aria-hidden="true"></b-icon>
    </a>
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
export default {
  name: "Carrinho",
  props: {
    qtd: { type: Number, default: 0 },
  },
  data() {
    return {};
  },
  async created() {
    console.log("entrou");
    await fetch("http://127.0.0.1:5000/shopping_cart/1")
      .then((response) => {
        response.json().then((data) => {
          this.$props.qtd = Object.keys(data.items).length;
        });
      })
      .catch((error) => console.log(error));
  },
};
</script>
