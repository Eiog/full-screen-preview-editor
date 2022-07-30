<script setup lang="ts" name="ToolBar">
import { Logo } from "@/components";
import { useAppStore,useEditorStore,useProjectStore } from "@/store";
const appStore = useAppStore()
const editStore = useEditorStore()
const projectStore = useProjectStore()
const router = useRouter();
const handlePreview = ()=>{
  appStore.editorKeepAlive = true
  router.push('/preview')
}
const handleSave = ()=>{
  let data = {
    id:editStore.id,
    name:editStore.name,
    author:editStore.author,
    canvas:editStore.canvas,
    canvasWidgetList:editStore.canvasWidgetList,
    editWidgetId:editStore.editWidgetId
  }
  projectStore.set(data)
}
</script>
<template>
  <div
    class="fixed flex items-center gap-3 left-50% top-5 -translate-x-50% h-14 px-2 bg-white bg-opacity-60 backdrop-blur-md text-gray-500 text-base select-none rounded-xl shadow-lg whitespace-nowrap z-999"
    dark="bg-neutral-600 bg-opacity-60 text-gray-400"
  >
    <div
      class="flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
      hover="bg-black bg-opacity-10"
      active="bg-black bg-opacity-20"
      @click="router.back()"
    >
      <Logo :width="30" :height="30" from="#2af598" to="#009efd" />
    </div>
    <div class="h-60% w-1px bg-gray-300"></div>
    <div
      class="text-gray-300 flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
      hover="bg-black bg-opacity-10"
      active="bg-black bg-opacity-20"
    >
      <i class="i-ri-arrow-go-back-fill"></i>
      <span>撤销</span>
    </div>
    <div
      class="text-gray-300 flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
      hover="bg-black bg-opacity-10"
      active="bg-black bg-opacity-20"
    >
      <i class="i-ri-arrow-go-forward-fill"></i>
      <span>恢复</span>
    </div>
    <div
      class="text-gray-300 flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
      hover="bg-black bg-opacity-10"
      active="bg-black bg-opacity-20"
    >
      <i class="i-ri-dashboard-fill"></i>
      <span>导入</span>
    </div>
    <div
      class="text-gray-300 flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
      hover="bg-black bg-opacity-10"
      active="bg-black bg-opacity-20"
    >
      <i class="i-ri-download-cloud-2-fill"></i>
      <span>导出</span>
    </div>
    <div class="h-60% w-1px bg-gray-300"></div>
    <div
      class="flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
      hover="bg-black bg-opacity-10"
      active="bg-black bg-opacity-20"
      @click="handleSave"
    >
      <i class="i-ri-save-fill"></i>
      <span>保存</span>
    </div>
    <div
      class="flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
      hover="bg-black bg-opacity-10"
      active="bg-black bg-opacity-20"
      @click="handlePreview"
    >
      <i class="i-ri-apps-fill"></i>
      <span>预览</span>
    </div>
    <div
      class="text-gray-300 flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
      hover="bg-black bg-opacity-10"
      active="bg-black bg-opacity-20"
    >
      <i class="i-ri-share-fill"></i>
      <span>分享</span>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
