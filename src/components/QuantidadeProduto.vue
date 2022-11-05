<template>
  <div>
    <button>-</button>
    <p>{{ qtd }}</p>
    <button>+</button>
  </div>
</template>
<script>
export default {
  name: "QuantidadeProduto",
  props: {
    qtd: Number,
  },
};
</script>
