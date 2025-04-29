
const userRouter = {
    component: () => import('../layouts/AuthLayout.vue'),
    children: [
        {
            path: 'login',
            name: 'login',
            component: ()=>import('../views/LoginView.vue')
        }
    ]
}



export {
    userRouter
}