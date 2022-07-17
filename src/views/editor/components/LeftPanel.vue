<script setup lang="ts" name="LeftPanel">
import {nanoid} from '@/utils'
import ShrinkPanel from "./ShrinkPanel.vue";
import { Text } from "@/components";
import WidgetPreview from './WidgetPreview.vue'
type Props = {
  collapsed?: boolean;
};
type Emit = {
  (e: "onSelect", data: any): any;
};

const props = defineProps<Props>();
const emit = defineEmits<Emit>();
const widgetList = ref<Editor.Widget[]>([
  {
    id: '',
    i:'',
    name: "文本",
    component: markRaw(Text),
    componentName:'Text',
    width:400,
    height:100,
    x:0,
    y:0,
    w:4,
    h:1,
    props:{}
  },
]);
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
  <ShrinkPanel :show="true" title="组件">
      <WidgetPreview v-for="(item, index) in widgetList" :key="index" :data="item" />
  </ShrinkPanel>
</template>
<style scoped lang="less"></style>
