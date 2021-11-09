<template>
  <header class="mx-2 border border-primary">
    <div id="container" class="border border-danger">
      <div class="d-flex justify-content-between">
        <nav class="nav align-items-center">
          <ul class="list-unstyled d-flex m-0">
            <li class="mr-5">
              <a href="">lorem</a>
            </li>
            <li class="mr-5">
              <a href="">lorem</a>
            </li>
            <li class="mr-5">
              <a href="">lorem</a>
            </li>
            <li class="mr-5">
              <a href="">lorem</a>
            </li>
          </ul>
        </nav>
        <aside class="d-flex align-items-center">
          <div id="idiomas" class="mr-2 d-flex align-items-center">
            <span>Idioma</span>
            <div id="imgIdiomas" class="d-flex imgBanderas">
              <img href="" src="../assets/banderaEspaña.png">
              <img href="" src="../assets/banderaInglaterra.png">
            </div>
          </div>
          <div id="logoHeader" class="logoHeader">
            <img href="" src="../assets/MH.png">
          </div>
        </aside>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPrincipal"
}
</script>

<style scoped>
header{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
}

header > div {
  margin: 0 200px;
}

.nav > ul > li > a {
  color: black;
  text-decoration: none;
  font-size: 1.11111em;
  font-weight: 700;
  text-transform: uppercase;
}

.logoHeader > img {
  height: 150px;
  width: 160px;
}

.imgBanderas > img {
  width: 35px;
  cursor: pointer;
}

</style>