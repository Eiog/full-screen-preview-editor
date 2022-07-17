<script setup lang="ts" name="Canvas">
import GridCanvas from "./GridCanvas.vue";
import { useDrop } from "vue3-dnd";
import { computed, unref } from "vue";
import { toRefs } from "@vueuse/core";
import { useEditorStore } from "@/store";
const eidtorStore = useEditorStore();
//画布拖拽
const canvasRef = ref();
const { x: canvasX, y: canvasY } = useDraggable(canvasRef, {
  initialValue: { x: -960, y: -500 },
  exact: true,
});

const isCanvasActive = ref(false);

const [collect, drop] = useDrop(() => ({
  accept: "box",
  drop: () => ({ name: "Dustbin" }),
  collect: (monitor) => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
}));
const { canDrop, isOver } = toRefs(collect);
const isActive = computed(() => unref(canDrop) && unref(isOver));
const backgroundColor = computed(() =>
  unref(isActive) ? "#ddd" : unref(canDrop) ? "#eee" : "#fff"
);
const canvas = ref()
const { isOutside } = useMouseInElement(canvas)
const addEventWheel = ()=>{
  window.addEventListener('mousewheel',onMouseWheel)
}
const removeEventWheel = ()=>{
  window.removeEventListener('mousewheel',onMouseWheel)
}
const onMouseWheel = (ev)=>{
  if(isOutside.value) return
  ev = ev || window.event;
  let down = true
  down = ev.wheelDelta ? ev.wheelDelta < 0 : ev.detail > 0;
  if(down){
    if(eidtorStore.canvas.zoom<20) return
    eidtorStore.canvas.zoom-=2
  }else{
    if(eidtorStore.canvas.zoom>120) return
    eidtorStore.canvas.zoom+=2
  }
}
onMounted(()=>{
  addEventWheel()
})
onBeforeUnmount(()=>{
  removeEventWheel()
})
</script>
<template>
  <div
    ref="canvasRef"
    class="fixed w-200% h-200% flex items-center justify-center bg-gray-100 cursor-pointer cursor-move"
    dark="bg-dark-300"
    :style="{ transform: `translate3d(${canvasX}px,${canvasY}px,0)` }"
    @click.self="isCanvasActive = false"
  >
    <div
      class="w-320 h-180 bg-white cursor-default transition-all rounded-md"
      dark="bg-dark-50"
      :class="isCanvasActive ? 'shadow-xl' : 'shadow'"
      @click="isCanvasActive = true"
      :ref="drop"
      
      role="Dustbin"
      :style="{
        background: backgroundColor,
        width: eidtorStore.canvasWidth + 'px',
        height: eidtorStore.canvasHeight + 'px',
      }"
    >
      <div class="w-full h-full" ref="canvas">
        <GridCanvas />
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">

</style>
