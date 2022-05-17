<template>
  <div class="cesta">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <div class="itemsCesta">
      <div v-for="(item,index) in this.dataModels" :key="index">
        <picture class="imgNoticia">
          <img class="img-fluid" :src="'http://127.0.0.1:8000/uploads/modelos/imagenes/'+item.imagen">
        </picture>
      </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import HeaderPrincipal from "@/components/HeaderPrincipal";
import FullDisplayHeader from "@/components/FullDisplayHeader";
import Footer from "../components/Footer";
import {mapState} from "vuex";
// import $ from 'jquery';

export default {
  name: "Cesta",
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  data: function () {
    return {
      dataModels:[]
    }
  },
  computed: mapState([
    'arrayIdsCompra'
  ]),
  mounted() {
    this.getModelo()
  },
  methods: {
    async getModelo() {
      let response = await fetch('http://localhost:8000/api/modelos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        dataType: 'json',
        body: JSON.stringify(this.$store.state.arrayIdsCompra),
        contentType: 'application/json; charset=utf-8'
      })

      this.dataModels = await response.json()

    }
  }
}
</script>

<style>
.cesta{
  display: grid;
  max-width: 2000px;
  width: 100%;
  height: 100vh;
  grid-template-areas:
    "header"
    "itemsCesta"
  "footer";
  grid-template-columns: 100%;
  grid-template-rows: auto;
  position: relative;
  justify-items: center;
  color: black;
}

.cesta .header{
  position: relative;
}

.itemsCesta{
  grid-area: itemsCesta;
}

.cesta .nav > ul > li > a{
  color: black;
}
</style>