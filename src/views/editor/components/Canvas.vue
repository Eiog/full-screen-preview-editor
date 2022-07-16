<script setup lang="ts" name="Canvas">
import {itemType} from './itemType'
import { useDrop } from 'vue3-dnd'
import { computed, unref } from 'vue'
import { toRefs } from '@vueuse/core'
const domRef = ref();
const { x, y, style } = useDraggable(domRef, {
  initialValue: { x: -960, y: -500 },
  exact: true,
});
console.log(x, y, style);
const isCanvasActive = ref(false);
const [collect, drop] = useDrop(() => ({
  accept: itemType.BOX,
  drop: () => ({ name: 'Dustbin' }),
  collect: monitor => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
}))
const { canDrop, isOver } = toRefs(collect)
const isActive = computed(() => unref(canDrop) && unref(isOver))
const backgroundColor = computed(() =>
  unref(isActive) ? 'darkgreen' : unref(canDrop) ? 'darkkhaki' : '#222'
)
</script>
<template>
  <div
    ref="domRef"
    class="fixed w-200% h-200% flex items-center justify-center bg-gray-100 cursor-pointer"
    dark="bg-dark-300"
    :style="{transform:`translate3d(${x}px,${y}px,0)`}"
    @click.self="isCanvasActive = false"
 >
    <div
      class="w-320 h-180 bg-white cursor-default transition-shadow rounded-md"
      dark="bg-dark-50"
      :class="isCanvasActive ? 'shadow-xl' : 'shadow'"
      @click="isCanvasActive = true"
      :ref="drop" role="Dustbin"
    >
    
    </div>
  </div>
</template>
<style scoped lang="less">

</style>
