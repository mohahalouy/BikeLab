<template>
  <div class="modelos">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <section v-if="cargado" class="todosModelos" data-aos="zoom-in-up"
             data-aos-easing="ease-in-back"
             data-aos-offset="0"
             data-aos-duration="500">
      <h1>
        Todos los modelos
      </h1>
      <h2>
        Encuentra tu modelo favorito
      </h2>
    </section>
    <section v-if="cargado & idioma==='es'" class="modelo">
      <div v-for="(item,index) in this.dataModelos" :key="index">
        <div v-if="item.length>0" >
          <p class="text-left tipoEntrada">{{index}}</p>
          <div>
            <div v-for="(items,index) in item" :key="index">
              <router-link :to="{ name: 'Modelo', query: { id: items.id }}" class="linkNonStyle">
                <picture class="imgNoticia">
                  <img class="img-fluid" :src="'http://127.0.0.1:8000/uploads/modelos/imagenes/'+items.imagen">
                </picture>
                <h5>{{ items.nombreEs }}</h5>
                <p>{{ items.previewEs }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    <section v-else  class="modelo">
          <div class="" v-for="item in this.dataModelos" :key="item.id">
            <router-link :to="{ name: 'Modelo', query: { id: item.id }}" class="linkNonStyle">
              <picture class="imgNoticia">
                <img class="img-fluid" :src="'http://127.0.0.1:8000/uploads/modelos/imagenes/'+item.imagen">
              </picture>
              <h5>{{ item.nombreEn }}</h5>
              <p>{{ item.destacadoEn }}</p>
            </router-link>
          </div>
        </section>-->


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
      dataModelos: {
        'Sport': [],
        'Naked':[],
        'Adventure':[],
        'Tour':[],
      },
      cargado:false
    }
  },
  methods:{
    async getModelos() {
      let response = await fetch('http://localhost:8000/api/modelos', {
        headers: {"Accept": "application/json", 'Content-Type': 'application/json'}
      })

      let content = await response.json()

      for (const key in content) {
        this.dataModelos[content[key].modelo].push(content[key])
      }

      this.cargado=true;

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
    "todosModelos"
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
  padding: 10px 20px;
}

.todosModelos{
  grid-area: todosModelos;
  text-align: left;
}

.todosModelos h1{
  font-size: 80px;
  line-height: 90px;
  font-weight: bold;
}

.todosModelos h2{
  font-size: 40px;
  line-height: 90px;
  font-weight: bold;
}

.modelo > div > div > div{
  display: flex;
  gap: 20px;
}

.modelo > div > div > div > div{
  background-color: white;
  min-height: 250px;
  max-height: 450px;
  cursor: pointer;
  padding: 10px ;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.tipoEntrada{
  font-weight: bold;
  font-size: 25px;
}

.modelo > div > div > div > div img {
  padding: 10px 0;
  transition: transform 0.5s;
}

.modelo > div > div > div > div:hover img {
  transform: scale(1.1);
}

.modelo h5{
  font-weight: bold;
}

.linkNonStyle {
  text-decoration: none;
  color: black;
}

</style>
