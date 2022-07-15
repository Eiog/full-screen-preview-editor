<script setup lang="ts" name="LeftPanel">
type Props = {
  collapsed?: boolean;
};
type Emit = {
  (e: "onSelect", data: any): any;
};
const props = defineProps<Props>();
const emit = defineEmits<Emit>();
const collapsed = ref(false);
</script>
<template>
  <div
    class="fixed left-0 top-0 w-80 h-full flex flex-col bg-gray-100 transition-transform duration-300 ease-in-out"
    :class="collapsed ? '-translate-x-80' : ''"
  >
    <div
      class="absolute w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full shadow-md right-0 top-50% -translate-y-50% translate-x-50% transition-transform cursor-pointer"
      :class="collapsed?'!translate-x-110%':''"
      @click="collapsed = !collapsed"
    >
      <i class="i-ri-arrow-left-s-line inline-block text-3xl text-white transition-transform"
      :class="collapsed?'rotate-180':''"
      ></i>
    </div>
    <div class="w-full bg-gray-200 p-3">
      <h3>组件</h3>
      <div class="w-full h-full overflow-y-auto">
        

      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
