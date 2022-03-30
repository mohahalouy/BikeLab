<template>
  <div class="modelos">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <section v-if="idioma==='es'"  class="modelo">
      <div class="" v-for="item in this.dataModelos" :key="item.id">
        <router-link :to="{ name: 'Modelo', query: { id: item.id }}" class="linkNonStyle">
          <picture class="imgNoticia">
            <img class="img-fluid" :src="'http://127.0.0.1:8000/uploads/modelos/imagenes/'+item.imagen">
          </picture>
          <h2>{{ item.nombreEs }}</h2>
          <p>{{ item.destacadoEs }}</p>
        </router-link>
      </div>
    </section>
    <section v-else  class="modelo">
      <div class="" v-for="item in this.dataModelos" :key="item.id">
        <router-link :to="{ name: 'Modelo', query: { id: item.id }}" class="linkNonStyle">
          <picture class="imgNoticia">
            <img class="img-fluid" :src="'http://127.0.0.1:8000/uploads/modelos/imagenes/'+item.imagen">
          </picture>
          <h2>{{ item.nombreEn }}</h2>
          <p>{{ item.destacadoEn }}</p>
        </router-link>
      </div>
    </section>


    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import HeaderPrincipal from "@/components/HeaderPrincipal";
import FullDisplayHeader from "@/components/FullDisplayHeader";
import Footer from "../components/Footer";
import $ from 'jquery';
import {mapState} from "vuex";
export default {
  name: 'Modelos',
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  computed: mapState([
    'idioma'
  ]),
  data: function () {
    return {
      dataModelos: []
    }
  },
  methods:{
    async getModelos() {
      let response = await fetch('http://localhost:8000/api/modelos', {
        headers: {"Accept": "application/json", 'Content-Type': 'application/json'}
      })

      let content = await response.json()

      this.dataModelos = content
    },
    goUp() {
      $('html, body').animate({scrollTop: 0}, 500);
    }
  },
  mounted() {
    this.getModelos();
    this.goUp();
  }
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

.modelo{
  grid-area: modelo;
  background-color: #e6e6e6;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px 20px;
}

.modelo > div{
  background-color: white;
  min-height: 250px;
  max-height: 450px;
  cursor: pointer;
  padding: 10px 20px;
  max-width: 250px;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modelo > div img {
  padding: 20px;
  transition: transform 0.5s;
}

.modelo > div:hover img {
  transform: scale(1.1);
}

.linkNonStyle {
  text-decoration: none;
  color: black;
}


.linkNonStyle:hover {
  text-underline: none;
}
</style>
