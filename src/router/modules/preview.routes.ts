import { RouteRecordRaw } from "vue-router";
import Preview from "@/views/preview/preview.vue";
const Routes: RouteRecordRaw = {
  path: "/preview",
  name: Preview.name,
  component: Preview,
  meta: {
    title: "预览",
  },
};

export default Routes;
