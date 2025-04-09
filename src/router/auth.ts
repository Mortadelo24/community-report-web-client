

const authRoutes = [
  {
    path: '',
    name: 'auth',
    redirect: {name: 'logIn'}
  },
  {
    path: 'login',
    name: 'logIn', 
    component: () => import('../views/auth/LogInPage.vue'),
  }
]



export {
  authRoutes
}
