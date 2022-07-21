<script setup lang="ts" name="Preview">
import { useAppStore, useEditorStore } from "@/store";
import GridLayout from "./components/GridLayout.vue";
import Widget from "./components/Widget.vue";
const appStore = useAppStore();
const editStore = useEditorStore();
const route = useRoute();
const queryId = ref(route.query.id);
watch(
  () => route.query,
  (val) => {
    if (val) queryId.value = val.id;
  }
);
const data = ref(editStore.preview);
const init = () => {
  if (!queryId.value) {
    data.value = editStore.preview;
  }
};
</script>
<template>
  <GridLayout
    :width="data.canvas.width"
    :height="data.canvas.height"
    :col="data.canvas.col"
    :row="data.canvas.row"
    :background="data.canvas.background"
  >
    <Widget
      v-for="(item, index) in data.widget"
      :key="index"
      :w="item.w"
      :h="item.h"
      :x="item.x"
      :y="item.y"
      :id="item.id"
      :name="item.name"
      :props="item.props"
    />
  </GridLayout>
</template>
<style scoped lang="less"></style>
