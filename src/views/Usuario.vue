<template>
  <form @submit.prevent>
    <h3>Dados do Usuário</h3>
    <div class="form-group">
      <label>Nome:</label>
      <input
        type="text"
        class="form-control"
        v-model="nome"
        :readonly="!isEditable"
      />
    </div>
    <div class="form-group">
      <label>Email:</label>
      <input
        type="email"
        class="form-control"
        v-model="email"
        :readonly="!isEditable"
      />
    </div>
    <div class="form-group">
      <label>Endereço:</label>
      <input
        type="text"
        class="form-control"
        v-model="endereco"
        :readonly="!isEditable"
      />
    </div>
    <div class="form-group">
      <label>Telefone:</label>
      <input
        type="text"
        class="form-control"
        v-model="telefone"
        :readonly="!isEditable"
      />
    </div>
    <button v-if="!isEditable" @click="toggleEditable">Editar</button>
    <button v-if="isEditable" @click="updateUserData">Salvar</button>
    <button v-if="isEditable" @click="toggleEditable">Cancelar</button>
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
      isEditable: false,
    };
  },
  mounted() {
    this.loadUserData();
  },
  methods: {
    async loadUserData() {
      const response = await axios.get("/user/current-user");
      this.id = response.data.id;
      this.nome = response.data.name;
      this.email = response.data.email;
      this.endereco = response.data.address;
      this.telefone = response.data.phone;
      this.senha = response.data.password;
    },
    toggleEditable() {
      this.isEditable = !this.isEditable;
    },
    async updateUserData() {
      await axios.put(`/user/${this.id}`, {
        name: this.nome,
        email: this.email,
        address: this.endereco,
        phone: this.telefone,
        password: this.senha,
      });
      this.isEditable = !this.isEditable;
    },
  },
};
</script>
