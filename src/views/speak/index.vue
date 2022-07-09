<template>
  <div>
    <EditorPanel></EditorPanel>
    <SpeakPanel></SpeakPanel>
  </div>
</template>

<script setup lang='ts'>
const SpeakPanel = defineAsyncComponent(() => import('@/components/speak-panel/index.vue'));
const EditorPanel = defineAsyncComponent(() => import('@/components/editor-panel/index.vue'));


</script>

<script lang='ts'>
export default {
  name: 'Speak'
}
</script>

<style lang='scss' scoped>
</style>