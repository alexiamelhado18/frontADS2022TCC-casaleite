<template>
  <div class="card h-100 w-100">
    <div class="embed-responsive embed-responsive-16by9">
      <img class="card-img-top embed-responsive-item" :src="imagem" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ nome }}</h5>
      <p class="card-text">
        {{ descricao }}
      </p>
      <p class="card-text"><b>Em estoque:</b> {{ quantidade }}</p>
      <p class="card-text"><b>Valor: </b>{{ preco | toCurrency }}</p>
      <!-- <a href="DetalhesProduto" class="btn btn-primary">Detalhes</a> -->
      <router-link
        class="btn btn-primary"
        :to="{ name: 'DetalhesProduto', params: { id: id } }"
      >
        Detalhes
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ComponentCaixaProduto",
  props: {
    nome: String,
    descricao: String,
    preco: Number,
    imagem: String,
    id: Number,
    quantidade: Number,
  },
};
</script>
