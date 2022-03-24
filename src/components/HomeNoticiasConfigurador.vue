  <template>
    <section class="containerNoticiasConfigurador mt-5 mb-5">
      <section data-aos="fade-up" class="position-relative">
        <a href="" class="linkNonStyle">
          <div class="centarPalabras configurador">
            <p class="m-0 textVisor">Visor 360º</p>
            <h1 class="m-0 textVisor">Visualiza la moto desde todas las perspectivas</h1>
          </div>
          <div class="letrasVisorResponsive">
            <p class="m-0">Visor 360º</p>
            <h4 class="m-0">Visualiza la moto desde todas las perspectivas</h4>
          </div>
        </a>
      </section>

      <section class="noticia m-0 mt-3 row w-100">
        <div class="LoadingNoticias">
          <p>l</p>
          <p>o</p>
          <p>a</p>
          <p>d</p>
          <p>i</p>
          <p>n</p>
          <p>g</p>
        </div>

        <article class="col-12 col-sm-6 col-lg-4 py-3 px-0 px-sm-2 d-flex flex-column justify-content-between" data-aos="zoom-in"
                 data-aos-duration="500"
                 v-for="item in this.dataNoticias" :key="item.id">
          <router-link :to="{ name: 'Noticias', query: { id: item.id }}" class="linkNonStyle">
            <img class="img-fluid" :src="'http://127.0.0.1:8000/uploads/noticias/'+item.imagen">
          </router-link>
          <div v-if="idioma==='es'" class="letrasVisorNoticas text-left">
            <p class="">{{ item.fecha }}</p>
            <router-link :to="{ name: 'Noticias', query: { id: item.id }}" class="linkNonStyle">
              <h4 class="tituloNoticia">{{ item.tituloEs }}</h4>
            </router-link>
            <p class="mb-0">{{ item.previewTextoEs }}</p>
          </div>
          <div v-else class="letrasVisorNoticas text-left">
            <p class="">{{ item.fecha }}</p>
            <router-link :to="{ name: 'Noticias', query: { id: item.id }}" class="linkNonStyle">
              <h4 class="tituloNoticia">{{ item.tituloEn }}</h4>
            </router-link>
            <p class="mb-0">{{ item.previewTextoEn }}</p>
          </div>
        </article>

      </section>

      <section class="modelos row mt-3 mx-0 w-100">
        <article data-aos="flip-right" class="col-12 col-md-6 py-3 px-0 px-md-2">
          <a class="linkNonStyle" href="">
            <div class="modelo1 centarPalabras">
              <p class="m-0 textVisor letrasVisor">lorem</p>
            </div>
            <div class="letrasVisorResponsive text-center">
              <p class="mb-0">GET A NAKED</p>
              <h3 class="">MH Motors Naked</h3>
            </div>
          </a>
        </article>
        <article data-aos="flip-left" class="col-12 col-md-6 py-3 px-0 px-md-2">
          <a class="linkNonStyle" href="">
            <div class="modelo1 centarPalabras">
              <p class="m-0 textVisor letrasVisor">lorem</p>
            </div>
            <div class="letrasVisorResponsive text-center">
              <p class="mb-0">GET A TRAVEL</p>
              <h3 class="">MH Motors Travel</h3>
            </div>
          </a>
        </article>
      </section>

      <section class="findUsContainer mx-0 mt-3 row w-100">
        <div class="col-12 col-md-6 row p-0 m-0">
          <a href="" class="col-6 p-0">
            <div class="imgInsta"></div>
          </a>
          <a href="" class="col-6 p-0">
            <div class="imgInsta"></div>
          </a>
          <a href="" class="col-6 p-0">
            <div class="imgInsta"></div>
          </a>
          <a href="" class="col-6 p-0">
            <div class="imgInsta"></div>
          </a>
        </div>
        <div class="col-12 col-md-6 findUsInstaContainer p-0">
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


      <section class="newsletter mt-3 mx-0 row w-100">
        <p class="my-0 mx-2 mx-md-0 col-12 col-md-4 p-0">JOIN THE MH Motorcycle NEWSLETTER</p>
        <a class="buttonNewsletter col-6 col-md-3">
          sign up
        </a>
      </section>
    </section>
  </template>

  <script>
  import $ from 'jquery';
  import {mapState} from "vuex";

  export default {
    name: "Noticias",
    computed: mapState([
      'idioma'
    ]),
    data: function () {
      return {
        dataNoticias: []
      }

    },
    mounted() {
      this.noticias();
    },
    methods: {
      async noticias() {
        $('.LoadingNoticias').show()
        let response = await fetch('http://localhost:8000/api/noticias', {
          headers: {"Accept": "application/json", 'Content-Type': 'application/json'}
        })
        $('.LoadingNoticias').hide()

        let content = await response.json()

        content = content.length >= 2 ? content.slice(-3) : content;


        for (const key in content) {
          this.dataNoticias.push(content[key]);
        }

      }
  }
  }
  </script>

  <style scoped>

  @font-face {
    font-family: letraVisor;
    src: url("../assets/BlenderPro-Bold/BlenderPro-Bold.ttf");
  }

  /*ESTILO DEL CONTENEDOR GENERAL DEL COMPONENTE*/
  .containerNoticiasConfigurador {
    width: 100%;
    padding: 0 10px;
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

  .configurador h1{
    font-family: 'letraVisor';
    color: white;
    text-transform: uppercase;
    font-size: 3em;
  }

  .configurador p{
    font-family: 'letraVisor';
    color: white;
    text-transform: uppercase;
    font-size: 2em;
  }

  .linkNonStyle {
    text-decoration: none;
    color: black;
  }

  .letrasVisor {
    color: white;
    font-size: 3em;
    font-weight: 800;
    text-transform: uppercase;
    font-family: 'letraVisor';
  }

  .centarPalabras{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /*ANIMACIONES CUANDO ENTRAS Y SALES DE LAS CAJAS CON TEXTO*/
  .centarPalabras p, .centarPalabras h1{
    transition: opacity 1s;
  }

  .centarPalabras:hover p, .centarPalabras:hover h1 {
    opacity: 0;
  }

  .letrasVisorResponsive, .letrasVisorNoticas{
    color: black;
    text-transform: uppercase;
    font-family: 'letraVisor';
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /*ESTILOS DE LAS CAJAS CON NOTICIAS. SIN ANIMACIONES*/
  .noticia {
    justify-content: space-evenly;
  }

  .tituloNoticia{
    color: black;
    transition: color 0.5s;
  }

  .tituloNoticia:hover{
    color: red;
  }

  /*CAJAS DE LOS MODELOS, RESPECTIVAMENTE*/
  .modelo1 {
    background-image: url("https://i.pinimg.com/originals/0f/a9/ca/0fa9ca818b23986b167709cec7e25694.jpg");
    width: 100%;
    height: 380px;
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

  .followUsInsta > p > a {
    color: white;
    text-decoration: none;
    padding: 1.35em 2.778em 1.20em 2.778em;
    border: 1px solid white;
    transition: border 1s, color 1s, background-color 1s;
  }

  .followUsInsta > p > a:hover {
    border: 1px solid red;
    color: white;
    background-color: red;
  }

  .imgInsta {
    height: 40vh;
    background-image: url(https://d3pelj80y5v5k4.cloudfront.net/69bf30b1-dffe-4196-8de0-4a9a8fa25a5e?w=400&h=400&q=85&nu=1);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    transition: background-size 0.5s;
  }

  .imgInsta:hover {
    background-size: 120% 120%;
  }

  /*section newsletter*/
  .newsletter {
    color: #262626;
    font-size: 24px;
    font-family: 'letraVisor';
    justify-content: center;
    align-items: center;
  }

  .buttonNewsletter {
    position: relative;
    padding: 20px;
    color: #262626;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    max-width: 200px;
  }

  .buttonNewsletter:hover {
    transition-property: color;
    transition-delay: 1s;
    transition-duration: 0.5s;
    color: white;
  }

  .buttonNewsletter:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: #262626;
    transition-property: height, width;
    transition-delay: 0.5s, 1s;
    transition-duration: 0.5s;
  }

  .buttonNewsletter:hover:before {
    transition-property: width, height;
    transition-delay: 0s, 0.5s;
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
    background: red;

    transform: scaleX(0);
    transition: 0.5s;
    transition-delay: 0s;
    transform-origin: right;
    z-index: -1;
  }

  .buttonNewsletter:hover:after {
    transform: scaleX(1);
    transition-delay: 1s;
  }

  /*Animacion loader de las noticias*/
  .LoadingNoticias{
    display: none;
  }

  .LoadingNoticias p {
    display: inline-block;
    text-transform: uppercase;
    text-align: center;
    font-size: 4em;
    font-family: arial;
    font-weight: 600;
    transform: scale(.5);
    color: #121212;
    -webkit-text-stroke: 2px gray;
  }

  .LoadingNoticias p:nth-child(1) {
    animation: hover 1s linear infinite;
  }

  .LoadingNoticias p:nth-child(2) {
    animation: hover 1s linear infinite .125s;
  }

  .LoadingNoticias p:nth-child(3) {
    animation: hover 1s linear infinite .25s;
  }

  .LoadingNoticias p:nth-child(4) {
    animation: hover 1s linear infinite .375s;
  }

  .LoadingNoticias p:nth-child(5) {
    animation: hover 1s linear infinite .5s;
  }

  .LoadingNoticias p:nth-child(6) {
    animation: hover 1s linear infinite .675s;
  }

  .LoadingNoticias p:nth-child(7) {
    animation: hover 1s linear infinite .75s;
  }

  @keyframes hover {
    0% {
      transform: scale(.5);
      color: #121212;
      -webkit-text-stroke: 2px gray;
    }

    20% {
      transform: scale(1);
      color: pink;
      -webkit-text-stroke: 3px red;
      filter: drop-shadow(0 0 1px black)drop-shadow(0 0 1px black)drop-shadow(0 0 3px red)drop-shadow(0 0 5px red)hue-rotate(10turn);
    }

    50% {
      transform: scale(.5);
      color: #121212;
      -webkit-text-stroke: 2px gray;
    }


  }


  @media (max-width: 520px) {
    .configurador{
      height: 150px;
    }
  }

  @media (max-width: 720px) {
    .textVisor{
      display: none;
    }
  }

  @media (min-width: 520px) and  (max-width: 720px) {
    .configurador{
      height: 200px;
    }
  }

  @media (min-width: 720px) {
    .letrasVisorResponsive{
      display: none;
    }
  }

  @media (min-width: 1400px) {
    .modelo1{
      height: 500px;
      max-height: 500px;
    }
  }
  </style>