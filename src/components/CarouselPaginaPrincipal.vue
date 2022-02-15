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
          :img-src="require('../assets/multistrada.jpg')">
        <p class="m-0">LIVE GREAT ADVENTURES</p>
        <h1 class="m-0">NUEVA MULTISTRADA V4</h1>
        <a href=""><div>MÁS INFORMACIÓN</div></a>
      </b-carousel-slide>
      <b-carousel-slide
          class="h100vh"
          :img-src="require('../assets/multistrada2.jpg')"
      >
        <p class="m-0">LIVE GREAT ADVENTURES</p>
        <h1 class="m-0">NUEVA MULTISTRADA V3</h1>
        <a href=""><div>MÁS INFORMACIÓN</div></a>
      </b-carousel-slide>
      <b-carousel-slide
          class="h100vh"
          :img-src="require('../assets/multistrada3.jpg')"
      >
        <p class="m-0">LIVE GREAT ADVENTURES</p>
        <h1 class="m-0">NUEVA MULTISTRADA V2</h1>
        <a href=""><div>MÁS INFORMACIÓN</div></a>
      </b-carousel-slide>
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

.carousel-caption{
  top:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.carousel-caption > p{
  font-family: 'letraVisor';
  color: white;
  text-transform: uppercase;
  font-size: 2em;
}

.carousel-caption > h1{
  font-family: 'letraVisor';
  color: white;
  text-transform: uppercase;
  font-size: 3em;
}

.carousel-caption > a{
  text-decoration: none;
  color: white;
}

.carousel-caption > a:hover{
  text-decoration: none;
  color: white;
}

.carousel-caption > a > div{
  width: fit-content;
  background: black;
  padding: 20px;
  border: 1px solid black;
  transition: all 0.5s;
}

.carousel-caption > a > div:hover{
  background: transparent;
  border: 1px solid white;
}
</style>