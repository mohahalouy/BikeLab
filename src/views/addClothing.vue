<template>
  <div class="containerRopa">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <section class="addClothing">
      <div class="listaIdiomas text-dark">
        <div class="title">
          Idioma
        </div>
        <div class="select_wrap">
          <ul class="default_option">
            <li>
              <div class="option español">
                <div class="icon">
                  <img src="../assets/banderaEspaña.png" alt="es">
                </div>
                <p>Español</p>
              </div>
            </li>
          </ul>
          <ul class="select_ul">
            <li>
              <div class="option español">
                <div class="icon">
                  <img src="../assets/banderaEspaña.png" alt="en">
                </div>
                <p>Español</p>
              </div>
            </li>
            <li>
              <div class="option ingles">
                <div class="icon">
                  <img src="../assets/banderaInglaterra.png" alt="en">
                </div>
                <p>Ingles</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
      <form @submit.prevent="validateEmptyInputs">
        <div v-if="this.idioma==='Español'">
          <div class="mb-3">
            <label >Nombre</label>
            <input type="text" name="titulo" v-model="dataClothing.nombreEs" class="form-control">
          </div>
          <div class="mb-3">
            <label >Detalles Html</label>
            <textarea name="destacado" v-model="dataClothing.detallesEs" class="form-control" rows="5"></textarea>
          </div>
        </div>
        <div v-else>
          <div class="mb-3">
            <label >Nombre</label>
            <input type="text" name="titulo" v-model="dataClothing.nombreEn" class="form-control">
          </div>
          <div class="mb-3">
            <label >Detalles Html</label>
            <textarea name="destacado" v-model="dataClothing.detallesEn" class="form-control" rows="5"></textarea>
          </div>
        </div>
        <div class="mb-3">
          <label >Código artículo</label>
          <input type="text" name="titulo" v-model="dataClothing.codigoArticulo" class="form-control">
        </div>
        <div class="mb-3">
            <p >Tipo del artículo</p>
          <div class="d-flex" style="justify-content: space-evenly">
            <label>
              <input type="radio" name="tipoArticulo" value="ropaHombre" checked>
              Ropa Hombre
            </label>
            <label>
              <input type="radio" name="tipoArticulo" value="ropaMujer">
              Ropa Mujer
            </label>
            <label>
              <input type="radio" name="tipoArticulo" value="ropaNinio">
              Ropa Niño
            </label>
            <label>
              <input type="radio" name="tipoArticulo" value="accesorios">
              Accesorios
            </label>
          </div>
        </div>
        <div>
          <p>Tallas disponibles</p>
          <div class="d-flex" style="justify-content: space-evenly">
            <label>
              <input type="checkbox" value="xs" class="checkTallas">
              XS
            </label>
            <label>
              <input type="checkbox" value="s" class="checkTallas">
              S
            </label>
            <label>
              <input type="checkbox" value="m" class="checkTallas">
              M
            </label>
            <label>
              <input type="checkbox" value="l" class="checkTallas">
              L
            </label>
            <label>
              <input type="checkbox" value="xl" class="checkTallas">
              XL
            </label>
            <label>
              <input type="checkbox" value="xxl" class="checkTallas">
              XXL
            </label>
            <label>
              <input type="checkbox" value="xxxl" class="checkTallas">
              XXXL
            </label>
            <label>
              <input type="checkbox" value="unica" class="checkTallas">
              Talla única
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label >Precio</label>
          <input type="number" name="nombre" v-model="dataClothing.precio" class="form-control" min="0" step="any">
        </div>
        <div class="mb-3">
          <label >Imagen Portada</label>
          <input v-on:change="onFileChange" type="file" name="image" id="fileName" class="course form-control imagen" style="padding: 0px; height: fit-content">
        </div>
        <div class="d-flex mb-3" style="justify-content: space-evenly">
          <router-link class="btn btn-secondary" to="/">Volver Home</router-link>
          <button type="submit" class="btn btn-primary">Guardar</button>
        </div>
      </form>
    </section>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import HeaderPrincipal from "../components/HeaderPrincipal";
import FullDisplayHeader from "../components/FullDisplayHeader";
import Footer from "../components/Footer";
import $ from "jquery";

export default {
  name: "addClothing",
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  data: function () {
    return {
      idioma:'Español',
      dataClothing: {
        nombreEs: '',
        nombreEn: '',
        imgPortada:'',
        codigoArticulo:'',
        tipoArticulo:'',
        tallas: '',
        precio:'',
        detallesEs: '',
        detallesEn: ''
      },
    }
  },
  mounted() {
    this.cambioIdioma();
    this.goUp();
  },
  methods:{
    goUp() {
      $('html, body').animate({scrollTop: 0}, 500);
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      this.dataClothing.imgPortada = files[0]
    },
    cambioIdioma() {
      let that = this;
      $(".default_option").click(function () {
        $(this).parent().toggleClass("active");
      })

      $(".select_ul li").click(function(){
        var currentele = $(this).html();
        $(".default_option li").html(currentele);
        $(this).parents(".select_wrap").removeClass("active");
        that.idioma=$('.default_option li p')[0].textContent
      })
    },
    validateEmptyInputs(){
      let checkBoxsTallas=$('.checkTallas:checked');


      checkBoxsTallas.each((key) => {
        let that=this
        that.dataClothing.tallas+=checkBoxsTallas[key].value+','
      });
      this.dataClothing.tallas=this.dataClothing.tallas.slice(0, -1)

      this.dataClothing.tipoArticulo=$('input[name="tipoArticulo"]:checked')[0].value

      let valido = true;
      for (const item in this.dataClothing) {
        if (this.dataClothing[item] === '' || this.dataClothing[item] <= 0 || checkBoxsTallas.length <= 0) {
          valido = false;
          break;
        }
      }

      if (valido) {
        this.addClothing()
      }
      else{
        alert('Debes rellenar todos los campos y no puede haber valores negativos')
      }
    },
    async addClothing() {
      let data = new FormData();

      data.append('nombreEs', this.dataClothing.nombreEs)
      data.append('nombreEn', this.dataClothing.nombreEn)
      data.append('imgPortada', this.dataClothing.imgPortada)
      data.append('codigoArticulo', this.dataClothing.codigoArticulo)
      data.append('tipoArticulo', this.dataClothing.tipoArticulo)
      data.append('tallas', this.dataClothing.tallas)
      data.append('precio', this.dataClothing.precio)
      data.append('detallesEs', this.dataClothing.detallesEs)
      data.append('detallesEn', this.dataClothing.detallesEn)

      window.scrollTo(0, 0);
      $('.loading').show()


        let response = await fetch('http://localhost:8000/api/addClothing', {
          method: 'POST',
          body: data
        });
        $('.loading').hide()

        if (response.ok) {
          setTimeout(function () {
            alert('Ropa insertada correctamente')
          }, 500);

          $('.imagen').each(function (index, input) {
            input.value=''
          })

          let checkBoxsTallas=$('.checkTallas:checked');

          checkBoxsTallas.each((key) => {
            checkBoxsTallas[key].checked=false
          });

          this.dataClothing = {
            nombreEs: '',
            nombreEn: '',
            imgPortada:'',
            codigoArticulo:'',
            tipoArticulo:'',
            tallas: '',
            precio:'',
            detallesEs: '',
            detallesEn: ''
          }
        } else {
          setTimeout(function () {
            alert('Error, intentelo mas tarde')
          }, 500);
        }

    }
  }
}
</script>

<style scoped>
.containerRopa{
  display: grid;
  max-width: 2000px;
  min-height: 100vh;
  width: 100%;
  grid-template-areas:
    "header"
  "addClothing"
  "footer";
  grid-template-columns: 100%;
  grid-template-rows: auto;
  position: relative;
  justify-items: center;
  background: url('../assets/multistrada.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}

.header {
  position: relative;
}

.addClothing {
  grid-area: addClothing;
  width: 50%;
}

.listaIdiomas .title {
  font-weight: 700;
  font-size: 24px;
  color: #fff;
}

.select_wrap{
  width: 225px;
  margin: 15px auto;
  position: relative;
  user-select: none;
}

.select_wrap .default_option{
  background: #fff;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  list-style: none;
}

.select_wrap .default_option li{
  padding: 10px 20px;
}

.select_wrap .default_option:before{
  content: "";
  position: absolute;
  top: 18px;
  right: 18px;
  width: 6px;
  height: 6px;
  border: 2px solid;
  border-color: transparent transparent #555555 #555555;
  transform: rotate(-45deg);
}

.select_wrap .select_ul{
  position: absolute;
  top: 55px;
  left: 0;
  width: 100%;
  background: #fff;
  border-radius: 5px;
  display: none;
  list-style: none;
}

.select_wrap .select_ul li{
  padding: 10px 20px;
  cursor: pointer;
}

.select_wrap .select_ul li:first-child:hover{
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.select_wrap .select_ul li:last-child:hover{
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.select_wrap .select_ul li:hover{
  background: #fff4dd;
}

.select_wrap .option{
  display: flex;
  align-items: center;
}

.select_wrap .option p{
  margin: 0;
}

.select_wrap .option .icon{
  width: 32px;
  height: 32px;
  margin-right: 15px;
}

.select_wrap .option .icon img{
  width: 100%;
  height: 100%;
}

.select_wrap.active .select_ul{
  display: block;
}

.select_wrap.active .default_option:before{
  top: 25px;
  transform: rotate(-225deg);
}

</style>