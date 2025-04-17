

const authRoutes = [
  {
    path: '',
    name: 'auth',
    component: () => import('../views/LogInPage.vue')
  },
  {
    path: 'login',
    name: 'logIn', 
    component: () => import('../views/LogInPage.vue'),
  }
]



export {
  authRoutes
}
