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
          img-src='https://proyectogradoback.herokuapp.com/uploads/imgStatic/R1MHome.jpg'
      >
        <p class="m-0">{{$t('33')}}</p>
        <h1 class="m-0">{{$t('34')}}</h1>
        <router-link :to="{ name: 'Modelo', query: { id: '4' }}" class="linkNonStyle">
          <div>{{$t('30')}}</div>
        </router-link>
      </b-carousel-slide>
      <b-carousel-slide
          class="h100vh"
          img-src='https://proyectogradoback.herokuapp.com/uploads/imgStatic/multistrada2.jpg'
      >
        <p class="m-0">{{$t('31')}}</p>
        <h1 class="m-0">{{$t('32')}}</h1>
        <router-link :to="{ name: 'Modelo', query: { id: '5' }}" class="linkNonStyle">
          <div>{{$t('30')}}</div>
        </router-link>
      </b-carousel-slide>      <b-carousel-slide
        class="h100vh"
        img-src='https://proyectogradoback.herokuapp.com/uploads/imgStatic/s1000rrHome.jpg'>
      <p class="m-0">{{$t('28')}}</p>
      <h1 class="m-0">{{$t('29')}}</h1>
      <router-link :to="{ name: 'Modelo', query: { id: '1' }}" class="linkNonStyle">
        <div>{{$t('30')}}</div>
      </router-link>
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
  object-position: center;
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
  color: white;
  text-transform: uppercase;
  font-size: 2em;
}

.carousel-caption > h1{
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