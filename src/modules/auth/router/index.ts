

const authRouter = {
  component: ()=> import('../views/Layout.vue'),
  children: [
    {
      path: '',
      name: 'auth',
      redirect: {name: 'logIn'}
    },
    {
      path: 'login',
      name: 'logIn',
      component: () => import('../views/LogInPage.vue'),
    }
  ]
}



export {
  authRouter
}
