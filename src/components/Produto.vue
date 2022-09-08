<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ nome }}</td>
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
    nome: String,
    id: Number,
  },
};
</script>
<style scoped>
.icon {
  color: #000;
}
</style>
