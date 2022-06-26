<template>
  <div class="flex">
    <div>
      <el-avatar class="avatar-shadow dark:avatar-dark-shadow" size="large"
        src="https://avatars.githubusercontent.com/u/51857421?v=4">
      </el-avatar>
    </div>
    <div v-show="!isCollapse" class="flex flex-1 justify-center flex-col ml-15px">
      <div class="colorvar-my-c-shallow text-11px font-bold">Good Day👏</div>
      <h1 class="">Vitaliy D.</h1>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { isCollapse } from '@/hooks/useCollapse';
</script>

<script lang='ts'>
export default {
  name: 'PainUser'
}
</script>

<style lang='scss' scoped>
</style>