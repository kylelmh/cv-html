import { createRouter, createWebHistory } from 'vue-router'

const CV = () => import('../views/CV.vue')
// const CoverLetter = () => import ('../views/CoverLetter.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "cv",
      component: CV,
    },
    // {
    //   path: "/letter",
    //   name: "letter",
    //   component: CoverLetter
    // },
  ]
})

export default router