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

      <section v-if="cargadoNoticias" class="noticia m-0 mt-3 row w-100">
        <article class="col-12 col-sm-6 col-lg-4 py-3 px-0 px-sm-2 d-flex flex-column" data-aos="zoom-in"
                 data-aos-duration="500"
                 v-for="item in this.dataNoticias" :key="item.id">
          <router-link :to="{ name: 'Noticia', query: { id: item.id }}" class="linkNonStyle">
            <img class="img-fluid" :src="'http://127.0.0.1:8000/uploads/noticias/'+item.imagen">
          </router-link>
          <div v-if="idioma==='es'" class="letrasVisorNoticas text-left">
            <p class="">{{ item.fecha }}</p>
            <router-link :to="{ name: 'Noticia', query: { id: item.id }}" class="linkNonStyle">
              <h4 class="tituloNoticia">{{ item.tituloEs }}</h4>
            </router-link>
            <p class="mb-0 previexTextNoticia">{{ item.previewTextoEs }}</p>
          </div>
          <div v-else class="letrasVisorNoticas text-left">
            <p class="">{{ item.fecha }}</p>
            <router-link :to="{ name: 'Noticia', query: { id: item.id }}" class="linkNonStyle">
              <h4 class="tituloNoticia">{{ item.tituloEn }}</h4>
            </router-link>
            <p class="mb-0 previexTextNoticia">{{ item.previewTextoEn }}</p>
          </div>
        </article>

      </section>

      <div v-else class="LoadingHomeNoticias">
        <p>l</p>
        <p>o</p>
        <p>a</p>
        <p>d</p>
        <p>i</p>
        <p>n</p>
        <p>g</p>
      </div>

      <section class="modelos row mt-3 mx-0 w-100">
        <article data-aos="flip-right" class="col-12 col-md-6 py-3 px-0 px-md-2">
          <a class="linkNonStyle" href="">
            <div class="modelo centarPalabras" style="background-image: url('http://127.0.0.1:8000/uploads/imgStatic/s1000rrHomeModelos.jpg')">
              <p class="m-0 textVisor letrasVisor" style="font-size: 1.5em;">#GETHYPERSPORT</p>
              <p class="m-0 textVisor letrasVisor">S100rr</p>
            </div>
            <div class="letrasVisorResponsive text-center">
              <p class="mb-0">GET A HYPERSPORT</p>
              <h3 class="">Bike Lab Sport</h3>
            </div>
          </a>
        </article>
        <article data-aos="flip-left" class="col-12 col-md-6 py-3 px-0 px-md-2">
          <a class="linkNonStyle" href="">
            <div class="modelo centarPalabras" style="background-image: url('http://127.0.0.1:8000/uploads/imgStatic/mt-09HomeModelos.jpg')">
              <p class="m-0 textVisor letrasVisor" style="font-size: 1.5em;">#GETHYPERNAKED</p>
              <p class="m-0 textVisor letrasVisor">MT-09 SP</p>
            </div>
            <div class="letrasVisorResponsive text-center">
              <p class="mb-0">GET A HYPERNAKED</p>
              <h3 class="">Bike Lab NAKED</h3>
            </div>
          </a>
        </article>
      </section>

      <section class="findUsContainer mx-0 mt-3 row w-100">
        <div class="col-12 col-md-6 row p-0 m-0">
          <a href="https://www.instagram.com/p/CeO_52mqIrN/" class="col-6 p-0" target="_blank">
            <div class="imgInsta" style="background-image: url('http://127.0.0.1:8000/uploads/imgStatic/mt-09HomeModelos.jpg')"></div>
          </a>
          <a href="https://www.instagram.com/p/CePQgskqX7V/" class="col-6 p-0" target="_blank">
            <div class="imgInsta" style="background-image: url('http://127.0.0.1:8000/uploads/imgStatic/s1000rrHome.jpg')"></div>
          </a>
          <a href="https://www.instagram.com/p/CeO_nG8qDiG/" class="col-6 p-0" target="_blank">
            <div class="imgInsta" style="background-image: url('http://127.0.0.1:8000/uploads/imgStatic/R1MHome.jpg')"></div>
          </a>
          <a href="https://www.instagram.com/p/CePQUUBqptL/" class="col-6 p-0" target="_blank">
            <div class="imgInsta" style="background-image: url('http://127.0.0.1:8000/uploads/imgStatic/multistrada2.jpg')"></div>
          </a>
        </div>
        <div class="col-12 col-md-6 findUsInstaContainer p-0">
          <div class="p-3">
            <h3 class="m-0">{{$t('35')}}</h3>
            <hr>
            <p>{{$t('36')}}</p>
            <div class="followUsInsta">
              <p class="d-flex align-items-center m-0">
                <a href="https://www.instagram.com/bikelaboficial/" target="_blank">
                  <font-awesome-icon :icon="[ 'fab', 'instagram' ]" class="mr-2"/>
                  <span>{{$t('37')}}</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>


      <section class="newsletter mt-3 mx-0 row w-100">
        <p class="my-0 mx-2 mx-md-0 col-12 col-md-4 p-0">{{$t('38')}}</p>
        <a class="buttonNewsletter col-6 col-md-3">
          {{$t('14')}}
        </a>
      </section>
    </section>
  </template>

  <script>
  import {mapState} from "vuex";

  export default {
    name: "Noticias",
    computed: mapState([
      'idioma'
    ]),
    data: function () {
      return {
        dataNoticias: [],
        dataModelos: [],
        cargadoNoticias:false,
      }

    },
    mounted() {
      this.noticias();
    },
    methods: {
      async noticias() {
        let response = await fetch('http://localhost:8000/api/noticias', {
          headers: {"Accept": "application/json", 'Content-Type': 'application/json'}
        })

        let content = await response.json()

        content = content.length >= 2 ? content.slice(-3) : content;

        this.dataNoticias=content;

        this.cargadoNoticias=true;
      }
  }
  }
  </script>

  <style scoped>

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
    color: white;
    text-transform: uppercase;
    font-size: 3em;
  }

  .configurador p{
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
    font-size: 4em;
    font-weight: 800;
    text-transform: uppercase;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /*ESTILOS DE LAS CAJAS CON NOTICIAS. SIN ANIMACIONES*/
  .noticia {
    justify-content: space-evenly;
  }

  .previexTextNoticia{
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .tituloNoticia{
    color: black;
    transition: color 0.5s;
  }

  .tituloNoticia:hover{
    color: red;
  }

  /*CAJAS DE LOS MODELOS, RESPECTIVAMENTE*/
  .modelo {
    width: 100%;
    height: 380px;
    max-height: 440px;
    background-repeat: no-repeat;
    background-size: cover;
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
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: transform 0.5s;
  }

  .imgInsta:hover {
    transform: scale(0.9);
  }

  /*section newsletter*/
  .newsletter {
    color: #262626;
    font-size: 24px;
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
    .modelo{
      height: 500px;
      max-height: 500px;
    }
  }
  </style>