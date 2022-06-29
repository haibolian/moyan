<template>
  <div role="comment-panel" class="p-15px bg-white rounded-2xl mt-2">
    <CommentBar v-for='(comment, index) in props.data' v-bind='comment' :isEnd="index === props.data?.length - 1" />
  </div>
</template>

<script setup lang='ts'>
import CommentBar from './comment-bar.vue';
const props = defineProps({
  data: Array
})

</script>

<script lang='ts'>
export default {
  name: 'CommentArea'
}
</script>

<style lang='scss' scoped>

</style>