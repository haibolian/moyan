<template>
  <div v-infinite-scroll="handleScroll" :infinite-scroll-immediate="false">
    <EditorPanel @publish="publishSpeak"></EditorPanel>
    <SpeakPanel
      v-for="(speak, index) in speakList"
      :key="speak.id"
      :id="speak.id"
      :index="index"
      :content="speak.content"
      :comment-count="speak.commentCount"
      :time="speak.created_at"
      :speaker="speak.user"
      @after-delete="deleteSpeak"
    ></SpeakPanel>
  </div>
</template>

<script setup lang='ts'>
import { publish, getList } from '@/api/speak'
import { errorMessage, successMessage } from '@/utils/message';
const SpeakPanel = defineAsyncComponent(() => import('@/components/speak-panel/index.vue'));
const EditorPanel = defineAsyncComponent(() => import('@/components/editor-panel/index.vue'));

const speakList = ref<Array<any>>([])

const pageParams = reactive({
  pageNum: 1,
  pageSize: 10
})
const getSpeakList = async () => {
  const { success, message, data } = await getList(pageParams);
  if(!success) return errorMessage(message);
  speakList.value.push(...data.list)
}

const handleScroll = () => {
  pageParams.pageNum++;
  getSpeakList()
}

onMounted(() => {
  getSpeakList()
})

const publishSpeak = async (content: string, clearEditor: () => void) => {
  if(!content) return errorMessage('请输入内容');
  const { success, message, data } = await publish({ content });
  if(!success) return errorMessage(message);
  speakList.value.unshift(data);
  successMessage('发表成功');
  clearEditor()
}

const deleteSpeak = (id: number | string, index: number) => {
  speakList.value.splice(index, 1)
}



</script>

<script lang='ts'>
export default {
  name: 'Speak'
}
</script>

<style lang='scss' scoped>
</style>