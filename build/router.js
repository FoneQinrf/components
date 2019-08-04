/*
 * @Author: Fone丶峰
 * @Date: 2019-08-02 20:36:45
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-08-03 16:54:52
 * @Description: 
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 */
module.exports = {
    routerConfigString: (main, mobile) => {
        return `import Vue from 'vue'
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
                children: [${main}]
            },
            {
                path: '/mobile',
                name: 'mobile',
                component: () => import('@/views/mobile/layout.vue'),
                children: [${main}]
            }
        ]
        })
        
        router.afterEach((to) => {
          if (to.meta.title) {
            document.body.title = to.meta.title
          }
        });
        
        export default router`
    }
}