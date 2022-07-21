<script setup lang="ts" name="DragResizeCanvas">
import Vue3DraggableResizable from "vue3-draggable-resizable";
import "vue3-draggable-resizable/dist/Vue3DraggableResizable.css";
import { useEditorStore } from "@/store";
import WidgetItem from "./WidgetItem.vue";
import { WidgetList } from "@/components";
import { markRaw } from "vue";
const editorStore = useEditorStore();
const WidgetListMap = ref({});
const initWidget = () => {
  Object.values(WidgetList).forEach((item) => {
    WidgetListMap.value[item.name] = markRaw(item.component!);
  });
};
initWidget();
</script>
<template>
  <div class="w-full h-full relative">
    <Vue3DraggableResizable
      v-for="(item, index) in editorStore.widgetList"
      :key="index"
      :init-w="item.w!*(editorStore.canvas.zoom /100)"
      :init-h="item.h!*(editorStore.canvas.zoom /100)"
      :w="item.w"
      :h="item.h"
      :x="item.x"
      :y="item.y"
      :active="item.active"
      :draggable="true"
      :resizable="true"
    >
    <div class="w-full h-full bg-gray-300">
        {{item.name}}
    </div>
    </Vue3DraggableResizable>
  </div>
</template>
<style scoped lang="less"></style>
