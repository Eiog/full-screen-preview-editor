<script setup lang="ts" name="NavBar">
import { useAppStore } from "@/store";
const appStore = useAppStore();
</script>
<template>
  <div
    class="fixed bottom-5 right-105 flex flex-col gap-2 p-2 bg-white bg-opacity-60 backdrop-blur-md shadow-xl rounded-md text-2xl text-gray-600 z-999"
    dark="bg-neutral-500 bg-opacity-60 text-gray-400"
  >
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
</template>
<style scoped lang="less"></style>
