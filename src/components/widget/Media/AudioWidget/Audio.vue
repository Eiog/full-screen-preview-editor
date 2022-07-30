<script setup lang="ts" name="AudioWidget">
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
const domRef = ref<HTMLVideoElement>();
const play = () => {
  domRef.value?.play();
};
const pause = () => {
  domRef.value?.pause();
};
onMounted(() => {
  watch(
    () => props.props.autoplay,
    (val) => {
      val ? play() : pause();
    }
  );
});
const paused = ref(true);
const handlePlayClick = () => {
  paused.value = !domRef.value!.paused;
  domRef.value?.paused ? domRef.value.play() : domRef.value?.pause();
};
</script>
<template>
  <div class="w-full h-full overflow-hidden relative">
    <div 
    v-if="!_props.controls"
    class="absolute left-0 top-0 rotate w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-t from-dark-900 via-dark-50 to-dark-900 cursor-pointer"
    :style="{animationPlayState:!paused?'running':'paused'}"
    @click="handlePlayClick"
    >
      <div class="w-50% h-50% flex items-center justify-center rounded-full bg-gray-50">
        <i class="inline-block text-xl i-ri-music-fill"></i>
      </div>
    </div>
    <audio
      ref="domRef"
      :src="_props.url"
      :autoplay="_props.autoplay"
      :loop="_props.loop"
      :muted="_props.muted"
      :controls="_props.controls"
    ></audio>
  </div>
</template>
<style scoped lang="less">
.rotate{
  animation: rotate 3s linear infinite normal ;
}
@keyframes rotate{
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
}
</style>
