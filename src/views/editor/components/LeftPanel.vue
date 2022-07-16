<script setup lang="ts" name="LeftPanel">
import VueDraggable from "vuedraggable";
import ShrinkPanel from "./ShrinkPanel.vue";
import { Text } from "@/components";
import Widget from './Widget.vue'
type Props = {
  collapsed?: boolean;
};
type Emit = {
  (e: "onSelect", data: any): any;
};

const props = defineProps<Props>();
const emit = defineEmits<Emit>();
const widgetList = ref<Widget.Widget[]>([
  {
    id: new Date().getTime() + Math.random().toString(36).substr(2),
    name: "文本",
    component: 'Text',
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
    <div class="w-full h-20 " v-for="(item, index) in widgetList" :key="index">
      <Widget :id="item.id" :name="item.name" />
    </div>
  </ShrinkPanel>
</template>
<style scoped lang="less"></style>
