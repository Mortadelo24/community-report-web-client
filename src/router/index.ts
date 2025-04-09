import {createRouter,createWebHashHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import {authRoutes} from './auth.ts'
import {isUserAuthenticated, waitForAuthToInitialize} from '../apis/firebase.ts'



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
  await waitForAuthToInitialize();
  if (to.meta.requiresAuth && !isUserAuthenticated()) {
    return {
      name: 'logIn'
    }
  }
})

export {
  router
}
