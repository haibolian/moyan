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
      :images="JSON.parse(speak.images)"
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

const publishSpeak = async ({ content, images }, clearEditor: () => void) => {
  if(!content) return errorMessage('请输入内容');
  const formdata = new FormData()
  images.forEach(image => formdata.append('images' , image.raw));
  formdata.append('content', content)
  const { success, message, data } = await publish(formdata);
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