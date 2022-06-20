<template>
  <div class="modelos">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="fullDisplayHeader">
      <FullDisplayHeader></FullDisplayHeader>
    </div>
    <div v-if="cargado" class="modelo">
      <a @click="$router.go(-1)" class="returnButton">
        <font-awesome-icon :icon="[ 'fas', 'arrow-left' ]" class="ml-2"/>
        {{$t('85')}}
      </a>
      <div class="containerImgPrice">
        <video v-if="this.dataModel.nombreEs==='BMW S 1000 RR 2021'" id="video1" loop autoplay muted="muted">
          <source
              :src="'http://127.0.0.1:8000/uploads/modelos/'+this.dataModel.nombreEs+'/'+this.dataModel.nombreEs+'Portada.mp4'"
              type="video/mp4">
        </video>
        <picture v-else class="w-100">
          <img class="img-fluid w-100"
               :src="'http://127.0.0.1:8000/uploads/modelos/'+this.dataModel.nombreEs+'/'+this.dataModel.nombreEs+'Portada.jpg'">
        </picture>
        <div class="precioModelo">
          <h5 v-if="idioma==='es'" class="font-weight-bold">{{ this.dataModel.nombreEs }}</h5>
          <h5 v-else class="font-weight-bold">{{ this.dataModel.nombreEn }}</h5>
          <h5>{{ $t('86') }}
            {{
              this.dataModel.precio.toLocaleString('es-Es', {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 2
              })
            }}
          </h5>
          <button class="btnAniadir" @click="addToCart">{{$t('76')}}</button>
        </div>
        <p class="textCondition">*{{$t('87')}}
        </p>
      </div>

      <div class="text-dark text-left w-80 textPreview">
        <h1 v-if="idioma==='es'" class="font-weight-bold">{{ this.dataModel.nombreEs }}</h1>
        <h1 v-else class="font-weight-bold">{{ this.dataModel.nombreEn }}</h1>
        <div>
          <h4 v-if="idioma==='es'" class="font-weight-bold">{{ this.dataModel.previewEs }}</h4>
          <h4 v-else class="font-weight-bold">{{ this.dataModel.previewEn }}</h4>
          <div class="textVideo">
            <div v-if="idioma==='es'">{{ this.dataModel.destacadoEs }}</div>
            <div v-else>{{ this.dataModel.destacadoEn }}</div>
            <iframe style="width: 40%;" height="315" :src="this.dataModel.enlace" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
            </iframe>
          </div>
          <div class="my-5">
            <div class="containerImgMotor">
              <img style="width: 100%;"
                   :src="'http://127.0.0.1:8000/uploads/modelos/'+this.dataModel.nombreEs+'/'+this.dataModel.nombreEs+'-1.jpg'">
              <div class="motorContainer">
                <div class="d-flex">
                  <div class="motorLeft">
                    <div>
                      <div class="letraMotor">
                        {{ this.dataModel.cv }}
                      </div>
                      <div>
                        {{$t('88')}}
                      </div>
                    </div>
                    <div>
                      <div class="letraMotor">
                        {{ this.dataModel.nm }}
                      </div>
                      <div>
                        {{$t('89')}}
                      </div>
                    </div>
                  </div>
                  <div class="motorCenter">
                    <svg version="1.1" class="animatedfacts__circleLeft" xmlns="http://www.w3.org/2000/svg" x="0px"
                         y="0px"
                         viewBox="0 0 51.1 250.9">
                      <line class="animatedfacts__circleLine" x1="50.8" y1="10.4" x2="33.5" y2="0.4"></line>
                      <line class="animatedfacts__circleLine" x1="45.1" y1="21" x2="27.2" y2="11.9"></line>
                      <line class="animatedfacts__circleLine" x1="39.9" y1="31.9" x2="21.6" y2="23.7"></line>
                      <line class="animatedfacts__circleLine" x1="35.3" y1="43" x2="16.6" y2="35.8"></line>
                      <line class="animatedfacts__circleLine" x1="31.3" y1="54.4" x2="12.2" y2="48.2"></line>
                      <line class="animatedfacts__circleLine" x1="27.8" y1="65.9" x2="8.5" y2="60.7"></line>
                      <line class="animatedfacts__circleLine" x1="25.0" y1="77.6" x2="5.5" y2="73.5"></line>
                      <line class="animatedfacts__circleLine" x1="22.8" y1="89.5" x2="3.1" y2="86.3"></line>
                      <line class="animatedfacts__circleLine" x1="21.3" y1="101.4" x2="1.4" y2="99.3"></line>
                      <line class="animatedfacts__circleLine" x1="20.3" y1="113.4" x2="0.3" y2="112.3"></line>
                      <line class="animatedfacts__circleLine" x1="0" y1="125.4" x2="20" y2="125.4"></line>
                      <line class="animatedfacts__circleLine" x1="0.3" y1="138.5" x2="20.3" y2="137.5"></line>
                      <line class="animatedfacts__circleLine" x1="1.4" y1="151.6" x2="21.3" y2="149.5"></line>
                      <line class="animatedfacts__circleLine" x1="3.1" y1="164.5" x2="22.8" y2="161.4"></line>
                      <line class="animatedfacts__circleLine" x1="5.5" y1="177.4" x2="25" y2="173.3"></line>
                      <line class="animatedfacts__circleLine" x1="8.5" y1="190.1" x2="27.8" y2="185"></line>
                      <line class="animatedfacts__circleLine" x1="12.2" y1="202.7" x2="31.3" y2="196.5"></line>
                      <line class="animatedfacts__circleLine" x1="16.6" y1="215" x2="35.3" y2="207.9"></line>
                      <line class="animatedfacts__circleLine" x1="21.6" y1="227.1" x2="39.9" y2="219"></line>
                      <line class="animatedfacts__circleLine" x1="27.2" y1="238.9" x2="45.1" y2="229.9"></line>
                      <line class="animatedfacts__circleLine" x1="33.5" y1="250.4" x2="50.8" y2="240.4"></line>
                    </svg>
                    <div>
                      <img class="img-fluid"
                           :src="'http://127.0.0.1:8000/uploads/modelos/'+this.dataModel.nombreEs+'/'+this.dataModel.nombreEs+'Motor.jpg'">
                    </div>
                    <svg version="1.1" class="animatedfacts__circleRight" xmlns="http://www.w3.org/2000/svg" x="0px"
                         y="0px"
                         viewBox="0 0 51.1 250.9">
                      <line class="animatedfacts__circleLine" x1="0" y1="10.4" x2="17.3" y2="0.4"></line>
                      <line class="animatedfacts__circleLine" x1="5.7" y1="21" x2="23.6" y2="11.9"></line>
                      <line class="animatedfacts__circleLine" x1="10.9" y1="31.9" x2="29.2" y2="23.7"></line>
                      <line class="animatedfacts__circleLine" x1="15.5" y1="43" x2="34.2" y2="35.8"></line>
                      <line class="animatedfacts__circleLine" x1="19.6" y1="54.4" x2="38.6" y2="48.2"></line>
                      <line class="animatedfacts__circleLine" x1="23" y1="65.9" x2="42.3" y2="60.7"></line>
                      <line class="animatedfacts__circleLine" x1="25.8" y1="77.6" x2="45.4" y2="73.5"></line>
                      <line class="animatedfacts__circleLine" x1="28" y1="89.5" x2="47.7" y2="86.3"></line>
                      <line class="animatedfacts__circleLine" x1="29.6" y1="101.4" x2="49.4" y2="99.3"></line>
                      <line class="animatedfacts__circleLine" x1="30.5" y1="113.4" x2="50.5" y2="112.3"></line>
                      <line class="animatedfacts__circleLine" x1="50.8" y1="125.4" x2="30.8" y2="125.4"></line>
                      <line class="animatedfacts__circleLine" x1="50.5" y1="138.5" x2="30.5" y2="137.5"></line>
                      <line class="animatedfacts__circleLine" x1="49.4" y1="151.6" x2="29.6" y2="149.5"></line>
                      <line class="animatedfacts__circleLine" x1="47.7" y1="164.5" x2="28" y2="161.4"></line>
                      <line class="animatedfacts__circleLine" x1="45.4" y1="177.4" x2="25.8" y2="173.3"></line>
                      <line class="animatedfacts__circleLine" x1="42.3" y1="190.1" x2="23" y2="185"></line>
                      <line class="animatedfacts__circleLine" x1="38.6" y1="202.7" x2="19.6" y2="196.5"></line>
                      <line class="animatedfacts__circleLine" x1="34.2" y1="215" x2="15.5" y2="207.9"></line>
                      <line class="animatedfacts__circleLine" x1="29.2" y1="227.1" x2="10.9" y2="219"></line>
                      <line class="animatedfacts__circleLine" x1="23.6" y1="238.9" x2="5.7" y2="229.9"></line>
                      <line class="animatedfacts__circleLine" x1="17.3" y1="250.4" x2="0" y2="240.4"></line>
                    </svg>
                  </div>
                  <div class="motorRight">
                    <div>
                      <div class="letraMotor">
                        {{ this.dataModel.cc }}
                      </div>
                      <div>
                        {{$t('90')}}
                      </div>
                    </div>
                    <div>
                      <div class="letraMotor">
                        {{ this.dataModel.alturaAsiento }}
                      </div>
                      <div>
                        {{$t('91')}}
                      </div>
                    </div>
                  </div>
                </div>
                <p v-if="idioma==='es'" class="text-center">{{ this.dataModel.tipoMotorEs }}</p>
                <p v-else class="text-center">{{ this.dataModel.tipoMotorEn }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="sonidoMotor">
          <div class="sonidoPotente">
            <div class="lineaMotor"></div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                 y="0px" viewBox="0 0 230 85" style="enable-background:new 0 0 230 85;" xml:space="preserve">
            <g>
            </g>
              <g>
              <g>
                <path
                    d="M68.4,70.5c0,0,0.7-0.3,2-0.8c1.3-0.5,3.2-1.2,5.6-2.1c2.4-0.9,5.3-2,8.6-3.3c3.3-1.3,7-2.7,11-4.2c1-0.4,1.9-0.7,2.9-1.1    c1-0.4,2-0.8,3-1.1c1-0.4,2-0.8,3.1-1.2c1-0.4,2.1-0.8,3.2-1.2c0.4-0.2,0.9-0.4,1.3-0.5c0.4-0.2,0.9-0.4,1.3-0.5    c0.4-0.2,0.8-0.3,1.2-0.5c0.4-0.2,0.8-0.3,1.1-0.5c0.4-0.2,0.7-0.3,1-0.5c0.3-0.2,0.7-0.3,1-0.5c0.3-0.2,0.6-0.3,0.8-0.5    c0.3-0.1,0.5-0.3,0.7-0.4c0.2-0.1,0.4-0.3,0.6-0.4c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.2,0.3-0.2c0.1-0.1,0.1-0.1,0.2-0.1    c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1-0.1c0,0,0-0.1-0.1-0.2c-0.1-0.1-0.1-0.2-0.3-0.3    c-0.1-0.1-0.3-0.2-0.5-0.4c-0.2-0.1-0.5-0.3-0.8-0.5c-0.3-0.2-0.7-0.3-1-0.5c-0.4-0.2-0.8-0.4-1.3-0.6c-0.5-0.2-0.9-0.4-1.5-0.6    c-0.5-0.2-1.1-0.4-1.6-0.6c-0.6-0.2-1.2-0.5-1.8-0.7c-0.6-0.2-1.2-0.5-1.9-0.7c-0.6-0.3-1.3-0.5-2-0.8c-0.7-0.3-1.4-0.5-2.1-0.8    c-0.7-0.3-1.4-0.6-2.1-0.9c-0.7-0.3-1.4-0.7-2.2-1c-0.7-0.4-1.4-0.7-2.2-1.1c-0.7-0.4-1.4-0.8-2.1-1.3c-0.3-0.2-0.7-0.5-1-0.7    c-0.3-0.2-0.6-0.5-0.9-0.7c-0.3-0.3-0.6-0.5-0.8-0.8c-0.3-0.3-0.5-0.5-0.7-0.8c-0.2-0.3-0.4-0.6-0.6-0.8c-0.2-0.3-0.3-0.6-0.5-0.9    c-0.1-0.3-0.2-0.6-0.3-0.9c-0.1-0.3-0.1-0.6-0.2-0.9c0-0.3,0-0.6,0-0.9c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.2-0.6,0.3-0.8    c0.1-0.3,0.3-0.5,0.4-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.2,0.4-0.5,0.6-0.7c0.2-0.2,0.4-0.5,0.7-0.7c0.2-0.2,0.5-0.4,0.7-0.7    c0.5-0.4,1-0.8,1.6-1.2c0.5-0.4,1.1-0.7,1.7-1.1c0.6-0.3,1.2-0.7,1.7-1c0.6-0.3,1.2-0.6,1.8-0.9c0.6-0.3,1.2-0.6,1.8-0.8    c0.6-0.3,1.2-0.5,1.8-0.8c0.6-0.2,1.2-0.5,1.8-0.7c0.6-0.2,1.2-0.5,1.8-0.7c0.3-0.1,0.6-0.2,0.9-0.3c0.3-0.1,0.6-0.2,0.9-0.3    c0.3-0.1,0.6-0.2,0.9-0.3c0.3-0.1,0.6-0.2,0.9-0.3c0.3-0.1,0.5-0.2,0.7-0.3c0.2-0.1,0.5-0.2,0.7-0.3c0.2-0.1,0.5-0.2,0.7-0.3    c0.2-0.1,0.5-0.2,0.7-0.3c0.5-0.2,1-0.3,1.4-0.5c0.5-0.2,0.9-0.3,1.4-0.5c0.5-0.2,0.9-0.3,1.4-0.5c0.5-0.2,0.9-0.3,1.3-0.5    c3.5-1.2,6.7-2.4,9.6-3.4c2.8-1,5.3-1.8,7.3-2.5c2-0.7,3.6-1.3,4.6-1.6c1.1-0.4,1.6-0.6,1.6-0.6l2.3,0.8c0,0-0.6,0.2-1.6,0.6    c-1.1,0.4-2.6,0.9-4.6,1.6c-2,0.7-4.4,1.6-7.2,2.6c-2.8,1-6,2.1-9.5,3.4c-0.4,0.2-0.9,0.3-1.3,0.5c-0.5,0.2-0.9,0.3-1.4,0.5    c-0.5,0.2-0.9,0.3-1.4,0.5c-0.5,0.2-0.9,0.3-1.4,0.5c-0.2,0.1-0.5,0.2-0.7,0.3c-0.2,0.1-0.5,0.2-0.7,0.3c-0.2,0.1-0.5,0.2-0.7,0.3    c-0.2,0.1-0.5,0.2-0.7,0.3c-0.3,0.1-0.5,0.2-0.8,0.3c-0.3,0.1-0.6,0.2-0.8,0.3c-0.3,0.1-0.6,0.2-0.8,0.3c-0.3,0.1-0.6,0.2-0.8,0.3    c-0.6,0.2-1.1,0.4-1.7,0.7c-0.6,0.2-1.1,0.5-1.7,0.7c-0.6,0.2-1.1,0.5-1.7,0.7c-0.6,0.3-1.1,0.5-1.7,0.8c-0.6,0.3-1.1,0.6-1.7,0.9    c-0.5,0.3-1.1,0.6-1.6,0.9c-0.5,0.3-1,0.7-1.5,1c-0.5,0.4-1,0.7-1.4,1.1c-0.2,0.2-0.4,0.4-0.7,0.6c-0.2,0.2-0.4,0.4-0.6,0.6    c-0.2,0.2-0.4,0.4-0.5,0.7c-0.2,0.2-0.3,0.5-0.5,0.7c-0.1,0.2-0.3,0.5-0.4,0.7c-0.1,0.2-0.2,0.5-0.3,0.8c-0.1,0.3-0.1,0.5-0.1,0.8    c0,0.3,0,0.5,0,0.8c0,0.3,0.1,0.5,0.1,0.8c0.1,0.3,0.2,0.5,0.3,0.8c0.1,0.3,0.3,0.5,0.4,0.8c0.2,0.3,0.4,0.5,0.6,0.8    c0.2,0.2,0.4,0.5,0.7,0.7c0.2,0.2,0.5,0.5,0.8,0.7c0.3,0.2,0.6,0.4,0.8,0.7c0.3,0.2,0.6,0.4,0.9,0.6c0.6,0.4,1.3,0.8,1.9,1.2    c0.7,0.4,1.3,0.7,2,1c0.7,0.3,1.4,0.6,2.1,0.9c0.7,0.3,1.4,0.6,2,0.9c0.7,0.3,1.4,0.5,2,0.8c0.7,0.3,1.3,0.5,2,0.8    c0.6,0.2,1.3,0.5,1.9,0.7c0.6,0.2,1.2,0.5,1.8,0.7c0.6,0.2,1.1,0.4,1.7,0.7c0.5,0.2,1.1,0.4,1.5,0.6c0.5,0.2,0.9,0.4,1.4,0.6    c0.4,0.2,0.8,0.4,1.2,0.6c0.4,0.2,0.7,0.4,1,0.5c0.3,0.2,0.5,0.3,0.7,0.5c0.2,0.1,0.4,0.3,0.5,0.4c0.1,0.1,0.2,0.2,0.3,0.3    c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2,0,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.1-0.1,0.2-0.2,0.3    c-0.1,0.1-0.2,0.2-0.4,0.4c-0.1,0.1-0.3,0.3-0.5,0.4c-0.2,0.2-0.4,0.3-0.7,0.5c-0.5,0.3-1.1,0.7-1.7,1.1c-0.7,0.4-1.4,0.7-2.2,1.1    c-0.8,0.4-1.6,0.8-2.5,1.1c-0.9,0.4-1.8,0.8-2.7,1.1c-1.1,0.4-2.1,0.8-3.2,1.2c-1,0.4-2.1,0.8-3.1,1.2c-1,0.4-2,0.8-3,1.2    c-1,0.4-2,0.8-2.9,1.1c-4,1.5-7.7,3-10.9,4.2c-3.3,1.3-6.2,2.4-8.6,3.3c-2.4,0.9-4.3,1.7-5.6,2.2c-1.3,0.5-2,0.8-2,0.8L68.4,70.5z    "></path>
                <path
                    d="M161.6,13.4l-2.4-0.8c0,0-0.5,0.2-1.5,0.6c-1,0.4-2.4,1-4.3,1.8c-1.9,0.8-4.1,1.7-6.8,2.8c-2.6,1.1-5.6,2.3-8.9,3.7    c-0.4,0.2-0.8,0.3-1.3,0.5c-0.4,0.2-0.8,0.4-1.3,0.5c-0.4,0.2-0.9,0.4-1.3,0.5c-0.4,0.2-0.9,0.4-1.3,0.6c-0.2,0.1-0.4,0.2-0.7,0.3    c-0.2,0.1-0.5,0.2-0.7,0.3c-0.2,0.1-0.5,0.2-0.7,0.3c-0.2,0.1-0.5,0.2-0.7,0.3c-0.2,0.1-0.4,0.2-0.6,0.3c-0.2,0.1-0.4,0.2-0.6,0.3    c-0.2,0.1-0.4,0.2-0.6,0.3c-0.2,0.1-0.4,0.2-0.6,0.3c-0.4,0.2-0.8,0.4-1.2,0.5c-0.4,0.2-0.7,0.4-1.1,0.6c-0.4,0.2-0.7,0.4-1,0.6    c-0.3,0.2-0.7,0.4-1,0.6c-0.3,0.2-0.6,0.4-0.9,0.6c-0.3,0.2-0.5,0.4-0.7,0.5c-0.2,0.2-0.4,0.4-0.6,0.5c-0.2,0.2-0.3,0.3-0.5,0.5    c-0.1,0.2-0.2,0.3-0.3,0.4c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.1,0,0.2,0,0.3c0,0.1,0.1,0.2,0.1,0.3c0.1,0.1,0.1,0.2,0.2,0.2    c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.2,0.7,0.4c0.2,0.1,0.4,0.2,0.6,0.3c0.2,0.1,0.5,0.2,0.8,0.3    c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.1,0.6,0.2,1,0.4c0.1,0,0.2,0.1,0.4,0.1c0.1,0,0.2,0.1,0.4,0.1c0.1,0,0.3,0.1,0.4,0.1    c0.1,0,0.3,0.1,0.4,0.1c0.5,0.2,1.1,0.4,1.7,0.5c0.6,0.2,1.2,0.4,1.8,0.6c0.6,0.2,1.3,0.4,1.9,0.6c0.7,0.2,1.3,0.4,2,0.6    c0.4,0.1,0.9,0.3,1.3,0.4c0.5,0.1,0.9,0.3,1.4,0.4c0.5,0.2,0.9,0.3,1.4,0.5c0.5,0.2,0.9,0.3,1.4,0.5c0.3,0.1,0.6,0.2,0.8,0.3    c0.3,0.1,0.6,0.2,0.8,0.3c0.3,0.1,0.6,0.2,0.8,0.3c0.3,0.1,0.6,0.2,0.9,0.3c0.8,0.3,1.6,0.6,2.3,1c0.8,0.4,1.5,0.7,2.3,1.1    c0.8,0.4,1.5,0.8,2.2,1.3c0.7,0.5,1.3,1,1.9,1.5c0.3,0.3,0.6,0.5,0.8,0.8c0.3,0.3,0.5,0.5,0.7,0.8c0.2,0.3,0.4,0.6,0.6,0.9    c0.2,0.3,0.3,0.6,0.5,0.9c0.1,0.3,0.2,0.6,0.3,0.9c0.1,0.3,0.1,0.6,0.2,0.9c0,0.3,0.1,0.6,0.1,0.9c0,0.3,0,0.6-0.1,0.9    c-0.1,0.6-0.3,1.1-0.5,1.7c-0.2,0.5-0.5,1.1-0.8,1.6c-0.3,0.5-0.7,1-1.1,1.5c-0.4,0.5-0.8,0.9-1.3,1.3c-0.5,0.4-0.9,0.9-1.4,1.3    c-0.5,0.4-1,0.8-1.5,1.2c-0.5,0.4-1.1,0.7-1.6,1.1c-0.5,0.4-1.1,0.7-1.6,1c-0.6,0.3-1.1,0.7-1.7,1c-0.6,0.3-1.1,0.6-1.7,0.9    c-0.6,0.3-1.1,0.6-1.7,0.9c-0.6,0.3-1.1,0.6-1.7,0.9c-0.1,0.1-0.3,0.1-0.4,0.2c-0.1,0.1-0.3,0.1-0.4,0.2c-0.2,0.1-0.3,0.1-0.5,0.2    c-0.2,0.1-0.3,0.1-0.5,0.2c-0.1,0.1-0.3,0.1-0.4,0.2c-0.1,0.1-0.3,0.1-0.4,0.2c-0.1,0.1-0.3,0.1-0.4,0.2c-0.1,0.1-0.3,0.1-0.4,0.2    c-0.3,0.1-0.5,0.2-0.8,0.4c-0.3,0.1-0.5,0.2-0.8,0.4c-0.3,0.1-0.5,0.2-0.8,0.4c-0.3,0.1-0.5,0.2-0.8,0.3c-0.5,0.2-1,0.5-1.5,0.7    c-0.5,0.2-1,0.4-1.5,0.7c-0.5,0.2-1,0.4-1.4,0.7c-0.5,0.2-0.9,0.4-1.4,0.6c-3.7,1.7-7.2,3.3-10.3,4.7c-3.1,1.4-5.8,2.7-8.1,3.7    c-2.3,1-4,1.8-5.2,2.4c-1.2,0.6-1.9,0.9-1.9,0.9l3.7,1.5c0,0,0.6-0.3,1.9-0.9c1.2-0.6,3-1.4,5.2-2.4c2.2-1,4.9-2.3,8-3.7    c3.1-1.4,6.5-3,10.2-4.7c0.5-0.2,0.9-0.4,1.4-0.7c0.5-0.2,0.9-0.4,1.4-0.7c0.5-0.2,1-0.4,1.4-0.7c0.5-0.2,1-0.5,1.5-0.7    c0.3-0.1,0.5-0.2,0.8-0.4c0.3-0.1,0.5-0.2,0.8-0.4c0.3-0.1,0.5-0.2,0.8-0.4c0.3-0.1,0.5-0.2,0.8-0.4c0.1-0.1,0.3-0.1,0.4-0.2    c0.1-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.3-0.1,0.4-0.2c0.2-0.1,0.3-0.2,0.5-0.2c0.2-0.1,0.3-0.2,0.5-0.2    c0.2-0.1,0.3-0.2,0.5-0.2c0.2-0.1,0.3-0.1,0.4-0.2c0.6-0.3,1.2-0.6,1.8-0.9c0.6-0.3,1.2-0.6,1.8-1c0.6-0.3,1.2-0.7,1.8-1    c0.6-0.3,1.2-0.7,1.7-1c0.6-0.4,1.1-0.7,1.7-1.1c0.6-0.4,1.1-0.8,1.7-1.2c0.5-0.4,1.1-0.8,1.6-1.3c0.5-0.4,1-0.9,1.5-1.4    c0.5-0.5,1-1,1.4-1.5c0.4-0.5,0.8-1,1.2-1.6c0.4-0.5,0.7-1.1,0.9-1.7c0.2-0.6,0.4-1.2,0.5-1.8c0-0.3,0.1-0.6,0.1-1    c0-0.3,0-0.7-0.1-1c0-0.3-0.1-0.7-0.2-1c-0.1-0.3-0.2-0.7-0.4-1c-0.2-0.3-0.3-0.7-0.5-1c-0.2-0.3-0.4-0.6-0.7-1    c-0.3-0.3-0.5-0.6-0.8-0.9c-0.3-0.3-0.6-0.6-0.9-0.9c-0.7-0.6-1.4-1.1-2.2-1.6c-0.8-0.5-1.6-1-2.4-1.4c-0.8-0.4-1.7-0.9-2.5-1.2    c-0.8-0.4-1.7-0.7-2.5-1.1c-0.3-0.1-0.6-0.2-0.8-0.3c-0.3-0.1-0.6-0.2-0.8-0.3c-0.3-0.1-0.6-0.2-0.8-0.3c-0.3-0.1-0.5-0.2-0.8-0.3    c-0.5-0.2-1-0.4-1.6-0.5c-0.5-0.2-1-0.3-1.5-0.5c-0.5-0.2-1-0.3-1.5-0.5c-0.5-0.2-1-0.3-1.4-0.4c-0.7-0.2-1.4-0.4-2.1-0.6    c-0.7-0.2-1.3-0.4-1.9-0.6c-0.6-0.2-1.2-0.4-1.8-0.5c-0.6-0.2-1.1-0.3-1.6-0.5c-0.2-0.1-0.4-0.1-0.5-0.2c-0.2-0.1-0.3-0.1-0.5-0.2    c-0.2-0.1-0.3-0.1-0.5-0.2c-0.2-0.1-0.3-0.1-0.5-0.2c-0.3-0.1-0.5-0.2-0.7-0.3c-0.2-0.1-0.4-0.2-0.6-0.2c-0.2-0.1-0.4-0.1-0.5-0.2    c-0.2-0.1-0.3-0.1-0.4-0.2c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2-0.1-0.2-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1,0-0.1-0.1    c0,0,0,0-0.1,0s0,0-0.1,0c0,0,0,0-0.1,0s0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0s0,0,0,0    c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0.1-0.2    c0-0.1,0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.3-0.3,0.5-0.5c0.2-0.2,0.4-0.3,0.6-0.5c0.2-0.2,0.5-0.3,0.8-0.5    c0.3-0.2,0.6-0.3,0.9-0.5c0.3-0.2,0.6-0.4,0.9-0.5c0.3-0.2,0.7-0.4,1-0.5c0.4-0.2,0.7-0.4,1.1-0.5c0.2-0.1,0.4-0.2,0.6-0.3    c0.2-0.1,0.4-0.2,0.6-0.3c0.2-0.1,0.4-0.2,0.6-0.3c0.2-0.1,0.4-0.2,0.6-0.3c0.2-0.1,0.5-0.2,0.7-0.3c0.2-0.1,0.5-0.2,0.7-0.3    c0.2-0.1,0.5-0.2,0.7-0.3c0.2-0.1,0.4-0.2,0.7-0.3c0.4-0.2,0.9-0.4,1.3-0.6c0.4-0.2,0.9-0.4,1.3-0.5c0.4-0.2,0.9-0.4,1.3-0.5    c0.4-0.2,0.8-0.3,1.2-0.5c3.3-1.4,6.2-2.6,8.8-3.7c2.6-1.1,4.9-2,6.7-2.8c1.8-0.8,3.3-1.4,4.3-1.8    C161.1,13.6,161.6,13.4,161.6,13.4"></path>
                <path
                    d="M111.8,68.2l-3.6-1.4L98,71.1l3.6,1.4L111.8,68.2 M129.7,60.5l-3.8-1.2c-0.5,0.2-0.9,0.4-1.4,0.7c-0.5,0.2-1,0.5-1.5,0.7    c-0.5,0.2-1.1,0.5-1.6,0.7c-0.6,0.2-1.1,0.5-1.7,0.7l-3.2,1.4l3.6,1.4l3.2-1.4c0.6-0.3,1.2-0.5,1.8-0.8c0.6-0.3,1.1-0.5,1.7-0.8    c0.5-0.2,1.1-0.5,1.6-0.7C128.7,60.9,129.2,60.7,129.7,60.5 M140.9,51l-4.8-0.1c-0.1,0.3-0.2,0.7-0.4,1.1    c-0.2,0.4-0.4,0.7-0.8,1.1c-0.3,0.4-0.7,0.8-1.2,1.2c-0.5,0.4-1.1,0.9-1.7,1.3l4.3,0.9c0.7-0.5,1.4-1,1.9-1.5c0.5-0.5,1-1,1.4-1.4    c0.4-0.5,0.7-0.9,0.9-1.4C140.7,51.9,140.9,51.4,140.9,51 M129.8,42l-3.4,1.3c0.8,0.3,1.6,0.6,2.4,0.9c0.8,0.3,1.5,0.6,2.1,1    c0.7,0.3,1.3,0.7,1.8,1c0.6,0.3,1.1,0.7,1.5,1l4.3-0.8c-0.5-0.4-1.1-0.8-1.8-1.2c-0.7-0.4-1.4-0.8-2.1-1.1    c-0.7-0.4-1.5-0.7-2.4-1.1C131.5,42.6,130.7,42.3,129.8,42 M112.9,35.6l-3.9,1c0.5,0.3,1,0.5,1.5,0.8c0.5,0.3,1.1,0.5,1.7,0.7    c0.6,0.2,1.2,0.5,1.8,0.7c0.6,0.2,1.2,0.5,1.9,0.7c0.2,0.1,0.4,0.2,0.7,0.2c0.2,0.1,0.4,0.2,0.7,0.2c0.2,0.1,0.4,0.2,0.7,0.2    c0.2,0.1,0.4,0.2,0.7,0.2l3.2-1.3c-0.2-0.1-0.4-0.2-0.7-0.2c-0.2-0.1-0.4-0.2-0.6-0.2c-0.2-0.1-0.4-0.1-0.6-0.2    c-0.2-0.1-0.4-0.2-0.6-0.2c-0.6-0.2-1.2-0.4-1.8-0.7c-0.6-0.2-1.1-0.4-1.6-0.7c-0.5-0.2-1-0.4-1.5-0.7    C113.8,36,113.3,35.8,112.9,35.6 M111.7,28l-4.1-0.7c-0.6,0.5-1.2,0.9-1.6,1.4c-0.4,0.5-0.8,0.9-1,1.3c-0.2,0.4-0.4,0.9-0.4,1.3    c-0.1,0.4,0,0.8,0.1,1.2l4.6-0.3c-0.1-0.3-0.1-0.6-0.1-1c0-0.3,0.1-0.7,0.3-1c0.2-0.4,0.5-0.7,0.8-1.1    C110.7,28.8,111.2,28.4,111.7,28 M125.9,21.3l-3.3-1.1l-2.8,1.1c-0.6,0.2-1.1,0.4-1.7,0.7c-0.5,0.2-1.1,0.4-1.6,0.6    c-0.5,0.2-1,0.4-1.5,0.6c-0.5,0.2-0.9,0.4-1.4,0.6l3.6,1c0.4-0.2,0.8-0.4,1.3-0.6c0.4-0.2,0.9-0.4,1.4-0.6c0.5-0.2,1-0.4,1.5-0.6    c0.5-0.2,1.1-0.4,1.6-0.6L125.9,21.3 M141.9,15.2l-3.3-1.1l-8.8,3.4l3.3,1.1L141.9,15.2"></path>
                <polyline points="93.3,76 89.7,74.6 84.2,76.9 87.8,78.3 93.3,76   "></polyline>
                <polyline points="153.4,10.7 148.9,12.5 145.7,11.4 150.2,9.7 153.4,10.7   "></polyline>
              </g>
            </g>
          </svg>
            <div class="lineaMotor"></div>
          </div>
          <h2 class="text-center">{{$t('92')}}</h2>
          <div class="position-relative d-flex justify-content-end w-100">
            <img style="width: 100%;"
                 :src="'http://127.0.0.1:8000/uploads/modelos/'+this.dataModel.nombreEs+'/'+this.dataModel.nombreEs+'-2.jpg'">
            <div class="botonArrancar" @click="arrancarMotor">
              <span>{{$t('93')}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="modelo">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <Footer class="footer"></Footer>
    <audio v-if="cargado" style="display: none" id="sonidoMotor"
           :src="'http://127.0.0.1:8000/uploads/modelos/sonidoMotor/'+this.dataModel.sonidoMotor" controls>
    </audio>
  </div>
</template>

<script>
import HeaderPrincipal from "../components/HeaderPrincipal";
import FullDisplayHeader from "../components/FullDisplayHeader";
import Footer from "../components/Footer";
import $ from "jquery";
import {mapState} from "vuex";

export default {
  name: "Modelo",
  computed: mapState([
    'idioma'
  ]),
  components: {
    HeaderPrincipal,
    FullDisplayHeader,
    Footer
  },
  data: function () {
    return {
      dataModel: [],
      cargado: false
    }
  },
  mounted() {
    this.getModel();
    this.goUp();
  },
  methods: {
    async getModel() {
      let response = await fetch('http://localhost:8000/api/modelo?id=' + this.$route.query.id, {
        headers: {"Accept": "application/json", 'Content-Type': 'application/json'}
      })

      let content = await response.json()

      this.dataModel = content[0]
      this.cargado = true
    },
    goUp() {
      $('html, body').animate({scrollTop: 0}, 500);
    },
    arrancarMotor() {
      $('.botonArrancar').toggleClass('scaleButton')
      if ($('.botonArrancar').hasClass('scaleButton')) {
        $('.botonArrancar').find('span').html(this.$t('116'))
        $('#sonidoMotor')[0].play()
      }else if (!$('.botonArrancar').hasClass('scaleButton')) {
        $('.botonArrancar').find('span').html(this.$t('93'))
        $('#sonidoMotor')[0].pause()
      }

      let that = this;
      $('#sonidoMotor').on('ended', function () {
        $('.botonArrancar').find('span').html(that.$t('93'))
        $('.botonArrancar').removeClass('scaleButton')
      });
    },
    addToCart() {
      let existe=false;
      for (const item in this.$store.state.arrayIdsCompra) {
        console.log(parseInt(this.$route.query.id))
        if (parseInt(this.$route.query.id) === parseInt(this.$store.state.arrayIdsCompra[item].id) && this.$store.state.arrayIdsCompra[item].tipoArticulo === 'modelos') {
          existe = true;
          this.$store.state.arrayIdsCompra[item].cantidad ++;
        }
      }
      if (!existe) {
        this.$store.commit('ADD_ITEMS_CART_ID', {id: parseInt(this.$route.query.id) , cantidad: 1, tipoArticulo: 'modelos'})
      }
      this.$store.commit('SET_ITEMS_CART_COUNT', (this.$store.state.arrayIdsCompra).length)
      localStorage.setItem("arrayIds", JSON.stringify(this.$store.state.arrayIdsCompra));
    }

  },

}
</script>

<style scoped>
.modelos {
  display: grid;
  max-width: 2000px;
  width: 100%;
  grid-template-areas:
    "header"
  "modelo"
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

.modelo {
  grid-area: modelo;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modelo video {
  height: 100%;
  width: 100%;
}

.modelo .containerImgPrice {
  position: relative;
  display: flex;
  width: 100%;
}

.w-80{
  width: 80%;
}

.modelo .textCondition {
  color: white;
  position: absolute;
  left: 0;
  max-width: 50%;
  bottom: 0;
  text-align: left;
  padding: 10px;
}

.precioModelo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  background: rgba(22, 23, 26, 0.8);
  width: 30%;
  height: 100%;
  top: 0;
  right: 0;
  color: white;
  text-align: left;
  padding: 0 20px;
}

.textPreview h1 {
  font-size: 60px;
}

.textVideo {
  display: flex;
  justify-content: space-between;
}

.textVideo > div {
  width: 40%;
}

.motorContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50px;
  width: 100%;
  color: darkred;
}

.motorLeft {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.motorCenter {
  display: flex;
  margin: 0 20px;
  align-items: center;
}

.motorCenter > div {
  max-width: 300px;
  height: fit-content;
  display: flex;
}

.motorCenter svg {
  width: 70px;
}

.motorCenter svg line {
  fill: none;
  stroke: rgba(22, 23, 26, 0.5);
  stroke-miterlimit: 10;
}

.motorRight {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.letraMotor {
  font-weight: bold;
  border-bottom: 1px solid;
  font-size: 60px;
}

.sonidoMotor {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.sonidoPotente {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.sonidoPotente svg {
  width: 20%;
  height: fit-content;
}

.lineaMotor {
  height: 3px;
  background-color: black;
  width: 25%;
}

.sonidoMotor h2 {
  font-size: 40px;
  line-height: 50px;
  font-weight: bold;
  color: black;
}

.botonArrancar {
  cursor: pointer;
  position: absolute;
  left: 75%;
  top: 60%;
  border: 0;
  border-radius: 50%;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 200px;
  height: 200px;
  color: gray;
  transition: transform 1s, color 1s;
}

.scaleButton {
  transform: scale(0.9);
  color: black;
}

.btnAniadir {
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 10px 0px;
  transition: background-color 2s ease, border 2s ease;
}

.btnAniadir:hover {
  background-color: red;
  border: solid 1px transparent;
  transition: background-color 2s ease, border 2s ease;
}

.containerImgMotor {
  position: relative;
  display: flex;
  justify-content: center;
}

.returnButton{
  text-decoration: none;
  font-size: 1.4em;
  cursor: pointer;
  color: darkred;
}

@media (max-width: 600px) {
  .botonArrancar {
    width: 32%;
    height: 34%;
    left: 64%;
    top: 58%;
    font-size: 17px;
  }
}


@media (min-width: 600px) and (max-width: 1000px) {
  .botonArrancar {
    width: 30%;
    height: 32%;
    left: 68%;
    top: 60%;
  }
}

@media (max-width: 900px) {
  .textVideo {
    flex-direction: column-reverse;
    width: 100%;
  }

  .textVideo > div {
    width: 100%;
  }

  .textVideo > iframe {
    width: 100% !important;
    margin-bottom: 40px;
  }
}

@media (max-width: 1000px) {
  .motorContainer {
    position: relative;
  }

  .containerImgMotor {
    flex-direction: column;
  }

  .sonidoMotor h2 {
    font-size: 30px;
  }

  .letraMotor {
    font-size: 30px;
  }

  .textPreview h1 {
    font-size: 40px;
  }

  .modelo .textCondition {
    display: none;
  }

  .modelo .containerImgPrice {
    flex-direction: column;
  }

  .precioModelo {
    position: relative;
    width: 100%;
    padding: 20px;
  }
}

@media (min-width: 1000px) and (max-width: 1300px) {
  .motorContainer {
    width: 90%;
    justify-content: center;
  }
}


</style>