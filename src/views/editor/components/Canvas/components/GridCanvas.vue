<script setup lang="ts" name="GridCanvas">
import { GridLayout, GridItem } from "vue3-grid-layout";
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
const onChange = (item) => {
  console.log(item);
};
</script>
<template>
  <div class="w-full h-full">
    <grid-layout
      :layout.sync="editorStore.canvasWidgetList"
      :col-num="editorStore.canvas.col"
      :row-height="editorStore.gridRowHeight"
      :max-rows="editorStore.canvas.row"
      :prevent-collision="true"
      :is-draggable="true"
      :is-resizable="true"
      :responsive="false"
      :vertical-compact="false"
      :use-css-transforms="false"
      :margin="[0, 0]"
    >
      <grid-item
        class="border-1 border-dashed border-gray-300 border-opacity-0  pointer-events-auto"
        :class="
          !editorStore.canvasEditing && editorStore.editWidgetId === item.id
            ? 'border-gray-500 border-opacity-100'
            : ''
        "
        v-for="(item, index) in editorStore.canvasWidgetList"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        <WidgetItem :id="item.id">
          <component
            :is="WidgetListMap[item.name]"
            v-model:props="item.props"
            :id="item.id"
            :name="item.name"
            @on-change="onChange"
          ></component>
        </WidgetItem>
      </grid-item>
    </grid-layout>
  </div>
</template>
<style scoped lang="less"></style>
