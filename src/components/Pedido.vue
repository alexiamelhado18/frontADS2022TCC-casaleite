<template>
  <tr>
    <td class="col-md-2">
      {{ id }}
    </td>
    <td class="col-md-2">
      {{ data | formatDate }}
    </td>
    <td class="col-md-2">
      {{ endereco }}
    </td>
    <td class="col-md-2">{{ total }}</td>
    <td class="col-md-2">{{ this.statusPedido(status) }}</td>
    <td class="col-md-2">
      <button @click="cancelarPedido(id)">Cancelar</button>
    </td>
  </tr>
</template>
<script>
import axios from "axios";
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
        case "Status.cancelled":
          return "Cancelado";
      }
    },
    async cancelarPedido(order_id) {
      await axios.post(`/order/${order_id}`);
      window.location.reload();
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
