<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        class="mb-2"
        label="Nome:"
        label-for="input-1"
      >
        <b-form-input id="input-1" class="mb-2" type="text" required>
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        class="mb-2"
        label="Marca:"
        label-for="input-1"
      >
        <b-form-input id="input-1" class="mb-2" type="text" required>
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        class="mb-2"
        label="Cor:"
        label-for="input-1"
      >
        <b-form-input id="type-color" class="mb-2" type="color" required>
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        class="mb-2"
        label="Quantidade de produto em estoque:"
        label-for="input-1"
      >
        <b-form-input id="type-number" class="mb-2" type="number" required>
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Descrição do produto:"
        label-for="input-2"
      >
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
          class="mb-2"
        >
        </b-form-textarea>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Data de validade:"
        label-for="input-2"
        class="mb-2"
      >
        <b-form-input id="type-date" type="date"></b-form-input>
      </b-form-group>

      <b-button type="reset" variant="danger">Limpar</b-button>
      <b-button type="submit" variant="primary">Criar</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "CadastrarProduto",
};
</script>
