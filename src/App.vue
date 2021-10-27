<template>
  <div id="app">
    <HeaderPrincipal></HeaderPrincipal>
  </div>
</template>

<script>
import HeaderPrincipal from "@/components/HeaderPrincipal";

export default {
  name: 'App',
  components: {
    HeaderPrincipal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
