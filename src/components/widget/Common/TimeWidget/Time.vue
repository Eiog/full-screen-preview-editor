<script setup lang="ts" name="TimeWidget">
import { nanoid } from "@/utils";
import { WidgetProps } from "./";
import _ from "lodash-es";
type Props = {
  id: string;
  name: string;
  props: WidgetProps;
};

const props = withDefaults(defineProps<Props>(), {});
const _props = ref(_.cloneDeep(props.props));
watch(
  () => props.props,
  (val) => {
    _props.value = _.cloneDeep(val);
  },
  { immediate: true, deep: true }
);
const time = ref<{ hour: string|number; min: string|number; second: string|number } | undefined>();
const Interval = ref<any>();
const getTime = () => {
  return {
    hour: new Date().getHours()<10?'0'+new Date().getHours():new Date().getHours(),
    min: new Date().getMinutes()<10?'0'+new Date().getMinutes():new Date().getMinutes(),
    second: new Date().getSeconds()<10?'0'+new Date().getSeconds():new Date().getSeconds(),
  };
};
onMounted(() => {
  Interval.value = setInterval(() => {
    time.value = getTime();
  }, 100);
});
onBeforeUnmount(() => {
  clearInterval(Interval.value);
});
</script>
<template>
  <div class="w-full h-full flex items-center justify-center">
    <div :style="{ color: _props.color,fontSize:_props.size+'px',fontWeight:_props.weight as any }">
      <span>{{ time?.hour }}</span>
      :
      <span>{{ time?.min }}</span>
      :
      <span>{{ time?.second }}</span>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
