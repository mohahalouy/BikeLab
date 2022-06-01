<template>
  <div id="app">
    <router-view></router-view>
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
  /*src:url("http://127.0.0.1:8000/uploads/Letras/BlenderPro-Bold/BlenderPro-Bold.ttf") format('truetype');*/
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
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
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
</style>