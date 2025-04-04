import {createRouter, createMemoryHistory} from 'vue-router'

import CommunityPage from '../views/ComunnityPage.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
  
  {path: '/', component: HomePage},
  {path: '/community', component: CommunityPage}

]

const router = createRouter({
  routes: routes,
  history: createMemoryHistory(),

})


export {
  router
}
