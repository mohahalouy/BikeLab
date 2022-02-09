<template>
  <footer class="footerGeneralContainer">
    <div class="footerContainer">
      <header>
        <nav class="d-flex justify-content-center">
          <ul class="socialIcon row-cols-4">
            <li class="col p-0">
              <a href="">
                <font-awesome-icon :icon="[ 'fab', 'instagram' ]"/>
              </a>
            </li>
            <li class="col p-0">
              <a href="">
                <font-awesome-icon :icon="[ 'fab', 'twitter' ]"/>
              </a>
            </li>
            <li class="col p-0">
              <a href="">
                <font-awesome-icon :icon="[ 'fab', 'facebook' ]"/>
              </a>
            </li>
            <li class="col p-0">
              <a href="">
                <font-awesome-icon :icon="[ 'fab', 'tiktok' ]"/>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section class="footerLinks">
        <ul class="row row-cols-xl-4 m-0 align-items-center">
          <li class="col-12 col-xl-3 p-0"><a class="m-0" href="">{{$t('1')}}</a></li>
          <li class="col-12 col-xl-3 p-0"><a class="m-0" href="">{{$t('2')}}</a></li>
          <li class="col-12 col-xl-3 p-0"><a class="m-0" href="">{{$t('3')}}</a></li>
          <li class="col-12 col-xl-3 p-0"><a class="m-0" href="">{{$t('4')}}</a></li>
        </ul>
      </section>
      <hr class="lineFooter">
      <section class="copyReturnUp row justify-content-center">
        <p class="m-0 col-12 text-uppercase">Copyright 2022 MH Motorcycle Sportmotorcycle GmbH, all rights reserved</p>
        <p class="goUp m-0 col-12 col-xl-3" @click="goUp">Volver Arriba<font-awesome-icon :icon="[ 'fas', 'arrow-up' ]" class="ml-2"/></p>
      </section>
    </div>
  </footer>
</template>

<script>
import $ from 'jquery'

export default {
  name: "Footer",
  methods: {
    goUp: function (){
      $('html, body').animate({scrollTop:0}, 1500);
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: letraVisor;
  src: url("../assets/BlenderPro-Bold/BlenderPro-Bold.ttf");
}

.footerGeneralContainer {
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
}

.footerContainer {
  width: 80%;
  max-width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header {
  width: 100%;
}

footer .socialIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

footer .socialIcon li {
  list-style: none;
}

footer .socialIcon li a {
  font-size: 2em;
  color: white;
  margin: 0 10px;
  display: inline-block;
  transition: transform 0.5s;
}

footer .socialIcon li a:hover {
  transform: translateY(-10px);
}

.footerLinks{
  width: 100%;
  max-width: 550px;
}

.footerLinks ul {
  list-style: none;
  display: flex;
}

.footerLinks ul li a {
  font-size: 1.2em;
  color: white;
  margin: 0 10px;
  text-decoration: none;
  opacity: 0.75;
  transition: opacity 0.4s;
}

.footerLinks ul li a:hover {
  opacity: 1;
}

.lineFooter {
  border-color: white;
  width: 100%;
}

.copyReturnUp {
  font-family: 'letraVisor';
  font-size: 1.2em;
}

.goUp{
  color: red;
  cursor: pointer;
}

</style>