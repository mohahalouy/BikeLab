<template>
  <div class="noticias">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <section v-if="cargadoNoticias" class="noticia mb-5">
      <a @click="$router.go(-1)" class="returnButton">
        <font-awesome-icon :icon="[ 'fas', 'arrow-left' ]" class="ml-2"/>
       {{$t('85')}}
      </a>
      <h1 v-if="idioma==='es'" class="mb-5">{{this.dataNoticia.tituloEs}}</h1>
      <h1 v-else class="mb-5">{{this.dataNoticia.tituloEn}}</h1>
      <p class="text-danger">{{this.dataNoticia.fecha}}</p>
      <picture class="imgNoticia">
        <img class="img-fluid" :src="'https://proyectogradoback.herokuapp.com/uploads/noticias/'+this.dataNoticia.imagen">
      </picture>
      <div v-if="idioma==='es'" class="textoNoti mt-5" v-html="this.dataNoticia.textoEs"></div>
      <div v-else class="textoNoti mt-5" v-html="this.dataNoticia.textoEn"></div>
    </section>
    <section v-else class="noticia LoadingHomeNoticias">
      <p>l</p>
      <p>o</p>
      <p>a</p>
      <p>d</p>
      <p>i</p>
      <p>n</p>
      <p>g</p>
    </section>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import HeaderPrincipal from "../components/HeaderPrincipal";
import FullDisplayHeader from "../components/FullDisplayHeader";
import Footer from "../components/Footer";
import {mapState} from "vuex";
import $ from "jquery";
export default {
  name: "Noticia",
  computed: mapState([
    'idioma'
  ]),
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  data: function () {
    return {
      dataNoticia: [],
      cargadoNoticias:false
    }
  },
  methods:{
    async getNoticia() {
      let response = await fetch('http://localhost:8000/api/noticia?id=' + this.$route.query.id, {
        headers: {"Accept": "application/json", 'Content-Type': 'application/json'}
      })

      let content=await response.json()

      this.dataNoticia=content[0]

      this.cargadoNoticias=true;
    },
    goUp(){
      $('html, body').animate({scrollTop:0}, 500);
    }
  },
  mounted() {
    this.getNoticia();
    this.goUp();
  }
}
</script>

<style scoped>
.noticias{
  display: grid;
  max-width: 2000px;
  width: 100%;
  grid-template-areas:
    "header"
  "noticia"
  "footer";
  grid-template-columns: 100%;
  grid-template-rows: auto;
  position: relative;
  justify-items: center;
  color: black;
}

.header {
  grid-area: header;
}

.fullDisplayHeader {
  display: none;
  background-color: rgb(0 0 0 / 80%);
  height: 100vh;
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
}

.fullDisplayHeader.desactivate {
  display: block;
  animation: desactivateResponsiveHeader 1s forwards;
}

@keyframes desactivateResponsiveHeader {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}

.fullDisplayHeader.desactivate .headerResponsive {
  display: none;
}

.fullDisplayHeader.active {
  display: block;
  animation: activateResponsiveHeader 1s forwards;
}

@keyframes activateResponsiveHeader {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.fullDisplayHeader.active .headerResponsive {
  opacity: 0;
  animation: opacityHeader 1s 1s forwards;
}

@keyframes opacityHeader {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.noticia{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: noticia;
}

.noticia > p{
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.textoNoti{
  text-align: left;
  width: 95%;
}

.imgNoticia {
  width: 95%;
  height: auto;
  max-width: 1450px;
  max-height: 100vh;
  /*max-width: 90%;*/
  /*max-height: 800px;*/
}

.imgNoticia > img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}

.returnButton{
  text-decoration: none;
  font-size: 1.4em;
  cursor: pointer;
  color: darkred;
}

</style>