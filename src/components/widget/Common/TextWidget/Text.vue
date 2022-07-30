<script setup lang="ts" name="TextWidget">
import { nanoid } from "@/utils";
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
const _props = ref(_.cloneDeep(props.props));
watch(
  () => props.props,
  (val) => {
    _props.value = _.cloneDeep(val);
  },
  { immediate: true, deep: true }
);
</script>
<template>
  <div
    class="w-full h-full flex"
    :style="{
      alignItems: `${_props.align}`,
      justifyContent: `${_props.justify}`,
    }"
  >
    <p :style="[{ fontSize: _props.size + 'px', color: _props.color }]">
      {{ _props.value }}
    </p>
  </div>
</template>
<style scoped lang="less"></style>
