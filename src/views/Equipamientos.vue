<template>
  <div class="containerEquipamiento">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <section class="equipamiento">
      <div class="portada"
           :style="{ 'background-image': 'url(https://moha.ulandu.com/uploads/Portadasequipamiento/'+this.$route.query.tipoArticulo+'.jpg)' }">
        <h1 v-if="this.$route.query.tipoArticulo==='ropaHombre'">{{$t('24')}}</h1>
        <h1 v-else-if="this.$route.query.tipoArticulo==='ropaMujer'">{{$t('25')}}</h1>
        <h1 v-else-if="this.$route.query.tipoArticulo==='ropaNinio'">{{$t('26')}}</h1>
        <h1 v-else-if="this.$route.query.tipoArticulo==='accesorios'">{{$t('27')}}</h1>
      </div>
      <div v-if="cargado" class="containerItems mt-5" >
        <p class="w-100 text-left text-dark">{{ this.dataEquipamiento.length }} {{$t('84')}}</p>
        <div v-for="(item,index) in this.dataEquipamiento" :key="index" class="items">
          <router-link :to="{ name: 'Equipamiento', params: { id:item.id, nombreProducto: item.nombreEs }}" class="linkNonStyle">
            <div>
              <picture class="imgItem">
                <img class="img-fluid h-100"
                     :src="'https://moha.ulandu.com/uploads/equipamiento/imagenes/'+item.imagen">
              </picture>
            </div>
            <p v-if="idioma==='es'" style="max-width: 350px;min-width: 350px;">{{ item.nombreEs }}</p>
            <p v-else style="max-width: 350px;min-width: 350px;">{{ item.nombreEn }}</p>
            <p>
              {{
                parseFloat(item.precio).toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                  minimumFractionDigits: 2
                })
              }}
            </p>
          </router-link>
        </div>
      </div>
      <div v-else class="containerItems mt-5" >
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

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
  name: "Equipamientos",
  computed: mapState([
    'idioma'
  ]),
  data: function () {
    return {
      dataEquipamiento: [],
      cargado: false
    }
  },
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  mounted() {
    this.getEquipamiento();
    this.changeTitle()
  },
  watch: {
    '$route.query.tipoArticulo'() {
      this.getEquipamiento();
    }
  },
  methods: {
    changeTitle() {
      document.querySelector('title').textContent = 'Equipamientos';
    },
    async getEquipamiento() {
      this.cargado=false;
      let response = await fetch('https://moha.ulandu.com/api/equipamientos?tipoArticulo=' + this.$route.query.tipoArticulo, {
        headers: {"Accept": "application/json", 'Content-Type': 'application/json'}
      })

      let content = await response.json()

      this.dataEquipamiento = content

      this.cargado=true;
    }
  }
}
</script>

<style scoped>
.containerEquipamiento {
  display: grid;
  max-width: 2000px;
  width: 100%;
  height: 100vh;
  grid-template-areas:
    "header"
    "equipamiento"
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

.equipamiento {
  grid-area: equipamiento;
  width: 100%;
}

.portada {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 70%;
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.portada > h1 {
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.02em;
  font-size: 46px;
  color: white;
  text-shadow: 1px 1px 2px black;
}

.containerItems {
  background: #e6e6e6;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

.containerItems .items {
  background: white;
  text-align: left;
  padding: 20px;
  font-weight: bold;
  cursor: pointer;
}

.containerItems .items img {
  max-width: 350px;
  min-width: 350px;
  min-height: 300px;
  max-height: 300px;
  padding: 10px 0;
  transition: transform 0.5s;
}

.containerItems .items:hover img {
  transform: scale(1.1);
}

.linkNonStyle {
  text-decoration: none;
  color: black;
}
</style>