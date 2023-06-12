import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Portal from "../views/Portal.vue";

export default <RouteRecordRaw[]>[
    {
        path: "/",
        meta: {
            title: "首页",
            transition: "down",
            requiresAuth: true, // 要求授权
            keepAlive: true,
            isAdmin: true,
            show: false,
            icon: "\ue63d",
        },
        component: Home
    },
    {
        path: "/app-vue",
        meta: {
            title: "app-vue",
            isAdmin: false,
            transition: "down",
            requiresAuth: true, // 要求授权
            keepAlive: true,
            show: false,
            icon: "\ue63d",
        },
        component: Portal
    },
];
