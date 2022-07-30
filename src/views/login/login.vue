<script setup lang="ts" name="Login">
import { FormRules, FormInst } from "naive-ui";
import Logo from "@/components/common/Logo.vue";
import VerifyCode from "./components/VerifyCode.vue";
import { getImgCodeRule } from '@/utils';
import {loginApi} from '@/api'
type FormValue = {
  account: string;
  password: string;
  code: string;
};
const route = useRoute()
const router = useRouter()
const fromRoute = ref(route.redirectedFrom?.path)

const formRef = ref<FormInst | null>(null);
const formValue = ref<FormValue>({
  account: "",
  password: "",
  code: "",
});
const verifyCode = ref("");
const rules: FormRules = {
  account: { required: true, message: "请输入用户名", trigger: ["blur"] },
  password: { required: true, message: "请输入密码", trigger: ["blur"] },
  code:getImgCodeRule(verifyCode)
};
const handleLogin = (e: MouseEvent)=>{
  e.preventDefault();
  formRef.value?.validate(err=>{
    if(err) return window.$message.error('请输入内容')
    loginApi.login(formValue.value).then((res:any)=>{
      window.$message.success(`欢迎回来${res.name}`)
      router.push(fromRoute.value??'/')
    })
  })
}
</script>
<template>
  <div
    class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200"
  >
    <div class="w-md rounded-10 bg-white p-6">
      <div class="w-full flex gap-3 items-center justify-center py-5">
        <Logo :width="50" :height="50" />
        <p class="font-normal text-4xl text-orange-600">Editor</p>
      </div>
      <div class="">
        <n-form ref="formRef" :model="formValue" :rules="rules">
          <n-form-item label="用户名" path="account">
            <n-input
              v-model:value="formValue.account"
              placeholder="输入用户名"
              @keyup.enter="handleLogin"
            />
          </n-form-item>
          <n-form-item label="密码" path="password">
            <n-input
              type="password"
              v-model:value="formValue.password"
              placeholder="输入密码"
              @keyup.enter="handleLogin"
            />
          </n-form-item>
          <n-form-item label="验证码" path="code">
            <div class="w-full flex gap-3">
              <div class="flex-1 flex items-center">
                <n-input
                  v-model:value="formValue.code"
                  placeholder="输入验证码"
                  @keyup.enter="handleLogin"
                />
              </div>
              <div class="flex items-center rounded-sm overflow-hidden">
                <VerifyCode :height="34" v-model:code="verifyCode" />
              </div>
            </div>
          </n-form-item>
          <n-form-item>
            <n-button type="primary" block @click="handleLogin">登录</n-button>
          </n-form-item>
        </n-form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
