<template>
  <div id="app" class="app">
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
import HeaderPrincipal from "@/components/HeaderPrincipal";
import FullDisplayHeader from "@/components/FullDisplayHeader";
import CarouselPaginaPrincipal from "@/components/CarouselPaginaPrincipal";
import HomeNoticiasConfigurador from "./components/HomeNoticiasConfigurador";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    CarouselPaginaPrincipal,
    HomeNoticiasConfigurador,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

/*ESTRUCTURA GENERAL DE LA PANTALLA DE INICIO*/
.app {
  display: grid;
  max-width: 100%;
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

.fullDisplayHeader{
  display: none;
  background-color: black;
  height: 100vh;
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
}

@keyframes activateResponsiveHeader {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.fullDisplayHeader.active{
  display: block;
  animation: activateResponsiveHeader 1s forwards ;
}

.fullDisplayHeader.active .header{
  opacity: 0;
  animation: opacityHeader 1s 1s forwards ;
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
  grid-area: carousel;
}

.noticiasConfigurador {
  grid-area: noticiasConfigurador;
}

.footer {
  grid-area: footer;
}
</style>
