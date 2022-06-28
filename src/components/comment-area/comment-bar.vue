<template>
  <div class="comment-bar flex">
    <el-avatar :size="40" class="mr-10px" src="https://i9.taou.com/maimai/p/26144/2472_33_4mHTtMrzppqUJcNb-a160" />
    <div class="flex-1 ml-">
      <Commentator />
      <CommentContent />
      <CommentTools />
      <el-link>查看 1 条回复</el-link>
      <!-- <CommentBar /> -->
    </div>
  </div>
</template>

<script setup lang='tsx'>
import { Commentator, CommentContent, CommentTools } from './widget'

provide('message','Hello World!')

</script>

<script lang='tsx'>
export default {
  name: 'CommentBar'
}
</script>

<style lang='scss' scoped>

</style>