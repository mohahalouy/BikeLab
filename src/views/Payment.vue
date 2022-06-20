<template>
  <div class="paymentContainer">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <section class="paymentSection">
      <a @click="$router.go(-1)" class="returnButton">
        <font-awesome-icon :icon="[ 'fas', 'arrow-left' ]" class="ml-2"/>
        {{ $t('85') }}
      </a>
      <div class="payment">
        <h1 class="text-left">{{$t('120')}}</h1>
        <form @submit.prevent="realizarCompra">
          <div class="d-flex justify-content-between pt-2 px-2"
               style="border-top: 1px solid #c9c9c9; background-color: #fbfbfb">
            <label class="ml-2">
              <input type="radio" name="formaPago" checked value="tarjeta" id="formaPago" style="cursor:pointer;">
              Tarjeta de Crédito
            </label>
            <font-awesome-icon :icon="[ 'fa', 'credit-card' ]"/>
          </div>
          <ul class="list-unstyled listaDatosTarjeta">
            <li>
              <label for="numeroTarjeta">{{$t('118')}}</label>
              <div class="divInputError">
                <input @change="validarNumeroTarjeta" class="numeroTarjeta" id="numeroTarjeta" type="text"
                       name="numeroTarjeta" v-model="dataTarjeta.numeroTarjeta" placeholder="1234 5678 9012 3456"
                       style="width: 50%">
                <small class="error">error message</small>
              </div>
            </li>
            <li class="d-flex">
              <div>
                <label for="fechaExpiracion">{{$t('119')}}</label>
                <div class="divInputError">
                  <input @change="validarFechaExpidicion" type="month" class="fechaExpiracion" id="fechaExpiracion"
                         name="fechaExpiracion"
                         v-model="dataTarjeta.fechaExpiracion">
                  <small class="error">error message</small>
                </div>
              </div>
              <div class="ml-2">
                <label for="numeroSeguridad">CVC / CVV:</label>
                <div class="divInputError">
                  <input @change="validarNumeroSeguridad" class="numeroSeguridad" id="numeroSeguridad" type="text"
                         name="numeroSeguridad"
                         v-model="dataTarjeta.numeroSeguridad" placeholder="123">
                  <small class="error">error message</small>
                </div>
              </div>
            </li>
          </ul>
          <input type="submit"
                 :value="[[ $t('117') +' '+  (this.$store.state.totalCesta).toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 2}) ]]"
                 class="w-100 btnPagar py-2"
                 v-bind:class="{'disabled': !this.validateNumeroTarjeta || !this.validateFechaExpidicion || !this.validateNumeroSeguridad }">
        </form>

      </div>
    </section>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import HeaderPrincipal from "../components/HeaderPrincipal";
import FullDisplayHeader from "../components/FullDisplayHeader";
import Footer from "../components/Footer";
import i18n from "../i18n";
import $ from "jquery";
import moment from "moment";
import router from "../router";
import {mapState} from "vuex";

export default {
  name: "Payment",
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  computed: mapState([
    'arrayIdsCompra',
    'idioma',
    'authenticated',
    'idUser',
    'datosUsuarioCargados'
  ]),
  data: function () {
    return {
      validateNumeroTarjeta: false,
      validateFechaExpidicion: false,
      validateNumeroSeguridad: false,
      dataTarjeta: {
        numeroTarjeta: '',
        fechaExpiracion: '',
        numeroSeguridad: ''
      },
      totalCesta:0,
      dataPersonales:[]
    }
  },
  watch: {
    datosUsuarioCargados(datosCargados) {
      if (datosCargados)
        this.getDatosPersonales();
    }
  },
  mounted() {
    this.changeTitle()
    this.getArticulo()
    if (this.datosUsuarioCargados)
      this.getDatosPersonales();
  },
  methods: {
    changeTitle() {
      document.querySelector('title').textContent = 'Payment';
    },
    validarNumeroTarjeta() {
      let numeroTarjeta = $('.listaDatosTarjeta .numeroTarjeta')
      if (this.dataTarjeta.numeroTarjeta === '') {
        this.validateNumeroTarjeta = false
        if (i18n.locale === 'es')
          this.setErrorFor(numeroTarjeta, 'El número de tarjeta no puede estar en blanco');
        else
          this.setErrorFor(numeroTarjeta, 'Card number cannot be blank');
      } else if (!this.validateVisa()) {
        this.validateNumeroTarjeta = false
        if (i18n.locale === 'es')
          this.setErrorFor(numeroTarjeta, 'El número de tarjeta no es valido');
        else
          this.setErrorFor(numeroTarjeta, 'The card number is not valid');
      } else {
        this.validateNumeroTarjeta = true
        numeroTarjeta.parent().removeClass('error')
        numeroTarjeta.parent().addClass('success')
      }

    },
    validarFechaExpidicion() {
      let fechaTarjeta = $('.listaDatosTarjeta .fechaExpiracion')
      if (new Date() > new Date(this.dataTarjeta.fechaExpiracion)) {
        this.validateFechaExpidicion = false
        if (i18n.locale === 'es')
          this.setErrorFor(fechaTarjeta, 'La fecha no puede ser anterior a la de hoy');
        else
          this.setErrorFor(fechaTarjeta, 'Card number cannot be blank');
      } else if (this.dataTarjeta.fechaExpiracion === '') {
        this.validateFechaExpidicion = false
        if (i18n.locale === 'es')
          this.setErrorFor(fechaTarjeta, 'La fecha no puede estar en blanco');
        else
          this.setErrorFor(fechaTarjeta, 'The card number is not valid');
      } else {
        this.validateFechaExpidicion = true;
        fechaTarjeta.parent().removeClass('error')
        fechaTarjeta.parent().addClass('success')
      }
    },
    validarNumeroSeguridad() {
      let numeroSeguridad = $('.listaDatosTarjeta .numeroSeguridad')
      let regEx = /^[0-9]{0,2}$/;
      if (this.dataTarjeta.numeroSeguridad.match(regEx)) {
        this.validateNumeroSeguridad = false
        if (i18n.locale === 'es')
          this.setErrorFor(numeroSeguridad, 'El numero secreto no es correcto');
        else
          this.setErrorFor(numeroSeguridad, 'Card number cannot be blank');
      } else if (this.dataTarjeta.numeroSeguridad === '') {
        this.validateNumeroSeguridad = false;
        if (i18n.locale === 'es')
          this.setErrorFor(numeroSeguridad, 'El número de seguirdad no puede estar en blanco');
        else
          this.setErrorFor(numeroSeguridad, 'Card number cannot be blank');
      } else {
        this.validateNumeroSeguridad = true;
        numeroSeguridad.parent().removeClass('error')
        numeroSeguridad.parent().addClass('success')
      }
    },
    validateVisa() {
      var regEx = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/

      if (this.dataTarjeta.numeroTarjeta.match(regEx))
        return true;
      else
        return false;
    },
    setErrorFor(input, message) {
      let formControl = input.parent()
      let small = formControl.find('small')[0]

      small.innerText = message;

      formControl.removeClass('success')
      formControl.addClass('error')
    },
    async getArticulo() {
      let response = await fetch('https://proyectogradoback.herokuapp.com/api/articulos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        dataType: 'json',
        body: JSON.stringify(this.$store.state.arrayIdsCompra),
        contentType: 'application/json; charset=utf-8'
      })

      this.dataCesta = await response.json()

      this.cargadoCesta=true;

      this.calcularTotal()
    },
    calcularTotal(){
      for (const key in this.dataCesta) {
        let total = this.dataCesta[key].precio * this.dataCesta[key].cantidad
        this.totalCesta += total
      }
      if (this.totalCesta < 100 && this.totalCesta > 0)
        this.totalCesta += 7.5;
    },
    async getDatosPersonales() {
      let data = new FormData();
      data.append('idUser', this.idUser);
      let response = await fetch('https://proyectogradoback.herokuapp.com/api/cargarDatosPersonales', {
        method: 'POST',
        body: data,
      })

      this.dataPersonales = await response.json()
    },
    async realizarCompra() {
      let data = new FormData();
      data.append('idUser', this.$store.state.idUser);
      data.append('order', JSON.stringify(this.$store.state.arrayIdsCompra));
      data.append('order_status', 'Pendiente');
      data.append('order_date', moment(new Date()).format('DD-MM-YYYY'));
      data.append('order_shipping_type', this.$store.state.entregaDomicilio = this.$store.state.entregaDomicilio === true ? 1 : 0);
      data.append('nombre', this.dataPersonales[0].nombre + " " + this.dataPersonales[0].apellidos);
      data.append('direccion', this.dataPersonales[0].direccion);
      data.append('ciudad', this.dataPersonales[0].cp + " " + this.dataPersonales[0].ciudad);
      data.append('totalCesta', this.$store.state.totalCesta);
      let response = await fetch('https://proyectogradoback.herokuapp.com/api/savePurchase', {
        method: 'POST',
        body: data,
      })

      if(response.ok){
        this.$swal({
          icon: 'success',
          title: 'Tu pedido se ha realizado correctamente',
          showConfirmButton: true
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.commit('SET_ITEMS_CART_COUNT', 0)
            this.$store.state.arrayIdsCompra = []
            localStorage.removeItem('arrayIds');
            router.push({name: 'Home'})
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.paymentContainer {
  display: grid;
  max-width: 2000px;
  width: 100%;
  height: 100vh;
  grid-template-areas:
    "header"
    "paymentSection"
  "footer";
  grid-template-columns: 100%;
  grid-template-rows: auto;
  position: relative;
  justify-items: center;
  color: black;
}

.paymentContainer .header {
  position: relative;
}

.paymentSection {
  grid-area: paymentSection;
  width: 100%;
  text-align: left;
}

.returnButton {
  text-align: left;
  text-decoration: none;
  font-size: 1.4em;
  cursor: pointer;
  color: darkred;
}

.payment {
  width: 100%;
  max-width: 66%;
  margin: 0 auto;
}

.listaDatosTarjeta {
  font-size: 18px;
  text-align: left;
}

.listaDatosTarjeta .error {
  display: block;
  text-align: left;
  visibility: hidden;
}

.divInputError input {
  width: fit-content;
  background-color: #efefef;
}

.divInputError.error, .divInputError.error input, .divInputError.error small {
  color: red;
  visibility: visible;
}

.divInputError.success, .divInputError.success input {
  color: green;
}

.btnPagar {
  background-color: red;
  color: white;
  border-radius: 2px;
  font-size: 18px;
  transition: background-color 0.5s;
}

.btnPagar.disabled {
  background-color: #efefef;
  color: #808080;
  border: 2px solid #c5c2c2;
  pointer-events: none;
}

.btnPagar:hover {
  background-color: darkred;
}
</style>