<template>
  <section id="carouselPrincipal" class="carouselPrincipal">
    <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        :interval="0"
        indicators
    >
      <b-carousel-slide
          class="h100vh"
          :img-src="require('../assets/multistrada.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
          class="h100vh"
          :img-src="require('../assets/multistrada2.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
          class="h100vh"
          :img-src="require('../assets/multistrada3.jpg')"
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
  object-fit: cover;
  object-position: 75% 90%;
}

.carouselPrincipal .carousel-indicators .active {
  background-color: red;
}

.carouselPrincipal .carousel-indicators li {
  opacity: 1;
}
</style>