<script setup lang='ts' name='LayoutSetting'>
import {NInputNumber} from 'naive-ui'
type Props = {
    value:Editor.Widget
}
type Emit = {
    (e:'update:value',value:Editor.Widget):Editor.Widget
}
const props = defineProps<Props>()
const emit = defineEmits<Emit>()
</script>
<template>
<div class="w-full h-full flex flex-col gap-2">
    <!-- <n-input-number v-model:value="props.value.x"  /> -->
    
</div>
</template>
<style scoped lang='less'>

</style>