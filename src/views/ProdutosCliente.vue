<template>
  <div class="container">
    <div class="row">
      <h4>Produtos</h4>
    </div>
    <div class="row">
      <div
        v-for="item in items"
        :key="item.id"
        class="col-md-6 col-xl-4 col-12 pt-4 d-flex"
      >
        <ComponentCaixaProduto
          :nome="item.name"
          :descricao="item.description"
          :imagem="item.picture"
          :preco="item.price"
          :id="item.id"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ComponentCaixaProduto from "@/components/CaixaProduto.vue";

export default {
  name: "ProdutosClienteView",
  components: {
    ComponentCaixaProduto,
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    async getAll() {
      await fetch("http://127.0.0.1:5000/product/")
        .then((response) => {
          response.json().then((data) => {
            this.items = data;
          });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
