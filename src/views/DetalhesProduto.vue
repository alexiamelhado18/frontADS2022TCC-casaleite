<template>
  <div
    class="d-flex justify-content-between flex-column align-items-center w-100"
    style="min-height: 100vh"
  >
    <Voltar />
    <h2 class="w-100" style="text-align: start; padding: 0 5%">
      {{ item.name }}
    </h2>
    <div
      class="d-flex justify-content-between flex-column align-items-center w-100"
      style="padding: 0 5% 5% 5%"
    >
      <div
        class="d-flex flex-wrap justify-content-between align-items-start w-100"
      >
        <img
          :src="item.picture"
          alt=""
          style="max-width: 100%; max-height: 100%; border-radius: 8px"
        />
        <div
          class="d-flex justify-content-between flex-column align-items-start"
        >
          <h4>Descrição</h4>
          <div
            class="d-flex flex-column justify-content-between align-items-center"
          >
            <span style="max-width: 400px">{{ item.description }}</span>
            <b-button class="mt-5"> Adicionar no carrinho </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Voltar from "../components/Voltar.vue";

export default {
  name: "DetalhesProduto",
  components: { Voltar },
  data() {
    return { id: 0, item: {} };
  },
  created() {
    this.id = this.$route.params.id;
    this.getProduto();
    console.log(this.item);
  },
  methods: {
    getProduto() {
      fetch("http://127.0.0.1:5000/product/" + this.id)
        .then((response) => {
          response.json().then((data) => {
            this.item = data;
            console.log(data);
          });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style scoped></style>
