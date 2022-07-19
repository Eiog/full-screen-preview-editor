<script setup lang="ts" name="LayerPanel">
import { useEditorStore } from "@/store";
const editorStore = useEditorStore();
const { canvasWidgetList,editWidgetId } = storeToRefs(editorStore);
</script>
<template>
<n-scrollbar class="w-full h-full">
  <div class="w-full flex flex-col gap-2">
    <div
      class="w-full flex items-center gap-3 cursor-pointer bg-gray-100 p-3 rounded-md overflow-hidden"
      v-for="(item, index) in canvasWidgetList"
      :key="index"
      :class="item.id===editWidgetId?'bg-gray-200':''"
      @click.stop="editWidgetId = item.id"
    >
      <div class="w-50px h-40px overflow-hidden">
        <img
          class="w-full h-full object-contain"
          :src="item.cover"
          :alt="item.brief"
        />
      </div>
      <div class="flex-1">
        <p class="text-base">{{ item.label }}</p>
      </div>
    <div class="flex items-center"  @click.stop="editorStore.removeWidget(item.id)">
        <i class="i-ri-close-fill inline-block text-xl transition-colors"
        hover="text-gray-500"
        ></i>
    </div>
    </div>
  </div>
  </n-scrollbar>
</template>
<style scoped lang="less"></style>
