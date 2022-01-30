<template>
  <header class="">
    <div class="d-flex justify-content-between flex-wrap align-items-center">
      <nav class="nav align-items-center">
        <ul class="list-unstyled d-flex m-0 flex-wrap">
          <li class="mr-5">
            <a href="">{{ $t('1') }}</a>
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
      <div class="toggleMenu" @click="activarMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <aside class="d-flex align-items-center">
        <div id="idiomas" class="mr-2 d-flex align-items-center">
          <span>{{ $t('5') }}</span>
          <div id="imgIdiomas" class="d-flex imgBanderas" @click="changeLanguage">
            <img href="" src="../assets/banderaEspaña.png" alt="es">
            <img href="" src="../assets/banderaInglaterra.png" alt="en">
          </div>
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

export default {
  name: "HeaderPrincipal",
  methods: {
    changeLanguage() {
      if (event.target.nodeName === 'IMG') {
        i18n.locale = event.target.alt
      }
    },
    activarMenu(){
      $('.toggleMenu').toggleClass('active')
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
  transition-delay: 0.125s;
}

.toggleMenu.active span:nth-child(2) {
  width: 40px;
  transform: translateY(0px) rotate(315deg);
  transition-delay: 0.25s;
}

.toggleMenu.active span:nth-child(3) {
  transform: translateX(60px);
}

.logoHeader > img {
  height: 150px;
  width: 160px;
}

.imgBanderas > img {
  width: 35px;
  cursor: pointer;
}

@media (max-width: 1300px) {
  .nav {
    display: none;
  }
  .toggleMenu{
    display: flex;
  }
}

</style>