const elementRouter = {
    component: () => import('../layouts/ElementLayout.vue'),
    children: [
        
        {
            path: 'buttons',
            name: 'buttons',
            component: ()=>import('../views/ButtonsView.vue')
        },
        {
          path: 'inputs',
          name: 'inputs',
          component: ()=> import('../views/InputsView.vue')
        },
        {
          path: 'containers',
          name: 'containers',
          component: ()=> import('../views/ContainersView.vue')
        }
    ]
}

export {
    elementRouter
}
