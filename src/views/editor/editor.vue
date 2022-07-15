<script setup lang="ts" name="Editor">
import LeftPanel from './components/LeftPanel.vue';
import RightPanel from './components/RightPanel.vue';
const leftCollapsed = ref(false);
</script>
<template>
  <div class="w-full h-full flex">
    <LeftPanel/>
    <div class="flex-1 flex items-center justify-center bg-white">
      <div class="w-160 h-90 bg-gray-500"></div>
    </div>
    <RightPanel />
  </div>
</template>
<style scoped lang="less"></style>
