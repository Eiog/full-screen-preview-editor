import { RouteRecordRaw } from "vue-router";
import Login from "@/views/login/login.vue";
const Routes: RouteRecordRaw = {
  path: "/login",
  name: Login.name,
  component: Login,
  meta: {
    title: "登录",
  },
};

export default Routes;
