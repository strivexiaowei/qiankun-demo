import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import User from "../views/User.vue";
export default <RouteRecordRaw[]>[
    {
        path: "/",
        meta: {
            title: "首页",
            transition: "down",
            requiresAuth: true, // 要求授权
            keepAlive: true,
            show: false,
            icon: "\ue63d",
        },
        component: Home
    },
    {
        path: "/about",
        meta: {
            title: "About",
            transition: "down",
            requiresAuth: true, // 要求授权
            keepAlive: true,
            show: false,
            icon: "\ue63d",
        },
        component: About
    },
    {
        path: "/user",
        meta: {
            title: "User",
            transition: "down",
            requiresAuth: true, // 要求授权
            keepAlive: true,
            show: false,
            icon: "\ue63d",
        },
        component: User
    },
];
