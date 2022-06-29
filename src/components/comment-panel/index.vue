<template>
  <div role="comment-panel" class="p-15px bg-white rounded-2xl mt-2">
    <CommentBar v-for='comment in data' v-bind='comment' />
  </div>
</template>

<script setup lang='ts'>
import CommentBar from './comment-bar.vue';
const props = defineProps({
  data: Object
})

</script>

<script lang='ts'>
export default {
  name: 'CommentArea'
}
</script>

<style lang='scss' scoped>

</style>