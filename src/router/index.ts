import {createRouter, createMemoryHistory} from 'vue-router'

import CommunityPage from '../views/ComunnityPage.vue'


const routes = [
  {path: '/', component: CommunityPage}
]

const router = createRouter({
  routes: routes,
  history: createMemoryHistory(),

})


export {
  router
}