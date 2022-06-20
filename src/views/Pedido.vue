<template>
  <div class="containerPedido">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <section v-if="cargado" class="pedido">
      <p class="align-self-start font-weight-bold" style="font-size: 40px">{{$t('121')}}</p>
      <div class="d-flex w-100">
        <div class="w-50 d-flex justify-content-between px-5 py-3 bordes">
          <span class="d-flex align-items-center"><font-awesome-icon class="mr-1" :icon="[ 'fa', 'clock' ]"/>{{$t('133')}}</span>
          <span>{{ this.dataPedido[0].order_date }}</span>
        </div>
        <div class="w-50 d-flex justify-content-between px-5 py-3 bordes">
          <span class="d-flex align-items-center"><font-awesome-icon class="mr-1" :icon="[ 'fa', 'file-excel' ]"/>{{$t('134')}}</span>
          <span>#{{ this.dataPedido[0].id }}</span>
        </div>
      </div>
      <div class="d-flex w-100">
        <div class="w-50 d-flex justify-content-between px-5 py-3 bordes flex-wrap">
          <span class="d-flex align-items-center"><font-awesome-icon class="mr-1" :icon="[ 'fa', 'location-arrow' ]"/>{{$t('122')}}</span>
          <div v-if="this.dataPedido[0].order_shipping_type===1" class="text-right">
            <p>{{this.dataPedido[0].nombre}}</p>
            <p>C/{{this.dataPedido[0].direccion}}</p>
            <p>{{this.dataPedido[0].ciudad}}</p>
          </div>
          <div v-else class="text-right">
            <p>{{$t('123')}}: BIKE LAB</p>
            <p>Av. Ciudad de Plasencia, 21, 45600 Talavera de la Reina</p>
            <div>
              <font-awesome-icon :icon="[ 'fa', 'phone' ]"/>
              <span class="ml-2 mr-2">642945582</span>
              <font-awesome-icon :icon="[ 'fa', 'envelope' ]"/>
              <span class="ml-2">contactobikelab@gmail.com</span>
            </div>
          </div>
        </div>
        <div class="w-50 d-flex justify-content-between px-5 py-3 bordes flex-wrap">
          <span class="d-flex align-items-center"><font-awesome-icon class="mr-1" :icon="[ 'fa', 'money-bill-wave' ]"/>{{$t('125')}}</span>
          <div v-if="this.dataPedido[0].order_shipping_type===1" class="text-right">
            <p>{{this.dataPedido[0].nombre}}</p>
            <p>C/{{this.dataPedido[0].direccion}}</p>
            <p>{{this.dataPedido[0].ciudad}}</p>
          </div>
          <div v-else class="text-right">
            <p>{{$t('123')}}: BIKE LAB</p>
            <p>Av. Ciudad de Plasencia, 21, 45600 Talavera de la Reina</p>
            <div>
              <font-awesome-icon :icon="[ 'fa', 'phone' ]"/>
              <span class="ml-2 mr-2">642945582</span>
              <font-awesome-icon :icon="[ 'fa', 'envelope' ]"/>
              <span class="ml-2">contactobikelab@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex w-100 bordes flex-column items">
        <p class="px-5 text-left bordes">{{$t('124')}}</p>
        <div v-for="(item,index) in this.dataItems" :key="index" class="d-flex justify-content-between" style="margin: 0 auto; width: 90%">
          <div class="d-flex">
            <div>
              <img class="imgItems" v-if="item.tipoCesta ==='equipamiento'"
                   :src="'https://proyectogradoback.herokuapp.com/uploads/equipamiento/imagenes/'+item.imagen">
              <img class="imgItems" v-else-if="item.tipoCesta ==='modelos'"
                   :src="'https://proyectogradoback.herokuapp.com/uploads/modelos/imagenes/'+item.imagen">
            </div>
            <div class="text-left">
              <p v-if="idioma==='es'" >{{item.nombreEs}}</p>
              <p v-else >{{item.nombreEn}}</p>
              <p v-if="item.tipoCesta ==='equipamiento'">{{$t('2')}}</p>
              <p v-else-if="item.tipoCesta ==='modelos'">{{$t('132')}}</p>
              <p>{{$t('135')}}: {{item.cantidad}}</p>
              <p v-if="item.tallaSeleccionada!=null">{{$t('83')}}: {{item.tallaSeleccionada}}</p>
            </div>
          </div>
          <div style="width: fit-content;height: fit-content;align-self: self-end;">
            <p>
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
      <div class="totalContainer bordes">
        <div class="total">
          <div class="text-left">
            <p>
              <font-awesome-icon class="mr-2" :icon="[ 'fa', 'credit-card' ]"/>{{$t('126')}}
            </p>
            <p>
              <font-awesome-icon class="mr-2" :icon="[ 'fab', 'cc-visa' ]"/>{{$t('128')}}
            </p>
          </div>
          <div class="text-left" style="width: 220px;">
            <p v-if="this.dataPedido[0].order_shipping_type===1 && this.dataPedido[0].totalCesta<100" class="d-flex justify-content-between" ><span>Gastos de Envio</span> <span >7,50€</span></p>
            <p v-else class="d-flex justify-content-between" ><span>{{$t('129')}}</span> <span >0,00€</span></p>
            <p v-if="this.dataPedido[0].order_shipping_type===1 && this.dataPedido[0].totalCesta<100"
               class="d-flex justify-content-between">
              <span>{{$t('130')}}</span>
              <span>{{
                  (this.dataPedido[0].totalCesta - 7.5).toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 2
                  })
                }}</span>
            </p>
            <p v-else class="d-flex justify-content-between">
              <span>{{$t('130')}}</span>
              <span>
                {{
                  (this.dataPedido[0].totalCesta).toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 2
                  })
                }}
              </span>
            </p>
            <p class="d-flex justify-content-between">
              <span>Total <small style="color: #c5c2c2">{{$t('131')}}</small> </span>
              <span>
                {{
                  (this.dataPedido[0].totalCesta).toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 2
                  })
                }}
              </span>
            </p>
          </div>
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
  name: "Pedido",
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  computed: mapState([
    'idioma'
  ]),
  data:function () {
    return{
      dataPedido: [],
      cargado: false,
      dataItems: []
    }
  },
  mounted(){
    this.getDatosPedidos()
  },
  methods: {
    async getDatosPedidos() {
      let data = new FormData();
      data.append('id', this.$route.params.id)

      let response = await fetch('http://localhost:8000/api/Order', {
        method: 'POST',
        body: data,
      })
      this.dataPedido = await response.json();

      await this.getArticulo()
    },
    async getArticulo() {
      let response = await fetch('http://localhost:8000/api/articulos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        dataType: 'json',
        body: this.dataPedido[0].order,
        contentType: 'application/json; charset=utf-8'
      })

      this.dataItems = await response.json()
      this.cargado = true;
    },
  }
}
</script>

<style scoped>
.containerPedido {
  display: grid;
  max-width: 2000px;
  width: 100%;
  height: 100vh;
  grid-template-areas:
    "header"
    "pedido"
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

.pedido {
  grid-area: pedido;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;

}

.linkNonStyle{
  text-decoration:none;
}

.bordes{
  border: 1px solid rgba(180, 175, 175, 0.4);
}

.items{
gap: 30px;
}

.imgItems{
  width: 200px;
  max-width: 250px;
}

.totalContainer{
  display: flex;
  justify-content: center;
}

.total{
  width: 90%;
  display: flex;
  justify-content: space-between;
}

</style>