<script setup lang="ts">
import { useAppStore } from "./store";
import { subscribeStore } from "./store";
import { NaiveProvider } from "@/components";
subscribeStore();
const appStore = useAppStore()
</script>
<template>
  <div class="w-full h-full overflow-hidden bg-gray-100"
  dark="bg-dark-300"
  >
    <router-view v-slot="{ Component }">
    <n-config-provider class="h-full" :theme="appStore.naiveDarkMode">
      <naive-provider>
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="[appStore.editorKeepAlive?'Editor':'']" >
            <component :is="Component"></component>
          </keep-alive>
        </transition>
      </naive-provider>
      </n-config-provider>
    </router-view>
  </div>
</template>

<style lang="less">
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s ease-in-out;
}

.fade-transform-enter-from {
  transform: scale(0.9);
  opacity: 0;
}

.fade-transform-leave-to {
  transform: scale(1.1);
  opacity: 0;
}
</style>
