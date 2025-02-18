import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Registrar_1 from '../modules/registro/views/Registrar_1.vue'
import ListaDeTareas from '../views/tareas/ListaDeTareas.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView,
  // },
  {
    path: '/tareas',
    name: 'tareas',
    component: ListaDeTareas,
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: Registrar_1,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
