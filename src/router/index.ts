import {createRouter,createWebHashHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import {authRoutes} from './auth.ts'
import {useAuthStore} from '../stores/auth.ts'



const routes = [
  
  {
    path: '/', 
    name: 'home',
    component: HomePage,
    meta: {requiresAuth: true}

  },
  {
    path: '/community/:id', 
    name: 'community',
    component: ()=> import('../views/ComunnityPage.vue'),
    props: true,
    meta: {requiresAuth: true}
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

router.beforeEach(async(to, __) => {
  
  if (to.meta.requiresAuth && !useAuthStore().isAuthenticated) {
    return {
      name: 'logIn'
    }
  }
})

export {
  router
}
