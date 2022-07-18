<script setup lang="ts" name="NavBar">
import { useAppStore, useEditorStore } from "@/store";
const appStore = useAppStore();
const eidtorStore = useEditorStore();
const navBarRef = ref();
const { style } = useDraggable(navBarRef, {
  initialValue: { x: 1450, y: 650 },
  exact: true,
});
</script>
<template>
  <div
    class="fixed overflow-hidden bg-white bg-opacity-60 backdrop-blur-md shadow-xl rounded-md text-2xl text-gray-600 z-999"
    dark="bg-neutral-500 bg-opacity-40 text-neutral-900"
    :style="style"
  >
    <div
      class="w-full h-6 bg-black bg-opacity-5 cursor-move flex items-center justify-center text-sm"
      ref="navBarRef"
    >
      {{ eidtorStore.canvas.zoom }}%
    </div>
    <div class="flex flex-col gap-2 p-2">
      <div
        class="flex items-center justify-center p-2 rounded-md transition-colors cursor-pointer"
        hover="bg-black bg-opacity-10"
        active="bg-black bg-opacity-20"
        @click="eidtorStore.canvas.zoom += 5"
      >
        <i class="i-ri-add-fill"></i>
      </div>
      <div
        class="flex items-center justify-center p-2 rounded-md transition-colors cursor-pointer"
        hover="bg-black bg-opacity-10"
        active="bg-black bg-opacity-20"
        @click="eidtorStore.canvas.zoom -= 5"
      >
        <i class="i-ri-subtract-fill"></i>
      </div>
      <div
        class="flex items-center justify-center p-2 rounded-md transition-colors cursor-pointer"
        hover="bg-black bg-opacity-10"
        active="bg-black bg-opacity-20"
      >
        <i class="i-ri-emotion-line"></i>
      </div>
      <div
        class="flex items-center justify-center p-2 rounded-md transition-colors cursor-pointer"
        hover="bg-black bg-opacity-10"
        active="bg-black bg-opacity-20"
        @click="appStore.darkMode = !appStore.darkMode"
      >
        <i
          class="inline-block"
          :class="appStore.darkMode ? 'i-ri-sun-cloudy-fill' : 'i-ri-sun-fill'"
        ></i>
      </div>
      <div
        class="flex items-center justify-center p-2 rounded-md transition-colors cursor-pointer"
        hover="bg-black bg-opacity-10"
        active="bg-black bg-opacity-20"
      >
        <i class="i-ri-qr-code-fill"></i>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
