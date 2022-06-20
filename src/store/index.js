import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datosUsuarioCargados:false,
    nombreUser:'',
    emailUser:'',
    idUser:'',
    authenticated:false,
    adminUser:false,
    idioma:'es',
    countItemsCart:0,
    arrayIdsCompra:[],
    compraConfirmada:false,
    entregaDomicilio:'',
    totalCesta:0,
  },
  mutations: {
    SET_DATOS_CARGADOS(state, cargados) {
      state.datosUsuarioCargados = cargados
    },
    SET_NOMBRE_USER(state, nombre) {
      state.nombreUser = nombre
    },
    SET_ID_USER(state, id) {
      state.idUser = id
    },
    SET_EMAIL_USER(state,email){
      state.emailUser = email
    },
    SET_AUTH(state, auth) {
      state.authenticated = auth
    },
    SET_ADMIN(state, admin){
      state.adminUser=admin
    },
    SET_IDIOMA(state, idioma){
      state.idioma=idioma
    },
    ADD_ITEMS_CART_ID(state, id) {
      state.arrayIdsCompra.push(id);
    },
    SET_ITEMS_CART_ID(state, arrayIds) {
      state.arrayIdsCompra = arrayIds;
    },
    SET_ITEMS_CART_COUNT(state, count) {
      state.countItemsCart = count;
    },
    SET_COMPRA_CONFIRMADA(state, compraConfirmada) {
      state.compraConfirmada = compraConfirmada;
    },
    SET_TIPO_ENTREGA(state, tipoEntrga) {
      state.entregaDomicilio = tipoEntrga;
    },
    SET_TOTAL_CESTA(state, precio) {
      state.totalCesta = precio;
    }
  },
  actions: {},
  modules: {}
})
