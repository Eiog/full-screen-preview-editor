<script setup lang="ts" name="RightPanel">
import ShrinkPanel from "../Layout/ShrinkPanel.vue";
import LayoutPanel from "./components/LayoutPanel.vue";
import CanvasPanel from "./components/CanvasPanel.vue";
import AttrPanel from "./components/AttrPanel.vue";
import LayerPanel from "./components/LayerPanel.vue";
import { useEditorStore } from "@/store";
const editorStore = useEditorStore();
</script>
<template>
  <ShrinkPanel position="right" :width="300" :show="true" title="配置面板">
    <div class="w-full h-full flex flex-col">
      <div class="w-full h-60%">
        <n-tabs
          v-if="!editorStore.canvasEditing && editorStore.editWidgetId"
          type="line"
          animated
        >
          <n-tab-pane name="attribute" tab="属性">
            <AttrPanel />
          </n-tab-pane>
          <n-tab-pane name="layout" tab="布局">
            <LayoutPanel />
          </n-tab-pane>
        </n-tabs>
        <n-tabs v-if="editorStore.canvasEditing" type="line" animated>
          <n-tab-pane name="canvas" tab="画布设置">
            <CanvasPanel />
          </n-tab-pane>
        </n-tabs>
      </div>
      <div class="w-full h-40% flex flex-col gap-3">
        <p class="w-full h-10 bg-gray-100 flex items-center px-3">图层</p>
        <div class="w-full flex-1 min-h-0">
          <LayerPanel />
        </div>
      </div>
    </div>
  </ShrinkPanel>
</template>
<style scoped lang="less"></style>
