<template>
  <tr>
    <td class="col-md-2">
      {{ id }}
    </td>
    <td class="col-md-2">
      {{ data }}
    </td>
    <td class="col-md-2">
      {{ endereco }} - {{ cidade }}, {{ estado }} <br />
      {{ referencia }}
    </td>
    <td class="col-md-2">{{ total }}</td>
    <td class="col-md-2">{{ this.statusPedido(status) }}</td>
  </tr>
</template>
<script>
export default {
  name: "Pedido",
  props: {
    id: Number,
    data: String,
    endereco: String,
    cidade: String,
    estado: String,
    referencia: String,
    cep: String,
    total: Number,
    status: String,
  },
  methods: {
    statusPedido(status) {
      switch (status) {
        case "Status.pending":
          return "Pendente";
        case "Status.processing":
          return "Em processamento";
        case "Status.shipped":
          return "Enviado";
        case "Status.delivered":
          return "Entregue";
        case "Status.canceled":
          return "Cancelado";
      }
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
