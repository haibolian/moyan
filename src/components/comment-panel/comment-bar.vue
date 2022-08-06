<template>
  <div :class="`comment-bar flex ${props.to && 'mt-10px'}`">
    <el-avatar :size="40" class="mr-10px" :src="getImg(from?.avatar)" />
    <div class="flex-1">
      <Commentator :name="from?.nickname" :time="createdAt" :to="to?.nickname"/>
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
      <template>
        <CommentBar v-for="rep in replies" v-bind="rep" /> 
      </template>
      <el-link v-if="repliesCount">查看更多回复</el-link>
    </div>
  </div>
  <el-divider v-if="!props.to && !$attrs.isEnd" class="my-10px"></el-divider>
</template>

<script setup lang='tsx'>
import { Commentator, CommentContent } from './widget'
import EditorPanel from '../editor-panel/index.vue';
import { getImg } from '@/utils/splicing-domain';

const props = defineProps({
  id: Number,
  content: String,
  originId: String || Number,
  originType: String,
  repliesCount: Number,
  fromId: String || Number,
  toId: String || Number,
  createdAt: String,
  from: Object,
  to: Object
})
provide('message','Hello World!')

const replies = ref([])

const showEditor = ref(false)
const editorPanelRef = ref()
const clickReplyBtn = () => {
  editorPanelRef.value
  showEditor.value = !showEditor.value
}



const publishReply = () => {
  
}
  

</script>

<script lang='tsx'>
export default {
  name: 'CommentBar'
}
</script>

<style lang='scss' scoped>

</style>