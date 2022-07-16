<script setup lang="ts" name="Editor">
import LeftPanel from './components/LeftPanel.vue';
import RightPanel from './components/RightPanel.vue';
import ToolBar from './components/ToolBar.vue';
import Canvase from './components/Canvas.vue'
import NavBar from './components/NavBar.vue';
import ShrinkPanel from './components/ShrinkPanel.vue';

</script>
<template>
  <div class="w-full h-full flex">
    <ToolBar />
    <NavBar />
    <LeftPanel />
    <ShrinkPanel :show="true" position="right" :width="400" title="Right" />
    <Canvase />
  </div>
</template>
<style scoped lang="less"></style>
