import { RouteRecordRaw } from "vue-router";
import Editor from "@/views/editor/editor.vue";
const Routes: RouteRecordRaw[] = [
  {
    path: "/editor/:id",
    name: Editor.name,
    component: Editor,
    meta: {
      title: "编辑",
      requiresAuth: true,
      role: ['admin']
    },
  },
  {
    path: "/editor",
    name: Editor.name,
    component: Editor,
    meta: {
      title: "编辑",
      requiresAuth: true,
      role: ['admin']
    },
  },
];

export default Routes;
