import {createRouter,createWebHashHistory } from 'vue-router'
import {useAuthStore} from '../stores/auth.ts'

import HomePage from '../views/HomePage.vue'
import {authRoutes} from './auth.ts'




const isUserAuthenticatedGuard = ()=>{
  const authStore = useAuthStore();
    if (!authStore.isAuthenticated){
      router.push({name: 'logIn'});
    }  

}

const routes = [
  
  {
    path: '/', 
    name: 'home',
    beforeEnter: isUserAuthenticatedGuard,
    component: HomePage,

  },
  {
    path: '/community/:id', 
    name: 'community',
    beforeEnter: isUserAuthenticatedGuard,
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
