<script setup lang="ts" name="VideoWidget">
import { WidgetProps } from "./";
import _ from "lodash-es";
type Props = {
  id: string;
  name: string;
  props: WidgetProps;
};
const props = withDefaults(defineProps<Props>(), {});

const _props = ref(_.cloneDeep(props.props));
watch(
  () => props.props,
  (val) => {
    _props.value = _.cloneDeep(val);
  },
  { immediate: true, deep: true }
);
const domRef = ref<HTMLVideoElement>()
const play = ()=>{
    domRef.value?.play()
}
const pause = ()=>{
    domRef.value?.pause()
}
onMounted(()=>{
    watch(()=>props.props.autoplay,val=>{
        val?play():pause()
    })
})
const paused = ref(false)
const handlePlayClick = ()=>{
  paused.value = domRef.value!.paused
  domRef.value?.paused?domRef.value.play():domRef.value?.pause()
}
</script>
<template>
  <div class="w-full h-full overflow-hidden relative group">
    <div class="absolute w-12 h-12 flex items-center justify-center bg-black bg-opacity-60 opacity-0 rounded-full backdrop-blur-sm left-50% top-50% -translate-50% transition-opacity cursor-pointer z-9"
    group-hover="!opacity-100"
    @click="handlePlayClick"
    >
      <i class="text-white opacity-80 text-3xl inline-block " :class="paused?'i-ri-pause-fill':'i-ri-play-fill'" ></i>
    </div>
    <video
    ref="domRef"
      class="w-full h-full"
      :src="_props.url"
      :poster="_props.poster"
      :autoplay="_props.autoplay"
      :loop="_props.loop"
      :muted="_props.muted"
      :controls="_props.controls"
    ></video>
  </div>
</template>
<style scoped lang="less"></style>
