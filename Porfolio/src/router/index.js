import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '@/views/ProjectsView.vue'
import AboutView from "@/views/AboutView.vue";
import ProjectDetailsView from "@/views/ProjectDetailsView.vue";
import ImprintView from "@/views/ImprintView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectView
    },
    {
      path: '/projects/:name',
      name: 'projects-:name',
      component: ProjectDetailsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },

    {
      path: '/imprint',
      name: 'imprint',
      component: ImprintView
    },
  ]
})

export default router
