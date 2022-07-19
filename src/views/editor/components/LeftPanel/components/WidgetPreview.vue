<script setup lang="ts" name="WidgetPreview">
import {nanoid} from '@/utils'
import { useDrag } from "vue3-dnd";
import { computed, unref } from "vue";
import { toRefs } from "@vueuse/core";
import { useEditorStore } from "@/store";
import _ from 'lodash-es'
const editorStore = useEditorStore();
type Props = {
  data: Editor.Widget;
};
const props = defineProps<Props>();
const [collect, drag] = useDrag(() => ({
  type: "box",
  item: () => ({
    data: props.data,
  }),
  end: (item, monitor) => {
    const dropResult = monitor.getDropResult();
    if (item && dropResult) {
      let data = _.cloneDeep(item.data)
      let id = nanoid()
      data.i = id
      data.id = id
      editorStore.dragIn(data);
      editorStore.canvasEditing = false
      editorStore.editWidgetId = data.id
    }
  },
  collect: (monitor) => ({
    isDragging: monitor.isDragging(),
    handlerId: monitor.getHandlerId(),
  }),
}));
const { isDragging } = toRefs(collect);

const opacity = computed(() => (unref(isDragging) ? 0.4 : 1));
</script>
<template>
  <div
    class="w-full h-20 bg-gray-100 rounded-md flex items-center justify-center gap-3 transition-shadow cursor-pointer"
    dark="bg-dark-200"
    hover="shadow-md"
    active="shadow-none"
    :style="{ opacity: opacity }"
    :ref="drag"
    role="Box"
  >
  <div class="w-16 h-16 overflow-hidden">
    <img class="w-full h-full object-cover" :src="props.data.cover" alt="">
  </div>
  <div class="flex flex-col">
    <p class="text-2xl">{{ props.data.label }}</p>
    <p>{{props.data.name}}</p>
  </div>
    
  </div>
</template>
<style scoped lang="less"></style>
