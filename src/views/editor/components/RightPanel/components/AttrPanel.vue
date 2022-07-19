<script setup lang="ts" name="AttrPanel">
import { useEditorStore } from "@/store";
import {
  NInput,
  NInputNumber,
  NUpload,
  NSelect,
  NSwitch,
  NColorPicker,
  NTimePicker,
} from "naive-ui";
const attrWidget = {
  string: NInput,
  number: NInputNumber,
  upload: NUpload,
  select: NSelect,
  switch: NSwitch,
  color: NColorPicker,
  time: NTimePicker,
};
const editorStore = useEditorStore();
const editSchema = computed(() => {
  let data: any[] = [];
  if (!editorStore.canvasWidgetList[editorStore.editWidgetIndex]) return data;
  Object.values(
    editorStore.canvasWidgetList[editorStore.editWidgetIndex].schema!
  ).forEach((item: any, index) => {
    item["key"] = Object.keys(
      editorStore.canvasWidgetList[editorStore.editWidgetIndex].schema!
    )[index];
    data.push(item);
  });
  return data;
});
</script>
<template>
  <div class="w-full h-full flex flex-col gap-3">
    <div class="w-full flex items-center py-1">
      <div class="w-20 flex items-center justify-end">
        <span class="inline-block whitespace-nowrap text-justify"
          >组件名字：</span
        >
      </div>
      <div class="px-3">
        <span>{{ editorStore.editItem.label }}</span>
      </div>
    </div>
    <div class="w-full flex items-center py-1">
      <div class="w-20 flex items-center justify-end">
        <span class="inline-block whitespace-nowrap text-justify"
          >组件ID：</span
        >
      </div>
      <div class="px-3">
        <span>{{ editorStore.editWidgetId }}</span>
      </div>
    </div>
    <div
      class="w-full flex items-center justify-start gap-3"
      v-for="(item, index) in editSchema"
      :key="index"
    >
      <div class="w-20 flex items-center justify-end">
        <span class="inline-block whitespace-nowrap text-justify"
          >{{ item.label }}：</span
        >
      </div>
      <div class="flex-1">
        <component
          :is="attrWidget[item.type]"
          v-model:value="editorStore.canvasWidgetList[editorStore.editWidgetIndex].props![item.key]"
          :options="editorStore.canvasWidgetList[editorStore.editWidgetIndex].schema![item.key].options"
          :type="editorStore.canvasWidgetList[editorStore.editWidgetIndex].schema![item.key].textarea?'textarea':''"
        ></component>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
