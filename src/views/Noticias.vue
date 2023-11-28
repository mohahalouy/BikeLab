<template>
  <div class="noticiasContainer">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <section v-if="cargadoNoticias" class="noticias row" >
      <h1 class="titleNoticia col-12">{{$t('3')}}</h1>
      <article v-for="(item, index) in this.dataNoticias " :key=index class="col-sm-12 col-md-6 col-lg-6 col-xl-4 py-2 py-xl-2 px-xl-2">
        <router-link :to="{ name: 'Noticia', query: { id: item.id }}" class="linkNonStyle">
          <img class="img-fluid imgNoticia" :src="'https://moha.ulandu.com/uploads/noticias/'+item.imagen">
        </router-link>
        <div class="letrasVisorNoticas text-left">
          <p class="">{{ item.fecha }}</p>
          <router-link :to="{ name: 'Noticia', query: { id: item.id }}" class="linkNonStyle">
            <h4 v-if="idioma==='es'"  class="tituloNoticia">{{ item.tituloEs }}</h4>
            <h4 v-else class="tituloNoticia">{{ item.tituloEn}}</h4>
          </router-link>
          <p v-if="idioma==='es'" class="mb-0 previexTextNoticia">{{ item.previewTextoEs }}</p>
          <p v-else class="mb-0 previexTextNoticia">{{ item.previewTextoEn }}</p>
        </div>
      </article>
    </section>
    <section v-else class="noticias LoadingHomeNoticias">
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
export default {
  name: "Noticias",
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  computed: mapState([
    'idioma'
  ]),
  data() {
    return{
      dataNoticias:[],
      cargadoNoticias:false
    }
  },
  mounted() {
    this.noticias();
    this.changeTitle()
  },
  methods: {
    changeTitle() {
      document.querySelector('title').textContent = 'Noticias';
    },
    async noticias() {
      let response = await fetch('https://moha.ulandu.com/api/noticias', {
        headers: {"Accept": "application/json", 'Content-Type': 'application/json'}
      })

      let content = await response.json()

      this.dataNoticias = content;

      this.cargadoNoticias=true;
    }
  }
}
</script>

<style scoped>
.noticiasContainer{
  display: grid;
  max-width: 2000px;
  width: 100%;
  height: 100vh;
  grid-template-areas:
    "header"
    "noticias"
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

.noticias{
  grid-area: noticias;
  background-color: #e6e6e6;
  width: 100%;
  padding: 10px 20px;
}

.titleNoticia{
  text-align:left;
  font-size: 80px;
}


.letrasVisorNoticas{
  color: black;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tituloNoticia{
  color: black;
  transition: color 0.5s;
}

.tituloNoticia:hover{
  color: red;
}

.linkNonStyle {
  text-decoration: none;
  color: black;
}

.previexTextNoticia{
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.imgNoticia{
  height: 400px;
  max-height: 400px;
  object-fit: cover;
}


</style>