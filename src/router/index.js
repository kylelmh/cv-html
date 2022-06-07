import { createRouter, createWebHistory } from 'vue-router'
import CV from '../views/CV.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "cv",
      component: CV,
    },
    {
      path: "/letter",
      name: "letter",
      component: () => import("../views/CoverLetter.vue"),
    },
  ]
})

export default router