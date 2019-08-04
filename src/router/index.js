import Vue from 'vue'
        import Router from 'vue-router'
        
        Vue.use(Router)
        
        const router = new Router({
          routes: [
            {
                path: '/',
                name: 'home',
                component: () => import('@/views/home.vue')
            },
            {
                path: '/main',
                name: 'main',
                component: () => import('@/views/main/layout.vue'),
                children: [{path: 'Input',name: 'main-Input', meta: {title: 'G-UI-Input'},component: () => import('@/views/main/Input/index.md')}]
            },
            {
                path: '/mobile',
                name: 'mobile',
                component: () => import('@/views/mobile/layout.vue'),
                children: [{path: 'Input',name: 'main-Input', meta: {title: 'G-UI-Input'},component: () => import('@/views/main/Input/index.md')}]
            }
        ]
        })
        
        router.afterEach((to) => {
          if (to.meta.title) {
            document.body.title = to.meta.title
          }
        });
        
        export default router