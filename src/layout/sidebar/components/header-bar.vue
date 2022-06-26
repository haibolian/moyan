<template>
  <div :class="`py-20px pt-0 flex ${isCollapse && 'justify-center'}`">
    <div class="w-11px h-11px bg-#4eea33 rounded-50%" @click="toggleCollapse"></div>
  </div>
</template>

<script setup lang='ts'>
import { toggleCollapse, isCollapse } from '@/hooks/useCollapse'
</script>

<script lang='ts'>
export default {
  name: 'HeaderBar'
}
</script>

<style lang='scss' scoped>
</style>