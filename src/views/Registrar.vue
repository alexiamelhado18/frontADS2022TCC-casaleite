<template>
  <form @submit.prevent="handleSubmit">
    <h3>Registrar</h3>

    <div class="form-group">
      <label>Nome</label>
      <input
        type="text"
        class="form-control"
        v-model="nome"
        placeholder="Nome"
      />
    </div>
    <div class="form-group">
      <label>Email</label>
      <input
        type="text"
        class="form-control"
        v-model="email"
        placeholder="Email"
      />
    </div>
    <div class="form-group">
      <label>Endereço</label>
      <input
        type="text"
        class="form-control"
        v-model="endereco"
        placeholder="Endereço"
      />
    </div>
    <div class="form-group">
      <label>Telefone</label>
      <input
        type="text"
        class="form-control"
        v-model="telefone"
        placeholder="Telefone"
      />
    </div>
    <div class="form-group">
      <label>Senha</label>
      <input
        type="password"
        class="form-control"
        v-model="senha"
        placeholder="Senha"
      />
    </div>
    <div class="form-group">
      <label>Confirme a Senha</label>
      <input
        type="password"
        class="form-control"
        v-model="confirmarSenha"
        placeholder="Confirme a Senha"
      />
    </div>

    <button class="btn btn-primary btn-block">Registrar</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "Registrar",
  data() {
    return {
      nome: "",
      email: "",
      endereco: "",
      telefone: "",
      senha: "",
      confirmarSenha: "",
    };
  },
  methods: {
    async handleSubmit() {
      await axios.post("/user/", {
        name: this.nome,
        email: this.email,
        address: this.endereco,
        phone: this.telefone,
        password: this.senha,
      });
      this.$router.push("/Login");
    },
  },
};
</script>
