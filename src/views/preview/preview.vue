<script setup lang="ts" name="Preview">
import { useAppStore, useEditorStore } from "@/store";
import {GridLayout,Widget} from "@/components";
const router = useRouter()
const editStore = useEditorStore();
const data = ref(editStore.preview);
const { isSupported, enter, exit, toggle } = useFullscreen()
const init = () => {
  data.value = editStore.preview;
  if(isSupported)enter()
};
onMounted(()=>{
  init()
})
const handleBack = ()=>{
  router.back()
  exit()
}
</script>
<template>
<div class="w-full h-full flex items-center justify-center relative">
  <div class="absolute top-10 right-10 z-999">
    <p class="text-3xl text-gray-300">您正在处于预览模式，<span class=" font-bold cursor-pointer" @click="handleBack">点击此处返回！</span></p>
  </div>
  <GridLayout
    :width="data.canvas.width"
    :height="data.canvas.height"
    :col="data.canvas.col"
    :row="data.canvas.row"
    :background="data.canvas.background"
  >
    <Widget
      v-for="(item, index) in data.widget"
      preview
      :key="index"
      :w="item.w"
      :h="item.h"
      :x="item.x"
      :y="item.y"
      :id="item.id"
      :name="item.name"
      :props="item.props"
    />
  </GridLayout>
  </div>
</template>
<style scoped lang="less"></style>
