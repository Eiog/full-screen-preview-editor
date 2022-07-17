<script setup lang="ts" name="GridCanvas">
import { GridLayout, GridItem } from "vue3-grid-layout";
import { useEditorStore } from "@/store";
const eidtorStore = useEditorStore()
const list = ref([
  {
    id: '22',
    i:'11',
    name: "文本",
    component: markRaw(Text),
    componentName:'Text',
    width:400,
    height:100,
    x:0,
    y:0,
    w:4,
    h:1,
    props:{}
  },

]);
</script>
<template>
  <div class="w-full h-full">
    <grid-layout
      :layout.sync="eidtorStore.canvasWidgetList"
      :col-num="eidtorStore.canvas.col"
      :row-height="eidtorStore.gridRowHeight"
      :max-rows="eidtorStore.canvas.row"
      :prevent-collision="true"
      :is-draggable="true"
      :is-resizable="true"
      :responsive="false"
      :vertical-compact="false"
      :use-css-transforms="false"
      :margin="[0,0]"
    >
      <grid-item
        class="border-2 border-dashed border-gray-300"
        v-for="(item, index) in eidtorStore.canvasWidgetList"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        <component :is="item.component"></component>
      </grid-item>
    </grid-layout>
  </div>
</template>
<style scoped lang="less"></style>
