import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Modelos from '../views/Modelos'
import addNews from '../views/addNews'
import addModels from '../views/addModels'
import addClothing from '../views/addClothing'
import Noticia from '../views/Noticia'
import Noticias from '../views/Noticias'
import Equipamientos from '../views/Equipamientos'
import Equipamiento from '../views/Equipamiento'
import Modelo from '../views/Modelo'
import Cesta from '../views/Cesta'

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
    path: '/noticia',
    name: 'Noticia',
    component: Noticia
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: Noticias
  },
  {
    path: '/equipamientos',
    name: 'Equipamientos',
    component: Equipamientos
  },
  {
    path: '/equipamiento/:id/:nombreProducto',
    name: 'Equipamiento',
    component: Equipamiento
  },
  {
    path: '/addModels',
    name: 'addModels',
    component: addModels
  },
  {
    path: '/addClothing',
    name: 'addClothing',
    component: addClothing
  },
  {
    path: '/modelo',
    name: 'Modelo',
    component: Modelo
  },
  {
    path: '/cesta',
    name: 'Cesta',
    component: Cesta
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
