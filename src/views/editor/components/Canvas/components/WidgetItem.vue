<script setup lang="ts" name="WidgetItem">
import {markRaw} from 'vue'
import {useEditorStore} from '@/store'
const eidtorStore = useEditorStore()
type Props = {
    id:string
};
const props = defineProps<Props>()

const handleWidgetClick = (e:Event)=>{
    eidtorStore.canvasEditing = false
    eidtorStore.editWidgetId = props.id
}
const isEdit = computed(()=>{
    return eidtorStore.editWidgetId === props.id
})
const target = ref(null)
// onClickOutside(target, (event) =>{
//     eidtorStore.editWidgetId = ''
// })
</script>
<template>
<div ref="target" class="w-full h-full" @click.stop="handleWidgetClick" >
    <slot/>
</div>
</template>
<style scoped lang="less"></style>
