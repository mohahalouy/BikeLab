<template>
  <div class="cesta">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <section class="itemsCesta">
      <div v-if="!this.cargadoCesta">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div v-else-if="this.dataCesta.length<=0">
        <p>{{$t('65')}}</p>
      </div>
      <div v-else>
        <p class="align-self-start font-weight-bold">{{$t('66')}}</p>
        <div v-for="(item,index) in this.dataCesta" :key="index" class="item">
          <span class="removeItem" :data-id="item.id" :data-tipo="item.tipoCesta" @click="removeItem">&#10005;</span>
          <picture  v-if="item.tipoCesta==='modelos'" class="imgCompra" >
            <router-link :to="{ name: 'Modelo', query: { id: item.id }}" class="linkNonStyle">
              <img class="img-fluid" :src="'https://proyectogradoback.herokuapp.com/uploads/'+item.tipoCesta+'/imagenes/'+item.imagen">
            </router-link>
          </picture>
          <picture  v-else class="imgCompra" >
            <router-link :to="{ name: 'Equipamiento', params: { id:item.id, nombreProducto: item.nombreEs }}"  class="linkNonStyle">
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
            <span v-if="item.tallaSeleccionada!= undefined">{{$t('83')}}: {{ item.tallaSeleccionada }}</span>
          </div>
          <div class="containerCantPrice">
            <div class="input-group">
              <input type="button" value="-" class="button-minus" data-field="quantity" :data-id="item.id"
                     @click="decrementValue">
              <input type="number" step="1" max="" :value="item.cantidad" name="quantity" class="quantity-field"
                     style="pointer-events: none">
              <input type="button" value="+" class="button-plus" data-field="quantity" :data-id="item.id"
                     @click="incrementValue">
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
      </div>
    </section>
    <section class="containerDireccionTotal">
      <p>{{$t('67')}}</p>
      <div class="containerTotal">
        <div class="d-flex flex-column" style="width: 50%">
          <label class="d-flex text-left" style="cursor:pointer;" @change="revisarEnvio">
            <input type="radio" name="tipoenvio" class="mt-1" checked value="domicilio">
            <div class="ml-2">
              <p>
                {{$t('68')}}
              </p>
              <p>
                {{$t('69')}}
              </p>
            </div>
          </label>
          <label class="d-flex text-left" style="cursor:pointer;" @change="revisarEnvio">
            <input type="radio" name="tipoenvio" class="mt-1" value="concesionario">
            <div class="ml-2">
              <p>
                {{$t('70')}}
              </p>
              <p>
                {{$t('71')}}
              </p>
            </div>
          </label>
        </div>
        <div class="totalCesta ml-2">
          <div>
            <span>{{$t('72')}}</span>
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
            <span>{{$t('73')}}</span>
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
            <span>{{$t('74')}}</span>
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
          <button class="btnContinuar" @click="finishBuying">{{$t('75')}}</button>
        </div>
      </div>
    </section>
    <Footer class="footer"></Footer>
    <div v-if="!authenticated" class="login" style='display: none'>
      <login></login>
    </div>
  </div>
</template>

<script>
import HeaderPrincipal from "../components/HeaderPrincipal";
import FullDisplayHeader from "../components/FullDisplayHeader";
import Footer from "../components/Footer";
import Login from "../components/Login";
import {mapState} from "vuex";
import $ from 'jquery';
// import moment from 'moment'
import i18n from "../i18n";
import router from "../router";

export default {
  name: "Cesta",
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer,
    Login
  },
  data: function () {
    return {
      dataCesta:[],
      cargadoCesta:false,
      totalCesta:0,
      totalEnvio:0,
      entregaDomicilio:true,
      dataLogin: {
        email: '',
        password: ''
      },
      dataRegister: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  computed: mapState([
    'arrayIdsCompra',
    'idioma',
    'authenticated',
    'idUser'
  ]),
  mounted() {
    this.getArticulo()
  },
  methods: {
    removeItem(){
      let id = parseInt(event.target.dataset.id);
      let tipo = event.target.dataset.tipo;
      for (const key in this.dataCesta) {
        if (id === this.dataCesta[key].id && tipo === this.dataCesta[key].tipoCesta) {
          this.dataCesta.splice(parseInt(key), 1);
        }
      }

      for (const item in this.$store.state.arrayIdsCompra) {
        if (id === parseInt(this.$store.state.arrayIdsCompra[item].id) && tipo === this.$store.state.arrayIdsCompra[item].tipoArticulo) {
          this.$store.state.arrayIdsCompra.splice(parseInt(item), 1);
        }
      }

      this.$store.commit('SET_ITEMS_CART_COUNT', (this.$store.state.arrayIdsCompra).length)
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

      this.cargadoCesta=true;

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
    },
    showAlertLoginRegister() {
      let that = this
      this.$swal({
        customClass: 'swalRegistro',
        html: $('.login').html(),
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: true,
        didOpen: function () {
          $('#app').addClass('difuminated')
          $("section.formulario .signin, section.formulario .signup").on("click", function () {
            $('section.formulario, section.formulario .container').toggleClass('active')
          });

          $(".signinBx form").submit(function () {
            that.validateLogin(event)
          });
          $(".signupBx form").submit(function () {
            that.validateCreate(event)
          });
        },
        didClose: function () {
          $('#app').removeClass('difuminated')
          $('section.formulario, section.formulario .container').removeClass('active');
        }
      });
    },
    validateLogin(e) {
      e.preventDefault();
      let valido = true;
      let email = $('.swalRegistro .formulario .signinBx .email')
      let password = $('.swalRegistro .formulario .signinBx .password')
      let emailValue = email[0].value.trim()
      let passwordValue = password[0].value.trim()
      if (emailValue === '') {
        valido = false;
        if (i18n.locale === 'es')
          this.setErrorFor(email, 'El email no puede estar en blanco');
        else
          this.setErrorFor(email, 'Email cannot be blank');

      } else if (!this.isEmail(emailValue)) {
        valido = false;
        if (i18n.locale === 'es')
          this.setErrorFor(email, 'El email no es valido');
        else
          this.setErrorFor(email, 'Not a valid email');
      }

      if (passwordValue === '') {
        valido = false;
        if (i18n.locale === 'es')
          this.setErrorFor(password, 'La contraseña no puede estar en blanco');
        else
          this.setErrorFor(password, 'Password cannot be blank');
      }

      if (valido) {
        this.dataLogin.email = emailValue
        this.dataLogin.password = passwordValue
        this.loginUser()
      }
    },
    validateCreate(e) {
      e.preventDefault();
      let valido = true;
      let userName = $('.swalRegistro .formulario .signupBx .userName')
      let email = $('.swalRegistro .formulario .signupBx .email')
      let password = $('.swalRegistro .formulario .signupBx .password')
      let passwordConfirm = $('.swalRegistro .formulario .signupBx .confirmPassword')
      let userNameValue = userName[0].value.trim()
      let emailValue = email[0].value.trim()
      let passwordValue = password[0].value.trim()
      let passwordConfirmValue = passwordConfirm[0].value.trim()

      if (userNameValue === '') {
        valido = false;
        if (i18n.locale === 'es')
          this.setErrorFor(userName, 'El nombre del usuario no puede estar en blanco');
        else
          this.setErrorFor(userName, 'UserName cannot be blank');
      }


      if (emailValue === '') {
        valido = false;
        if (i18n.locale === 'es')
          this.setErrorFor(email, 'El email no puede estar en blanco');
        else
          this.setErrorFor(email, 'Email cannot be blank');
      } else if (!this.isEmail(emailValue)) {
        valido = false;
        if (i18n.locale === 'es')
          this.setErrorFor(email, 'El email no es valido');
        else
          this.setErrorFor(email, 'Not a valid email');
      }

      if (passwordConfirmValue === '') {
        valido = false;
        if (i18n.locale === 'es')
          this.setErrorFor(passwordConfirm, 'La contraseña no puede estar en blanco');
        else
          this.setErrorFor(passwordConfirm, 'Password cannot be blank');
      }

      if (passwordValue === '') {
        valido = false;
        if (i18n.locale === 'es')
          this.setErrorFor(password, 'La contraseña no puede estar en blanco');
        else
          this.setErrorFor(password, 'Password cannot be blank');
      } else if (passwordValue != passwordConfirmValue) {
        valido = false;
        if (i18n.locale === 'es') {
          this.setErrorFor(password, 'La contraseña no coincide');
          this.setErrorFor(passwordConfirm, 'La contraseña no coincide');
        } else {
          this.setErrorFor(password, 'Password isn´t same');
          this.setErrorFor(passwordConfirm, 'Password isn´t same');
        }
      }


      if (valido) {
        this.$swal.close()
        this.dataRegister.email = emailValue
        this.dataRegister.name = userNameValue
        this.dataRegister.password = passwordValue
        this.registerUser()
      }
    },
    setErrorFor(input, message) {
      let formControl = input.parent()
      let small = formControl.find('small')[0]

      small.innerText = message;

      formControl.removeClass('success')
      formControl.addClass('error')
    },
    isEmail(email) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    },
    async loginUser() {
      $('html, body').animate({scrollTop:0}, 0);
      $('.loading').show()
      $('body').addClass('noScrollBody')
      $('#app').removeClass('difuminated')
      $('#app').css('z-index', 1061);
      try {
        let response = await fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
          body: JSON.stringify(this.dataLogin)
        });
        $('.loading').hide()
        $('body').removeClass('noScrollBody')
        $('#app').css('z-index', 0);
        if (response.ok) {
          let content = await response.json();

          let permisosAdmin = await content.rol === "1" ? true : false;

          await this.$store.commit('SET_NOMBRE_USER', content.name)

          await this.$store.commit('SET_ID_USER', content.id)

          await this.$store.commit('SET_EMAIL_USER', content.email)

          await this.$store.commit('SET_ADMIN', permisosAdmin)

          await this.$store.commit('SET_AUTH', true)

          this.$swal.close()

          await router.push({name: 'Checkout'});
        } else {
          this.setErrorFor($('.swalRegistro .formulario .signinBx .email'), 'Invalid or incorrect');
          this.setErrorFor($('.swalRegistro .formulario .signinBx .password'), 'Invalid or incorrect');
          await this.$store.commit('SET_AUTH', false)
          $('#app').addClass('difuminated')

        }
      } catch (e) {
        await this.$store.commit('SET_AUTH', false)
      }
    },
    async registerUser() {
      $('html, body').animate({scrollTop:0}, 0);
      $('.loading').show()
      $('body').addClass('noScrollBody')
      let that = this;
      await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(that.dataRegister)
      }).then(function () {
            that.dataLogin.email = that.dataRegister.email;
            that.dataLogin.password = that.dataRegister.password;
            that.loginUser();
          }
      );
    },
    finishBuying(){
      if(this.authenticated) {
        router.push({name: 'Checkout'});
      }else{
        this.showAlertLoginRegister();
      }
    },
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
  width: fit-content;
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