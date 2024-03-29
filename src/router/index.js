import Vue from "vue";
import VueRouter from "vue-router";
import GerenciarProduto from "../views/GerenciarProduto.vue";
import CadastrarProduto from "../views/CadastrarProduto.vue";
import AlterarProduto from "../views/AlterarProduto.vue";
import Produtos from "../views/Produtos.vue";
import DetalhesProduto from "../views/DetalhesProduto.vue";
import ListaCarrinho from "../views/ListaCarrinho.vue";
import RevisarPedido from "../views/RevisarPedido.vue";
import Pedidos from "../views/Pedidos.vue";
import Login from "../views/Login.vue";
import Registrar from "../views/Registrar.vue";
import Usuario from "../views/Usuario.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/GerenciarProduto",
    name: "GerenciarProduto",
    component: GerenciarProduto,
  },
  {
    path: "/",
    name: "GerenciarProduto",
    component: GerenciarProduto,
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
    path: "/Produtos",
    name: "Produtos",
    component: Produtos,
  },
  {
    path: "/DetalhesProduto/:id",
    name: "DetalhesProduto",
    component: DetalhesProduto,
  },
  {
    path: "/Carrinho",
    name: "ListaCarrinho",
    component: ListaCarrinho,
  },
  {
    path: "/RevisarPedido",
    name: "RevisarPedido",
    component: RevisarPedido,
  },
  {
    path: "/Pedidos",
    name: "Pedidos",
    component: Pedidos,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Registrar",
    name: "Registrar",
    component: Registrar,
  },
  {
    path: "/Usuario",
    name: "Usuario",
    component: Usuario,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
