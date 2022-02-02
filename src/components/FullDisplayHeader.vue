<template>
  <header class="header px-3 mx-auto h-100">
    <div class="d-flex justify-content-between flex-wrap align-items-center">
      <div class="toggleMenu" @click="activateMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <aside class="d-flex align-items-center">
        <div id="idiomas" class="position-relative mr-2 d-flex align-items-center">
          <div class="imgBanderas" @click="selectLanguage">
            <span>España</span>
            <img src="../assets/banderaEspaña.png" alt="es">
            <font-awesome-icon :icon="[ 'fas', 'angle-down' ]"/>
          </div>
          <div class="otherlanguage" @click="changeLanguage">
            <span>UK</span>
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
    <nav class="nav h-100">
      <ul class="list-unstyled d-flex m-0 flex-wrap flex-column text-left">
        <li class="my-5">
          <a href="">{{ $t('1') }}</a>
        </li>
        <li class="my-5">
          <a href="">{{ $t('2') }}</a>
        </li>
        <li class="my-5">
          <a href="">{{ $t('3') }}</a>
        </li>
        <li class="my-5">
          <a href="">{{ $t('4') }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>

import $ from "jquery";
import i18n from "@/i18n";

export default {
  name: "fullDisplayHeader",
  methods: {
    selectLanguage() {
      $('.otherlanguage').toggleClass('d-flex')
      if (event.target.nodeName === 'IMG') {
        i18n.locale = event.target.alt
      }
    }
    ,
    changeLanguage() {
      //Cambiar al nuevo idioma
      i18n.locale = $('.otherlanguage')[0].childNodes[1].alt

      $('.otherlanguage').removeClass('d-flex')
      let nombreNuevo = $('.otherlanguage')[0].childNodes[0].outerHTML
      let banderaNueva = $('.otherlanguage')[0].childNodes[1].outerHTML
      let svg = $('.imgBanderas')[0].childNodes[2].outerHTML

      let nombre = $('.imgBanderas')[0].childNodes[0].outerHTML
      let bandera = $('.imgBanderas')[0].childNodes[1].outerHTML

      $('.imgBanderas').html('')
      $('.otherlanguage').html('')

      $('.imgBanderas').append(nombreNuevo, banderaNueva, svg)
      $('.otherlanguage').append(nombre, bandera)


    }
    ,
    activateMenu() {
      $('.toggleMenu').toggleClass('active')
      $('.fullDisplayHeader').toggleClass('active')
      $('body').toggleClass('overflow-hidden')
    }
  }
}
</script>

<style scoped>

.nav > ul > li > a {
  color: white;
  text-decoration: none;
  font-size: 1.11111em;
  font-weight: 700;
  text-transform: uppercase;
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
  width: 120px;
}

.imgBanderas > img {
  width: 35px;
}

.otherlanguage {
  display: none;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: absolute;
  color: black;
  background-color: white;
  cursor: pointer;
  animation: animationDown 1s forwards;
}

@keyframes animationDown {
  from {
    top: 0px;
  }
  to {
    top: 30px;
  }
}

.otherlanguage > img {
  width: 35px;
}

</style>