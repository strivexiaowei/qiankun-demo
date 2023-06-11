import {
    RouteRecordRaw,
    createRouter,
    createWebHistory,
    createWebHashHistory
} from 'vue-router';

import routes from "./routes"

import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

NProgress.configure({
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})



const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,
});
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
router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done()
})

export default router;