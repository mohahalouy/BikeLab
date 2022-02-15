<template>
  <div class="about">
    <router-link to="/"> {{ $t('1') }}</router-link>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'About',
  mounted() {
    $('body').removeClass('noScrollBody')
  }
}
</script>


<style scoped>
.about{
  color: black;
}
</style>
