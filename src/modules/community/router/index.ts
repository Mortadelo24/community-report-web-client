

const communityRouter = {
  component: () => import('../layouts/CommunityLayout.vue'),
  redirect: () => {
    return { name: 'home' }
  },
  children: [

    {
      path: '',
      name: 'home',
      component: () => import('../views/HomeView.vue')

    },
    {
      path: 'communities/create',
      name: 'communityCreate',
      component: () => import('../views/CreateView.vue'),
    },

    {
      path: 'communities/:id',
      name: 'community',
      component: () => import('../views/CommunityView.vue'),
      redirect: () => {
        return { name: 'communityReports' }
      },
      props: true,
      children: [
        {
          path: 'members',
          name: 'communityMembers',
          component: () => import('../views/sub/MembersView.vue')
        },
        {
          path: 'reports',
          name: 'communityReports',
          component: () => import('../views/sub/ReportsView.vue')
        },
        {
          path: 'reports/:reportId',
          name: 'communityReport',
          component: () => import('../views/sub/ReportView.vue'),
          props: true
        }
      ]
    },

  ]
}

export {
  communityRouter
}
