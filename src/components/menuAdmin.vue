<template>
  <div class="menuAdmin text-dark container d-flex flex-column">
    <h2>{{$t('20')}}</h2>
    <button class="buttonAccess buttonAddNews py-1"> {{$t('21')}}</button>
    <button class="buttonAccess buttonAddModels py-1"> {{$t('22')}}</button>
    <button class="buttonAccess buttonAddClothing py-1"> {{$t('23')}}</button>
    <button class="buttonAccess buttonEditOrders py-1"> {{$t('140')}}</button>
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