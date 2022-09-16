<template>
  <div
    @click="backPage"
    class="w-100 d-flex justify-content-start align-items-center p-2 pt-2"
    title="Voltar página anterior"
    style="cursor: pointer"
  >
    <b-icon icon="arrow-left" variant="dark"></b-icon>
  </div>
</template>
<script>
export default {
  name: "VoltarVue",
  methods: {
    backPage() {
      this.$router.back();
    },
  },
};
</script>
