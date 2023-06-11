import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Area from "../views/declare/Area.vue";
import Base from "../views/declare/Base.vue";
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
    }
];
