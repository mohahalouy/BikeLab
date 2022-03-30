<template>
  <div class="containerModels">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <div class="addModels">
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
            <label>Nombre</label>
            <input type="text" name="nombre" v-model="dataModels.nombreEs" class="form-control">
          </div>
          <div class="mb-3">
            <label>Texto Preview modelo</label>
            <input type="text" name="previewTexto" v-model="dataModels.previewTextoEs" class="form-control">
          </div>
          <div class="mb-3">
            <label>Texto modelo html</label>
            <textarea name="textModelo" v-model="dataModels.textoEs" class="form-control" rows="5"></textarea>
          </div>
          <div class="mb-3">
            <label>Aspectos más destacados</label>
            <textarea name="destacado" v-model="dataModels.destacadoEs" class="form-control" rows="5"></textarea>
          </div>
          <div class="mb-3">
            <label>Enlace video</label>
            <input type="text" name="enlace" v-model="dataModels.enlace" class="form-control">
          </div>
          <p>Datos Motor:</p>
          <div class="mb-3">
            <label>Tipo motor</label>
            <input type="text" name="tipoMotorEs" v-model="dataModels.tipoMotorEs" class="form-control">
          </div>
        </div>
        <div v-else>
          <div class="mb-3">
            <label>Nombre Ingles</label>
            <input type="text" name="nombre" v-model="dataModels.nombreEn" class="form-control">
          </div>
          <div class="mb-3">
            <label>Texto Preview modelo Ingles</label>
            <input type="text" name="previewTexto" v-model="dataModels.previewTextoEn" class="form-control">
          </div>
          <div class="mb-3">
            <label>Texto modelo html Ingles</label>
            <textarea name="textModelo" v-model="dataModels.textoEn" class="form-control" rows="5"></textarea>
          </div>
          <div class="mb-3">
            <label>Aspectos más destacados Ingles</label>
            <textarea name="destacado" v-model="dataModels.destacadoEn" class="form-control" rows="5"></textarea>
          </div>
          <div class="mb-3">
            <label>Enlace video</label>
            <input type="text" name="enlace" v-model="dataModels.enlace" class="form-control">
          </div>
          <p>Datos Motor:</p>
          <div class="mb-3">
            <label>Tipo motor Ingles</label>
            <input type="text" name="tipoMotorEn" v-model="dataModels.tipoMotorEn" class="form-control">
          </div>
        </div>
        <div class="mb-3 d-flex flex-column">
          <label>Modelo</label>
          <select v-on:change="onModelChange">
            <option></option>
            <option>Naked</option>
            <option>Adventure</option>
            <option>Tour</option>
            <option>Sport</option>
          </select>
        </div>
        <div class="mb-3">
          <label>Precio</label>
          <input type="number" name="nombre" v-model="dataModels.precio" class="form-control" min="0">
        </div>
        <div class="mb-3">
          <label>Cv</label>
          <input type="number" name="cv" v-model="dataModels.cv" class="form-control" min="0">
        </div>
        <div class="mb-3">
          <label>Cc de cilindrada</label>
          <input type="number" name="cc" v-model="dataModels.cc" class="form-control" min="0">
        </div>
        <div class="mb-3">
          <label>Nm de par máx.</label>
          <input type="number" name="cc" v-model="dataModels.nm" class="form-control" min="0">
        </div>
        <div class="mb-3">
          <label>Mm de altura del asiento</label>
          <input type="number" name="alturaAsiento" v-model="dataModels.alturaAsiento" class="form-control" min="0" step="any">
        </div>
        <div class="mb-3">
          <label>Sonido motor</label>
          <input v-on:change="onSoundChange" type="file" name="sound" id="soundName" class="course form-control sound">
        </div>
        <div class="mb-3">
          <label >Imagen portada</label>
          <input v-on:change="onFileChange" type="file" name="image" id="fileName" class="course form-control imagen">
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

export default {
  name: "addModels",
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  data: function () {
    return {
      idioma: 'Español',
      dataModels: {
        nombreEs: '',
        nombreEn: '',
        previewTextoEs: '',
        previewTextoEn: '',
        textoEs: '',
        textoEn: '',
        destacadoEs: '',
        destacadoEn: '',
        enlace: '',
        tipoMotorEs: '',
        tipoMotorEn: '',
        modelo:'',
        precio: 0,
        cv: 0,
        cc: 0,
        nm: 0,
        alturaAsiento: 0,
        sonidoMotor: '',
        imagen: ''
      },
    }
  },
  mounted() {
    this.cambioIdioma()
    this.goUp();
  },
  methods: {
    cambioIdioma() {
      let that = this;
      $(".default_option").click(function () {
        $(this).parent().toggleClass("active");
      })

      $(".select_ul li").click(function () {
        var currentele = $(this).html();
        $(".default_option li").html(currentele);
        $(this).parents(".select_wrap").removeClass("active");
        that.idioma = $('.default_option li p')[0].textContent
      })
    },
    goUp() {
      window.scrollTo(0, 0);
    },
    validateEmptyInputs() {
      let valido = true;
      for (const item in this.dataModels) {
        if (this.dataModels[item] === '' || this.dataModels[item] <= 0) {
          valido = false;
          break;
        }
      }

      if (valido) {
        this.validateFileTypeImg()
      }else{
        alert('Debes rellenar todos los campos y no puede haber valores negativos')
      }
    },
    onSoundChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      this.dataModels.sonidoMotor = files[0]
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      this.dataModels.imagen = files[0]
    },
    onModelChange(e) {
      this.dataModels.modelo=e.target.value;
    },
    validateFileTypeImg() {
      var fileName = document.getElementById("fileName").value;
      var idxDot = fileName.lastIndexOf(".") + 1;
      var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
      if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
        this.validateFileTypeSound()
      } else {
        alert("Solo se aceptan extensiones jpg, jpeg, png")
      }
    },
    validateFileTypeSound() {
      var fileName = document.getElementById("soundName").value;
      var idxDot = fileName.lastIndexOf(".") + 1;
      var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
      if (extFile == "mp3") {
        this.addModel()
      } else {
        alert("Solo se aceptan extensiones mp3")
      }
    },
    async addModel() {
      let data = new FormData();


      data.append('nombreEs', this.dataModels.nombreEs)
      data.append('nombreEn', this.dataModels.nombreEn)
      data.append('previewTextoEs', this.dataModels.previewTextoEs)
      data.append('previewTextoEn', this.dataModels.previewTextoEn)
      data.append('textoEs', this.dataModels.textoEs)
      data.append('textoEn', this.dataModels.textoEn)
      data.append('destacadoEs', this.dataModels.destacadoEs)
      data.append('destacadoEn', this.dataModels.destacadoEn)
      data.append('enlace', this.dataModels.enlace)
      data.append('tipoMotorEs', this.dataModels.tipoMotorEs)
      data.append('tipoMotorEn', this.dataModels.tipoMotorEn)
      data.append('modelo', this.dataModels.modelo)
      data.append('precio', this.dataModels.precio)
      data.append('cv', this.dataModels.cv)
      data.append('cc', this.dataModels.cc)
      data.append('nm', this.dataModels.nm)
      data.append('alturaAsiento', this.dataModels.alturaAsiento)
      data.append('sonidoMotor', this.dataModels.sonidoMotor)
      data.append('imagen', this.dataModels.imagen)

      window.scrollTo(0, 0);
      $('.loading').show()
      try {
        let response = await fetch('http://localhost:8000/api/addModel', {
          method: 'POST',
          body: data
        });
        $('.loading').hide()

        if (response.ok) {
          setTimeout(function () {
            alert('Modelo insertado correctamente')
          }, 500);

          //Vaciar el formulario
     /*     $('input, textarea').each(function (index, input) {
            input.value=''
          })*/

    /*      this.dataModels = {
            nombreEs: '',
            nombreEn: '',
            previewTextoEs: '',
            previewTextoEn: '',
            textoEs: '',
            textoEn: '',
            destacadoEs: '',
            destacadoEn: '',
            enlace: '',
            precio: 0,
            cv: 0,
            cc: 0,
            nm: 0,
            alturaAsiento: 0,
            sonidoMotor: '',
            imagen: ''
          }*/
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
.containerModels{
  display: grid;
  max-width: 2000px;
  width: 100%;
  grid-template-areas:
    "header"
  "addModels"
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

.addModels {
  grid-area: addModels;
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