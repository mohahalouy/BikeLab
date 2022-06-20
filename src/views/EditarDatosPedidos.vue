<template>
  <div class="editarPedidosContainer">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <section v-if="cargado" class="pedidos  mb-5">
      <p class="align-self-start font-weight-bold" style="font-size: 40px">{{$t('136')}}</p>
      <div v-for="(item,index) in this.dataPedidos" :key="index" class="items">
        <router-link :to="{ name: 'editarPedido', params: { id:item.id }}" class="linkNonStyle d-flex justify-content-between px-2 mb-2">
          <div class="text-left">
            <p class="m-0">{{$t('137')}} {{item.order_date}}</p>
            <p class="m-0">#{{item.id}}</p>
            <button class="statusOrder">{{item.order_status}}</button>
          </div>
          <div class="imgContainer">
            <div v-for="(itemPedidos, index2) in JSON.parse(item.order).slice(0,3)" :key="index2" class="itemsImg">
              <div v-for="(itemDatos, index3) in DatosItems" :key="index3" class="itemsImg">
                <img v-if="itemPedidos.id===itemDatos.id && itemPedidos.tipoArticulo===itemDatos.tipoCesta && itemPedidos.tipoArticulo ==='equipamiento'"
                     :src="'https://proyectogradoback.herokuapp.com/uploads/equipamiento/imagenes/'+itemDatos.imagen">
                <img v-else-if="itemPedidos.id===itemDatos.id && itemPedidos.tipoArticulo===itemDatos.tipoCesta && itemPedidos.tipoArticulo ==='modelos'"
                     :src="'https://proyectogradoback.herokuapp.com/uploads/modelos/imagenes/'+itemDatos.imagen">
              </div>
            </div>
            <div v-if="JSON.parse(item.order).length>=3" class="masArticulos">
              +{{JSON.parse(item.order).length-3}}
            </div>
          </div>
        </router-link>
      </div>
    </section>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import HeaderPrincipal from "../components/HeaderPrincipal";
import FullDisplayHeader from "../components/FullDisplayHeader";
import Footer from "../components/Footer";
import {mapState} from "vuex";

export default {
  name: "EditarDatosPedidos",
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  data: function () {
    return{
      dataPedidos:[],
      encontrado:false,
      arrayGeneralIds:[],
      DatosItems:[],
      cargado:false
    }
  },
  computed: mapState([
    'arrayIdsCompra',
    'idioma',
    'authenticated',
    'idUser',
    'datosUsuarioCargados'
  ]),
  watch: {
    datosUsuarioCargados(datosCargados) {
      if (datosCargados)
        this.getDatosPedidos();
    }
  },
  mounted() {
    this.changeTitle()
    if (this.datosUsuarioCargados)
      this.getDatosPedidos();
  },
  methods:{
    changeTitle() {
      document.querySelector('title').textContent = 'Editar Pedidos';
    },
    async getDatosPedidos() {
      let data=new FormData();
      data.append('idUser', this.idUser)

      let response=await fetch('https://proyectogradoback.herokuapp.com/api/AllOrders', {
        method: 'GET'
      })

      this.dataPedidos = await response.json()

      let that = this;
      for (const responseKey in this.dataPedidos) {
        for (const responseKeyKey in JSON.parse(this.dataPedidos[responseKey].order)) {
          that.encontrado = false;
          for (const responseKeyKeyKey in that.arrayGeneralIds) {
            if (JSON.parse(this.dataPedidos[responseKey].order)[responseKeyKey].id === that.arrayGeneralIds[responseKeyKeyKey].id
                && JSON.parse(this.dataPedidos[responseKey].order)[responseKeyKey].tipoArticulo === that.arrayGeneralIds[responseKeyKeyKey].tipoArticulo) {
              that.encontrado = true;
            }
          }
          if (!that.encontrado) {
            that.arrayGeneralIds.push({
              id: JSON.parse(this.dataPedidos[responseKey].order)[responseKeyKey].id,
              tipoArticulo: JSON.parse(this.dataPedidos[responseKey].order)[responseKeyKey].tipoArticulo
            })
          }
        }
      }

      this.getImgsProducts()
    },
    async getImgsProducts() {
      let response=await fetch('https://proyectogradoback.herokuapp.com/api/Items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        dataType: 'json',
        body: JSON.stringify(this.arrayGeneralIds),
        contentType: 'application/json; charset=utf-8'
      })
      this.DatosItems = await response.json()
      this.cargado=true;
    }
  }
}
</script>

<style scoped>
.editarPedidosContainer {
  display: grid;
  max-width: 2000px;
  width: 100%;
  grid-template-areas:
    "header"
    "pedidos"
  "footer";
  grid-template-columns: 100%;
  grid-template-rows: auto;
  position: relative;
  justify-items: center;
}

.header {
  position: relative;
  color: black;
}

.pedidos {
  grid-area: pedidos;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;

}

.linkNonStyle{
  text-decoration:none;
}

.items{
  border: 1px solid rgba(180, 175, 175, 0.4);
  transition: border 0.5s ;
}

.items:hover{
  border: 1px solid black;
}

.statusOrder{
  border-radius: 50px;
  border: none;
  padding: 0 10px;
}

.imgContainer{
  display: flex;
  gap: 5px;
  align-items: center;
}

.imgContainer img{
  max-width: 100px;
}

.itemsImg{
  height: fit-content;
  width: fit-content;
}

.masArticulos{
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 25px;
  background-color: #d7d7d7;
}
</style>