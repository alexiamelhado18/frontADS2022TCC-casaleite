<template>
  <tr>
    <td class="col-md-2">
      <img class="img-fluid" :src="imagem" style />
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
  methods: {
    async removerProduto() {
      await fetch("http://127.0.0.1:5000/shopping_cart/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 1,
          product_id: this.$props.id,
        }),
      })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style scoped>
.link-descricao {
  text-decoration: underline;
  cursor: pointer;
}
</style>
