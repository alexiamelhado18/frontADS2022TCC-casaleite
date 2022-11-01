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
      <a class="text-decoration-none" href="/Produtos" style="color: #fff"
        >Produtos</a
      >
    </nav>
  </header>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  name: "NavBar",
  components: { RouterLink },
};
</script>
