

const communityRouter = {
    component: () => import('../views/layout.vue'),
    meta: { requiresAuth: true },
    children: [

        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')

        },
        {
            path: '/communities/create',
            name: 'communityCreate',
            component: () => import('../views/Create.vue'),
        },
        {
            path: '/communities/:id',
            name: 'community',
            component: () => import('../views/view.vue'),
            props: true,
            children: [
                {
                    path: 'members',
                    name: 'communityMembers',
                    component: () => import('../views/sub/Members.vue')
                },
                {
                    path: 'reports',
                    name: 'communityReports',
                    component: () => import('../views/sub/Report.vue')
                }
            ]
        },
    ]
}

export {
    communityRouter
}