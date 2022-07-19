<script setup lang="ts" name="RightPanel">
import ShrinkPanel from "../Layout/ShrinkPanel.vue";
import LayoutSetting from "./components/LayoutSetting.vue";
import CanvasSetting from "./components/CanvasSetting.vue";
import { useEditorStore } from "@/store";
import {
  NInput,
  NInputNumber,
  NUpload,
  NSelect,
  NSwitch,
  NColorPicker,
  NTimePicker,
} from "naive-ui";
const attrWidget = {
  string: NInput,
  number: NInputNumber,
  upload: NUpload,
  select: NSelect,
  switch: NSwitch,
  color: NColorPicker,
  time: NTimePicker,
};
const eidtorStore = useEditorStore();
const editSchema = computed(() => {
  let data: any[] = [];
  if (!eidtorStore.canvasWidgetList[eidtorStore.editWidgetIndex]) return data;
  Object.values(
    eidtorStore.canvasWidgetList[eidtorStore.editWidgetIndex].schema!
  ).forEach((item: any, index) => {
    item["key"] = Object.keys(
      eidtorStore.canvasWidgetList[eidtorStore.editWidgetIndex].schema!
    )[index];
    data.push(item);
  });
  return data;
});
const initAttrPanel = () => {};
</script>
<template>
  <ShrinkPanel position="right" :width="300" :show="true" title="配置面板">
    <div class="w-full h-full flex flex-col">
      <div class="w-full h-60%">
        <n-tabs type="line" animated>
          <n-tab-pane name="attribute" tab="属性">
            <div class="w-full h-full flex flex-col gap-3" v-if="!eidtorStore.canvasEditing && eidtorStore.editWidgetId" >
              <div class="w-full flex items-center py-1">
                <div class="w-20 flex items-center justify-end">
                  <span class="inline-block whitespace-nowrap text-justify"
                    >组件名字：</span
                  >
                </div>
                <div class="px-3">
                  <span>{{ eidtorStore.editItem.label }}</span>
                </div>
              </div>
              <div class="w-full flex items-center py-1">
                <div class="w-20 flex items-center justify-end">
                  <span class="inline-block whitespace-nowrap text-justify"
                    >组件ID：</span
                  >
                </div>
                <div class="px-3">
                  <span>{{ eidtorStore.editWidgetId }}</span>
                </div>
              </div>
              <div
                class="w-full flex items-center justify-start gap-3"
                v-for="(item, index) in editSchema"
                :key="index"
              >
                <div class="w-20 flex items-center justify-end">
                  <span class="inline-block whitespace-nowrap text-justify"
                    >{{ item.label }}：</span
                  >
                </div>
                <div class="flex-1">
                  <component
                    :is="attrWidget[item.type]"
                    v-model:value="eidtorStore.canvasWidgetList[eidtorStore.editWidgetIndex].props![item.key]"
                    :options="eidtorStore.canvasWidgetList[eidtorStore.editWidgetIndex].schema![item.key].options"
                  ></component>
                </div>
              </div>
            </div>
            <div class="" v-show="eidtorStore.canvasEditing">
              <CanvasSetting/>
            </div>
          </n-tab-pane>
          <n-tab-pane name="layout" tab="布局">
            <!-- <LayoutSetting v-model:value="eidtorStore.canvasWidgetList[eidtorStore.editWidgetIndex]" /> -->
          </n-tab-pane>
          <n-tab-pane name="style" tab="样式"> Hey Jude </n-tab-pane>
        </n-tabs>
      </div>
      <div class="w-full h-40%">
        <p class="w-full h-10 bg-gray-100 flex items-center px-3">图层</p>
        <div class="w-full h-full">
          <div
            class=""
            v-for="(item, index) in eidtorStore.canvasWidgetList"
            :key="index"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </ShrinkPanel>
</template>
<style scoped lang="less"></style>
