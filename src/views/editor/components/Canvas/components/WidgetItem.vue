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
<div ref="target" class="w-full h-full relative" @click.stop="handleWidgetClick" >
    <div v-if="isEdit"
    class="absolute -top-10px -right-10px w-20px h-20px flex items-center justify-center bg-white rounded-full shadow-md z-10 cursor-pointer transition-transform"
    hover="scale-110"
    @click="eidtorStore.removeWidget(props.id)"
    >
        <i class="i-ri-close-fill inline-block text-lg"></i>
    </div>
    <slot/>
</div>
</template>
<style scoped lang="less"></style>
