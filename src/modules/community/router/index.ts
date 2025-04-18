
const communityRouter = {
    component: () => import('../views/CommunityLayout.vue'),
    children: [

        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomePage.vue'),
            meta: { requiresAuth: true }

        },
        {
            path: '/community/:id',
            name: 'community',
            component: () => import('../views/ComunnityPage.vue'),
            props: true,
            meta: { requiresAuth: true }
        },
    ]
}

export {
    communityRouter
}