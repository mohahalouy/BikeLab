<template>
  <div class="menuAdmin text-dark container d-flex flex-column">
    <h2>Menú Admin</h2>
    <button class="buttonAccess buttonAddNews py-1"> Añadir Noticias</button>
    <button class="buttonAccess buttonAddModels py-1"> Añadir Modelos</button>
    <button class="buttonAccess buttonAddClothing py-1"> Añadir Ropa</button>
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

.menuAdmin{
  gap: 10px 0;
}
</style>