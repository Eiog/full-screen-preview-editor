<script setup lang="ts" name="LeftPanel">
import ShrinkPanel from "../Layout/ShrinkPanel.vue";
import { WidgetList } from "@/components";
import WidgetPreview from "./components/WidgetPreview.vue";
import {nanoid} from '@/utils'
const widgetList = ref<Editor.Widget[]>([]);
const initWidget = () => {
  Object.values(WidgetList).forEach((item) => {
    let data:Editor.Widget = { ...item };
    data.id = nanoid()
    delete data.component
    if (item.schema) {
      Object.keys(item.schema).forEach((key) => {
        if(data.props&&item.schema) data.props[key] = item.schema[key].value;
      });
    }
    widgetList.value.push(data)
  });
};
initWidget();

</script>
<template>
  <ShrinkPanel :show="true" title="组件">
  <n-scrollbar class="w-full h-full">
  <div class="w-full flex flex-col gap-3">
    <WidgetPreview
      v-for="(item, index) in widgetList"
      :key="index"
      :data="item"
    />
    </div>
    </n-scrollbar>
  </ShrinkPanel>
</template>
<style scoped lang="less"></style>
