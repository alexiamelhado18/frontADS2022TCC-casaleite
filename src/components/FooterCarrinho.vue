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
      :to="{ name: 'RevisarPedido' }"
    >
      Continuar
    </router-link>
  </footer>
</template>
<script>
export default {
  name: "FooterCarrinho",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
};
</script>
