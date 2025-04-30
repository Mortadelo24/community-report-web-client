import { createRouter, createWebHashHistory } from 'vue-router'

import { communityRouter } from '../modules/community/router/index.ts'
import { userRouter } from '@/modules/user/router/index.ts'
import { useAuthStore } from '@/modules/user/stores/authStore.ts'  


const routes = [
  {
    path: '/',
    ...communityRouter
  },
  {
    path: '/users',
    ...userRouter
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../views/NotFound.vue'),
    props: true
  }

]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),

})

router.beforeEach(async (to, __) => {

  if (to.meta.requiresAuth && !useAuthStore().isAuthenticated) {
    return {
      name: 'login'
    }
  }
})

export {
  router
}
