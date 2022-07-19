<script setup lang="ts" name="Canvas">
import GridCanvas from "./components/GridCanvas.vue";
import { useDrop } from "vue3-dnd";
import { computed, unref } from "vue";
import { toRefs } from "@vueuse/core";
import { useEditorStore } from "@/store";
const editorStore = useEditorStore();
//画布拖拽
const canvasRef = ref();
const { x: canvasX, y: canvasY } = useDraggable(canvasRef, {
  initialValue: { x: -960, y: -500 },
  exact: true,
});


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
  unref(isActive) ? "#ddd" : unref(canDrop) ? "#eee" : editorStore.canvas.background
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
    if(editorStore.canvas.zoom<20) return
    editorStore.canvas.zoom-=2
  }else{
    if(editorStore.canvas.zoom>120) return
    editorStore.canvas.zoom+=2
  }
}
onMounted(()=>{
  addEventWheel()
})
onBeforeUnmount(()=>{
  removeEventWheel()
})
const handleCanvasEdit = (e:Event)=>{
  editorStore.canvasEditing = true
  editorStore.editWidgetId = ''
}
const handleWrapClick = ()=>{
  editorStore.canvasEditing = false
  editorStore.editWidgetId = ''
}
</script>
<template>
  <div
    ref="canvasRef"
    class="fixed w-200% h-200% flex items-center justify-center bg-gray-100 cursor-pointer cursor-move"
    dark="bg-dark-300"
    :style="{ transform: `translate3d(${canvasX}px,${canvasY}px,0)` }"
    @click.self="handleWrapClick"
  >
    <div
      class="w-320 h-180 bg-white cursor-default transition-all rounded-md"
      dark="bg-dark-50"
      :class="editorStore.canvasEditing ? 'shadow-xl' : 'shadow'"
      id="canvas"
      @click.self="handleCanvasEdit"
      :ref="drop"
      
      role="Dustbin"
      :style="[{
        background: backgroundColor,
        width: editorStore.canvasWidth + 'px',
        height: editorStore.canvasHeight + 'px',
        backgroundImage:`url(${editorStore.canvas.backgroundImage})`,
        backgroundSize:editorStore.canvas.backgroundOjectfit,
        backgroundPosition:'center',
        backgroundRepeat:editorStore.canvas.backgroundRepeat?'repeat':'no-repeat'
      }]"
    >
      <div class="w-full h-full pointer-events-none" ref="canvas">
        <GridCanvas />
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">

</style>
