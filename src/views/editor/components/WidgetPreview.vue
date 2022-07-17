<script setup lang="ts" name="Widget">
import {nanoid} from '@/utils'
import { useDrag } from "vue3-dnd";
import { computed, unref } from "vue";
import { toRefs } from "@vueuse/core";
import { useEditorStore } from "@/store";
import _ from 'lodash-es'
const eidtorStore = useEditorStore();
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
      data.id = id
      data.i = id
      eidtorStore.dragIn(data);
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
    class="w-full h-20 bg-gray-100 rounded-md text-xl flex items-center justify-center transition-shadow"
    hover="shadow-md"
    active="shadow-none"
    :style="{ opacity: opacity }"
    :ref="drag"
    role="Box"
  >
    {{ props.data.name }}
  </div>
</template>
<style scoped lang="less"></style>
