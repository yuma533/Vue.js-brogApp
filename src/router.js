import { createRouter, createWebHistory } from 'vue-router'
import postView from './components/postView.vue'

const routes = [
  {
    path: '/postview',
    name: 'postView',
    component: postView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router