<template>
  <div v-if="!isCollapse" class="select-none bgcvar-my-bgc-deep rounded-13px p-20px pt-15px text-center">
    <IconifyOnline size="4em" icon="carbon:add-filled" color="#2f82ff" />
    <h3 class="colorvar-my-c-deep m-0">Create New Task</h3>
    <p class="m-0 pt-4px font-bold colorvar-my-c-shallow text-12px">
      Or use 
      <span class="color-orange">invita click</span>
    </p>
  </div>
  <div v-else>
    <div class="text-center">
      <IconifyOnline size="4em" icon="carbon:add-filled" color="#2f82ff" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { isCollapse } from '@/hooks/useCollapse'
</script>

<script lang='ts'>
export default {
  name: 'CreateTodoButton'
}
</script>

<style lang='scss' scoped>
</style>