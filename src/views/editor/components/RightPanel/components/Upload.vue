<script setup lang="ts" name="Upload">
import { NUpload, type UploadFileInfo, UploadInst } from "naive-ui";
type Props = {
  value: File;
  accept: string;
  name?: string;
};
type Emit = {
  (e: "update:value", data: File | null | undefined): File | null | undefined;
};
const props = defineProps<Props>();
const emit = defineEmits<Emit>();
const uploadRef = ref<UploadInst>();
const onChange = ({ file }: { file: UploadFileInfo }) => {
    if(file.status==='removed') return emit('update:value',null)
  emit("update:value", file.file);
};

</script>
<template>
  <div class="">
    <NUpload
      ref="uploadRef"
      :accept="props.accept"
      :name="props.name"
      :max="1"
      @change="onChange"
    >
      <n-button>上传文件</n-button>
    </NUpload>
  </div>
</template>
<style scoped lang="less"></style>
