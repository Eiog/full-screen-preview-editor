<script setup lang="ts" name="Home">
const router = useRouter()
const handleRouterToEditor = ()=>{
  router.push('/editor')
}
</script>
<template>
  <div
    class="w-full h-full flex flex-col gap-2 px-40 py-10 bg-gradient-to-t from-gray-50 to-gray-100"
  >
    <h1 class="font-normal text-3xl">Project Management</h1>
    <div
      class="w-full h-full flex flex-wrap p-2 rounded-xl shadow-2xl shadow-gray-200 bg-white"
    >
      <div class="w-1/6 h-50 p-2">
        <div
          class="w-full h-full rounded-xl flex items-center justify-center cursor-pointer bg-gray-100 shadow-md shadow-transparent transition-shadow"
            hover=" shadow-gray-200"
            @click="handleRouterToEditor"
        >
          <i class="i-ri-add-fill inline-block text-6xl text-gray-500"></i>
        </div>
      </div>
      <div class="w-1/6 h-50 p-2" v-for="(item, index) in 20" :key="index">
        <div
          class="w-full h-full rounded-xl flex items-center justify-center cursor-pointer bg-gray-100 shadow-md shadow-transparent transition-shadow"
        hover=" shadow-gray-200"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
