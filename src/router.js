import { createRouter, createWebHistory } from 'vue-router'
import postView from './views/postView.vue'
import displayView from './views/displayView.vue'

const routes = [
  {
    path: '/postview',
    name: 'postView',
    component: postView
  },
  {
    path: '/displayview',
    name: 'displayView',
    component: displayView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router