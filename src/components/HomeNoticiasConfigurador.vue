<template>
  <section class="containerNoticiasConfigurador mt-5 mb-5">
    <section data-aos="fade-up" class="configurador position-relative">
      <div class="letrasVisor">
        <p class="m-0">Visor 360º</p>
        <p class="m-0">Visualiza la moto desde todas las perspectivas</p>
      </div>
    </section>

    <section class="noticia mt-5 d-flex">
      <article class="w-40" data-aos="fade-right">
        <img class="img-fluid" src="../assets/noticias.png">
        <div class="w-100 textoNoticia text-white">
          lorem
        </div>
      </article>
      <article class="w-40" data-aos="fade-left">
        <img class="img-fluid" src="../assets/noticias.png">
        <div class="w-100 textoNoticia text-white">
          lorem
        </div>
      </article>
    </section>

    <section class="modelos d-flex mt-5 justify-content-between">
      <article data-aos="fade-up-right" class="w-45">
        <div class="modelo1 letrasVisor">
          <p class="m-0">lorem</p>
        </div>
      </article>
      <article data-aos="fade-up-left" class="w-45">
        <div class="modelo1 letrasVisor">
          <p class="m-0">lorem</p>
        </div>
      </article>
    </section>

    <section class="findUsContainer mx-0 mt-5 row">
      <div class="  col-6 row p-0 m-0">
        <a href="" class="col-6 p-0"><div class="imgInsta"></div></a>
        <a href="" class="col-6 p-0"><div class="imgInsta"></div></a>
        <a href="" class="col-6 p-0"><div class="imgInsta"></div></a>
        <a href="" class="col-6 p-0"><div class="imgInsta"></div></a>
      </div>
      <div class="col-6 findUsInstaContainer p-0">
        <div class="p-3">
          <h3 class="m-0">FIND US ON INSTAGRAM</h3>
          <hr>
          <p>Obten tu dosis de motivación diaria</p>
          <div class="followUsInsta">
            <p class="d-flex align-items-center m-0">
              <a href="">
                <font-awesome-icon :icon="[ 'fab', 'instagram' ]" class="mr-2"/>
                <span>Follow us</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>


    <section class="newsletter mt-5 d-flex justify-content-center align-items-center">
      <p class="my-0 mx-2">JOIN THE KTM NEWSLETTER</p>
      <a class="buttonNewsletter">
        sign up
      </a>
    </section>

  </section>
</template>

import foo
<script>
export default {
  name: "Noticias"
}
</script>

<style scoped>

@font-face {
  font-family: letraVisor;
  src: url("../assets/BlenderPro-Bold/BlenderPro-Bold.ttf");
}

/*ESTILO DEL CONTENEDOR GENERAL DEL COMPONENTE*/
.containerNoticiasConfigurador {
  width: 80%;
  max-width: 80%;
  margin: 0 auto;
}

/*ESTILOS DE LA CAJA DEL CONFIGURADOR DE MOTOS*/
.configurador {
  width: 100%;
  background-image: url("https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/action/2018/3fc70822-0114-4e03-8b78-b9d3fd25ab0b.jpg");
  height: 440px;
  max-height: 440px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}

.letrasVisor {
  color: white;
  width: 100%;
  height: 100%;
  font-size: 3em;
  font-weight: 800;
  text-transform: uppercase;
  font-family: 'letraVisor';
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/*ANIMACIONES CUANDO ENTRAS Y SALES DE LAS CAJAS CON TEXTO*/
.letrasVisor p {
  animation-name: letraVolver;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}

@keyframes letraVolver {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


.letrasVisor:hover {
  cursor: pointer;
}

.letrasVisor:hover p {
  animation-name: letraDesvanecer;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
}

@keyframes letraDesvanecer {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/*ESTILOS DE LAS CAJAS CON NOTICIAS. SIN ANIMACIONES*/
.textoNoticia {
  background: black;
  text-transform: uppercase;
  font-family: 'letraVisor';
  font-size: 50px;
}

.noticia {
  justify-content: space-evenly;
}

/*TAMANOS DE LAS DIFERENTES CAJAS*/
.w-40 {
  width: 40%;
}

.w-45 {
  width: 45%;
}

/*CAJAS DE LOS MODELOS, RESPECTIVAMENTE*/
.modelo1 {
  background-image: url("https://i.pinimg.com/originals/0f/a9/ca/0fa9ca818b23986b167709cec7e25694.jpg");
  width: 100%;
  height: 440px;
  max-height: 440px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}

/*find Us instagram*/
.findUsContainer {
  /*display: flex;*/
  /*width: 100%;*/
}

.findUsInstaContainer {
  display: flex;
  justify-content: center;
  background: black;
  font-family: 'letraVisor';
  color: white;
}

.findUsInstaContainer > div:first-of-type {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.findUsInstaContainer > div:first-of-type > h3 {
  font-size: 30px;
}

.findUsInstaContainer > div:first-of-type > hr {
  width: 65px;
  border-color: #bdbdbd;
  margin: 0 0 1em 0;
}

/*Boton followUs y animacion*/
.followUsInsta {
  width: fit-content;
  cursor: pointer;
}

.followUsInsta > p > a{
  color: white;
  text-decoration: none;
  padding: 1.35em 2.778em 1.20em 2.778em;
  border: 1px solid white;
  transition: border 1s, color 1s;
}

.followUsInsta  > p > a:hover {
  border: 1px solid orange;
  color: orange;
}

.imgInsta{
  height: 40vh;
  background-image: url(https://d3pelj80y5v5k4.cloudfront.net/69bf30b1-dffe-4196-8de0-4a9a8fa25a5e?w=400&h=400&q=85&nu=1);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  transition:   background-size 0.5s;
}

.imgInsta:hover{
  background-size: 120% 120%;
}

/*section newsletter*/
.newsletter{
  color: #262626;
  font-size: 24px;
  font-family: 'letraVisor';
}

.buttonNewsletter {
  position: relative;
  padding: 20px;
  color: #262626;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
}

.buttonNewsletter:hover{
  transition-property: color;
  transition-delay: 1s;
  transition-duration: 0.5s;
  color: white;
}

.buttonNewsletter:before{
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: #262626;
  transition-property: height,width;
  transition-delay: 0.5s,1s;
  transition-duration: 0.5s;
}

.buttonNewsletter:hover:before{
  transition-property: width,height;
  transition-delay: 0s,0.5s;
  width: 2px;
  height: 100%;
  transition-duration: 0.5s;
}

.buttonNewsletter:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: orange;

  transform: scaleX(0);
  transition: 0.5s;
  transition-delay: 0s;
  transform-origin: right;
  z-index: -1;
}

.buttonNewsletter:hover:after{
  transform: scaleX(1);
  transition-delay: 1s;
}
</style>