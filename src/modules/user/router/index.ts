
const userRouter = {
    component: () => import('../layouts/AuthLayout.vue'),
    redirect: ()=>{
        return {
            name: 'login'
        }
    },
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