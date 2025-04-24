
const communityRouter = {
    component: () => import('../views/layout.vue'),
    children: [

        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue'),
            meta: { requiresAuth: true }

        },
        {
            path: '/community/:id',
            name: 'community',
            component: () => import('../views/view.vue'),
            props: true,
            meta: { requiresAuth: true }
        },
        {
            path: '/community/create',
            name: 'communityCreate',
            component: () => import('../views/Create.vue'),
            meta: { requiresAuth: true }
        }
    ]
}

export {
    communityRouter
}