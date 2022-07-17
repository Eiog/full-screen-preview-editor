<script setup lang="ts" name="Editor">
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import LeftPanel from './components/LeftPanel.vue';
import RightPanel from './components/RightPanel.vue';
import ToolBar from './components/ToolBar.vue';
import Canvase from './components/Canvas.vue'
import NavBar from './components/NavBar.vue';

</script>
<template>
  <div class="w-full h-full flex">
    <DndProvider :backend="HTML5Backend">
      <LeftPanel />
      <Canvase />
    </DndProvider>
    <ToolBar />
    <NavBar />
    <RightPanel />    
  </div>
</template>
<style scoped lang="less"></style>
