<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ nome + color }}</td>
    <td>{{ marca }}</td>
    <td class="link-descricao" @click="$emit('verDescricao')">ver descrição</td>
    <td>{{ data_expiracao }}</td>
    <td>{{ estoque }}</td>
    <td>
      <router-link :to="{ name: 'AlterarProduto' }">
        <b-icon class="icon" icon="pencil" aria-hidden="true"></b-icon>
      </router-link>

      <b-icon
        class="icon"
        icon="x"
        aria-hidden="true"
        @click="$emit('setarItemExclusao')"
      ></b-icon>
    </td>
  </tr>
</template>
<script>
export default {
  name: "ComponentProduto",
  props: {
    id: Number,
    nome: String,
    marca: String,
    color: {
      type: String,
      default: " Vermelho",
    },
    estoque: {
      type: Number,
      required: true,
    },
    data_expiracao: String,
    descricao: {
      type: String,
      default: "lorem lorem lorem....",
    },
  },
};
</script>
<style scoped>
.icon {
  color: #000;
}
.link-descricao {
  text-decoration: underline;
  cursor: pointer;
}
</style>
