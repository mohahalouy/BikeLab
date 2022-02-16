<template>
  <header class="header mx-auto">
    {{nombreUser}}
    <div class="d-flex justify-content-end" >
      <div class="d-flex justify-content-between" style="width: 13%">
        <router-link to="/login" v-if="!authenticated">Login</router-link>
        <router-link to="/register" v-if="!authenticated">Sign up</router-link>
        <a href="#" class="nav-link" v-if="authenticated" @click="logout">Logout</a>
      </div>
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
            <router-link to="/about"> {{ $t('1') }}</router-link>
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
        <div id="idiomas" class="idiomas mr-2">
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
        <div id="logoHeader" class="logoHeader">
          <img href="" src="../assets/MH.png">
        </div>
      </aside>
    </div>
  </header>
</template>

<script>

import i18n from '../i18n'

import $ from 'jquery'
import {mapState} from "vuex";

export default {
  name: "HeaderPrincipal",
  computed: mapState([
    'nombreUser',
    'authenticated'
  ]),
  mounted() {
    this.comprobarIdioma()
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


    },
    activateMenu() {
      $('.header').fadeToggle();
      $('.toggleMenu').toggleClass('active')
      $('.fullDisplayHeader').toggleClass('active')
      $('.fullDisplayHeader').removeClass('desactivate')
      $('body').toggleClass('noScrollBody')
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
    async logout() {
      await fetch('http://127.0.0.1:8000/api/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials:'include'
      });
      await this.$store.commit('SET_NOMBRE_USER', '')

      await this.$store.commit('SET_AUTH', false)
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

.header > div{
  padding: 5px 30px;
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

.otherLanguage > img {
  width: 35px;
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
  .idiomas{
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

@media (max-width: 1300px) {
  .nav {
    display: none;
  }

  .toggleMenu {
    display: flex;
  }
}

</style>