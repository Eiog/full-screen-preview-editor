<script setup lang="ts" name="TextWidget">
import { nanoid } from "@/utils";
type Props = {
  id?: string;
  value?: string | number;
  size?: number;
  color?: string;
  style?: import("vue").CSSProperties;
};
type Emit = {
  (e: "update:value", value: Props["value"]): Props["value"];
};
const props = withDefaults(defineProps<Props>(), {
  id: nanoid(),
  value: "请输入文本",
  size: 16,
  color: "#000",
});
const emit = defineEmits<Emit>();
const isEidt = ref(false);
const handleEidt = () => {
  isEidt.value = true;
};
const inputVal = ref(props.value);
watch(
  () => props.value,
  (val) => {
    inputVal.value = val;
  }
);
const handleSubmit = () => {
  isEidt.value = false;
  emit("update:value", inputVal.value);
};
</script>
<template>
  <div class="w-full h-full">
    <p
      v-if="!isEidt"
      :style="{ fontSize: props.size + 'px', color: props.color }"
      @dblclick="handleEidt"
    >
      {{ props.value }}
    </p>
    <input
      v-if="isEidt"
      type="text"
      :style="{ fontSize: props.size + 'px', color: props.color }"
      v-model="inputVal"
      @keydown.enter="handleSubmit"
    />
  </div>
</template>
<style scoped lang="less"></style>
