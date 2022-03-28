import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Modelos from '../views/Modelos'
import addNews from '../views/addNews'
import addModels from '../views/addModels'
import Noticias from '../views/Noticias'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
