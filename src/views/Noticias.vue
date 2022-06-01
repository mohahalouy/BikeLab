<template>
<div></div>
</template>

<script>
export default {
  name: "Noticias",
  mounted() {
    this.noticias();
  },
  methods: {
    async noticias() {
      let response = await fetch('http://localhost:8000/api/noticias', {
        headers: {"Accept": "application/json", 'Content-Type': 'application/json'}
      })

      let content = await response.json()

      this.dataNoticias = content;

      this.cargadoNoticias=true;
    }
  }
}
</script>

<style scoped>

</style>