<template>
  <div class="cesta">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <section class="itemsCesta">
      <div v-if="this.dataCesta.length<=0">
        <p>La cesta está vacia</p>
      </div>
      <div v-else>
        <p class="align-self-start font-weight-bold">Carrito</p>
        <div v-for="(item,index) in this.dataCesta" :key="index" class="item">
          <span class="removeItem" :data-id="item.id" @click="removeItem">&#10005;</span>
          <picture  v-if="item.tipoCesta==='modelos'" class="imgNoticia" >
            <router-link :to="{ name: 'Modelo', query: { id: item.id }}" class="linkNonStyle">
              <img class="img-fluid" :src="'http://127.0.0.1:8000/uploads/'+item.tipoCesta+'/imagenes/'+item.imagen">
            </router-link>
          </picture>
          <picture  v-else class="imgNoticia" >
            <router-link :to="{ name: 'Equipamiento', params: { id:item.id, nombreProducto: item.nombreEs }}"  class="linkNonStyle">
            <img class="img-fluid" :src="'http://127.0.0.1:8000/uploads/'+item.tipoCesta+'/imagenes/'+item.imagen">
            </router-link>
          </picture>
          <div class="text-left d-flex flex-column" style="width: 25%">
            <span v-if="item.tipoCesta==='modelos'" class="font-weight-bold">
                  <router-link :to="{ name: 'Modelo', query: { id: item.id }}" class="linkNonStyle">
                    {{ item.nombreEs }}
                  </router-link>
            </span>
            <span v-else class="font-weight-bold">
                  <router-link :to="{ name: 'Equipamiento', params: { id:item.id, nombreProducto: item.nombreEs }}"
                               class="linkNonStyle">
                    {{ item.nombreEs }}
                  </router-link>
            </span>
            <span v-if="item.tallaSeleccionada!= undefined">Talla: {{ item.tallaSeleccionada }}</span>
          </div>
          <div class="input-group">
            <input type="button" value="-" class="button-minus" data-field="quantity" :data-id="item.id"
                   @click="decrementValue">
            <input type="number" step="1" max="" :value="item.cantidad" name="quantity" class="quantity-field"
                   style="pointer-events: none">
            <input type="button" value="+" class="button-plus" data-field="quantity" :data-id="item.id"
                   @click="incrementValue">
          </div>
          <div class="precioModelo">
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
    </section>
    <section class="containerDireccionTotal">
      <p>Dónde entregar el pedido</p>
      <div class="containerTotal">
        <div class="d-flex flex-column" style="width: 70%">
          <label class="d-flex text-left" style="cursor:pointer;" @change="revisarEnvio">
            <input type="radio" name="tipoenvio" class="mt-1" checked value="domicilio">
            <div class="ml-2">
              <p>
                Entrega a domicilio
              </p>
              <p>La entrega a tu domicilio o a una dirección alternativa es gratuita para pedidos superiores a 100 €.
                Para pedidos inferiores a 100 € se cargarán 7,50 € por gastos de entrega.
                La entrega tendrá lugar en un plazo de 4 a 6 días laborables.
                Entrega por SEUR</p>
            </div>
          </label>
          <label class="d-flex text-left" style="cursor:pointer;" @change="revisarEnvio">
            <input type="radio" name="tipoenvio" class="mt-1" value="concesionario">
            <div class="ml-2">
              <p>
                Recoge el pedido en tu concesionario sin coste alguno
              </p>
              <p>
                Puedes recoger el pedido en tu concesionario Yamaha sin cargo alguno
                Recibirás un correo electrónico en un plazo de 4 a 6 días laborables cuando tu pedido esté preparado.
                Recibirás un email cuando el pedido esté listo para recoger.
              </p>
            </div>
          </label>
        </div>
        <div class="totalCesta ml-2">
          <div>
            <span>Subtotal</span>
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
            <span>Envío</span>
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
            <span>Total IVA incl.</span>
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
          <button class="btnContinuar">Continuar</button>
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
import $ from 'jquery';

export default {
  name: "Cesta",
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  data: function () {
    return {
      dataCesta:[],
      totalCesta:0,
      totalEnvio:0,
      entregaDomicilio:true
    }
  },
  computed: mapState([
    'arrayIdsCompra'
  ]),
  mounted() {
    this.getArticulo()
  },
  methods: {
    removeItem(){
      let id = parseInt(event.target.dataset.id);
      for (const key in this.dataCesta) {
        if (id === this.dataCesta[key].id) {
          this.dataCesta.splice(parseInt(key), 1);
        }
      }

      for (const item in this.$store.state.arrayIdsCompra) {
        if (id === parseInt(this.$store.state.arrayIdsCompra[item].id)) {
          this.$store.state.arrayIdsCompra.splice(parseInt(item), 1);
        }
      }

      this.$store.commit('SET_ITEMS_CART_COUNT',(this.$store.state.arrayIdsCompra).length)
      localStorage.setItem("arrayIds", JSON.stringify(this.$store.state.arrayIdsCompra));


      this.calcularTotal()
    },
    incrementValue() {
      event.preventDefault();

      var fieldName = $(event.target).data('field');
      var parent = $(event.target).closest('div');
      var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

      if (!isNaN(currentVal)) {
        parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
      } else {
        parent.find('input[name=' + fieldName + ']').val(0);
      }

      for (const key in this.dataCesta) {
        if ($(event.target).data('id') === this.dataCesta[key].id) {
          this.dataCesta[key].cantidad = this.dataCesta[key].cantidad + 1
        }
      }

      let existe=false;
      for (const item in this.$store.state.arrayIdsCompra) {
        if (parseInt($(event.target).data('id')) === parseInt(this.$store.state.arrayIdsCompra[item].id)) {
          existe = true;
          this.$store.state.arrayIdsCompra[item].cantidad = parseInt(this.$store.state.arrayIdsCompra[item].cantidad) + 1
        }
      }
      if (!existe) {
        this.$store.commit('ADD_ITEMS_CART_ID', {id: this.$route.query.id, cantidad: 1})
      }
      this.$store.commit('SET_ITEMS_CART_COUNT',(this.$store.state.arrayIdsCompra).length)
      localStorage.setItem("arrayIds", JSON.stringify(this.$store.state.arrayIdsCompra));

    this.calcularTotal();
    },
    decrementValue() {
      event.preventDefault();
      var fieldName = $(event.target).data('field');
      var parent = $(event.target).closest('div');
      var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);


      if (!isNaN(currentVal) && currentVal-1 > 0) {
        parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
        for (const key in this.dataCesta) {
          if ($(event.target).data('id') === this.dataCesta[key].id) {
            this.dataCesta[key].cantidad = this.dataCesta[key].cantidad - 1
          }
        }

        let existe=false;
        for (const item in this.$store.state.arrayIdsCompra) {
          if (parseInt($(event.target).data('id')) === parseInt(this.$store.state.arrayIdsCompra[item].id)) {
            existe = true;
            this.$store.state.arrayIdsCompra[item].cantidad = parseInt(this.$store.state.arrayIdsCompra[item].cantidad) - 1
          }
        }
        if (!existe) {
          this.$store.commit('ADD_ITEMS_CART_ID', {id: this.$route.query.id, cantidad: 1})
        }
        this.$store.commit('SET_ITEMS_CART_COUNT',(this.$store.state.arrayIdsCompra).length)
        localStorage.setItem("arrayIds", JSON.stringify(this.$store.state.arrayIdsCompra));

        this.calcularTotal()
      } else {
        parent.find('input[name=' + fieldName + ']').val(1);
      }

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

      console.log(this.dataCesta)
      this.calcularTotal()
    },
    calcularTotal(){
      this.totalCesta=0;
      this.totalEnvio=0;
      for (const key in this.dataCesta) {
        let total = this.dataCesta[key].precio * this.dataCesta[key].cantidad
        this.totalCesta += total
      }
      if (this.totalCesta < 100 && this.totalCesta > 0 && this.entregaDomicilio) {
        this.totalEnvio=7.5;
        this.totalCesta +=  this.totalEnvio;
      }else if(this.totalCesta >= 100){
        this.totalEnvio=0;
      }
    },
    revisarEnvio(){
      if (event.target.value === "domicilio")
        this.entregaDomicilio = true;
      else
        this.entregaDomicilio = false;
      this.calcularTotal()
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
  width: 75%;
  justify-content: center;
}

.imgNoticia{
  max-width: 300px;
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
  width: 20%;
}

.containerDireccionTotal{
  grid-area: containerDireccionTotal;
  width: fit-content;
}

.containerTotal{
  display: flex;
  justify-content: center;
  width: 75%;
  margin: 0 auto;
}

.totalCesta{
  width: 30%;
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
}

.btnContinuar:hover {
  background-color: red;
  color: white;
  border: solid 1px transparent;
  transition: all 1s ease;
}
</style>