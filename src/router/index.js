import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Modelos from '../views/Modelos'
import addNews from '../views/addNews'
import addModels from '../views/addModels'
import Noticias from '../views/Noticias'
import Modelo from '../views/Modelo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/modelos',
    name: 'modelos',
    component: Modelos
  },
  {
    path: '/addNews',
    name: 'addNews',
    component: addNews
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: Noticias
  },
  {
    path: '/addModels',
    name: 'addModels',
    component: addModels
  },
  {
    path: '/modelo',
    name: 'Modelo',
    component: Modelo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
