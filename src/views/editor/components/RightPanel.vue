<script setup lang="ts" name="RightPanel">
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
    class="fixed right-0 top-0 w-100 h-full flex flex-col bg-gray-100 transition-transform duration-300 ease-in-out"
    :class="collapsed ? 'translate-x-100' : ''"
  >
    <div
      class="absolute w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full shadow-md left-0 top-50% -translate-y-50% -translate-x-50% transition-transform cursor-pointer"
      :class="collapsed ? '!-translate-x-110%' : ''"
      @click="collapsed = !collapsed"
    >
      <i
        class="i-ri-arrow-right-s-line inline-block text-3xl text-white transition-transform"
        :class="collapsed ? 'rotate-180' : ''"
      ></i>
    </div>
    <div class="w-full bg-gray-200 p-3">
      <h3>属性</h3>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
