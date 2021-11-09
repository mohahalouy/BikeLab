<template>
  <div id="carouselPrincipal" class="carouselPrincipal">
    <b-carousel
        id="carousel-no-animation"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        :interval="false"
    >
      <b-carousel-slide
          class="h100vh"
          img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
      <b-carousel-slide
          class="h100vh"
          img-src="https://picsum.photos/1024/480/?image=12"
      ></b-carousel-slide>
      <b-carousel-slide
          class="h100vh"
          img-src="https://picsum.photos/1024/480/?image=22"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "CarouselPaginaPrincipal"
}
</script>

<style>
.carouselPrincipal .h100vh{
  height: 100vh;
}

.carouselPrincipal .h100vh > img{
  height: 100%;
}

.carouselPrincipal .carousel-indicators .active{
  background-color: coral;
}

.carouselPrincipal .carousel-indicators li{
opacity: 1;
}
</style>