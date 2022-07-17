<script setup lang="ts" name="LeftPanel">
import ShrinkPanel from "./ShrinkPanel.vue";
import { Text } from "@/components";
import Widget from './Widget.vue'
import {useEditorStore} from '@/store'
const eidtorStore = useEditorStore()
type Props = {
  collapsed?: boolean;
};
type Emit = {
  (e: "onSelect", data: any): any;
};

const props = defineProps<Props>();
const emit = defineEmits<Emit>();

const group = ref({
  name: "charts",
  pull: true,
  put: true,
});
function onStart(data) {}
function onEnd(data) {}
function onMove(e) {}
</script>
<template>
  <ShrinkPanel position="right" :width="400" :show="true" title="配置面板">
    <div class="w-full h-full flex flex-col">
      <div class="w-full h-60%">
        <n-tabs type="line" animated>
      <n-tab-pane name="attribute" tab="属性">
        Wonderwall
      </n-tab-pane>
      <n-tab-pane name="style" tab="样式">
        Hey Jude
      </n-tab-pane>
      <n-tab-pane name="event" tab="事件">
        七里香
      </n-tab-pane>
    </n-tabs>
      </div>
      <div class="w-full h-40%">
        <p class="w-full h-10 bg-gray-100 flex items-center px-3">图层</p>
        <div class="w-full h-full">
          <div class="" v-for="(item, index) in eidtorStore.canvasWidgetList" :key="index" >
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    
  </ShrinkPanel>
</template>
<style scoped lang="less"></style>
