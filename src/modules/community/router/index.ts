

const communityRouter = {
    component: () => import('../views/Layout.vue'),
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
            component: () => import('../views/View.vue'),
            redirect: () => {
                return {name: 'communityReports'}
            },
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
                },  
                {
                    path: 'invitations',
                    name: 'communityInvitations',
                    component: () => import('../views/sub/Invitations.vue')
                }
            ]
        },
    ]
}

export {
    communityRouter
}