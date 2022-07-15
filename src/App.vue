<script setup lang="ts">
import { useAppStore } from "./store";
import { subscribeStore } from "./store";
import RiHomeHeartLine from "~icons/ri/home-heart-line";
import MaterialSymbolsSunny from "~icons/material-symbols/sunny";
import CilLanguage from "~icons/cil/language";
import PhMoonStars from "~icons/ph/moon-stars";
import SimpleIconsAboutdotme from "~icons/simple-icons/aboutdotme";
import MdiGithub from "~icons/mdi/github";
import { NTooltip } from "naive-ui";
import { useRouter } from "vue-router";
import { NaiveProvider } from "@/components";
const router = useRouter();
subscribeStore();
const appStore = useAppStore();

function changeLanguage() {
  appStore.language = appStore.language === "cn" ? "en" : "cn";
}
</script>
<template>
  <router-view v-slot="{ Component }">
    <naive-provider>
      <transition name="fade-transform" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </naive-provider>
  </router-view>
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
