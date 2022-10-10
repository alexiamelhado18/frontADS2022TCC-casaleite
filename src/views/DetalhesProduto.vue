<template>
  <div
    class="d-flex justify-content-between flex-column align-items-center w-100"
    style="background-color: #white; width: 100vw; height: 100vh"
  >
    <h1
      style="
        background-color: #white;
        justify-content: center;
        width: 90vw;
        height: 5vh;
        text-align: center;
        border-radius: 8px;
        display: flex;
        align-items: center;
        margin: 40px;
        text-shadow: 0px 1px 2px grey;
      "
    >
      {{ item.name }}
    </h1>

    <div
      class="d-flex justify-content-between align-items-center w-100"
      style="
        background-color: #white;
        width: 100vw;
        height: 50vw;
        border-radius: 8px;
        margin: 0px;
      "
    >
      <img
        src="https://feliztintas.com.br/wp-content/uploads/2018/02/tinta-super-lavavel-lata-3.jpg"
        alt=""
        style="
          width: 100%;
          height: 70vh;
          align-items: center;
          margin: 5%;
          border-radius: 8px;
          border-color: #f5f5f5;
        "
      />
      <div
        class="d-flex justify-content-between flex-column align-items-center w-100"
        style="
          background-color: #white;
          width: 70%;
          height: 60vh;
          margin: 5%;
          border-radius: 8px;
          padding: 0px 0px 150px;
        "
      >
        <h1
          style="
            width: 100%;
            text-align: left;
            display: flex;
            justify-content: left;
            text-shadow: 0px 1px 1px grey;
          "
        >
          Descrição:
        </h1>
        <div class="d-flex justify-content-between align-items-center w-100">
          <span
            style="
              padding: 10px;
              text-align: top;
              display: flex;
              justify-content: top;
              background-color: #f5f5f5;
              width: 50%;
              height: 35vh;
              margin-right: 2%;
              align-items: top;
              border-radius: 10px;
              border-width: 10px;
            "
            >{{ item.description }}</span
          >
          <button
            style="
              width: 40%;
              height: 10vh;
              padding: 20px;
              margin: 30px;
              margin-top: 30%;
              border: none;
              border-radius: 10px;
              text-transform: uppercase;
              font-weight: 800;
              letter-spacing: 2px;
              color: #2b134b;
              background: #dcdcdc;
              cursor: pointer;
              box-shadow: 0px 10px 20px -12px grey;
            "
            type="button"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetalhesProduto",
  data() {
    return { id: 0, item: {} };
  },
  created() {
    this.id = this.$route.params.id;
    this.getProduto();
    console.log(this.item);
  },
  methods: {
    getProduto() {
      fetch("http://127.0.0.1:5000/product/" + this.id)
        .then((response) => {
          response.json().then((data) => {
            this.item = data;
            console.log(data);
          });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style scoped></style>
