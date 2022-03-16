<template>
  <div id="home" class="home">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <CarouselPaginaPrincipal class="carousel"></CarouselPaginaPrincipal>
    <HomeNoticiasConfigurador class="noticiasConfigurador"></HomeNoticiasConfigurador>
    <Footer class="footer"></Footer>

    <div v-if="!authenticated" class="containerLoading">
      <div class="wrapper">
        <span class="circle circle-1 mx-2"></span>
        <span class="circle circle-2 mx-2"></span>
        <span class="circle circle-3 mx-2"></span>
        <span class="circle circle-4 mx-2"></span>
        <span class="circle circle-5 mx-2"></span>
        <span class="circle circle-6 mx-2"></span>
        <span class="circle circle-7 mx-2"></span>
        <span class="circle circle-8 mx-2"></span>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPrincipal from "@/components/HeaderPrincipal";
import FullDisplayHeader from "@/components/FullDisplayHeader";
import CarouselPaginaPrincipal from "@/components/CarouselPaginaPrincipal";
import HomeNoticiasConfigurador from "@/components/HomeNoticiasConfigurador";
import Footer from "@/components/Footer";
import $ from "jquery";
import {mapState} from "vuex";

export default {
  name: 'Home',
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    CarouselPaginaPrincipal,
    HomeNoticiasConfigurador,
    Footer
  },
  computed: mapState([
    'authenticated'
  ]),
  mounted() {
    this.reconectUser()
  },
  methods: {
    async reconectUser() {
      $('.containerLoading').show()
      $('body').addClass('noScrollBody')

      try {
        let response = await fetch('http://localhost:8000/api/user', {
          headers: {"Accept": "application/json", 'Content-Type': 'application/json'},
          credentials: 'include'
        });
        $('.containerLoading').hide()
        $('body').removeClass('noScrollBody')
        if (response.ok) {
          let content = await response.json();

          let permisosAdmin=  await content.rol === "1" ? true : false;

          await this.$store.commit('SET_NOMBRE_USER', content.name)

          await this.$store.commit('SET_ADMIN', permisosAdmin)

          await this.$store.commit('SET_AUTH', true)
        } else {
          await this.$store.commit('SET_AUTH', false)
        }

      } catch (e) {
        await this.$store.commit('SET_AUTH', false)
      }

    }
  }
}
</script>

<style>
/*ESTRUCTURA GENERAL DE LA PANTALLA DE INICIO*/
.home {
  display: grid;
  max-width: 2000px;
  width: 100%;
  grid-template-areas:
    "header"
    "carousel"
    "noticiasConfigurador"
    "footer";
  grid-template-columns: 100%;
  grid-template-rows: auto;
  position: relative;
  justify-items: center;
}

.header {
  grid-area: header;
}

.fullDisplayHeader {
  display: none;
  background-color: rgb(0 0 0 / 80%);
  height: 100vh;
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
}

.fullDisplayHeader.desactivate {
  display: block;
  animation: desactivateResponsiveHeader 1s forwards;
}

@keyframes desactivateResponsiveHeader {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}

.fullDisplayHeader.desactivate .headerResponsive {
  display: none;
}

.fullDisplayHeader.active {
  display: block;
  animation: activateResponsiveHeader 1s forwards;
}

@keyframes activateResponsiveHeader {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.fullDisplayHeader.active .headerResponsive {
  opacity: 0;
  animation: opacityHeader 1s 1s forwards;
}

@keyframes opacityHeader {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.carousel {
  width: 100%;
  grid-area: carousel;
}

.noScrollBody {
  overflow: hidden;
}

.noticiasConfigurador {
  grid-area: noticiasConfigurador;
}

.footer {
  grid-area: footer;
}

@media (min-width: 1300px) {
  .fullDisplayHeader.active {
    display: none;
  }

  .header {
    display: block !important;
  }

  html body {
    overflow: auto ;
  }
}
</style>