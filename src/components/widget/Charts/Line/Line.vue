<script setup lang="ts" name="LineWidget">
import { WidgetProps } from "./";
import _ from "lodash-es";
import { type ECOption, useECharts } from "@/hooks";
import defaultECOption from "./default.json";
import http from "@/http";
import qs from "qs";
type Props = {
  id: string;
  name: string;
  props: WidgetProps;
};
const props = withDefaults(defineProps<Props>(), {});
watch(
  () => props.props,
  (val) => {
    init(val);
  },
  { deep: true }
);
const chartOption = ref<ECOption>(defaultECOption as ECOption);
const readerJson = (file: File): Promise<object | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (data) => {
      return resolve(JSON.parse(data.target?.result as string));
    };
  });
};
const requestApi = (url: string, type = "get") => {
  return new Promise((resolve, reject) => {
    const query = qs.parse(url);
    http[type](url, query)
      .then((res) => {
        return resolve(res);
      })
      .catch(() => {
        return reject();
      });
  });
};
const intervalRef = ref<any>();
const initRequestApi = (url: string, type: string, interval = 500) => {
  intervalRef.value = setInterval(async () => {
    requestApi(url, type)
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        clearInterval(intervalRef.value);
      });
  }, interval);
};
const init = async (props: WidgetProps) => {
  if (props.static) {
    chartOption.value = props.staticData
      ? ((await readerJson(props.staticData)) as ECOption)
      : (defaultECOption as ECOption);
    return;
  }
  if (props.requestApi) {
    initRequestApi(props.requestApi, props.requestType, props.requestInterval);
  }
};
const dark = computed(() => (props.props.dark ? true : false));
const { domRef } = useECharts(chartOption, dark);
onBeforeUnmount(() => {
  clearInterval(intervalRef.value);
});
</script>
<template>
  <div ref="domRef" class="w-full h-full"></div>
</template>
<style scoped lang="less"></style>
