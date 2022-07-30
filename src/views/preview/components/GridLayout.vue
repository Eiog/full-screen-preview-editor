<script setup lang="ts" name="GridLayout">
type Props = {
  width?: number;
  height?: number;
  background?: string;
  col?: number;
  row?: number;
};
const props = withDefaults(defineProps<Props>(), {
  width: 1920,
  height: 1080,
  col: 24,
  row: 10,
});
</script>
<template>
  <div
    class="grid"
    :style="{
      width: props.width + 'px',
      height: props.height + 'px',
      background: props.background,
      gridTemplateColumns: `repeat(${props.col-1}, minmax(0, 1fr))`,
      gridTemplateRows: `repeat(${props.row-1}, minmax(0, 1fr))`,
    }"
  >
    <slot />
  </div>
</template>
<style scoped lang="less"></style>
