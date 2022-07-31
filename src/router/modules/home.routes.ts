import { RouteRecordRaw } from "vue-router";
const Home = ()=>import('@/views/home/home.vue')
const Routes: RouteRecordRaw = {
  path: "/Home",
  name: Home.name,
  component: Home,
  meta: {
    title: "主页",
    requiresAuth:true,
    role:['admin']
  },
};

export default Routes;
