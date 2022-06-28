<template>
  <div role="comment-area" class="p-15px bg-white rounded-2xl mt-2">
    <CommentBar />
  </div>
</template>

<script setup lang='ts'>
import CommentBar from './comment-bar.vue';
</script>

<script lang='ts'>
export default {
  name: 'CommentArea'
}
</script>

<style lang='scss' scoped>

</style>