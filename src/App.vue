<template>
  <div id="app">
    <HeaderPrincipal></HeaderPrincipal>
    <CarouselPaginaPrincipal></CarouselPaginaPrincipal>
  </div>
</template>

<script>
import HeaderPrincipal from "@/components/HeaderPrincipal";
import CarouselPaginaPrincipal from "@/components/CarouselPaginaPrincipal";

export default {
  name: 'App',
  components: {
    HeaderPrincipal,
    CarouselPaginaPrincipal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
