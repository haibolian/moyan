<template>
  <ElConfigProvider>
    <div id="app">
      <router-view></router-view>
    </div>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
</script>

<style lang='scss' scoped>

</style>