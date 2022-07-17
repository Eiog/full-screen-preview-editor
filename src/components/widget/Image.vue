<script setup lang="ts" name="ImageWidget">
import {nanoid} from '@/utils'
type Props = {
    id:string
    width:number|string
    height:number|string
    objectFit:'object-contain'|'object-cover'|'object-fill'|'object-none'|'object-scale-down'
    url:string
};
type Emit = {
    (e:'onClick',id:string):string
}
const props = withDefaults(defineProps<Props>(),{
    id:nanoid()
})
</script>
<template>
  <div class="object-cover"></div>
</template>
<style scoped lang="less">
</style>
