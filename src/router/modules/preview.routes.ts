import { RouteRecordRaw } from "vue-router";
const Preview = ()=>import ('@/views/preview/preview.vue')
const Routes: RouteRecordRaw[] = [
  {
    path: "/preview/:id",
    name: Preview.name,
    component: Preview,
    meta: {
      title: "预览",
    }
  },
  {
    path: "/preview",
    name: Preview.name,
    component: Preview,
    meta: {
      title: "预览",
    }
  },
];

export default Routes;
