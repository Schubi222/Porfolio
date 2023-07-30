import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '@/views/ProjectsView.vue'
import AboutView from "@/views/AboutView.vue";
import ProjectDetailsView from "@/views/ProjectDetailsView.vue";
import ImprintView from "@/views/ImprintView.vue";
import VueProjectView from "@/views/VueProjectView.vue";
import VueCalculator from "@/components/VueProjectComponents/VueCalculator.vue";
import VueMathQuiz from "@/components/VueProjectComponents/VueMathQuiz.vue";
import VueBMICalculator from "@/components/VueProjectComponents/VueBMICalculator.vue";
import VueAgeCalculator from "@/components/VueProjectComponents/VueAgeCalculator.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import data from "@/assets/Data/projects.json"

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
      path: '/projects/:project_name',
      name: 'projects-:project_name',
      component: ProjectDetailsView,
      props:true,
      beforeEnter(to, from, next){
        const exists = data.projects.find(project => project.link === to.params.project_name)
        if (exists){
          next()
        }else {
          next(
            { name: "projects" }
          )

        }
      }
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

    {
      path: '/vue-projects',
      name: 'vue-projects',
      component: VueProjectView,
      children:[
        {
          path: 'calculator',
          name: 'calculator',
          component: VueCalculator
        },
        {
          path: 'math-quiz',
          name: 'math-quiz',
          component: VueMathQuiz
        },
        {
          path: 'BMI',
          name: 'BMI',
          component: VueBMICalculator
        },
        {
          path: 'Age',
          name: 'Age',
          component: VueAgeCalculator
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component:NotFoundView
    }
  ]
})

export default router
