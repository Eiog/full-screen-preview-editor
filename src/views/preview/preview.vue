<script setup lang="ts" name="Preview">
import { useAppStore,useEditorStore } from '@/store';
const appStore = useAppStore()
const editStore = useEditorStore()
const route = useRoute()
const queryId = ref(route.query.id)
watch(()=>route.query,val=>{
  if(val) queryId.value = val.id
  
})
const data = ref()
const init = ()=>{
  if(!queryId.value){
    data.value = editStore.previewData
  }
}
</script>
<template>
  <div class="w-50 h-50">
    
  </div>
</template>
<style scoped lang="less"></style>
