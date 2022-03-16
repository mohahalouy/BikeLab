<template>
  <div  v-if="authenticated" class="containerNews d-flex justify-content-center">
    <form @submit.prevent="validateEmptyInputs">
      <div class="mb-3">
        <label for="">Titulo</label>
        <input type="text" name="titulo" v-model="dataNews.titulo" class="form-control">
      </div>
      <div class="mb-3">
        <label for="">Fecha</label>
        <input type="date" id="fecha" name="trip-start" v-model="dataNews.fecha" class="form-control">
      </div>
      <div class="mb-3">
        <label for="">Preview texto</label>
        <input type="text" name="preText" v-model="dataNews.previewTexto" class="form-control">
      </div>
      <div class="mb-3">
        <label for="">Texto</label>
        <textarea name="texto" v-model="dataNews.texto" class="form-control" rows="5"></textarea>
      </div>
      <div class="mb-3">
        <label for="">Upload Image</label>
        <input type="file" name="image" id="fileName" class="course form-control imagen">
      </div>
      <div class="d-flex mb-3" style="justify-content: space-evenly">
        <router-link class="btn btn-secondary" to="/">Volver Home</router-link>
        <button type="submit" class="btn btn-primary">Guardar</button>
      </div>

    </form>
    <div class="containerLoading">
      <div class="wrapper">
        <span class="circle circle-1 mx-2"></span>
        <span class="circle circle-2 mx-2"></span>
        <span class="circle circle-3 mx-2"></span>
        <span class="circle circle-4 mx-2"></span>
        <span class="circle circle-5 mx-2"></span>
        <span class="circle circle-6 mx-2"></span>
        <span class="circle circle-7 mx-2"></span>
        <span class="circle circle-8 mx-2"></span>
      </div>
    </div>

  </div>

</template>

<script>

import $ from "jquery";
import {mapState} from "vuex";

export default {
  name: "AddNews",
  computed: mapState([
    'nombreUser',
    'authenticated',
    'adminUser'
  ]),
  data: function () {
    return {
      dataNews: {
        titulo: '',
        fecha: '',
        previewTexto:'',
        texto: '',
        imagen:''
      },
    }
  },
  methods: {
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
    validateEmptyInputs(){
      let valido=true;
      $('input, textarea').each(function (index, input) {
        if(input.value===''){
          valido=false;
          return false;
        }
      })

      if(valido){
        this.validateFileType()
      }else{
        alert('Debes rellenar todos los campos')
      }
    },
    async addNews() {
      let data = new FormData();
      let file = $('.imagen')[0].files[0];

      data.append('titulo', this.dataNews.titulo)
      data.append('previewTexto', this.dataNews.previewTexto)
      data.append('texto', this.dataNews.texto)
      data.append('fecha', this.dataNews.fecha)

      data.append('imagen', file)


      $('.containerLoading').show()
      try {
        let response = await fetch('http://localhost:8000/api/addNews', {
          method: 'POST',
          body: data
        });
        $('.containerLoading').hide()

        if (response.ok) {
          setTimeout(function () {
            alert('Noticia insertada correctamente')
          }, 500);

          //Vaciar el formulario
          $('input, textarea').each(function (index, input) {
            input.value=''
          })

          this.dataNews = {
            titulo: '',
            fecha: '',
            previewTexto: '',
            texto: '',
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
  background: url('../assets/multistrada.jpg');
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;
}

input[type='file']{
  padding: 0;
  height: fit-content;
}

</style>