<script setup lang='ts' name='CanvasPanel'>
import { useEditorStore } from '@/store';
const editorStore = useEditorStore()
</script>
<template>
    <div class="w-full h-full">
        <n-form-item label="画布宽(px)" label-placement="left" label-align="right" label-width="100" >
            <n-input-number :step="20" v-model:value="editorStore.canvas.width" />
        </n-form-item>
        <n-form-item label="画布高(px)" label-placement="left" label-align="right" label-width="100" >
            <n-input-number :step="20" v-model:value="editorStore.canvas.height" />
        </n-form-item>
        <n-form-item label="列(col)" label-placement="left" label-align="right" label-width="100" >
            <n-input-number :step="2" v-model:value="editorStore.canvas.col" />
        </n-form-item>
        <n-form-item label="行(row)" label-placement="left" label-align="right" label-width="100" >
            <n-input-number :step="2" v-model:value="editorStore.canvas.row" />
        </n-form-item>
        <n-form-item label="背景颜色" label-placement="left" label-align="right" label-width="100" >
            <n-color-picker v-model:value="editorStore.canvas.background" :show-alpha="false" />
        </n-form-item>
        <n-form-item label="背景图片" label-placement="left" label-align="right" label-width="100" >
            <n-input v-model:value="editorStore.canvas.backgroundImage" />
        </n-form-item>
        <n-form-item v-if="editorStore.canvas.backgroundImage" label="背景模式" label-placement="left" label-align="right" label-width="100" >
            <n-select v-model:value="editorStore.canvas.backgroundOjectfit" :options="editorStore.canvas.backgroundOjectfitOptions" />
        </n-form-item>
    </div>
</template>
<style scoped lang='less'>

</style>