<script setup lang="ts" name="ShrinkPanel">
import { StyleHTMLAttributes } from "vue";

type Props = {
  position?: "left" | "right";
  show: boolean;
  width?: number;
  dark?: boolean;
  title?: string;
};
type Emit = {
  (e: "update:show", show: boolean): boolean;
};
const props = withDefaults(defineProps<Props>(), {
  position: "left",
  width: 300,
});
const emit = defineEmits<Emit>();
const collapsed = ref(false);
const positionStyleCollapsed = computed(() => {
  return collapsed.value
    ? props.position === "left"
      ? `translateX(-${props.width}px)`
      : `translateX(${props.width}px)`
    : ``;
});
const bandStyle = computed(() => {
  let style: import("vue").CSSProperties = {};
  style.width = props.width + "px";
  style[props.position] = 0;
  if (collapsed.value) {
    style.transform =
      props.position === "left"
        ? `translateX(-${props.width}px)`
        : `translateX(${props.width}px)`;
  } else {
    style.transform =
      props.position === "left" ? `translateX(0)` : `translateX(0)`;
  }
  return style;
});
const bandBtnStyle = computed(() => {
  let style: import("vue").CSSProperties = {};
  if (props.position === "left") style.right = 0;
  if (props.position === "right") style.left = 0;
  if (!collapsed.value)
    style.transform =
      props.position === "left" ? `translateX(50%)` : `translateX(-50%)`;
  if (collapsed.value)
    style.transform =
      props.position === "left" ? `translateX(110%)` : `translateX(-110%)`;
  return style;
});
watch(
  () => props.show,
  (val) => {
    collapsed.value = !val;
    emit("update:show", val);
  },
  { immediate: true }
);
</script>
<template>
  <div
    class="fixed top-0 h-full flex flex-col bg-white shadow-xl duration-300 ease-in-out z-998"
    :style="[bandStyle]"
    dark="bg-dark-500 text-gray-100"
  >
    <div
      class="absolute w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-500 rounded-full shadow-md top-50% -translate-y-50% transition-all cursor-pointer hover:bg-gray-100 active:bg-gray-300"
      :style="[bandBtnStyle]"
      dark="bg-dark-200 text-gray-100 hover:bg-dark-100 active:bg-dark-300"
      @click="collapsed = !collapsed"
    >
      <i
        class="i-ri-arrow-left-s-line inline-block text-3xl transition-transform"
        :class="collapsed ? 'rotate-180' : ''"
      ></i>
    </div>
    <div class="w-full bg-gray-100 p-3" dark="bg-dark-200 text-white">
      <slot name="title">
        <h3>{{ props.title }}</h3>
      </slot>
    </div>
    <div class="w-full h-full p-3">
      <slot />
    </div>
  </div>
</template>
<style scoped lang="less"></style>
