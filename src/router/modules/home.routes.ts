import { RouteRecordRaw } from "vue-router";
import Home from "@/views/home/home.vue";
const Routes: RouteRecordRaw = {
  path: "/Home",
  name: Home.name,
  component: Home,
  meta: {
    title: "主页",
  },
};

export default Routes;
