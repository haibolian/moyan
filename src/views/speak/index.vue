<template>
  <div>
    <EditorPanel @publish="publishSpeak"></EditorPanel>
    <SpeakPanel
      v-for="(speak, index) in speakList"
      :key="speak.id"
      :content="speak.content"
      :time="speak.create_at"
      :speaker="speak.speaker"
    ></SpeakPanel>
  </div>
</template>

<script setup lang='ts'>
import { publish, getList } from '@/api/speak'
import { errorMessage } from '@/utils/message';
const SpeakPanel = defineAsyncComponent(() => import('@/components/speak-panel/index.vue'));
const EditorPanel = defineAsyncComponent(() => import('@/components/editor-panel/index.vue'));

const speakList = ref<Array<any>>([])
const getSpeakList = async () => {
  const { success, message, data } = await getList();
  if(!success) return errorMessage(message);
  speakList.value.push(...data.list)
}

onMounted(() => {
  getSpeakList()
})


const publishSpeak = async (content: string) => {
  const { success, message, data } = await publish({ content });
  if(!success) return errorMessage(message);
  speakList.value.unshift(data)
}



</script>

<script lang='ts'>
export default {
  name: 'Speak'
}
</script>

<style lang='scss' scoped>
</style>