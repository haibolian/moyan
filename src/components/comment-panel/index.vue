<template>
  <div role="comment-panel" class="p-15px bgcvar-my-bgc-normal rounded-2xl mt-2">
    <EditorPanel showAvatar avatar-src="" :show-word-limit="false" plain :rows="1" />
    <CommentBar v-for='(comment, index) in props.data' v-bind='comment' :isEnd="index === props.data?.length - 1" />
  </div>
</template>

<script setup lang='ts'>
import CommentBar from './comment-bar.vue';
import EditorPanel from '@/components/editor-panel/index.vue';
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