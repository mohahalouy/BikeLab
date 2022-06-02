<template>
  <div class="containerModels">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <div class="addModels">
      <div class="listaIdiomas text-dark">
        <div class="title">
          {{$t('5')}}
        </div>
        <div class="select_wrap">
          <ul class="default_option">
            <li>
              <div class="option español">
                <div class="icon">
                  <img src="http://127.0.0.1:8000/uploads/imgStatic/banderaEspaña.png" alt="Español">
                </div>
                <p>{{$t('41')}}</p>
              </div>
            </li>
          </ul>
          <ul class="select_ul">
            <li>
              <div class="option español">
                <div class="icon">
                  <img src="http://127.0.0.1:8000/uploads/imgStatic/banderaEspaña.png" alt="Español">
                </div>
                <p>{{$t('41')}}</p>
              </div>
            </li>
            <li>
              <div class="option ingles">
                <div class="icon">
                  <img src="http://127.0.0.1:8000/uploads/imgStatic/banderaInglaterra.png" alt="Inglés">
                </div>
                <p>{{$t('42')}}</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
      <form @submit.prevent="validateEmptyInputs">
        <div v-if="this.idioma==='Español'">
          <div class="mb-3">
            <label>{{$t('43')}}</label>
            <input type="text" name="nombre" v-model="dataModels.nombreEs" class="form-control">
          </div>
          <div class="mb-3">
            <label>{{$t('53')}}</label>
            <input type="text" name="previewTexto" v-model="dataModels.previewTextoEs" class="form-control">
          </div>
          <div class="mb-3">
            <label>{{$t('54')}}</label>
            <textarea name="textModelo" v-model="dataModels.textoEs" class="form-control" rows="5"></textarea>
          </div>
          <div class="mb-3">
            <label>{{$t('55')}}</label>
            <textarea name="destacado" v-model="dataModels.destacadoEs" class="form-control" rows="5"></textarea>
          </div>
          <div class="mb-3">
            <label>{{$t('58')}}</label>
            <input type="text" name="enlace" v-model="dataModels.enlace" class="form-control">
          </div>
          <p>{{$t('56')}}</p>
          <div class="mb-3">
            <label>{{$t('57')}}</label>
            <input type="text" name="tipoMotorEs" v-model="dataModels.tipoMotorEs" class="form-control">
          </div>
        </div>
        <div v-else>
          <div class="mb-3">
            <label>{{$t('43')}}</label>
            <input type="text" name="nombre" v-model="dataModels.nombreEn" class="form-control">
          </div>
          <div class="mb-3">
            <label>{{$t('53')}}</label>
            <input type="text" name="previewTexto" v-model="dataModels.previewTextoEn" class="form-control">
          </div>
          <div class="mb-3">
            <label>{{$t('54')}}</label>
            <textarea name="textModelo" v-model="dataModels.textoEn" class="form-control" rows="5"></textarea>
          </div>
          <div class="mb-3">
            <label>{{$t('55')}}</label>
            <textarea name="destacado" v-model="dataModels.destacadoEn" class="form-control" rows="5"></textarea>
          </div>
          <div class="mb-3">
            <label>{{$t('58')}}</label>
            <input type="text" name="enlace" v-model="dataModels.enlace" class="form-control">
          </div>
          <p>{{$t('56')}}</p>
          <div class="mb-3">
            <label>{{$t('57')}}</label>
            <input type="text" name="tipoMotorEn" v-model="dataModels.tipoMotorEn" class="form-control">
          </div>
        </div>
        <div class="mb-3 d-flex flex-column">
          <label>{{$t('1')}}</label>
          <select v-on:change="onModelChange" class="selectTypeModel">
            <option></option>
            <option>Naked</option>
            <option>Adventure</option>
            <option>Tour</option>
            <option>Sport</option>
          </select>
        </div>
        <div class="mb-3">
          <label>{{$t('49')}}</label>
          <input type="number" name="nombre" v-model="dataModels.precio" class="form-control" min="0" step="any">
        </div>
        <div class="mb-3">
          <label>Cv</label>
          <input type="number" name="cv" v-model="dataModels.cv" class="form-control" min="0" step="any">
        </div>
        <div class="mb-3">
          <label>{{$t('59')}}</label>
          <input type="number" name="cc" v-model="dataModels.cc" class="form-control" min="0" step="any">
        </div>
        <div class="mb-3">
          <label>{{$t('60')}}</label>
          <input type="number" name="cc" v-model="dataModels.nm" class="form-control" min="0" step="any">
        </div>
        <div class="mb-3">
          <label>{{$t('61')}}</label>
          <input type="number" name="alturaAsiento" v-model="dataModels.alturaAsiento" class="form-control" min="0" step="any">
        </div>
        <div class="mb-3">
          <label>{{$t('62')}}</label>
          <input v-on:change="onSoundChange" type="file" name="sound" id="soundName" class="course form-control sound">
        </div>
        <div class="mb-3">
          <label >{{$t('50')}}</label>
          <input v-on:change="onFileChange" type="file" name="image" id="fileName" class="course form-control imagen">
        </div>
        <div class="d-flex mb-3" style="justify-content: space-evenly">
          <router-link class="btn btn-secondary" to="/">{{$t('51')}}</router-link>
          <button type="submit" class="btn btn-primary">{{$t('52')}}</button>
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
import i18n from "../i18n";

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
        that.idioma=$('.default_option .icon img')[0].alt
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
        if (i18n.locale === 'es')
          alert('Debes rellenar todos los campos y no puede haber valores negativos')
        else
          alert('You must fill in all the fields and there can be no negative values')
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
        if (i18n.locale === 'es')
          alert("Solo se aceptan extensiones mp3")
        else
          alert('Only mp3 extensions are accepted')

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
      $('body').addClass('noScrollBody')
      try {
        let response = await fetch('http://localhost:8000/api/addModel', {
          method: 'POST',
          body: data
        });
        $('.loading').hide()
        $('body').removeClass('noScrollBody')

        if (response.ok) {
          setTimeout(function () {
            if (i18n.locale === 'es')
              alert('Modelo insertado correctamente')
            else
              alert('Model inserted correctly')

          }, 500);

          //Vaciar el formulario
          $('input, textarea').each(function (index, input) {
            input.value=''
          })

          $(".selectTypeModel").val($(".selectTypeModel option:first").val());

          this.dataModels = {
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
          }

        } else {
          setTimeout(function () {
            if (i18n.locale === 'es')
              alert('Error, intentelo mas tarde')
            else
              alert('Error, try again later')
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
  background: url('http://127.0.0.1:8000/uploads/imgStatic/multistrada.jpg');
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