import { RouteRecordRaw } from "vue-router";
import Editor from "@/views/editor/editor.vue";
const Routes: RouteRecordRaw = {
  path: "/editor",
  name: Editor.name,
  component: Editor,
  meta: {
    title: "编辑",
  },
};

export default Routes;
