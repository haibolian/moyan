<template>
  <div :class="`h-100vh ${bg_grident}`">
    <div class="bg-white w-358px h-588px rounded-15px pl-50px pr-50px relative top-50% left-50% transform translate--50%">
      <h1 class="lh-200px text-center">MoYan</h1>
      <el-form :model="loginForm" labelPosition="top">
        <el-form-item for="und" label="username">
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
          cursor-pointer
          ${bg_grident}`"
          @click=""
        >
          Login
        </div>
      </div>
      <div class="text-center pt-40px">
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

</style>