import {
    RouteRecordRaw,
    createRouter,
    createWebHistory,
    createWebHashHistory
} from 'vue-router';

import routes from "./routes"

import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
NProgress.configure({
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})



// router.beforeEach((to: any, from: any, next: any) => {
//     const { requiresAuth } = to.meta
//     NProgress.start();
//     if (requiresAuth) {
//         if (!sessionStorage.getItem('platformToken')) {
//             next({ path: '/login' })
//         } else {
//             next()
//         }
//     } else {
//         next()
//     }

//     //判断该用户有没有登录过
// })
console.log(routes);

const router = (parentBase) => {
    /**
     * 区别作为微应用运行和独立运行时的路由base
     * 1. 当作为微应用运行时：路由前缀为 ${parentBase}${packagejson.name}`
     *      - parentBase是从主应用中传过来的参数
     *      - packagejson.name是在package.json文件中定义的固定变量，是为了方便使用和便于区分，这个应该大家都能够理解
     * 2. 独立运行时：路由前缀为/app2
     */
    const base = qiankunWindow.__POWERED_BY_QIANKUN__ ? `` : ''
    return createRouter({
        history: createWebHistory(base),
        routes: routes,
        scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
        },
    });
}

export { router }