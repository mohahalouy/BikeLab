<template >
  <div class="cesta">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <section v-if="this.cargadoTotal" class="itemsCesta">
      <div v-if="this.dataCesta.length>=0">
        <a @click="$router.go(-1)" class="returnButton">
          <font-awesome-icon :icon="[ 'fas', 'arrow-left' ]" class="ml-2"/>
          {{ $t('85') }}
        </a>
        <p class="align-self-start font-weight-bold">{{ $t('112') }}</p>
        <div v-for="(item,index) in this.dataCesta" :key="index" class="item">
          <picture v-if="item.tipoCesta==='modelos'" class="imgCompra">
            <router-link :to="{ name: 'Modelo', query: { id: item.id }}" class="linkNonStyle">
              <img class="img-fluid" :src="'https://proyectogradoback.herokuapp.com/uploads/'+item.tipoCesta+'/imagenes/'+item.imagen">
            </router-link>
          </picture>
          <picture v-else class="imgCompra">
            <router-link :to="{ name: 'Equipamiento', params: { id:item.id, nombreProducto: item.nombreEs }}"
                         class="linkNonStyle">
              <img class="img-fluid" :src="'https://proyectogradoback.herokuapp.com/uploads/'+item.tipoCesta+'/imagenes/'+item.imagen">
            </router-link>
          </picture>
          <div class="text-left d-flex flex-column">
            <span v-if="item.tipoCesta==='modelos'" class="font-weight-bold">
                  <router-link :to="{ name: 'Modelo', query: { id: item.id }}" class="linkNonStyle">
                    <span v-if="idioma==='es'">{{ item.nombreEs }}</span>
                    <span v-else>{{ item.nombreEn }}</span>
                  </router-link>
            </span>
            <span v-else class="font-weight-bold">
                  <router-link :to="{ name: 'Equipamiento', params: { id:item.id, nombreProducto: item.nombreEs }}"
                               class="linkNonStyle">
                    <span v-if="idioma==='es'">{{ item.nombreEs }}</span>
                    <span v-else>{{ item.nombreEn }}</span>
                  </router-link>
            </span>
            <span v-if="item.tallaSeleccionada!= undefined">{{ $t('83') }}: {{ item.tallaSeleccionada }}</span>
          </div>
          <div class="containerCantPrice">
            <div class="input-group">
              <input type="number" step="1" max="" :value="item.cantidad" name="quantity" class="quantity-field"
                     style="pointer-events: none">
            </div>
            <div class="precioModelo">
              <p class="m-0">
                {{
                  (item.precio * item.cantidad).toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 2
                  })
                }}
              </p>
            </div>
          </div>
        </div>
        <div class="linkEditCesta">
          <router-link to="/cesta">{{ $t('113') }}</router-link>
        </div>
      </div>
      <div v-else>
        <p>{{ $t('65') }}</p>
      </div>
    </section>
    <section v-if="this.cargadoTotal" class="containerDireccionTotal mb-3">
      <div class="containerTotal">
        <div v-if="this.dataPersonales[0].entregaDomicilio"
             class="d-flex flex-column text-left" style="width: 50%">
          <h4>{{$t('114')}}</h4>
          <p>{{$t('43')}}: {{ this.dataPersonales[0].nombre }} {{ this.dataPersonales[0].apellidos }}</p>
          <p>{{$t('106')}}: {{ this.dataPersonales[0].direccion }}</p>
          <p>{{ this.dataPersonales[0].cp }}-{{ this.dataPersonales[0].ciudad }}</p>
          <p>{{ this.dataPersonales[0].email }}</p>
          <p>{{$t('105')}}: {{ this.dataPersonales[0].numeroTelefono }}</p>
        </div>
        <div v-else class="d-flex flex-column text-left" style="width: 50%">
          <h4>{{$t('111')}}</h4>
          <span class="cursorPointer font-weight-bold">BIKE LAB</span>
          <p>Av. Ciudad de Plasencia, 21, 45600 Talavera de la Reina</p>
          <div>
            <font-awesome-icon :icon="[ 'fa', 'phone' ]"/>
            <span class="ml-2 mr-2">642945582</span>
            <font-awesome-icon :icon="[ 'fa', 'envelope' ]"/>
            <span class="ml-2">contactobikelab@gmail.com</span>
          </div>
        </div>
        <div class="totalCesta">
          <div>
            <span>{{ $t('72') }}</span>
            <span>
              {{
                (this.totalCesta - this.totalEnvio).toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                  minimumFractionDigits: 2
                })
              }}
            </span>
          </div>
          <div>
            <span>{{ $t('73') }}</span>
            <span v-if="this.totalCesta>0">
              {{
                (this.totalEnvio).toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                  minimumFractionDigits: 2
                })
              }}
            </span>
            <span v-else>
              {{
                (0).toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                  minimumFractionDigits: 2
                })
              }}
            </span>
          </div>
          <div class="mb-4">
            <span>{{ $t('74') }}</span>
            <span>
              {{
                (this.totalCesta).toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR',
                  minimumFractionDigits: 2
                })
              }}
            </span>
          </div>
          <button class="btnContinuar" @click="goPayment">{{ $t('75') }}</button>
        </div>
      </div>
    </section>
    <div v-else>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import HeaderPrincipal from "../components/HeaderPrincipal";
import FullDisplayHeader from "../components/FullDisplayHeader";
import Footer from "../components/Footer";
import {mapState} from "vuex";
import router from "../router";
// import router from "../router";
// import moment from 'moment'
export default {
  name: "orderReview",
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  data: function () {
    return {
      dataCesta:[],
      totalCesta: 0,
      totalEnvio: 0,
      dataPersonales: [],
      cargadoTotal:false
    }
  },
  computed: mapState([
    'arrayIdsCompra',
    'idioma',
    'authenticated',
    'idUser',
    'datosUsuarioCargados'
  ]),
  watch: {
    datosUsuarioCargados(datosCargados) {
      if (datosCargados)
        this.getDatosPersonales();
    }
  },
  mounted() {
    this.getArticulo()
    this.changeTitle();
    if (this.datosUsuarioCargados)
      this.getDatosPersonales();
  },
  methods: {
    changeTitle() {
      document.querySelector('title').textContent = 'Order Review';
    },
    async getArticulo() {
      let response = await fetch('http://localhost:8000/api/articulos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        dataType: 'json',
        body: JSON.stringify(this.$store.state.arrayIdsCompra),
        contentType: 'application/json; charset=utf-8'
      })

      this.dataCesta = await response.json()

      this.calcularTotal()
    },
    async getDatosPersonales() {
      let data = new FormData();
      data.append('idUser', this.idUser);
      let response = await fetch('http://localhost:8000/api/cargarDatosPersonales', {
        method: 'POST',
        body: data,
      })

      this.dataPersonales = await response.json()

      this.cargadoTotal=true;
    },
    calcularTotal() {
      this.totalCesta = 0;
      this.totalEnvio = 0;
      for (const key in this.dataCesta) {
        let total = this.dataCesta[key].precio * this.dataCesta[key].cantidad
        this.totalCesta += total
      }
      if (this.totalCesta < 100 && this.totalCesta > 0 && this.dataPersonales[0].entregaDomicilio) {
        this.totalEnvio = 7.5;
        this.totalCesta += this.totalEnvio;
      } else if (this.totalCesta >= 100) {
        this.totalEnvio = 0;
      }

      this.$store.commit('SET_TOTAL_CESTA', this.totalCesta)

    },
    goPayment() {
      this.$store.commit('SET_COMPRA_CONFIRMADA', true)
      this.$store.commit('SET_TIPO_ENTREGA', this.dataPersonales[0].entregaDomicilio)
      router.push({name: 'Payment'})
    }
  }
}
</script>

<style scoped>
.cesta{
  display: grid;
  max-width: 2000px;
  width: 100%;
  height: 100vh;
  grid-template-areas:
    "header"
    "itemsCesta"
    "containerDireccionTotal"
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
  width: 100%;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.itemsCesta > div{
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 22px;
  padding: 20px;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.imgCompra{
  max-width: 25%;
  padding: 20px 0;
}

.cesta .nav > ul > li > a{
  color: black;
}

.item{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  background-color: #ffffff;
  width: 100%;
  color: black;
  flex-wrap: wrap;
}

.removeItem{
  color: red;
  font-weight: bold;
  position: absolute;
  right: 20px;
  top: 10px;
  cursor: pointer;
}

input,
textarea {
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  margin: 0;
  outline: none;
  padding: 10px;
}

input[type="button"] {
  -webkit-appearance: button;
  cursor: pointer;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.input-group {
  clear: both;
  margin: 15px 0;
  position: relative;
  width: fit-content;
  min-width: fit-content;
}

.input-group input[type='button'] {
  background-color: #eeeeee;
  min-width: 38px;
  width: auto;
  transition: all 300ms ease;
}

.input-group .button-minus,
.input-group .button-plus {
  font-weight: bold;
  height: 38px;
  padding: 0;
  width: 38px;
  position: relative;
}

.input-group .quantity-field {
  position: relative;
  height: 38px;
  left: -6px;
  text-align: center;
  width: 62px;
  display: inline-block;
  font-size: 13px;
  margin: 0 0 5px;
  resize: vertical;
}

.button-plus {
  left: -13px;
}

input[type="number"] {
  -moz-appearance: textfield;
  -webkit-appearance: none;
}

.precioModelo{
  font-weight: bold;
}

.containerDireccionTotal{
  grid-area: containerDireccionTotal;
  width: 100%;
}

.containerTotal{
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
}

.containerCantPrice{
  display: flex;
  align-items: center;
  min-width: fit-content;
}

.totalCesta{
  width: 30%;
  min-width: fit-content;
  display: flex;
  flex-direction: column;
}

.totalCesta > div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.linkNonStyle{
  color: black;
  text-decoration: none;
}

.linkNonStyle:hover {
  color: black;
}

.btnContinuar {
  background: transparent;
  border: 1px solid black;
  color: black;
  padding: 10px 0px;
  transition: all 1s ease;
  width: 100%;
}

.btnContinuar:hover {
  background-color: red;
  color: white;
  border: solid 1px transparent;
  transition: all 1s ease;
}

.linkEditCesta{
  width: 100%;
  text-align: left;
}

.linkEditCesta a{
  color: red;
}

.returnButton{
  text-decoration: none;
  font-size: 1.4em;
  cursor: pointer;
  color: darkred;
  align-self: flex-start;
}

@media (max-width: 700px){
  .item, .containerTotal {
    flex-direction: column;
    align-content: center;
  }

  .containerTotal > div{
    width: 100% !important;
    padding: 20px;
  }
}

@media (max-width: 960px){
  .containerCantPrice {
    flex-direction: column;
  }
}

</style>