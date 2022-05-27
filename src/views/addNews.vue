<template>
  <div class="containerNews">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <div class="addNews">
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
      <form  @submit.prevent="validateEmptyInputs">
        <div v-if="this.idioma==='Español'">
          <div class="mb-3">
            <label >Titulo</label>
            <input type="text" name="titulo" v-model="dataNews.tituloEs" class="form-control">
          </div>
          <div class="mb-3">
            <label >Fecha</label>
            <input type="date" id="fecha" name="trip-start" v-model="dataNews.fecha" class="form-control">
          </div>
          <div class="mb-3">
            <label >Preview texto</label>
            <input type="text" name="preText" v-model="dataNews.previewTextoEs" class="form-control">
          </div>
          <div class="mb-3">
            <label >Texto</label>
            <textarea name="texto" v-model="dataNews.textoEs" class="form-control" rows="5"></textarea>
          </div>
        </div>
        <div v-else>
          <div class="mb-3">
            <label >Titulo Ingles</label>
            <input type="text" name="titulo" v-model="dataNews.tituloEn" class="form-control">
          </div>
          <div class="mb-3">
            <label >Fecha</label>
            <input type="date" id="fecha" name="trip-start" v-model="dataNews.fecha" class="form-control">
          </div>
          <div class="mb-3">
            <label >Preview texto Ingles</label>
            <input type="text" name="preText" v-model="dataNews.previewTextoEn" class="form-control">
          </div>
          <div class="mb-3">
            <label >Texto Ingles</label>
            <textarea name="texto" v-model="dataNews.textoEn" class="form-control" rows="5"></textarea>
          </div>
        </div>
        <div class="mb-3">
          <label >Subir Image</label>
          <input v-on:change="onFileChange" type="file" name="image" id="fileName" class="course form-control imagen" >
        </div>
        <div class="d-flex mb-3" style="justify-content: space-evenly">
          <router-link class="btn btn-secondary" to="/">Volver Home</router-link>
          <button type="submit" class="btn btn-primary">Guardar</button>
        </div>
      </form>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>

import $ from "jquery";
import HeaderPrincipal from "../components/HeaderPrincipal";
import FullDisplayHeader from "../components/FullDisplayHeader";
import Footer from "../components/Footer";
import {mapState} from "vuex";

export default {
  name: "AddNews",
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  computed: mapState([
    'nombreUser',
    'authenticated',
    'adminUser'
  ]),
  data: function () {
    return {
      idioma:'Español',
      dataNews: {
        tituloEs: '',
        tituloEn: '',
        fecha: '',
        previewTextoEs:'',
        previewTextoEn:'',
        textoEs: '',
        textoEn: '',
        imagen:''
      },
    }
  },
  mounted() {
    this.cambioIdioma()
    this.goUp();
  },
  methods: {
    goUp() {
      $('html, body').animate({scrollTop: 0}, 500);
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      this.dataNews.imagen = files[0]
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
    validateFileType() {
      var fileName = document.getElementById("fileName").value;
      var idxDot = fileName.lastIndexOf(".") + 1;
      var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
      if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
        this.addNews()
      } else {
        alert("Solo se aceptan extensiones jpg, jpeg, png")
      }
    },
    validateEmptyInputs() {
      let valido = true;
      for (const item in this.dataNews) {
        if (this.dataNews[item] === '') {
          valido = false;
          break;
        }
      }

      if (valido) {
        this.validateFileType()
      }else{
        alert('Debes rellenar todos los campos')
      }
    },
    async addNews() {
      let data = new FormData();

      data.append('tituloEs', this.dataNews.tituloEs)
      data.append('tituloEn', this.dataNews.tituloEn)
      data.append('previewTextoEs', this.dataNews.previewTextoEs)
      data.append('previewTextoEn', this.dataNews.previewTextoEn)
      data.append('textoEs', this.dataNews.textoEs)
      data.append('textoEn', this.dataNews.textoEn)
      data.append('fecha', this.dataNews.fecha)
      data.append('imagen', this.dataNews.imagen)

      window.scrollTo(0, 0);
      $('.loading').show()
      try {
        let response = await fetch('http://localhost:8000/api/addNews', {
          method: 'POST',
          body: data
        });
        $('.loading').hide()

        if (response.ok) {
          setTimeout(function () {
            alert('Noticia insertada correctamente')
          }, 500);

          //Vaciar el formulario
          $('input, textarea').each(function (index, input) {
            input.value=''
          })

          this.dataNews = {
            tituloEs: '',
            tituloEn: '',
            fecha: '',
            previewTextoEs: '',
            previewTextoEn: '',
            textoEs: '',
            textoEn: '',
            imagen: ''
          }
        } else {
          setTimeout(function () {
            alert('Error, intentelo mas tarde')
          }, 500);
        }

      } catch (e) {
        await this.$store.commit('SET_AUTH', false)
      }

    }
  }
}
</script>

<style scoped>
.containerNews{
  display: grid;
  max-width: 2000px;
  width: 100%;
  grid-template-areas:
    "header"
  "addNews"
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

.addNews {
  grid-area: addNews;
  width: 50%;
}

.listaIdiomas .title{
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

input[type='file']{
  padding: 0;
  height: fit-content;
}


</style>