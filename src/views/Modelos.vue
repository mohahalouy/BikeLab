<template>
  <div class="modelos">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <section v-if="cargado" class="todosModelos px-2 py-5">
      <h1>
        {{$t('94')}}
      </h1>
      <h2>
        {{$t('95')}}
      </h2>
      <div class="modelo">
        <div v-for="(item,index) in this.dataModelos" :key="index">
          <div v-if="item.length>0" >
            <p class="text-left tipoEntrada">{{index}}</p>
            <div>
              <div v-for="(items,index) in item" :key="index">
                <router-link :to="{ name: 'Modelo', query: { id: items.id }}" class="linkNonStyle">
                  <picture class="imgNoticia">
                    <img class="img-fluid" :src="'https://moha.ulandu.com/uploads/modelos/imagenes/'+items.imagen">
                  </picture>
                  <h5 v-if="idioma==='es'">{{ items.nombreEs }}</h5>
                  <h5 v-else>{{ items.nombreEn }}</h5>
                  <p v-if="idioma==='es'">{{ items.previewEs }}</p>
                  <p v-else>{{ items.previewEn }}</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-else class="todosModelos d-flex justify-content-center">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>


    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import HeaderPrincipal from "../components/HeaderPrincipal";
import FullDisplayHeader from "../components/FullDisplayHeader";
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
  mounted() {
    this.getModelos();
    this.goUp();
    this.changeTitle()
  },
  methods:{
    async getModelos() {
      let response = await fetch('https://moha.ulandu.com/api/modelos', {
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
    },
    changeTitle() {
      document.querySelector('title').textContent = 'Modelos';
    },
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
  background-color: #e6e6e6;
  width: 100%;
  padding: 10px 20px;
}

.todosModelos{
  grid-area: todosModelos;
  text-align: left;
  width: 100%;
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
  flex-wrap: wrap;
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
  width: 100%;
  height: 180px;
  object-fit: cover;
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

@media (max-width: 1100px){
  .todosModelos h1{
    font-size: 40px;
    line-height: normal;
  }

  .todosModelos h2{
    font-size: 20px;
    line-height: normal;
  }
}

</style>
