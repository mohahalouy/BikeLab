<template>
  <div class="modelos">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <div>
      <picture class="imgNoticia">
        <img class="img-fluid" :src="'http://127.0.0.1:8000/uploads/modelos/imagenes/'+this.dataModel.imagen">
      </picture>
      <audio :src="'http://127.0.0.1:8000/uploads/modelos/sonidoMotor/'+this.dataModel.sonidoMotor" autoplay controls></audio>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import HeaderPrincipal from "@/components/HeaderPrincipal";
import FullDisplayHeader from "@/components/FullDisplayHeader";
import Footer from "../components/Footer";
import $ from "jquery";
export default {
  name: "Modelo",
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  data: function () {
    return {
      dataModel: []
    }
  },
  mounted() {
    this.getModel();
    this.goUp();
  },
  methods:{
    async getModel() {
      let response = await fetch('http://localhost:8000/api/modelo?id=' + this.$route.query.id, {
        headers: {"Accept": "application/json", 'Content-Type': 'application/json'}
      })

      let content=await response.json()

      this.dataModel=content[0]
    },
    goUp(){
      $('html, body').animate({scrollTop:0}, 500);
    }
  },

}
</script>

<style scoped>
.modelos{
  display: grid;
  max-width: 2000px;
  width: 100%;
  height: 100vh;
  grid-template-areas:
    "header"
  "modelo"
  "footer";
  grid-template-columns: 100%;
  grid-template-rows: auto;
  position: relative;
  justify-items: center;
  color: black;
}

.header {
  position: relative;
}
</style>