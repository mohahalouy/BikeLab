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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  display: flex;
  justify-content: center;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>