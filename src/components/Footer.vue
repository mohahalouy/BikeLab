<template>
  <footer class="footerGeneralContainer">
    <div class="footerContainer">
      <header>
        <nav>
          <ul class="socialIcon">
            <li><a href="">
              <font-awesome-icon :icon="[ 'fab', 'instagram' ]"/>
            </a></li>
            <li><a href="">
              <font-awesome-icon :icon="[ 'fab', 'twitter' ]"/>
            </a></li>
            <li><a href="">
              <font-awesome-icon :icon="[ 'fab', 'facebook' ]"/>
            </a></li>
            <li><a href="">
              <font-awesome-icon :icon="[ 'fab', 'tiktok' ]"/>
            </a></li>
          </ul>
        </nav>
      </header>
      <section class="footerLinks">
        <ul>
          <li><a href="">lorem</a></li>
          <li><a href="">lorem</a></li>
          <li><a href="">lorem</a></li>
          <li><a href="">lorem</a></li>
        </ul>
      </section>
      <hr class="lineFooter">
      <section class="copyReturnUp">
        <p class="m-0">Copyright 2022 KTM Sportmotorcycle GmbH, all rights reserved</p>
        <p class="goUp m-0" @click="goUp">Volver Arriba<font-awesome-icon :icon="[ 'fas', 'arrow-up' ]" class="ml-2"/></p>
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

.footerLinks {
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
  transition: opacity 0.6s;
}

.footerLinks ul li a:hover {
  opacity: 1;
}

.lineFooter {
  border-color: white;
  width: 100%;
}

.copyReturnUp {
  width: 100%;
  font-family: 'letraVisor';
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
}

.goUp{
  cursor: pointer;
}

</style>