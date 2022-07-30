<script setup lang="ts" name="ImageWidget">
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
</script>
<template>
  <div class="w-full h-full overflow-hidden">
    <img
      class="w-full h-full"
      :src="_props.url"
      :alt="_props.alt"
      :style="[{ objectFit: `${_props.objectFit}` }]"
    />
  </div>
</template>
<style scoped lang="less"></style>
