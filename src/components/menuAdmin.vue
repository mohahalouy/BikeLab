<template>
  <div class="menuAdmin text-dark container d-flex flex-column">
    <h2>Menú Admin</h2>
    <button class="buttonAccess buttonAddNews py-1 mb-3"> Añadir Noticias</button>
    <button class="buttonAccess buttonAddModels py-1"> Añadir Modelos</button>
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