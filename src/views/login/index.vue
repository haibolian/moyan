<template>
  <div :class="`h-100vh ${bg_grident}`">
    <div
      class="bg-#ffffff80  backdrop-filter backdrop-blur-10px w-358px h-588px rounded-15px pl-50px pr-50px relative top-50% left-50% transform translate--50%">
      <h1 class="lh-100px text-center">MoYan</h1>
      <!-- login panel -->
      <div key="login" v-if="isLogin" class="mt-50px">
        <el-form ref="login_ref" :model="loginForm" :rules="loginRules" labelPosition="top" size="large">
          <el-form-item prop="username">
            <template #label>
              <IconifyOnline icon="bxs:user" />
              <span> 用户名</span>
            </template>
            <el-input maxlength="20" v-model="loginForm.username" />
          </el-form-item>
          <el-form-item prop="password">
            <template #label>
              <IconifyOnline icon="bxs:lock-alt" />
              <span> 密码</span>
            </template>
            <el-input type="password" clearable show-password maxlength="30" v-model="loginForm.password" />
          </el-form-item>
        </el-form>
      </div>
      <!-- registry panel -->
      <div key="registry" v-else class="mt-10px">
        <el-form ref='registry_ref' :model="registryForm" :rules="registryRules" labelPosition="top" size="large">
          <el-form-item prop="username">
            <template #label>
              <IconifyOnline icon="bxs:user" />
              <span> 用户名</span>
            </template>
            <el-input maxlength="20" v-model="registryForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <template #label>
              <IconifyOnline icon="bxs:lock-alt" />
              <span> 密码</span>
            </template>
            <el-input type="password" clearable show-password maxlength="30" v-model="registryForm.password"></el-input>
          </el-form-item>
          <el-form-item prop="confirmPassword">
            <template #label>
              <IconifyOnline icon="bxs:lock-alt" />
              <span> 确认密码</span>
            </template>
            <el-input type="password" clearable show-password maxlength="30" v-model="registryForm.confirmPassword">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <!-- button login & regiresty  -->
      <div class="form-wrapper">
        <div v-if="isLogin" :class="`text-center p-8px mt-40px c-#fff cursor-pointer  ${bg_grident}`"
          @click="handleLogin">
          登录
        </div>
        <div v-else :class="` text-center  p-8px  mt-40px c-#fff cursor-pointer ${bg_grident}`" @click="handleRegistry">
          注册
        </div>
      </div>
      <div class="flex justify-between pt-40px">
        <el-link v-if="isLogin" type="primary" :underline="false" @click="jumpToRegistry">注册账号</el-link>
        <span v-else>
          <span class="align-middle">已有账号？</span>
          <el-link type="primary" :underline="false" @click="jumpToLogin">点此登录</el-link>
        </span>
        <el-link :underline="false" @click="handleForgetPassword">忘记密码</el-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { successMessage } from "@/utils/message"
import { useLoginForm } from './login'
import { useRegistryForm } from './registry'
const bg_grident = ref('bg-gradient-to-tr from-startColor-500  to-endColor-500')
const {
  loginForm,
  loginRules,
  handleLogin,
  login_ref
} = useLoginForm()
const {
  registryForm,
  registryRules,
  registry_ref,
  handleRegistry
} = useRegistryForm()

// 登录注册转换
const currentMode = ref('login')
const isLogin = computed(() => currentMode.value === 'login')

const jumpToLogin = () => {
  currentMode.value = 'login'
  registry_ref.value.resetFields()
}
const jumpToRegistry = () => {
  currentMode.value = 'registry'
  login_ref.value.resetFields()
}


// forget password
const handleForgetPassword = () => {
  successMessage('test')
}

</script>
<script lang="tsx">
export default {
  name: 'Login'
}
</script>

<style scoped>
</style>