import { RouteRecordRaw } from "vue-router";
const Screen = () => import('@/views/screen/screen.vue')
const Routes: RouteRecordRaw[] = [
    {
        path: "/screen",
        name: Screen.name,
        component: Screen,
        meta: {
            title: "大屏",
        }
    }
];

export default Routes;
