<script setup lang="ts" name="Screen">
import { useAppStore, useProjectStore } from "@/store";
import { GridLayout, Widget } from "@/components";
import _ from "lodash-es";
const router = useRouter();
const route = useRoute();
const projectStore = useProjectStore();
const { isSupported, enter, exit, toggle } = useFullscreen();
const id = ref(route.query.id as string);
const initData = (id: string) => {
  if (id) {
    const item = projectStore.projectList?.find((item) => item.id === id);
    if (item) return _.cloneDeep(item);
  }
};
const data = ref<Editor.ProjectList>(initData(id.value)!);
const init = () => {
  if (isSupported) enter();
};
onMounted(() => {
  init();
});
const handleBack = () => {
  router.back();
  exit();
};
</script>
<template>
  <div class="w-full h-full flex items-center justify-center relative">
    <div
      class="absolute flex items-center justify-center left-3 top-3 rounded-full w-10 h-10 bg-black bg-opacity-10 text-black text-opacity-30 transition-colors cursor-pointer z-999"
      hover="bg-opacity-30 text-opacity-80"
      @click="handleBack"
    >
      <i class="i-ri-arrow-left-line inline-block text-2xl"></i>
    </div>
    <GridLayout
      :width="data.canvas.width"
      :height="data.canvas.height"
      :col="data.canvas.col"
      :row="data.canvas.row"
      :background="data.canvas.background"
    >
      <Widget
        v-for="(item, index) in data.canvasWidgetList"
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
  </div>
</template>
<style scoped lang="less"></style>
