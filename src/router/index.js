import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import TaskList from '@/pages/TaskList.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/tasks', name: 'TaskList', component: TaskList }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
