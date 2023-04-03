<template>
  <header
    class="w-100 d-flex justify-content-between align-items-center"
    style="height: 100px; background-color: #6c757d; padding: 2%"
  >
    <RouterLink
      class="text-decoration-none"
      :to="{ name: '' }"
      style="color: #fff"
      title="Casa Leite"
    >
      <img
        style="border-radius: 100%"
        :src="require('@/assets/images/logo-casaleite.jpg')"
        alt=""
      />
    </RouterLink>
    <nav class="w-100 d-flex justify-content-center align-items-center">
      <router-link
        class="text-decoration-none"
        to="/Produtos"
        style="color: #fff"
        >Produtos</router-link
      >
    </nav>
    <nav class="w-100">
      <router-link
        class="text-decoration-none"
        to="/Pedidos"
        style="color: #fff"
        >Meus Pedidos</router-link
      >
    </nav>
    <nav class="w-100">
      <h5 v-if="user">Olá {{ user.name }}</h5>
      <a
        v-if="user"
        @click="logout"
        class="text-decoration-none"
        href="/Login"
        style="color: #fff"
        >Sair</a
      >
      <router-link
        v-if="!user"
        class="text-decoration-none"
        to="/Login"
        style="color: #fff"
        >Fazer Login</router-link
      >
    </nav>
    <Carrinho />
  </header>
</template>
<script>
import { RouterLink } from "vue-router";
import Carrinho from "./Carrinho.vue";
import axios from "axios";
import { onBeforeMount } from "vue";

export default {
  name: "NavBar",
  components: { RouterLink, Carrinho },
  data() {
    return {
      user: null,
    };
  },
  methods: {
    logout() {
      console.log("logout");
      localStorage.removeItem("token");
    },
  },
  async beforeMount() {
    const response = await axios.get("/user/current-user");
    this.user = await response.data;
  },
};
</script>
