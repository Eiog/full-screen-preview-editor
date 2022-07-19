<script setup lang='ts' name='LayoutPanel'>
import {NInputNumber} from 'naive-ui'
import { useEditorStore } from '@/store';
const editorStore = useEditorStore()
const {canvasWidgetList,editWidgetIndex} = storeToRefs(editorStore)
</script>
<template>
<div class="w-full h-full flex flex-col">
    <n-form-item label="组件宽" label-placement="left">
        <n-input-number v-model:value="canvasWidgetList[editWidgetIndex].width" />
    </n-form-item>
    <n-form-item label="组件高" label-placement="left">
        <n-input-number v-model:value="canvasWidgetList[editWidgetIndex].height" />
    </n-form-item>
    <n-form-item label="栏格(x)" label-placement="left">
        <n-input-number v-model:value="canvasWidgetList[editWidgetIndex].x" />
    </n-form-item>
    <n-form-item label="栏格(y)" label-placement="left">
        <n-input-number v-model:value="canvasWidgetList[editWidgetIndex].y" />
    </n-form-item>
    <n-form-item label="栏格(w)" label-placement="left">
        <n-input-number v-model:value="canvasWidgetList[editWidgetIndex].w" />
    </n-form-item>
    <n-form-item label="栏格(h)" label-placement="left">
        <n-input-number v-model:value="canvasWidgetList[editWidgetIndex].h" />
    </n-form-item>
</div>
</template>
<style scoped lang='less'>

</style>