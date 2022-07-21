<script setup lang="ts" name="Widget">
import { WidgetList } from "@/components";
type Props = {
  w?: number;
  h?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  id?:string
  name?:string
  props?:any
};
const props = defineProps<Props>();

const WidgetListMap = ref({});
const initWidget = () => {
  Object.values(WidgetList).forEach((item) => {
    WidgetListMap.value[item.name] = markRaw(item.component!);
  });
};
initWidget();
</script>
<template>
  <div
    :style="{
      gridColumn: `span ${props.w} / span ${props.w}`,
      gridRow: `span ${props.h} / span ${props.h}`,
      gridColumnStart: `${props.x}`,
      gridRowStart: `${props.y}`,
    }"
  >
    <component :is="WidgetListMap[props.name]" :props="props.props" :id="props.id" :name="props.name" ></component>
  </div>
</template>
<style scoped lang="less"></style>
