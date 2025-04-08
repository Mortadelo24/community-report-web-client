import {createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'


const routes = [
  
  {path: '/', name: 'home', component: HomePage},
  {
    path: '/community/:id', 
    name: 'community',
    component: ()=> import('../views/ComunnityPage.vue'),
    props: true
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
