<template>
  <section id="carouselPrincipal" class="carouselPrincipal">
    <b-carousel
        id="carousel-no-animation"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
    >
      <b-carousel-slide
          class="h100vh"
          :img-src="require('../assets/banderaEspaña.png')"
      ></b-carousel-slide>
      <b-carousel-slide
          class="h100vh"
          :img-src="require('../assets/logo.png')"
      ></b-carousel-slide>
      <b-carousel-slide
          class="h100vh"
          :img-src="require('../assets/banderaInglaterra.png')"
      ></b-carousel-slide>
    </b-carousel>
  </section>
</template>

<script>
export default {
  name: "CarouselPaginaPrincipal"
}
</script>

<style>

/*ESTILOS PARA EL CAROUSEL*/
.carouselPrincipal .h100vh {
  height: 100vh;
}

.carouselPrincipal .h100vh > img {
  height: 100%;
}

.carouselPrincipal .carousel-indicators .active {
  background-color: coral;
}

.carouselPrincipal .carousel-indicators li {
  opacity: 1;
}
</style>