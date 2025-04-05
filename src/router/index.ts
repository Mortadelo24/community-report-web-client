import {createRouter, createWebHistory} from 'vue-router'

import CommunityPage from '../views/ComunnityPage.vue'
import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  
  {path: '/', name: 'home', component: HomePage},
  {
    path: '/community/:id', 
    name: 'community',
    component: CommunityPage,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound,
    props: true
  }

]

const router = createRouter({
  routes: routes,
  history: createWebHistory(),

})


export {
  router
}
