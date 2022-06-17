<template>
  <div :class="`h-100vh ${bg_grident}`">
    <div class="login-wrapper">
      <h1 class="lh-200px text-center">Login</h1>
      <el-form :model="loginForm" labelPosition="top">
        <el-form-item label="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="password">
          <el-input type="password" show-password v-model="loginForm.password"></el-input>
        </el-form-item>
      </el-form>
      <div class="form-wrapper">
        <div 
          :class="`
          text-center 
          p-10px 
          mt-40px 
          c-#fff 
          ${bg_grident}`">Login</div>
      </div>
      <div class="lh-88px text-center">
        Don't have account?
        <el-link type="primary" :underline="false" @click="">sign up</el-link>
      </div>
    </div>
  </div>
</template>  

<script setup lang="ts">
const bg_grident = ref('bg-gradient-to-tr from-startColor-500  to-endColor-500')
const loginForm = reactive({
  username: '',
  password: ''
})

</script>
<script lang="ts">
export default {
  name: 'Login'
}
</script>

<style scoped>
.login {
  height: 100vh;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}

.login-wrapper {
  background-color: #fff;
  width: 358px;
  height: 588px;
  border-radius: 15px;
  padding: 0 50px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>