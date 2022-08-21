<template>
  <div :class="`comment-bar flex ${props.to && 'mt-10px'}`" v-bind="$attrs">
    <MAvatar :size="40" class="mr-10px" :src="from?.avatar" />
    <div class="flex-1">
      <Commentator :name="from?.nickname" :time="createdAt" :to="replyType != '0' && to?.nickname"/>
      <CommentContent class="mt-2px mb-4px" :content="content"/>
      <div>
        <el-link :underline= "false"  class='mr-10px'>
          点赞
        </el-link>
        <el-link :underline="false" @click="clickReplyBtn">
          {{ showEditor ? '取消回复' : '回复' }}
        </el-link>
      </div>
      <EditorPanel
        ref="editorPanelRef"
        v-if="showEditor"
        :show-word-limit="false" 
        plain 
        :rows="1" 
        @publish="publishReply">
      </EditorPanel>
      <CommentBar v-for="rep in replies" v-bind="rep" /> 
      <el-link v-if="repliesCount" @click="loadReplies">查看更多回复</el-link>
    </div>
  </div>
  <el-divider v-if="!props.to && !$attrs.isEnd" class="my-10px"></el-divider>
</template>

<script setup lang='tsx'>
import { Commentator, CommentContent } from './widget'
import EditorPanel from '../editor-panel/index.vue';
import { useUserStore } from '@/store/modules/user'
import { errorMessage, successMessage } from '@/utils/message';
import MAvatar from '../MAvatar.vue';

const props = defineProps({
  id: Number, // comment id
  content: String,
  originId: String || Number, // 说说 Id
  originType: String,
  repliesCount: Number,
  fromId: [String, Number],
  toId: String || Number,
  createdAt: String,
  from: Object,
  to: Object,
  // 回复所需的 props
  replyType: [String, Number]
})
provide('message','Hello World!')

const replies = ref([])

const showEditor = ref(false)
const editorPanelRef = ref()
const clickReplyBtn = () => {
  editorPanelRef.value
  showEditor.value = !showEditor.value
}

const Api = inject('Api')
const { userInfo } = useUserStore()

const publishReply = async (content: string) => {
  const body = {
    content,
    commentId: props.id,
    replyType: 0,
    replyId: props.originId,
    fromId: userInfo.id,
    toId: props.fromId
  }
  const { data, success, message } = await Api.publishReply(body)
  if(!success) return errorMessage(message);
  successMessage(message);
  replies.value.unshift(data)
}

const loadReplies = async () => {
  const { data, success, message } = await Api.getReplies({commentId: props.id})
  replies.value = data.list
  
}
  

</script>

<script lang='tsx'>
export default {
  name: 'CommentBar'
}
</script>

<style lang='scss' scoped>

</style>