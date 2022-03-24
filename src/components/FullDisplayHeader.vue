<template>
  <header class="headerResponsive px-3 mx-auto h-100">
    <div class="d-flex justify-content-end headerNotResponsive py-2">
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
      <button v-if="authenticated" @click="logout" class="buttonAccess">Desconcetarse</button>
    </div>
    <div class="d-flex justify-content-between flex-wrap align-items-center">
      <div class="toggleMenu" @click="activateMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <aside class="d-flex align-items-center">
        <div id="logoHeader" class="logoHeader">
          <img href="" src="../assets/MH.png">
        </div>
      </aside>
    </div>
    <nav class="nav">
      <ul class="list-unstyled d-flex m-0 flex-wrap flex-column text-center">
        <li class="my-3">
          <router-link to="/about"> {{ $t('1') }}</router-link>
        </li>
        <li class="my-3">
          <a href="">{{ $t('2') }}</a>
        </li>
        <li class="my-3">
          <a href="">{{ $t('3') }}</a>
        </li>
        <li class="my-3">
          <a href="">{{ $t('4') }}</a>
        </li>
      </ul>
    </nav>
    <div class="login" style='display: none'>
      <login></login>
    </div>
  </header>
</template>

<script>

import $ from "jquery";
import i18n from "@/i18n";
import Login from "../components/Login";
import {mapState} from "vuex";

export default {
  name: "fullDisplayHeader",
  components: {
    Login
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
    'authenticated'
  ]),
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
      $('.fullDisplayHeader').addClass('desactivate')
      $('body').toggleClass('noScrollBody')
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
        this.dataRegister.email=emailValue
        this.dataRegister.name=userNameValue
        this.dataRegister.password=passwordValue
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
      try {
        let response = await fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
          body: JSON.stringify(this.dataLogin)
        });

        if (response.ok) {
          await this.$store.commit('SET_AUTH', true)

          this.$swal.close()
        } else {
          this.setErrorFor($('.swalRegistro .formulario .signinBx .email'), 'Invalid or incorrect');
          this.setErrorFor($('.swalRegistro .formulario .signinBx .password'), 'Invalid or incorrect');
          await this.$store.commit('SET_AUTH', false)
        }
      } catch (e) {
        await this.$store.commit('SET_AUTH', false)
      }
    },
    async registerUser() {
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
      await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
      });
      await this.$store.commit('SET_NOMBRE_USER', '')

      await this.$store.commit('SET_AUTH', false)
    },
  }
}
</script>

<style scoped>

.nav {
  height:100%;
  overflow-y: auto;
  width: 100%;
  padding-right: 10px;
  display: flex;
  justify-content: center;
}

.nav > ul > li > a {
  color: white;
  text-decoration: none;
  font-size: 1.11111em;
  font-weight: 700;
  text-transform: uppercase;
}

.idiomas{
  display: flex;
  align-items: center;
  position: relative;
  width: 100px;
}

.buttonAccess{
  border: none;
  padding: 0 5px;
  border-radius: 10px;
  background: red;
  color: white;
}

.toggleMenu {
  display: flex;
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

.logoHeader > img {
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

@keyframes animationDown {
  from {
    top: 0px;
    opacity: 0;
  }
  to {
    top: 30px;
    opacity: 1;
  }
}

.otherLanguage > img {
  width: 35px;
}

@media (max-width: 520px) {
  .idiomas .nombreIdioma{
    display: none;
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
</style>