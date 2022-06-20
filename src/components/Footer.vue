<template>
  <footer class="footerGeneralContainer">
    <div class="footerContainer">
      <header>
        <nav class="d-flex justify-content-center">
          <ul class="socialIcon row-cols-4">
            <li class="col p-0">
              <a href="https://www.instagram.com/bikelaboficial/" target="_blank">
                <font-awesome-icon :icon="[ 'fab', 'instagram' ]"/>
              </a>
            </li>
            <li class="col p-0">
              <a href="https://twitter.com/BikeLab4" target="_blank">
                <font-awesome-icon :icon="[ 'fab', 'twitter' ]"/>
              </a>
            </li>
            <li class="col p-0">
              <a href="https://www.facebook.com/profile.php?id=100081907657565" target="_blank">
                <font-awesome-icon :icon="[ 'fab', 'facebook' ]"/>
              </a>
            </li>
            <li class="col p-0">
              <a href="https://www.tiktok.com/@bike_lab" target="_blank">
                <font-awesome-icon :icon="[ 'fab', 'tiktok' ]"/>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section class="footerLinks">
        <ul class="row row-cols-xl-4 m-0 align-items-center">
          <li class="col-12 col-xl-4 p-0">
            <router-link to="/modelos"> {{ $t('1') }}</router-link>
          </li>
          <li class="col-12 col-xl-4 p-0">
            <a href="" @click="verTypesEquipamiento">{{ $t('2') }}</a>
          </li>
          <li class="col-12 col-xl-4 p-0">
            <router-link to="/noticias"> {{ $t('3') }}</router-link>
          </li>
<!--          <li class="col-12 col-xl-3 p-0"><a class="m-0" href="">{{$t('4')}}</a></li>-->
        </ul>
      </section>
      <hr class="lineFooter">
      <section class="copyReturnUp row justify-content-center">
        <p class="m-0 col-12 text-uppercase text-white">{{$t('39')}}</p>
        <p class="goUp m-0 col-12 col-xl-3" @click="goUp">{{$t('40')}}<font-awesome-icon :icon="[ 'fas', 'arrow-up' ]" class="ml-2"/></p>
      </section>
    </div>
    <div class="menuTypesClothing" style='display: none'>
      <type-clothing></type-clothing>
    </div>
  </footer>
</template>

<script>
import $ from 'jquery'
import router from "../router";
import typeClothing from "../components/swalTypesClothing";

export default {
  name: "Footer",
  components: {
    typeClothing
  },
  methods: {
    goUp: function (){
      $('html, body').animate({scrollTop:0}, 1500);
    },
    verTypesEquipamiento(){
      event.preventDefault();
      let that = this
      this.$swal({
        customClass: 'swalATypeClothing',
        html: $('.menuTypesClothing').html(),
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: true,
        didOpen: function () {
          $(".menuTypeClothing .buttonRopaHombre").click(function () {
            that.$swal.close()
            router.push({ path: '/equipamientos', query: { tipoArticulo: 'ropaHombre' }}).catch(()=>{});
          });
          $(".menuTypeClothing .buttonRopaMujer").click(function () {
            that.$swal.close()
            router.push({ path: '/equipamientos', query: { tipoArticulo: 'ropaMujer' }}).catch(()=>{});
          });
          $(".menuTypeClothing .buttonRopaNinio").click(function () {
            that.$swal.close()
            router.push({ path: '/equipamientos', query: { tipoArticulo: 'ropaNinio' }}).catch(()=>{});
          });
          $(".menuTypeClothing .buttonAccesorios").click(function () {
            that.$swal.close()
            router.push({ path: '/equipamientos', query: { tipoArticulo: 'accesorios' }}).catch(()=>{});
          });
        }
      });
    }
  }
}
</script>

<style scoped>
.footerGeneralContainer {
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
}

.footerContainer {
  width: 80%;
  max-width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header {
  width: 100%;
}

footer .socialIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

footer .socialIcon li {
  list-style: none;
}

footer .socialIcon li a {
  font-size: 2em;
  color: white;
  margin: 0 10px;
  display: inline-block;
  transition: transform 0.5s;
}

footer .socialIcon li a:hover {
  transform: translateY(-10px);
}

.footerLinks{
  width: 100%;
  max-width: 550px;
}

.footerLinks ul {
  list-style: none;
  display: flex;
}

.footerLinks ul li a {
  font-size: 1.2em;
  color: white;
  margin: 0 10px;
  text-decoration: none;
  opacity: 0.75;
  transition: opacity 0.4s;
}

.footerLinks ul li a:hover {
  opacity: 1;
}

.lineFooter {
  border-color: white;
  width: 100%;
}

.copyReturnUp {
  font-size: 1.2em;
}

.goUp{
  color: red;
  cursor: pointer;
}

</style>