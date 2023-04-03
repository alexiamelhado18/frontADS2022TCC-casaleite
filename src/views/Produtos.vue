<template>
  <div
    class="d-flex w-100 flex-column justify-content-between align-items-center"
  >
    <Voltar />
    <div style="padding: 0 5% 5% 5%">
      <b-dropdown id="dropdown-1" text="Categorias" class="m-md-2">
        <b-dropdown-item
          v-for="category in categories"
          :key="category.id"
          :href="$route.path + '?page=1' + '&category_id=' + category.id"
        >
          {{ category.name }}
        </b-dropdown-item>
      </b-dropdown>
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
            :quantidade="item.quantity"
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
              :href="
                $route.path +
                '?page=' +
                page +
                '&category_id=' +
                $route.query.category_id
              "
              >{{ page }}</a
            >
            <a
              class="page-link"
              v-else
              :href="
                $route.path +
                '?page=' +
                page +
                '&category_id=' +
                $route.query.category_id
              "
              >{{ page }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import ComponentCaixaProduto from "@/components/CaixaProduto.vue";
import Voltar from "../components/Voltar.vue";
import axios from "axios";

export default {
  name: "ProdutosClienteView",
  components: {
    ComponentCaixaProduto,
    Voltar,
  },
  data() {
    return {
      items: [],
      pages: [],
      categories: [],
    };
  },
  mounted() {
    this.getAll();
    this.getCategories();
  },
  methods: {
    async getAll() {
      var page;
      page = this.$route.query.page ?? 1;
      var category_id = this.$route.query.category_id ?? "";
      var response = await axios.get(
        "/product?limit=9&page=" + page + "&category_id=" + category_id
      );
      this.items = response.data.products;
      this.pages = response.data.iter_pages;
    },
    async getCategories() {
      var response = await axios.get("/product/categories");
      this.categories = response.data;
    },
  },
};
</script>
