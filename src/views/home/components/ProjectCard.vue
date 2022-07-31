<script setup lang="ts" name="ProjectCard">
import {useProjectStore} from '@/store'
type Props = {
  id: string;
  name: string;
  author: string;
};
type Emit = {
  (e: "onClick", id: string): void;
  (e: "onDelete", id: string): void;
  (e: "onEdit", id: string): void;
};
const projectStore = useProjectStore()
const router = useRouter();
const props = defineProps<Props>();
const handleClick = (id: string) => {
  router.push(`/screen?id=${id}`);
};
const handleDelete = (id: string) => {
  projectStore.remove(id).then(res=>{
    window.$message.success('删除成功')
  }).catch((e)=>{
    window.$message.error('失败')
  })
};
const handleEdit = (id: string) => {
  router.push(`/editor?id=${id}`);
};
</script>
<template>
  <div
    class="group w-full h-full relative overflow-hidden p-3 rounded-xl flex flex-col items-center justify-center cursor-pointer bg-gray-100 shadow-md shadow-transparent transition-shadow"
    hover=" shadow-gray-200"
  >
    <div
      class="absolute inset-0 backdrop-blur-md flex items-center justify-center bg-black bg-opacity-30 z-9 invisible opacity-0 transition-opacity"
      group-hover="visible opacity-100"
    >
      <div class="flex items-center justify-center gap-3">
        <div class="icon" @click="handleClick(props.id)">
          <i class="i-ri-eye-fill inline-block text-2xl"></i>
        </div>
        <div class="icon" @click="handleEdit(props.id)">
          <i class="i-ri-edit-2-fill inline-block text-2xl"></i>
        </div>
        <div class="icon" @click="handleDelete(props.id)">
          <i class="i-ri-delete-bin-2-fill inline-block text-2xl"></i>
        </div>
      </div>
    </div>
    <p class="self-start">ID:{{ props.id }}</p>
    <h1 class="flex-1 flex items-center justify-center">{{ props.name }}</h1>
    <p class="self-end">Author:{{ props.author }}</p>
  </div>
</template>
<style scoped lang="less">
.icon{
  @apply w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-30 text-white text-opacity-90 transition-colors  hover:(bg-black bg-opacity-10 text-black text-opacity-60 ) ;
}
</style>
