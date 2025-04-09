

const authRoutes = [
  {
    path: '',
    name: 'auth',
    redirect: {name: 'login'}
  },
  {
    path: 'login',
    name: 'login', 
    component: () => import('../views/auth/LogInPage.vue'),
  }
]



export {
  authRoutes
}
