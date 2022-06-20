<template>
  <div class="checkoutContainer">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <section class="checkout">
      <div class="containerReturnButton text-left w-100">
        <a @click="$router.go(-1)" class="returnButton">
          <font-awesome-icon :icon="[ 'fas', 'arrow-left' ]" class="ml-2"/>
          {{ $t('85') }}
        </a>
      </div>
      <div v-if="this.cargado" class="formDatos">
        <h1 class="text-left">{{$t('115')}}</h1>
        <form  @submit.prevent="validarCampos">
          <fieldset>
            <legend class="text-left">
              {{$t('99')}}
            </legend>
            <ul class="list-unstyled listaDatosPersonales">
              <li>
                <label class="mr-4">{{$t('100')}}<span class="text-danger">*</span></label>
                <input type="radio" name="gender" checked value="hombre" id="genderHombre" class=" cursorPointer" v-model="dataPersonales[0].genero">
                <label for="genderHombre" class="pl-2  mr-4 cursorPointer">{{$t('101')}}</label>
                <input type="radio" name="gender" value="mujer" id="genderMujer" class=" cursorPointer" v-model="dataPersonales[0].genero">
                <label for="genderMujer" class="pl-2 cursorPointer">{{$t('102')}}</label>
              </li>
              <li>
                <label for="nombre">{{$t('43')}}<span class="text-danger">*</span></label>
                <div class="divInputError">
                  <input class="nombre" id="nombre" type="text" name="nombre" v-model="dataPersonales[0].nombre">
                  <small class="error">error message</small>
                </div>
              </li>
              <li>
                <label for="apellido">{{$t('103')}}<span class="text-danger">*</span></label>
                <div class="divInputError">
                  <input class="apellidos" id="apellido" type="text" name="apellido"
                         v-model="dataPersonales[0].apellidos">
                  <small class="error">error message</small>
                </div>
              </li>
              <li>
                <label for="">{{$t('104')}}<span class="text-danger">*</span></label>
                <div class="divInputError">
                  <input id="" type="text" name="" style="cursor:not-allowed;" disabled
                         v-model="this.$store.state.emailUser">
                </div>
              </li>
              <li>
                <label for="numero">{{$t('105')}}<span class="text-danger">*</span></label>
                <div class="divInputError">
                  <input class="numero" id="numero" type="text" name="numero" autocomplete="off"
                         v-model="dataPersonales[0].numeroTelefono">
                  <small class="error">error message</small>
                </div>
              </li>
            </ul>
          </fieldset>
          <input class="buttonRevisarPedido" type="submit" :value="[[ $t('138') ]]" tabindex="-1">
        </form>
      </div>
      <div v-else class="formDatos">
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
import $ from "jquery";
import i18n from "../i18n";

export default {
  name: "EditarDatosUsuario",
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  computed: mapState([
    'idUser',
    'datosUsuarioCargados',
  ]),
  watch: {
    datosUsuarioCargados(datosCargados) {
      if (datosCargados)
        this.cargarDatosPersonales();
    }
  },
  data: function () {
    return {
      cargado:false,
      dataPersonales: [
        {
          genero:'hombre',
          nombre:'',
          apellidos:'',
          numeroTelefono:'',
          entregaDomicilio:true,
          direccion:'',
          cp:'',
          ciudad:''
        }
      ]
    }
  },
  mounted() {
    this.changeTitle();
    if (this.datosUsuarioCargados)
      this.cargarDatosPersonales()
  },
  methods: {
    changeTitle() {
      document.querySelector('title').textContent = 'Editar Datos';
    },
    async cargarDatosPersonales() {
      let data = new FormData();
      data.append('idUser', this.$store.state.idUser);
      let response = await fetch('https://proyectogradoback.herokuapp.com/api/cargarDatosPersonales', {
        method: 'POST',
        body: data,
      })

      let datos=(await response.json());

      if (datos.message=== undefined) {
        this.dataPersonales =datos
      }
      this.cargado = true;
    },
    validarCampos() {
      let nombre = $('.listaDatosPersonales .nombre')
      let apellidos = $('.listaDatosPersonales .apellidos')
      let numero = $('.listaDatosPersonales .numero')
      let valido = true;

      let nombreValue = this.dataPersonales[0].nombre
      let apellidosValue = this.dataPersonales[0].apellidos
      let numeroValue = this.dataPersonales[0].numeroTelefono


      if (nombreValue === '') {
        valido = false;
        if (i18n.locale === 'es')
          this.setErrorFor(nombre, 'El nombre no puede estar en blanco');
        else
          this.setErrorFor(nombre, 'The name cannot be blank');
      } else {
        nombre.parent().removeClass('error')
        nombre.parent().addClass('success')
      }

      if (apellidosValue === '') {
        valido = false;
        if (i18n.locale === 'es')
          this.setErrorFor(apellidos, 'El apellido no puede estar en blanco');
        else
          this.setErrorFor(apellidos, 'The last name cannot be blank');
      } else {
        apellidos.parent().removeClass('error')
        apellidos.parent().addClass('success')
      }

      if (numero === '') {
        valido = false;
        if (i18n.locale === 'es')
          this.setErrorFor(numero, 'El número no puede estar en blanco');
        else
          this.setErrorFor(numero, 'The number cannot be blank');
      } else if (!this.isNumberSpain(numeroValue)) {
        valido = false;
        if (i18n.locale === 'es')
          this.setErrorFor(numero, 'El número no es válido');
        else
          this.setErrorFor(numero, 'Not a valid number');
      } else {
        numero.parent().removeClass('error')
        numero.parent().addClass('success')
      }

      if (this.dataPersonales[0].entregaDomicilio) {
        let direccion = $('.listaDatosPersonales .direccion')
        let codigoPostal = $('.listaDatosPersonales .cp')
        let ciudad = $('.listaDatosPersonales .ciudad')

        let direccionValue = this.dataPersonales[0].direccion
        let codigoPostalValue = this.dataPersonales[0].cp
        let ciudadValue = this.dataPersonales[0].ciudad

        if (direccionValue === '') {
          valido = false;
          if (i18n.locale === 'es')
            this.setErrorFor(direccion, 'La dirección no puede estar en blanco');
          else
            this.setErrorFor(direccion, 'Address cannot be blank');
        } else {
          direccion.parent().removeClass('error')
          direccion.parent().addClass('success')
        }

        if (codigoPostalValue === '') {
          valido = false;
          if (i18n.locale === 'es')
            this.setErrorFor(codigoPostal, 'El código postal no puede estar en blanco');
          else
            this.setErrorFor(codigoPostal, 'The postal code cannot be blank');
        } else {
          codigoPostal.parent().removeClass('error')
          codigoPostal.parent().addClass('success')
        }

        if (ciudadValue === '') {
          valido = false;
          if (i18n.locale === 'es')
            this.setErrorFor(ciudad, 'La ciudad no puede estar en blanco');
          else
            this.setErrorFor(ciudad, 'The name´s city cannot be blank');
        } else {
          ciudad.parent().removeClass('error')
          ciudad.parent().addClass('success')
        }
      }

      if (valido) {
        this.guardarDatosPersonales();
      }


    },
    setErrorFor(input, message) {
      let formControl = input.parent()
      let small = formControl.find('small')[0]

      small.innerText = message;

      formControl.removeClass('success')
      formControl.addClass('error')
    },
    isNumberSpain(numero) {
      return /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8,8}$/.test(numero)
    },
    async guardarDatosPersonales() {
      let data = new FormData();

      let nombreValue = this.dataPersonales[0].nombre
      let apellidosValue = this.dataPersonales[0].apellidos
      let numeroValue = this.dataPersonales[0].numeroTelefono
      let generoValue = this.dataPersonales[0].genero
      let entregaDomicilio = this.dataPersonales[0].entregaDomicilio

      entregaDomicilio = entregaDomicilio === true ? 1 : 0;

      data.append('idUser', this.$store.state.idUser)
      data.append('genero', generoValue)
      data.append('email', this.$store.state.emailUser)
      data.append('nombre', nombreValue)
      data.append('apellidos', apellidosValue)
      data.append('numeroTelefono', numeroValue)
      data.append('entregaDomicilio', entregaDomicilio)


      if (this.dataPersonales[0].entregaDomicilio) {
        let direccionValue = this.dataPersonales[0].direccion
        let codigoPostalValue = this.dataPersonales[0].cp
        let ciudadValue = this.dataPersonales[0].ciudad

        data.append('direccion', direccionValue)
        data.append('cp', codigoPostalValue)
        data.append('ciudad', ciudadValue)
      }


      let response = await fetch('https://proyectogradoback.herokuapp.com/api/datosPersonales', {
        method: 'POST',
        credentials: 'include',
        body: data
      });

      if (response.ok)
        this.$swal({
          icon: 'success',
          title: 'Datos actualizados correctamente',
          showConfirmButton: true
        })
    }
  }
}
</script>

<style scoped>
.checkoutContainer {
  display: grid;
  max-width: 2000px;
  width: 100%;
  grid-template-areas:
    "header"
    "checkout"
  "footer";
  grid-template-columns: 100%;
  grid-template-rows: auto;
  position: relative;
  justify-items: center;
}

.header {
  position: relative;
  color: black;
}

.formDatos{
  max-width: 66%;
}

.checkout {
  grid-area: checkout;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
}

.containerReturnButton {
  background: #dfdfdf;
  padding: 10px 0;
}

.returnButton {
  text-align: left;
  text-decoration: none;
  font-size: 1.4em;
  cursor: pointer;
  color: darkred;
}

.listaDatosPersonales {
  font-size: 18px;
  text-align: left;
}

.divInputError input {
  width: 100%;
  background-color: #efefef;
}

.divInputError.error, .divInputError.error input, .divInputError.error small {
  color: red;
  visibility: visible;
}

.divInputError.success, .divInputError.success input {
  color: green;
}

input:disabled {
  color: grey;
  border-color: #ddd;
}

.listaDatosPersonales .error {
  display: block;
  text-align: left;
  visibility: hidden;
}

.listaDatosPersonales li label:first-child {
  cursor: pointer;
}

.cursorPointer {
  cursor: pointer;
}

.buttonRevisarPedido {
  width: 100%;
  background-color: red;
  color: white;
  transition: background-color 0.5s;
}

.buttonRevisarPedido:hover {
  background-color: darkred;
}

.conceDisponibles {
  text-align: left;
  cursor: pointer;
  border: 1px solid rgb(215, 215, 215);
  padding: 20px
}

@media (max-width: 700px){
  .formDatos{
    max-width: 100%;
    padding: 20px;
  }
}

</style>