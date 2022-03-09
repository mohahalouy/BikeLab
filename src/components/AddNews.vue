<template>
  <div class="w-50 text-dark">
    <form @submit.prevent="addNews">
      <div class="mb-3">
        <label for="">Titulo</label>
        <input type="text" name="name" v-model="dataNews.titulo" class="form-control">
      </div>
      <div class="mb-3">
        <label for="">Fecha</label>
        <input type="text" name="name" v-model="dataNews.fecha" class="form-control">
      </div>
      <div class="mb-3">
        <label for="">Texto</label>
        <input type="text" name="name" v-model="dataNews.texto" class="form-control">
      </div>
      <div class="mb-3">
        <label for="">Upload Image</label>
        <input type="file" name="image" id="imagen" class="course form-control imagen">
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-primary">Save</button>
      </div>

    </form>
  </div>

</template>

<script>

import $ from "jquery";

export default {
  name: "AddNews",
  data: function () {
    return {
      dataNews: {
        titulo: '',
        fecha: '',
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
        return true
      } else {
        return false
      }
    },
    async addNews() {
      let data = new FormData();
      let file = $('.imagen')[0].files[0];

      data.append('titulo',this.dataNews.titulo)
      data.append('texto',this.dataNews.texto)
      data.append('fecha',this.dataNews.fecha)

      data.append('imagen',file)

      await fetch('http://localhost:8000/api/addNews', {
        method: 'POST',
        body: data
      });

    }
  }
}
</script>

<style scoped>

</style>