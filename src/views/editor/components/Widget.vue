<script setup lang="ts" name="Widget">
import {itemType} from './itemType'
import { useDrag } from "vue3-dnd";
import { computed, unref } from 'vue'
import { toRefs } from '@vueuse/core'
type Props = {
  id: string;
  name: string;
};
const props = defineProps<Props>();
const [collect, drag] = useDrag(() => ({
  type: itemType.BOX,
  item: () => ({
    name: props.id,
  }),
  end: (item, monitor) => {
    const dropResult = monitor.getDropResult();
    if (item && dropResult) {
      console.log(item);
    }
  },
  collect: (monitor) => ({
    isDragging: monitor.isDragging(),
    handlerId: monitor.getHandlerId(),
  }),
}));
const { isDragging } = toRefs(collect)

const opacity = computed(() => (unref(isDragging) ? 0.4 : 1))
</script>
<template>
  <div class="w-full h-full bg-gray-100" :ref="drag" role="Box" :data-testid="`box-${id}`">{{props.name}}</div>
</template>
<style scoped lang="less"></style>
