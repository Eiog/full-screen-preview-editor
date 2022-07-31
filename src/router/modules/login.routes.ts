import { RouteRecordRaw } from "vue-router";
const Login = ()=>import ('@/views/login/login.vue')
const Routes: RouteRecordRaw = {
  path: "/login",
  name: Login.name,
  component: Login,
  meta: {
    title: "登录",
  },
};

export default Routes;
