<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>

    <div class="form-group">
      <label>Email</label>
      <input
        type="email"
        class="form-control"
        v-model="email"
        placeholder="Enter email"
      />
    </div>

    <div class="form-group">
      <label>Senha</label>
      <input
        type="password"
        class="form-control"
        v-model="senha"
        placeholder="Insira a senha"
      />
    </div>

    <p>Não tem conta? <a href="/Registrar">Registre-se</a></p>

    <button class="btn btn-primary btn-block">Login</button>

    <div v-if="showError" class="error-message">
      <p>Usuário ou senha inválidos.</p>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      senha: "",
      showError: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("/auth/login", {
          username: this.email,
          password: this.senha,
        });
        localStorage.setItem("token", response.data.token);
        this.$emit("recarregar-header");
        this.$router.push("/Produtos").then(() => {
          window.location.reload();
        });
      } catch (error) {
        console.log(error);
        this.showError = true;
      }
    },
  },
};
</script>
<style>
.error-message {
  background-color: red;
  color: white;
  padding: 10px;
  margin: 10px 0;
}
</style>
