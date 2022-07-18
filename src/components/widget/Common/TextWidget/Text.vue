<script setup lang="ts" name="TextWidget">
import { nanoid } from "@/utils";
import {WidgetProps} from './'
import _ from 'lodash-es'
type Props = {
  id:string
  name:string
  props:WidgetProps
};
type Emit = {
  (e: "onChange", value: WidgetProps): WidgetProps
  (e:'update:props',props:WidgetProps):WidgetProps
};
const props = withDefaults(defineProps<Props>(), {
 
});
const emit = defineEmits<Emit>();
const isEidt = ref(false);
const handleEidt = () => {
  isEidt.value = true;
};
const _props = ref(_.cloneDeep(props.props))
watch(
  () => props.props,
  (val) => {
    _props.value = _.cloneDeep(val)
  },{immediate:true,deep:true}
);
const handleSubmit = () => {
  isEidt.value = false;
  emit("onChange", _props.value);
  emit('update:props',_props.value)
};
</script>
<template>
  <div class="w-full h-full flex"
  :style="{
    alignItems:`${_props.align}`,
    justifyContent:`${_props.justify}`
  }"
  >
    <p
      v-if="!isEidt"
      :style="[{ fontSize: _props.size + 'px', color: _props.color },{..._props.style}]"
      @dblclick="handleEidt"
    >
      {{ _props.value }}
    </p>
    <input
      v-if="isEidt"
      type="text"
      :style="{ fontSize: _props.size + 'px', color: _props.color }"
      v-model="_props.value"
      @keydown.enter="handleSubmit"
    />
  </div>
</template>
<style scoped lang="less"></style>
