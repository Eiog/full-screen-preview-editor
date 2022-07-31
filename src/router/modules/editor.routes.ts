import { RouteRecordRaw } from "vue-router";
const Editor = ()=>import('@/views/editor/editor.vue')
const Routes: RouteRecordRaw[] = [
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
