<template>
  <div class="menuAdmin text-dark container d-flex flex-column">
    <h2>Menú Admin</h2>
    <button class="buttonAccess py-1"> Añadir Noticias</button>
  </div>
</template>

<script>
export default {
  name: "menuAdmin"
}
</script>

<style scoped>
.container{
  background-color: white;
  width: fit-content;
}

.buttonAccess {
  outline: none;
  border: none;
  padding: 0 5px;
  border-radius: 10px;
  background: red;
  color: white;
}
</style>