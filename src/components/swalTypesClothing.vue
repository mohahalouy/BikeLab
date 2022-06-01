<template>
  <div class="menuTypeClothing text-dark container d-flex flex-column">
    <button class="buttonAccess buttonRopaHombre py-1"> {{$t('24')}}</button>
    <button class="buttonAccess buttonRopaMujer py-1"> {{$t('25')}}</button>
    <button class="buttonAccess buttonRopaNinio py-1"> {{$t('26')}}</button>
    <button class="buttonAccess buttonAccesorios py-1"> {{$t('27')}}</button>
  </div>
</template>


<script>
export default {
  name: "swalTypesClothing"
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

.menuTypeClothing{
  gap: 10px 0;
}
</style>