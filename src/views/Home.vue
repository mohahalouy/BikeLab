<template>
  <div id="home" class="home">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <CarouselPaginaPrincipal class="carousel"></CarouselPaginaPrincipal>
    <HomeNoticiasConfigurador class="noticiasConfigurador"></HomeNoticiasConfigurador>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import HeaderPrincipal from "../components/HeaderPrincipal";
import FullDisplayHeader from "../components/FullDisplayHeader";
import CarouselPaginaPrincipal from "../components/CarouselPaginaPrincipal";
import HomeNoticiasConfigurador from "../components/HomeNoticiasConfigurador";
import Footer from "../components/Footer";
import {mapState} from "vuex";
import $ from "jquery";

export default {
  name: 'Home',
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    CarouselPaginaPrincipal,
    HomeNoticiasConfigurador,
    Footer
  },
  mounted() {
    this.goUp();
    this.changeTitle();
  },
  computed: mapState([
    'authenticated'
  ]),
  methods: {
    goUp() {
      $('html, body').animate({scrollTop: 0}, 500);
    },
    changeTitle() {
      document.querySelector('title').textContent = 'Home';
    },
  }
}
</script>

<style>
/*ESTRUCTURA GENERAL DE LA PANTALLA DE INICIO*/
.home {
  display: grid;
  max-width: 2000px;
  width: 100%;
  grid-template-areas:
    "header"
    "carousel"
    "noticiasConfigurador"
    "footer";
  grid-template-columns: 100%;
  grid-template-rows: auto;
  position: relative;
  justify-items: center;
}

.header {
  grid-area: header;
}

.fullDisplayHeader {
  display: none;
  background-color: rgb(0 0 0 / 80%);
  height: 100vh;
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
}

.fullDisplayHeader.desactivate {
  display: block;
  animation: desactivateResponsiveHeader 1s forwards;
}

@keyframes desactivateResponsiveHeader {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}

.fullDisplayHeader.desactivate .headerResponsive {
  display: none;
}

.fullDisplayHeader.active {
  display: block;
  animation: activateResponsiveHeader 1s forwards;
}

@keyframes activateResponsiveHeader {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.fullDisplayHeader.active .headerResponsive {
  opacity: 0;
  animation: opacityHeader 1s 1s forwards;
}

@keyframes opacityHeader {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.carousel {
  width: 100%;
  grid-area: carousel;
}

.noScrollBody {
  overflow: hidden;
}

.noticiasConfigurador {
  grid-area: noticiasConfigurador;
}

.footer {
  grid-area: footer;
}

@media (min-width: 1300px) {
  .fullDisplayHeader.active {
    display: none;
  }

  .header {
    display: block !important;
  }

  html body {
    overflow: auto !important;
  }
}
</style>