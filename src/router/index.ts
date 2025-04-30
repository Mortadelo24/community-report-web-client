import { createRouter, createWebHashHistory } from 'vue-router'

import { communityRouter } from '../modules/community/router/index.ts'
import { userRouter } from '@/modules/user/router/index.ts'
import { elementRouter } from '@/modules/element/router'
import { useAuthStore } from '@/modules/user/stores'
import { useBackendStore } from '@/stores'

const routes = [
  {
    path: '/',
    meta: { requiresAuth: true, requiresServer: true },
    ...communityRouter
  },
  {
    path: '/users',
    ...userRouter
  },
  {
    path: '/elements',
    ...elementRouter
  },
  {
    path: '/server-down',
    name: 'serverOffline',
    component: () => import('../views/ServerOfflineView.vue')
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
  if (to.meta.requiresServer && !useBackendStore().isServerUp) {
    return {
      name: 'serverOffline',
      query: {
        redirect: to.path
      }
    }
  }
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
