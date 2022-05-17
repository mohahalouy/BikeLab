<template>
  <header class="header mx-auto">
    <div class="d-flex justify-content-end headerNotResponsive">
      <div id="idiomas" class="idiomas">
        <div class="imgBanderas" @click="selectLanguage">
          <span class="nombreIdioma">España</span>
          <img src="../assets/banderaEspaña.png" alt="es">
          <font-awesome-icon :icon="[ 'fas', 'angle-down' ]"/>
        </div>
        <div class="otherLanguage" @click="changeLanguage">
          <span class="nombreIdioma">UK</span>
          <img src="../assets/banderaInglaterra.png" alt="en">
        </div>
        <!--          <div id="imgIdiomas" class="d-flex imgBanderas" @click="changeLanguage">-->
        <!--            <img href="" src="../assets/banderaEspaña.png" alt="es">-->
        <!--            <img href="" src="../assets/banderaInglaterra.png" alt="en">-->
        <!--          </div>-->
      </div>
      <span style="border: 1px solid white" class="mx-2"></span>
      <button v-if="!authenticated" @click="showAlert" class="buttonAccess">Acceder</button>
      <button v-if="adminUser" @click="showAlertAdmin" class="buttonAccess mr-2">Ver Menú Admin</button>
      <button v-if="authenticated" @click="logout" class="buttonAccess">Desconcetarse</button>
      <div class="carritoCompra">
        <router-link to="/cesta">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0"
               viewBox="0 0 1280.000000 986.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,986.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <path
                  d="M11436 9844 c-92 -29 -173 -95 -241 -197 -33 -50 -98 -205 -537 -1289 l-161 -398 -5137 0 -5137 0 -61 -31 c-93 -46 -146 -121 -158 -221 -7 -63 41 -295 82 -392 30 -71 113 -340 514 -1666 94 -311 197 -653 230 -760 50 -166 230 -760 496 -1637 35 -117 93 -310 130 -429 59 -196 65 -225 68 -317 4 -155 47 -230 148 -258 46 -12 778 -14 872 -2 36 4 47 3 42 -6 -4 -6 -12 -11 -18 -11 -6 0 -43 -14 -82 -32 -245 -110 -466 -333 -571 -576 -194 -447 -100 -959 238 -1294 619 -613 1640 -321 1864 531 34 129 43 353 19 490 -39 225 -146 436 -305 605 -106 112 -284 227 -426 276 l-50 17 265 7 c258 6 1715 21 3080 31 371 3 695 8 720 10 60 5 25 -9 -60 -25 -196 -36 -434 -169 -573 -319 -213 -232 -317 -493 -317 -799 0 -316 104 -580 314 -800 161 -168 338 -270 556 -321 606 -143 1215 258 1345 883 77 375 -41 778 -307 1045 -183 184 -379 284 -638 325 -64 10 19 13 585 20 429 4 673 11 697 18 21 6 44 21 52 32 8 12 38 46 68 76 46 48 64 81 140 250 47 107 138 310 201 450 240 535 383 853 487 1085 59 132 408 908 775 1725 368 817 674 1505 681 1530 6 25 105 252 219 505 114 253 216 479 226 502 l18 43 188 -199 c103 -109 206 -220 227 -246 96 -115 288 -134 382 -37 105 109 234 533 210 693 -6 42 -15 53 -99 131 -51 47 -140 145 -197 218 -357 453 -416 517 -561 615 -218 146 -367 190 -503 149z m-1542 -3196 c-86 -211 -163 -400 -171 -422 l-16 -38 -51 6 c-28 3 -1890 6 -4137 6 l-4087 0 -20 78 c-104 391 -192 731 -192 741 0 8 1111 11 4414 11 l4415 0 -155 -382z m-568 -1395 c-4 -10 -57 -143 -118 -295 l-112 -278 -3631 0 -3631 0 -73 278 c-40 152 -75 285 -77 295 -5 16 182 17 3821 17 3641 0 3827 -1 3821 -17z m-723 -1785 c-63 -156 -117 -289 -120 -295 -4 -10 -638 -13 -3123 -13 -1904 0 -3121 4 -3125 9 -5 9 -155 566 -155 577 0 2 1494 4 3319 4 l3319 0 -115 -282z"/>
            </g>
          </svg>
          <button>
            {{ countItemsCart }}
          </button>
        </router-link>
      </div>
    </div>
    <p></p>
    <div class="d-flex justify-content-end">
    </div>
    <div class="d-flex justify-content-between flex-wrap align-items-center">
      <div class="toggleMenu" @click="activateMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav class="nav align-items-center">
        <ul class="list-unstyled d-flex m-0 flex-wrap">
          <li class="mr-5">
            <router-link to="/modelos"> {{ $t('1') }}</router-link>
          </li>
          <li class="mr-5">
            <a href="">{{ $t('2') }}</a>
          </li>
          <li class="mr-5">
            <a href="">{{ $t('3') }}</a>
          </li>
          <li class="mr-5">
            <a href="">{{ $t('4') }}</a>
          </li>
        </ul>
      </nav>
      <aside class="d-flex align-items-center">
        <!--        <div id="idiomas" class="idiomas mr-2">-->
        <!--          <div class="imgBanderas" @click="selectLanguage">-->
        <!--            <span class="nombreIdioma">España</span>-->
        <!--            <img src="../assets/banderaEspaña.png" alt="es">-->
        <!--            <font-awesome-icon :icon="[ 'fas', 'angle-down' ]"/>-->
        <!--          </div>-->
        <!--          <div class="otherLanguage" @click="changeLanguage">-->
        <!--            <span class="nombreIdioma">UK</span>-->
        <!--            <img src="../assets/banderaInglaterra.png" alt="en">-->
        <!--          </div>-->
        <!--          &lt;!&ndash;          <div id="imgIdiomas" class="d-flex imgBanderas" @click="changeLanguage">&ndash;&gt;-->
        <!--          &lt;!&ndash;            <img href="" src="../assets/banderaEspaña.png" alt="es">&ndash;&gt;-->
        <!--          &lt;!&ndash;            <img href="" src="../assets/banderaInglaterra.png" alt="en">&ndash;&gt;-->
        <!--          &lt;!&ndash;          </div>&ndash;&gt;-->
        <!--        </div>-->
        <div id="logoHeader" class="logoHeader">
          <router-link to="/">
            <img href="" src="../assets/MH.png">
          </router-link>
        </div>
      </aside>
    </div>
    <div v-if="!authenticated" class="login" style='display: none'>
      <login></login>
    </div>

    <div v-if="adminUser" class="menuAdmin" style='display: none'>
      <menu-admin></menu-admin>
    </div>


    <div class="loading">
      <div id="loop" class="centerLoop">
        <div id="bike-wrapper" class="centerLoop">
          <div id="bike" class="centerBike"></div>
        </div>
      </div>
    </div>

  </header>
</template>

<script>

import i18n from '../i18n'
import Login from "../components/Login";
import menuAdmin from "../components/menuAdmin";

import $ from 'jquery'
import {mapState} from "vuex";
import router from "../router";

export default {
  name: "HeaderPrincipal",
  components: {
    Login,
    menuAdmin
  },
  data: function () {
    return {
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
    'nombreUser',
    'authenticated',
    'adminUser',
    'idioma',
    'countItemsCart'
  ]),
  mounted() {
    this.comprobarIdioma()
    this.reconectUser();
    this.getIdsLocalStore();
  },
  methods: {
    selectLanguage() {
      $('.otherLanguage').toggleClass('d-flex')
    },
    changeLanguage() {
      //Cambiar al nuevo idioma
      i18n.locale = $('.otherLanguage')[0].childNodes[1].alt

      $('.otherLanguage').removeClass('d-flex')
      let nombreNuevo = $('.otherLanguage').children()[2]
      let banderaNueva = $('.otherLanguage').children()[3]

      let nombre = $('.imgBanderas').children()[3]
      let bandera = $('.imgBanderas').children()[4]
      let svg = $('.imgBanderas').children()[2]

      $('.imgBanderas').html('')
      $('.otherLanguage').html('')

      $('.imgBanderas').append(nombreNuevo, banderaNueva, svg)
      $('.otherLanguage').append(nombre, bandera)

      this.$store.commit('SET_IDIOMA', i18n.locale)


    },
    activateMenu() {
      $('.header').fadeToggle();
      $('.toggleMenu').toggleClass('active')
      $('.fullDisplayHeader').toggleClass('active')
      $('.fullDisplayHeader').removeClass('desactivate')
      $('body').toggleClass('noScrollBody')
      $('html, body').animate({scrollTop: 0}, 500);
    },
    comprobarIdioma() {
      if (i18n.locale === 'en') {
        let nombreNuevo = $('.otherLanguage').children()[2]
        let banderaNueva = $('.otherLanguage').children()[3]

        let nombre = $('.imgBanderas').children()[3]
        let bandera = $('.imgBanderas').children()[4]
        let svg = $('.imgBanderas').children()[2]

        $('.imgBanderas').html('')
        $('.otherLanguage').html('')

        $('.imgBanderas').append(nombreNuevo, banderaNueva, svg)
        $('.otherLanguage').append(nombre, bandera)
      }
    },
    showAlert() {
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
        this.setErrorFor(email, 'Email cannot be blank');
      } else if (!this.isEmail(emailValue)) {
        valido = false;
        this.setErrorFor(email, 'Not a valid email');
      }

      if (passwordValue === '') {
        valido = false;
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
        this.setErrorFor(userName, 'UserName cannot be blank');
      }


      if (emailValue === '') {
        valido = false;
        this.setErrorFor(email, 'Email cannot be blank');
      } else if (!this.isEmail(emailValue)) {
        valido = false;
        this.setErrorFor(email, 'Not a valid email');
      }

      if (passwordConfirmValue === '') {
        valido = false;
        this.setErrorFor(passwordConfirm, 'Password cannot be blank');
      }

      if (passwordValue === '') {
        valido = false;
        this.setErrorFor(password, 'Password cannot be blank');
      } else if (passwordValue != passwordConfirmValue) {
        valido = false;
        this.setErrorFor(password, 'Password isn´t same');
        this.setErrorFor(passwordConfirm, 'Password isn´t same');
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
    showAlertAdmin() {
      let that = this
      this.$swal({
        customClass: 'swalAdmin',
        html: $('.menuAdmin').html(),
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: true,
        didOpen: function () {
          $(".menuAdmin .buttonAddNews").click(function () {
            that.$swal.close()
            router.push('/addNews')
          });
          $(".menuAdmin .buttonAddModels").click(function () {
            that.$swal.close()
            router.push('/addModels')
          });
        }
      });
    },
    async reconectUser() {
      $('.loading').show()
      $('body').addClass('noScrollBody')

      try {
        let response = await fetch('http://localhost:8000/api/user', {
          headers: {"Accept": "application/json", 'Content-Type': 'application/json'},
          credentials: 'include'
        });
        $('.loading').hide()
        $('body').removeClass('noScrollBody')
        if (response.ok) {
          let content = await response.json();

          let permisosAdmin = await content.rol === "1" ? true : false;

          await this.$store.commit('SET_NOMBRE_USER', content.name)

          await this.$store.commit('SET_ADMIN', permisosAdmin)

          await this.$store.commit('SET_AUTH', true)
        } else {
          await this.$store.commit('SET_AUTH', false)
        }

      } catch (e) {
        await this.$store.commit('SET_AUTH', false)
      }

    },
    async loginUser() {
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

          await this.$store.commit('SET_ADMIN', permisosAdmin)

          await this.$store.commit('SET_AUTH', true)

          this.$swal.close()
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
    async logout() {
      $('.loading').show()
      $('body').addClass('noScrollBody')
      await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
      });
      await this.$store.commit('SET_NOMBRE_USER', '')

      await this.$store.commit('SET_AUTH', false)

      await this.$store.commit('SET_ADMIN', false)
      $('.loading').hide()
      $('body').removeClass('noScrollBody')
    },
    getIdsLocalStore() {
      if(JSON.parse(localStorage.getItem('arrayIds'))!=null){
        this.$store.commit('SET_ITEMS_CART_ID', JSON.parse(localStorage.getItem('arrayIds')))
        this.$store.commit('SET_ITEMS_CART_COUNT', JSON.parse(localStorage.getItem('arrayIds')).length)
      }
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
}

.noticias .header {
  position: relative;
}

.header > div {
  padding: 5px 30px;
}

.nav > ul > li > a {
  color: white;
  text-decoration: none;
  font-size: 1.11111em;
  font-weight: 700;
  text-transform: uppercase;
}

.modelos .nav > ul > li > a {
  color: black;
}

.noticias .nav > ul > li > a {
  color: black;
}

.idiomas {
  display: flex;
  align-items: center;
  position: relative;
  width: 100px;
}

.buttonAccess {
  border: none;
  padding: 0 5px;
  border-radius: 10px;
  background: red;
  color: white;
}

.toggleMenu {
  display: none;
  position: relative;
  width: 70px;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}

.toggleMenu span {
  position: absolute;
  width: 40px;
  height: 4px;
  background-color: red;
  border-radius: 4px;
  transition: 0.5s;
}

.toggleMenu span:nth-child(1) {
  transform: translateY(-10px);
  width: 25px;
  left: 15px;
}

.toggleMenu span:nth-child(2) {
  transform: translateY(10px);
  width: 15px;
  left: 15px;
}

.toggleMenu.active span:nth-child(1) {
  width: 40px;
  transform: translateY(0px) rotate(45deg);
  transition-delay: 0.25s;
}

.toggleMenu.active span:nth-child(2) {
  width: 40px;
  transform: translateY(0px) rotate(315deg);
  transition-delay: 0.5s;
}

.toggleMenu.active span:nth-child(3) {
  transform: translateX(60px);
}

.logoHeader img {
  height: 150px;
  width: 160px;
}

.imgBanderas {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 100%;
}

.imgBanderas > img {
  width: 35px;
}

.otherLanguage {
  display: none;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: absolute;
  color: black;
  background-color: rgb(255 255 255 / 50%);
  cursor: pointer;
  animation: animationDown 1s forwards;
}

.otherLanguage > img {
  width: 35px;
}

/*Carrito compra*/
.carritoCompra {
  width: 20px;
  height: 20px;
  align-self: center;
  margin-left: 10px;
  position: relative;
  cursor: pointer;
}

.carritoCompra svg {
  width: 90%;
  height: 90%;
}

.carritoCompra button {
  background-color: red;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0 5px;
  transform: scale(0.7);
  position: absolute;
  top: -8px;
  left: 17px;
}

@keyframes animationDown {
  from {
    top: 0px;
  }
  to {
    top: 30px;
  }
}

@media (max-width: 520px) {
  .headerNotResponsive {
    display: none !important;
  }
}

@media (max-width: 720px) {
  .logoHeader > img {
    height: 100px;
    width: 110px;
  }

  .toggleMenu {
    width: 50px;
    height: 50px;
  }

  .toggleMenu span {
    width: 30px;
    height: 4px;
  }

  .toggleMenu span:nth-child(1) {
    width: 20px;
    left: 10px;
  }

  .toggleMenu span:nth-child(2) {
    width: 10px;
    left: 10px;
  }

  .toggleMenu.active span:nth-child(1) {
    width: 30px;
  }

  .toggleMenu.active span:nth-child(2) {
    width: 30px;
  }
}

@media (max-width: 1300px) {
  .nav {
    display: none;
  }

  .toggleMenu {
    display: flex;
  }
}

</style>