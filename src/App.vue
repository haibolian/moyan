<template>
  <ElConfigProvider :locale="zhCn">
    <div id="app">
      <router-view></router-view>
    </div>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

</script>

<style lang='scss' scoped>

</style>