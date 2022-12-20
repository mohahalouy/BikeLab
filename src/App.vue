<template>
  <div id="app">
<!--    <router-view></router-view>-->
    Realizando tareas de mantenimiento
  </div>
</template>

<script>

export default {
  name: 'App'}
</script>

<style>
@font-face {
  font-family: 'letraVisor';
  src: url("assets/BlenderPro-Bold/BlenderPro-Bold.ttf");
  /*src:url("https://proyectogradoback.herokuapp.com/uploads/Letras/BlenderPro-Bold/BlenderPro-Bold.ttf") format('truetype');*/
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  display: flex;
  padding: 0 !important;
  justify-content: center;
}

#app {
  font-family: letraVisor, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: white;*/
  color: black;
  font-size: 40px;
  width: 100%;
  max-width: 2000px;
}

#app.difuminated{
  filter: blur(10px);
}


.loading{
  display: none;
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
}

.centerBike {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 30px;
  margin-left: -14px;
}

.centerLoop {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
}

#loop {
  height: 120px;
  width: 120px;
  border: #bb5f27 solid 4px;
  border-radius: 200px;
}

#loop:before {
  background: linear-gradient(to left, rgba(187, 95, 39, 0) 0%, rgba(187, 95, 39, 1) 30%, rgba(187, 95, 39, 1) 70%, rgba(187, 95, 39, 0) 100%);
  content: "";
  display: block;
  height: 4px;
  left: -100px;
  position: relative;
  top: 113px;
  width: 300px;
}

#bike-wrapper {
  height: 108px;
  width: 108px;
  animation: drive 1.5s linear infinite;
}

#bike {
  height: 24px;
  width: 25px;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/133687/motorbike.png");
}

@keyframes drive {
  0% {
    margin-left: -364px;
    opacity: 0;
  }
  33.33% {
    transform: rotate(0deg);
    margin-left: -50px;
    opacity: 1;
  }
  66.66% {
    transform: rotate(-360deg);
    margin-left: -50px;
    opacity: 1;
  }
  100% {
    margin-left: 120px;
    transform: rotate(-360deg);
    opacity: 0;
  }
}

/*Animacion loader basica redonda roja usada en equipamiento*/

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  color: red;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid red;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: red transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*Animacion loader de las noticias*/

.LoadingHomeNoticias{
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
}

.LoadingHomeNoticias p {
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

.LoadingHomeNoticias p:nth-child(1) {
  animation: hover 1s linear infinite;
}

.LoadingHomeNoticias p:nth-child(2) {
  animation: hover 1s linear infinite .125s;
}

.LoadingHomeNoticias p:nth-child(3) {
  animation: hover 1s linear infinite .25s;
}

.LoadingHomeNoticias p:nth-child(4) {
  animation: hover 1s linear infinite .375s;
}

.LoadingHomeNoticias p:nth-child(5) {
  animation: hover 1s linear infinite .5s;
}

.LoadingHomeNoticias p:nth-child(6) {
  animation: hover 1s linear infinite .675s;
}

.LoadingHomeNoticias p:nth-child(7) {
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
</style>