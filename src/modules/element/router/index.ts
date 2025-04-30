const elementRouter = {
    component: () => import('../layouts/ElementLayout.vue'),
    children: [
        
        {
            path: 'buttons',
            name: 'buttons',
            component: ()=>import('../views/ButtonsView.vue')
        }
    ]
}

export {
    elementRouter
}