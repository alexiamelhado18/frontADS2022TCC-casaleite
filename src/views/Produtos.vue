<template>
  <div class="main w-100">
    <div class="p-3 d-flex w-100 justify-content-between align-items-center">
      <input
        class="rounded"
        type="text"
        placeholder="Buscar por nome do produto"
        @input="consultarQuandoParar($event)"
      />
      <b-button>Cadastrar produto</b-button>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nome</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody v-if="!isFilter">
        <ComponentProduto
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :nome="item.nome"
          @setarItemExclusao="pegarItemASerExcluido(item)"
        />
      </tbody>
      <tbody v-else>
        <ComponentProduto
          :id="item.id"
          :nome="item.nome"
          @setarItemExclusao="pegarItemASerExcluido(item)"
        />
      </tbody>
    </table>
    <b-modal
      ref="my-modal"
      title="Deseja realmente excluir esse produto?"
      hide-footer
    >
      <b-button class="m-3" @click="fecharModal">Cancelar</b-button>
      <b-button class="m-3" @click="excluirItem">Confirmar</b-button>
    </b-modal>
  </div>
</template>

<script>
import ComponentProduto from "@/components/Produto.vue";

export default {
  name: "ProdutosView",
  components: {
    ComponentProduto,
  },
  data() {
    return {
      items: [
        { id: 1, nome: "Martelo" },
        { id: 2, nome: "Machado" },
        { id: 3, nome: "Chuveiro" },
      ],
      item: {},
      isFilter: false,
    };
  },
  methods: {
    consultarQuandoParar: function consultarQuandoParar($event) {
      // Se chamar mais de uma vez, cancela a chamada anterior

      if ($event.target.value != "") {
        let objThis = this;
        clearTimeout(consultarQuandoParar.timeout);
        setTimeout(function () {
          const item = objThis.items.filter(
            (item) =>
              item.nome.toLowerCase() == $event.target.value.toLowerCase()
          );
          objThis.item = item[0];
          objThis.isFilter = true;
        }, 500);
      } else {
        this.isFilter = false;
        this.item = {};
      }
    },
    excluirItem() {
      let index = this.items.indexOf(this.item);
      this.items.splice(index, 1);
      this.fecharModal();
    },
    pegarItemASerExcluido(item) {
      this.abrirModal();
      this.item = item;
    },
    abrirModal() {
      this.$refs["my-modal"].show();
    },
    fecharModal() {
      this.$refs["my-modal"].hide();
    },
  },
};
</script>
<style scoped>
/* .main {
  padding: 30px;
} */
button {
  height: 50px;
  padding: 10px;
}
</style>
