<template>
  <div class="cesta">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import HeaderPrincipal from "@/components/HeaderPrincipal";
import FullDisplayHeader from "@/components/FullDisplayHeader";
import Footer from "../components/Footer";
import {mapState} from "vuex";
import $ from 'jquery';

export default {
  name: "Cesta",
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  computed: mapState([
    'arrayIdsCompra'
  ]),
  mounted() {
    this.getModelo()
    // this.$store.state.arrayIdsCompra.forEach(id => this.getModelo(id));
  },
  methods:{
    async getModelo() {
      var data ={
        id:['3','1','2']
      }
      // let response = await fetch('http://localhost:8000/api/modelos?id=' + id, {
      //   headers: {"Accept": "application/json", 'Content-Type': 'application/json'}
      // })

      // let response = await fetch('http://localhost:8000/api/modelos1', {
      //   method: 'POST',
      //   dataType:'json',
      //   contentType: 'json',
      //   body: JSON.stringify(data)
      // })


      $.ajax({
        url:'http://localhost:8000/api/modelos1',
        type: 'POST',
        dataType:'json',
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8',
      });

      // let content=await response.json()
      // console.log(content)

      // this.dataNoticia=content[0]
    }
  }
}
</script>

<style>
.cesta{
  display: grid;
  max-width: 2000px;
  width: 100%;
  height: 100vh;
  grid-template-areas:
    "header"
  "footer";
  grid-template-columns: 100%;
  grid-template-rows: auto;
  position: relative;
  justify-items: center;
  color: black;
}

.cesta .nav > ul > li > a{
  color: black;
}
</style>