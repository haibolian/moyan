<template>
  <div class="flex">
    <div>
      <!-- avatar-shadow dark:avatar-dark-shadow -->
      <el-avatar class="" size="large"
        :src="props.avatar">
        <!-- https://avatars.githubusercontent.com/u/51857421?v=4 -->
      </el-avatar>
    </div>
    <div v-show="!isCollapse" class="flex flex-1 justify-center flex-col ml-15px overflow-hidden">
      <div class="colorvar-my-c-shallow text-11px font-bold">Good Day👏</div>
      <h1 class="">{{ props.nickname }}</h1>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { isCollapse } from '@/hooks/useCollapse';
const props = defineProps({
  avatar: String,
  nickname: String,
  motto: String
})
</script>

<script lang='ts'>
export default {
  name: 'PainUser'
}
</script>

<style lang='scss' scoped>
</style>