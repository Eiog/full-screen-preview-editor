<script setup lang='ts' name='CanvasSetting'>
import { useEditorStore } from '@/store';
const eidtorStore = useEditorStore()
</script>
<template>
<div class="">
    <div class="">
        <n-form-item label="画布宽(px)" label-placement="left" label-align="right" label-width="100" >
            <n-input-number :step="20" v-model:value="eidtorStore.canvas.width" />
        </n-form-item>
        <n-form-item label="画布高(px)" label-placement="left" label-align="right" label-width="100" >
            <n-input-number :step="20" v-model:value="eidtorStore.canvas.height" />
        </n-form-item>
        <n-form-item label="列(col)" label-placement="left" label-align="right" label-width="100" >
            <n-input-number :step="2" v-model:value="eidtorStore.canvas.col" />
        </n-form-item>
        <n-form-item label="行(row)" label-placement="left" label-align="right" label-width="100" >
            <n-input-number :step="2" v-model:value="eidtorStore.canvas.row" />
        </n-form-item>
        <n-form-item label="背景颜色" label-placement="left" label-align="right" label-width="100" >
            <n-color-picker v-model:value="eidtorStore.canvas.background" :show-alpha="false" />
        </n-form-item>
    </div>
</div>
</template>
<style scoped lang='less'>

</style>