import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Notes from '../views/Notes.vue'
import New from '../views/New.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/notes', component: Notes },
  { path: '/new', component: New },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})