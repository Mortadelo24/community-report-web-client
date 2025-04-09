import {createRouter,createWebHashHistory } from 'vue-router'


import HomePage from '../views/HomePage.vue'
import {authRoutes} from './auth.ts'

const routes = [
  
  {path: '/', name: 'home', component: HomePage},
  {
    path: '/community/:id', 
    name: 'community',
    component: ()=> import('../views/ComunnityPage.vue'),
    props: true
  },
  {
    path: '/auth',
    component: () => import('../views/AuthPage.vue'),
    children: [
      ...authRoutes
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: ()=> import('../views/NotFound.vue'),
    props: true
  }

]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),

})


export {
  router
}
