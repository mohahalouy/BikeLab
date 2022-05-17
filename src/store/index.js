import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nombreUser:'',
    authenticated:false,
    adminUser:false,
    idioma:'es',
    countItemsCart:0,
    arrayIdsCompra:[],
  },
  mutations: {
    SET_NOMBRE_USER(state,nombre){
      state.nombreUser = nombre
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
    }
  },
  actions: {},
  modules: {}
})
