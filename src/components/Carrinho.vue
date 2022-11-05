<template>
  <div style="position: relative; cursor: pointer">
    <a href="/Carrinho" style="color: inherit"
      ><b-icon style="cursor: pointer" icon="cart3" aria-hidden="true"></b-icon
    ></a>
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
    qtd: Number,
  },
};
</script>
