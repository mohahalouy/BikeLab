<template>
  <div class="editarContainer">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <section class="editarPedidos">
      <div class="containerReturnButton text-left w-100">
        <a @click="$router.go(-1)" class="returnButton">
          <font-awesome-icon :icon="[ 'fas', 'arrow-left' ]" class="ml-2"/>
          {{ $t('85') }}
        </a>
      </div>
      <div v-if="this.cargado" class="formDatos">
        <form  @submit.prevent="actualizarDatos">
          <fieldset>
            <legend class="text-left">
              {{ $t('141') }}
            </legend>
            <ul class="list-unstyled listaDatosPersonales">
              <li>
                <label for="id">{{ $t('152') }}<span class="text-danger">*</span></label>
                <div class="divInputError">
                  <input class="id w-50" id="id" type="text" name="id" v-model="dataPedido[0].id">
                </div>
              </li>
              <li>
                <label for="nombre">{{$t('43')}}<span class="text-danger">*</span></label>
                <div class="divInputError">
                  <input class="nombre w-50" id="nombre" type="text" name="nombre" v-model="dataPedido[0].nombre">
                </div>
              </li>
              <li>
                <label class="mr-4">{{ $t('142') }}<span class="text-danger">*</span></label>
                <input type="radio" name="gender" checked value="Pendiente" id="Pendiente" class=" cursorPointer" v-model="dataPedido[0].order_status">
                <label for="Pendiente" class="pl-2  mr-4 cursorPointer">{{ $t('143') }}</label>
                <input type="radio" name="gender" value="En proceso" id="En proceso" class=" cursorPointer" v-model="dataPedido[0].order_status">
                <label for="En proceso" class="pl-2 mr-4 cursorPointer">{{ $t('144') }}</label>
                <input type="radio" name="gender" value="Enviado" id="Enviado" class=" cursorPointer" v-model="dataPedido[0].order_status">
                <label for="Enviado" class="pl-2 mr-4 cursorPointer">{{ $t('145') }}</label>
                <input type="radio" name="gender" value="Entregado" id="Entregado" class=" cursorPointer" v-model="dataPedido[0].order_status">
                <label for="Entregado" class="pl-2 mr-4 cursorPointer">{{ $t('146') }}</label>
              </li>
              <li>
                <label for="order">{{$t('124')}}<span class="text-danger">*</span></label>
                <div class="divInputError">
                  <input class="order w-50" id="order" type="text" name="order" v-model="dataPedido[0].order">
                </div>
              </li>
              <li>
                <label for="order_date">{{ $t('149') }}<span class="text-danger">*</span></label>
                <div class="divInputError">
                  <input class="order_date w-50" id="order_date" type="text" name="order_date" v-model="dataPedido[0].order_date">
                </div>
              </li>
              <li>
                <label>Tipo Envio<span class="text-danger">*</span></label>
                <input type="radio" name="order_shipping_type" value="Domicilio" id="Domicilio" class=" cursorPointer" v-model="dataPedido[0].order_shipping_type">
                <label for="Domicilio" class="pl-2 mr-4 cursorPointer">{{ $t('150') }}</label>
                <input type="radio" name="order_shipping_type" value="Concesionario" id="Concesionario" class=" cursorPointer" v-model="dataPedido[0].order_shipping_type">
                <label for="Concesionario" class="pl-2 mr-4 cursorPointer">{{ $t('151') }}</label>
              </li>
              <li>
                <label for="direccion">{{$t('106')}}<span class="text-danger">*</span></label>
                <div class="divInputError">
                  <input class="direccion w-50" id="direccion" type="text" name="direccion" v-model="dataPedido[0].direccion">
                </div>
              </li>
              <li>
                <label for="ciudad">{{$t('108')}}<span class="text-danger">*</span></label>
                <div class="divInputError">
                  <input class="direccion w-50" id="ciudad" type="text" name="ciudad" v-model="dataPedido[0].ciudad">
                </div>
              </li>
              <li>
                <label for="totalCesta">{{$t('74')}}<span class="text-danger">*</span></label>
                <div class="divInputError">
                  <input class="direccion w-50" id="totalCesta" type="number" name="totalCesta" v-model="dataPedido[0].totalCesta">
                </div>
              </li>
            </ul>
          </fieldset>
          <input class="buttonRevisarPedido" type="submit" :value="[[ $t('140') ]]" tabindex="-1">
        </form>
      </div>
      <div v-else class="formDatos">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import HeaderPrincipal from "../components/HeaderPrincipal";
import FullDisplayHeader from "../components/FullDisplayHeader";
import Footer from "../components/Footer";

export default {
  name: "EditarDatosPedido",
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  data:function () {
    return{
      dataPedido:[],
      cargado:false
    }
  }
  ,
  mounted() {
    this.getDatosPedidos()
  },
  methods:{
    async getDatosPedidos() {
      let data = new FormData();
      data.append('id', this.$route.params.id)

      let response = await fetch('https://bike-lab-back.up.railway.app/api/Order', {
        method: 'POST',
        body: data,
      })
      this.dataPedido = await response.json();


      if(this.dataPedido[0].order_shipping_type){
        this.dataPedido[0].order_shipping_type="Domicilio"
      }else{
        this.dataPedido[0].order_shipping_type="Concesionario"
      }
     this.cargado=true;
    },
    async actualizarDatos() {
      this.dataPedido[0].order_shipping_type=this.dataPedido[0].order_shipping_type === "Domicilio" ? 1 : 0
      let data=new FormData();
      data.append('id', this.$route.params.id)
      data.append('order', this.dataPedido[0].order)
      data.append('order_status', this.dataPedido[0].order_status)
      data.append('order_date', this.dataPedido[0].order_date)
      data.append('order_shipping_type', this.dataPedido[0].order_shipping_type)
      data.append('nombre', this.dataPedido[0].nombre)
      data.append('direccion', this.dataPedido[0].direccion)
      data.append('ciudad', this.dataPedido[0].ciudad)
      data.append('totalCesta', this.dataPedido[0].totalCesta)


      let response = await fetch('https://bike-lab-back.up.railway.app/api/actualizarPedido', {
        method: 'POST',
        credentials: 'include',
        body: data
      });

      if (response.ok)
        this.$swal({
          icon: 'success',
          title: 'Datos actualizados correctamente',
          showConfirmButton: true
        })
    }
  }
}
</script>

<style scoped>
.editarContainer {
  display: grid;
  max-width: 2000px;
  width: 100%;
  grid-template-areas:
    "header"
    "editarPedidos"
  "footer";
  grid-template-columns: 100%;
  grid-template-rows: auto;
  position: relative;
  justify-items: center;
  color: black;
}

.header {
  position: relative;
  color: black;
}

.editarPedidos {
  grid-area: editarPedidos;
  width: 100%;
}

.containerReturnButton {
  background: #dfdfdf;
  padding: 10px 0;
}

.returnButton {
  text-align: left;
  text-decoration: none;
  font-size: 1.4em;
  cursor: pointer;
  color: darkred;
}

</style>