import Vue from "vue";
import VueRouter from "vue-router";
import Produtos from "../views/Produtos.vue";
import Home from "../views/Home.vue";
import CadastrarProduto from "../views/CadastrarProduto.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeVue",
    component: Home,
  },
  {
    path: "/Produtos",
    name: "Produtos",
    component: Produtos,
  },
  {
    path: "/CadastrarProduto",
    name: "CadastrarProduto",
    component: CadastrarProduto,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
