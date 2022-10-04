import Vue from "vue";
import VueRouter from "vue-router";
import Produtos from "../views/Produtos.vue";
import Home from "../views/Home.vue";
import CadastrarProduto from "../views/CadastrarProduto.vue";
import AlterarProduto from "../views/AlterarProduto.vue";
import ProdutosCliente from "../views/ProdutosCliente.vue";
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
  {
    path: "/AlterarProduto/:id",
    name: "AlterarProduto",
    component: AlterarProduto,
  },
  {
    path: "/produtoscliente",
    name: "ProdutosCliente",
    component: ProdutosCliente,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
