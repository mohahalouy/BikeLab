import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nombreUser:'',
    authenticated:false,
    adminUser:false
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
    }
  },
  actions: {},
  modules: {}
})
