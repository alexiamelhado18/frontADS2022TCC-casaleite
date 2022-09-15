<template>
  <div class="main w-100 p-3">
    <div
      class="d-flex w-100 mb-2 justify-content-between align-items-center flex-wrap"
    >
      <input
        class="form-control rounded"
        type="search"
        aria-label="Search"
        placeholder="Buscar pelo id do produto"
        @input="consultarQuandoParar($event), validateValue($event)"
        style="heigth: 47px; max-width: 317px"
        title="Buscar pelo id do produto"
      />

      <b-button class="rounded" :to="{ name: 'CadastrarProduto' }"
        >Cadastrar produto</b-button
      >
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nome</th>
          <th scope="col">Marca</th>
          <th scope="col">Descricao</th>
          <th scope="col">Data de expiração</th>
          <th scope="col">Estoque</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody v-if="!isFilter">
        <ComponentProduto
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :nome="item.name"
          :estoque="item.quantity"
          :data_expiracao="item.expiration_date"
          :marca="item.brand"
          :color="item.color"
          @setarItemExclusao="pegarItemASerExcluido(item.id)"
          @verDescricao="verDescricao(item.description)"
        />
      </tbody>
      <tbody v-else>
        <ComponentProduto
          :id="item.id"
          :nome="item.name"
          :estoque="item.quantity"
          :data_expiracao="item.expiration_date"
          :marca="item.brand"
          :color="item.color"
          @setarItemExclusao="pegarItemASerExcluido(item.id)"
          @verDescricao="verDescricao(item.description)"
        />
      </tbody>
    </table>
    <b-modal
      ref="modal-excluir-item"
      title="Deseja realmente excluir esse produto?"
      hide-footer
    >
      <b-button class="m-3" @click="fecharModal">Cancelar</b-button>
      <b-button class="m-3" @click="deletarProduto">Confirmar</b-button>
    </b-modal>
    <b-modal ref="modal-ver-descricao" hide-footer>
      {{ description }}
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
      items: [],
      item: {},
      isFilter: false,
      description: "",
    };
  },
  mounted() {
    // faz prte do ciclo de vida do vue e só aciona
    //ele enquanto estiver no reload apos carregar os elementos(HTML)
    this.getAll();
  },
  methods: {
    // consultarQuandoParar: function consultarQuandoParar($event) {
    //   // Se chamar mais de uma vez, cancela a chamada anterior

    //   if ($event.target.value != "") {
    //     let objThis = this;
    //     clearTimeout(consultarQuandoParar.timeout);
    //     setTimeout(function () {
    //       const item = objThis.items.filter(
    //         (item) =>
    //           item.nome.toLowerCase() == $event.target.value.toLowerCase()
    //       );
    //       objThis.item = item[0];
    //       objThis.isFilter = true;
    //     }, 500);
    //   } else {
    //     this.isFilter = false;
    //     this.item = {};
    //   }
    // },
    consultarQuandoParar: function consultarQuandoParar($event) {
      // Se chamar mais de uma vez, cancela a chamada anterior

      if ($event.target.value != "") {
        let objThis = this;
        clearTimeout(consultarQuandoParar);
        setTimeout(function () {
          fetch("http://127.0.0.1:5000/product/" + $event.target.value)
            .then((response) => {
              response.json().then((data) => {
                objThis.item = data;
                objThis.isFilter = true;
              });
            })
            .catch((error) => console.log(error));
        }, 500);
      } else {
        this.isFilter = false;
        this.item = {};
        this.getAll();
      }
    },
    // excluirItem() {
    //   let index = this.items.indexOf(this.item);
    //   this.items.splice(index, 1);
    //   this.fecharModal();
    // },
    pegarItemASerExcluido(item) {
      this.abrirModal();
      this.item = item;
    },
    abrirModal() {
      this.$refs["modal-excluir-item"].show();
    },
    fecharModal() {
      this.$refs["modal-excluir-item"].hide();
    },
    dateNow() {
      const d = new Date();
      return d.toLocaleDateString();
    },
    verDescricao(description) {
      this.description = description;
      this.$refs["modal-ver-descricao"].show();
    },
    async getAll() {
      await fetch("http://127.0.0.1:5000/product/")
        .then((response) => {
          response.json().then((data) => {
            this.items = data;
            console.log(this.items);
          });
        })
        .catch((error) => console.log(error));
    },
    async deletarProduto() {
      await fetch("http://127.0.0.1:5000/product/" + this.item, {
        method: "DELETE",
      })
        .then(() => {
          this.getAll();
          this.fecharModal();
        })
        .catch((error) => console.log(error));
    },
    validateValue(id) {
      let v = id.target.value;
      console.log(v);
      console.log(id);
    },
  },
};
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
}
button {
  height: 47px;
  padding: 10px;
}
</style>
