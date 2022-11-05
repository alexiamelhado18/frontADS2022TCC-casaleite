<template>
  <tr>
    <td class="col-md-2">
      <img
        class="img-fluid"
        src="https://cec-a.akamaihd.net/img-prod/images/standard/cimento-todas-as-obras-50kg-votorantim-1228972-foto-a644e307-1919-4c4b-8737-b62144cc1932.png"
        style
      />
    </td>
    <td class="col-md-2">
      <a :href="'/DetalhesProduto/' + id">{{ nome }}</a>
    </td>
    <td class="link-descricao" @click="$emit('verDescricao')">Ver descrição</td>
    <td class="col-md-2">{{ quantidade }}</td>
    <td class="col-md-2">{{ preco }}</td>
  </tr>
</template>
<script>
export default {
  name: "ItemCarrinho",
  props: {
    id: Number,
    imagem: String,
    nome: String,
    descricao: String,
    quantidade: Number,
    preco: Number,
  },
};
</script>
<style scoped>
.link-descricao {
  text-decoration: underline;
  cursor: pointer;
}
</style>
