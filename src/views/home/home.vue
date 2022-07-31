<script setup lang="ts" name="Home">
import { useAppStore, useEditorStore, useProjectStore } from "@/store";
import ProjectCard from "./components/ProjectCard.vue";
import autoAnimate from "@formkit/auto-animate"
const appStore = useAppStore();
const editStore = useEditorStore();
const projectStore = useProjectStore();
const router = useRouter();
const handleRouterToEditor = () => {
  router.push("/editor");
};
const options = [
  {
    label: "退出",
    key: "logout",
  },
];
const handleSelect = (key: any) => {
  if (key === "logout") {
    window.$dialog.warning({
      title: "确认退出吗?",
      negativeText: "取消",
      positiveText: "确定",
      onPositiveClick: () => {
        handleLogout();
      },
    });
  }
};
const handleLogout = () => {
  appStore.logout();
  router.push("/login");
};
const cardRef = ref()
onMounted(()=>{
  autoAnimate(cardRef.value)
})
</script>
<template>
  <div
    class="w-full h-full flex flex-col gap-2 px-40 py-10 bg-gradient-to-t from-gray-50 to-gray-100"
  >
    <div class="flex items-center">
      <h1 class="flex-1 font-normal text-3xl">Project Management</h1>
      <div class="flex items-center">
        <template v-if="appStore.isLogin">
          <n-dropdown trigger="hover" :options="options" @select="handleSelect">
            <div class="flex items-center gap-3 cursor-pointer">
              <div class="w-10 h-10 rounded-full overflow-hidden">
                <img
                  class="w-full h-full object-cover"
                  :src="appStore.user?.avatar"
                  alt=""
                />
              </div>
              <p class="text-xl text-gray-600">{{ appStore.user?.name }}</p>
            </div>
          </n-dropdown>
        </template>
        <template v-if="!appStore.isLogin">
          <p class="text-xl text-gray-600 cursor-pointer">未登录</p>
        </template>
      </div>
    </div>
    <div
      class="w-full h-full flex flex-wrap p-2 rounded-xl shadow-2xl shadow-gray-200 bg-white"
      ref="cardRef"
    >
      <div class="w-1/3 h-50 p-2" lg="w-1/4" xl="w-1/6">
        <div
          class="w-full h-full rounded-xl flex items-center justify-center cursor-pointer bg-gray-100 shadow-md shadow-transparent transition-shadow"
          hover=" shadow-gray-200"
          @click="handleRouterToEditor"
        >
          <i class="i-ri-add-fill inline-block text-6xl text-gray-500"></i>
        </div>
      </div>
      <div
        class="w-1/3 h-50 p-2"
        lg="w-1/4"
        xl="w-1/6"
        v-for="(item, index) in projectStore.projectList"
        :key="index"
      >
        <project-card
          :id="item.id"
          :name="item.name"
          :author="item.author"
        ></project-card>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
