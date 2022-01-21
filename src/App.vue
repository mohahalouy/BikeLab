<template>
  <div id="app" class="app">
    <HeaderPrincipal class="header w-75 mx-auto"></HeaderPrincipal>
    <CarouselPaginaPrincipal class="carousel"></CarouselPaginaPrincipal>
    <HomeNoticiasConfigurador class="noticiasConfigurador"></HomeNoticiasConfigurador>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import HeaderPrincipal from "@/components/HeaderPrincipal";
import CarouselPaginaPrincipal from "@/components/CarouselPaginaPrincipal";
import HomeNoticiasConfigurador from "./components/HomeNoticiasConfigurador";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    HeaderPrincipal,
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
  width: 100%;
  grid-template-areas:
    "header"
    "carousel"
    "noticiasConfigurador"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  position: relative;
}

.header {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  grid-area: header;
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
