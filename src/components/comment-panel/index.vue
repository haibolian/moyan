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
import { errorMessage, successMessage } from '@/utils/message';
const props = defineProps({
  data: Array,
  originId: [String, Number],
  originType: String,
})
const emits = defineEmits(['publish-comment', 'publish-reply'])

const { userInfo } = useUserStore()
const Api = inject('Api');

const publishComment = async (content: string, clearEditor: () => void) => {
  emits('publish-comment', content);
  const payload = {
    content,
    originId: props.originId,
    originType: props.originType,
    fromId: userInfo.id
  }
  const { success, message, data } = await Api.publishComment(payload)
  if(!success) return errorMessage(message);
  successMessage(message);
  data.from = {
    id: userInfo.id,
    avatar: userInfo.avatar,
    nickname: userInfo.nickname
  };
  props.data?.unshift(data);
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