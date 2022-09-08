<template>
  <div>
    <b-form>
      <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
        <b-form-input id="input-1" type="email" required> </b-form-input>
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
        >
        </b-form-textarea>
      </b-form-group>

      <b-form-datepicker
        id="example-datepicker"
        v-model="value"
        class="mb-2"
        placeholder="Data de validade"
      ></b-form-datepicker>

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
