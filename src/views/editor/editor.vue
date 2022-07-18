<script setup lang="ts" name="Editor">
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import LeftPanel from './components/LeftPanel/LeftPanel.vue';
import RightPanel from './components/RightPanel/RightPanel.vue';
import ToolBar from './components/Layout/ToolBar.vue';
import Canvas from './components/Canvas/Canvas.vue'
import NavBar from './components/Layout/NavBar.vue';

</script>
<template>
  <div class="w-full h-full flex bg-gray-100"
  dark="bg-dark-300"
  >
    <DndProvider :backend="HTML5Backend">
      <LeftPanel />
      <Canvas />
    </DndProvider>
    <ToolBar />
    <NavBar />
    <RightPanel />    
  </div>
</template>
<style scoped lang="less"></style>
