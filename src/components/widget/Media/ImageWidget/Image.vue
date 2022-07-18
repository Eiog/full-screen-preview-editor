<script setup lang="ts" name="ImageWidget">
import { WidgetProps } from "./";
import _ from "lodash-es";
type Props = {
  id: string;
  name: string;
  props: WidgetProps;
};
type Emit = {
  (e: "onChange", value: WidgetProps): WidgetProps;
  (e: "update:props", props: WidgetProps): WidgetProps;
};
const props = withDefaults(defineProps<Props>(), {});
const emit = defineEmits<Emit>();
const isEidt = ref(false);
const handleEidt = () => {
  isEidt.value = true;
};
const _props = ref(_.cloneDeep(props.props));
watch(
  () => props.props,
  (val) => {
    _props.value = _.cloneDeep(val);
  },
  { immediate: true, deep: true }
);
const handleSubmit = () => {
  isEidt.value = false;
  emit("onChange", _props.value);
  emit("update:props", _props.value);
};
</script>
<template>
  <div class="w-full h-full overflow-hidden">
    <img
      class="w-full h-full"
      :src="_props.url"
      :alt="_props.alt"
      :style="[{ objectFit: `${_props.objectFit}` }, { ..._props.style }]"
    />
  </div>
</template>
<style scoped lang="less"></style>
