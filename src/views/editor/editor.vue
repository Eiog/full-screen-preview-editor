<script setup lang="ts" name="Editor">
import { NInput } from "naive-ui";
import { DndProvider } from "vue3-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import LeftPanel from "./components/LeftPanel/LeftPanel.vue";
import RightPanel from "./components/RightPanel/RightPanel.vue";
import ToolBar from "./components/Layout/ToolBar.vue";
import Canvas from "./components/Canvas/Canvas.vue";
import NavBar from "./components/Layout/NavBar.vue";
import { onBeforeRouteLeave } from "vue-router";
import { useAppStore, useEditorStore, useProjectStore } from "@/store";
import { nanoid } from "@/utils";
const appStore = useAppStore();
const editorStore = useEditorStore();
const projectStore = useProjectStore();
const router = useRouter();
const route = useRoute();
const id = ref<string>(route.query.id as string);
const inputVal = ref("新项目");
const newCanvas = () => {
  if(appStore.editorKeepAlive)return appStore.editorKeepAlive = false
  editorStore.$reset()
  window.$dialog.info({
    title: "请输入项目名",
    maskClosable: false,
    closeOnEsc: false,
    closable: false,
    content: () => {
      return h(
        NInput,
        {
          value: inputVal.value,
          onUpdateValue(val) {
            inputVal.value = val;
          },
          placeholder: "请输入项目名",
        },
        {}
      );
    },
    positiveText: "确定",
    onPositiveClick: () => {
      if (!inputVal.value) {
        window.$message.error("情书入项目名");
        return false;
      }
      editorStore.id = nanoid();
      editorStore.name = inputVal.value;
      window.$message.success("开始创作吧！");
      editorStore.author = appStore.user!.name;
    },
    negativeText: "返回",
    onNegativeClick: () => {
      router.back();
    },
  });
};
const init = () => {
  if (id) {
    const data = projectStore.projectList?.find((item) => item.id === id.value);
    if (data) {
      editorStore.loadCanvas(data);
      return;
    }
    newCanvas()
    return
  }
  newCanvas();
};
onMounted(() => {
  init();
});
onActivated(() => {
  appStore.editorKeepAlive = false;
});
onBeforeRouteLeave(() => {
  window.$dialog.destroyAll();
});
</script>
<template>
  <div class="w-full h-full flex bg-gray-100" dark="bg-dark-300">
    <DndProvider :backend="HTML5Backend">
      <LeftPanel />
      <Canvas />
    </DndProvider>
    <ToolBar />
    <NavBar />
    <RightPanel />
  </div>
</template>
<style scoped lang="less"></style>
