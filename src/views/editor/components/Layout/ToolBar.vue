<script setup lang='ts' name='ToolBar'>
const router = useRouter()
</script>
<template>
<div class="fixed flex items-center gap-3 left-50% top-5 -translate-x-50%  h-14 px-2 bg-white bg-opacity-60 backdrop-blur-md text-gray-500 text-base select-none rounded-xl shadow-lg whitespace-nowrap z-999"
    dark="bg-neutral-600 bg-opacity-60 text-gray-400"
>
    <div class="flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
    hover="bg-black bg-opacity-10"
    active="bg-black bg-opacity-20"
    @click="router.back()"
    >
        <i class="i-ri-arrow-left-line"></i>
        <span>返回</span>
    </div>
    <div class="h-60% w-1px bg-gray-300"></div>
    <div class="flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
    hover="bg-black bg-opacity-10"
    active="bg-black bg-opacity-20"

    >
        <i class="i-ri-arrow-go-back-fill"></i>
        <span>撤销</span>
    </div>
    <div class="flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
    hover="bg-black bg-opacity-10"
    active="bg-black bg-opacity-20"
    >
        <i class="i-ri-arrow-go-forward-fill"></i>
        <span>恢复</span>
    </div>
    <div class="flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
    hover="bg-black bg-opacity-10"
    active="bg-black bg-opacity-20"
    >
        <i class="i-ri-dashboard-fill"></i>
        <span>导入</span>
    </div>
    <div class="flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
    hover="bg-black bg-opacity-10"
    active="bg-black bg-opacity-20"
    >
        <i class="i-ri-download-cloud-2-fill"></i>
        <span>导出</span>
    </div>
    <div class="h-60% w-1px bg-gray-300"></div>
    <div class="flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
    hover="bg-black bg-opacity-10"
    active="bg-black bg-opacity-20"
    >
        <i class="i-ri-save-fill"></i>
        <span>保存</span>
    </div>
    <div class="flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
    hover="bg-black bg-opacity-10"
    active="bg-black bg-opacity-20"
    @click="router.push('/preview')"
    >
        <i class="i-ri-apps-fill"></i>
        <span>预览</span>
    </div>
    <div class="flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer transition-colors"
    hover="bg-black bg-opacity-10"
    active="bg-black bg-opacity-20"
    >
        <i class="i-ri-share-fill"></i>
        <span>分享</span>
    </div>

</div>
</template>
<style scoped lang='less'>

</style>