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
    <nav aria-label="...">
      <p class="pt-2">Pages</p>
      <ul class="pagination">
        <li class="page-item" v-for="page in pages" :key="page">
          <a v-if="page === null">...</a>
          <a
            class="page-link active"
            v-else-if="page == $route.query.page"
            :href="$route.path + '?page=' + page"
            >{{ page }}</a
          >
          <a class="page-link" v-else :href="$route.path + '?page=' + page">{{
            page
          }}</a>
        </li>
      </ul>
    </nav>
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
      pages: [],
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    async getAll() {
      var page;
      page = this.$route.query.page ?? 1;
      await fetch("http://127.0.0.1:5000/product?limit=9&page=" + page)
        .then((response) => {
          response.json().then((data) => {
            this.items = data.products;
            this.pages = data.iter_pages;
          });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
