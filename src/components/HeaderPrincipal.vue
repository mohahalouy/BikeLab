<template>
  <header class="">
    <div class="d-flex justify-content-between flex-wrap">
      <nav class="nav align-items-center">
        <ul class="list-unstyled d-flex m-0 flex-wrap">
          <li class="mr-5">
            <a href="">{{$t('1')}}</a>
          </li>
          <li class="mr-5">
            <a href="">{{$t('2')}}</a>
          </li>
          <li class="mr-5">
            <a href="">{{$t('3')}}</a>
          </li>
          <li class="mr-5">
            <a href="">{{$t('4')}}</a>
          </li>
        </ul>
      </nav>
      <aside class="d-flex align-items-center">
        <div id="idiomas" class="mr-2 d-flex align-items-center">
          <span>{{$t('5')}}</span>
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

export default {
  name: "HeaderPrincipal",
  methods: {
    changeLanguage() {
      if (event.target.nodeName === 'IMG') {
        i18n.locale = event.target.alt
      }
    }
  }
}
</script>

<style scoped>

.nav > ul > li > a {
  color: black;
  text-decoration: none;
  font-size: 1.11111em;
  font-weight: 700;
  text-transform: uppercase;
}

.logoHeader > img {
  height: 150px;
  width: 160px;
}

.imgBanderas > img {
  width: 35px;
  cursor: pointer;
}

</style>