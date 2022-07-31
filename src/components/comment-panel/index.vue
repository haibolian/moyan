<template>
  <div role="comment-panel" class="p-15px bgcvar-my-bgc-normal rounded-2xl mt-2">
    <EditorPanel showAvatar :show-word-limit="false" plain :rows="1" @publish="publishComment"/>
    <CommentBar v-for='(comment, index) in props.data' v-bind='comment' :isEnd="index === props.data?.length - 1" />
  </div>
</template>

<script setup lang='ts'>
import CommentBar from './comment-bar.vue';
import EditorPanel from '@/components/editor-panel/index.vue';
import { useUserStore } from '@/store/modules/user'
const props = defineProps({
  data: Array
})
const emits = defineEmits(['publish-comment', 'publish-reply'])

const userInfo = useUserStore()
const commentApi = inject('commentApi');

const publishComment = async (content: string, clearEditor: () => void) => {
  emits('publish-comment', content);
  const data = {
    content,
    
  }
  const result = await commentApi.publish()
  clearEditor()
}




</script>

<script lang='ts'>
export default {
  name: 'CommentArea'
}
</script>

<style lang='scss' scoped>

</style>