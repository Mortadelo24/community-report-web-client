import {createRouter,createWebHashHistory } from 'vue-router'

import {authRouter} from '../modules/auth/router'
import { communityRouter } from '../modules/community/router/index.ts'
import {useAuthStore} from '../stores/auth.ts'

const routes = [
  {
    path: '/',
    ...communityRouter
  },
  {
    path: '/auth',
    ...authRouter
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
