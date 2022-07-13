<template>
  <div>
    <EditorPanel :show-word-limit="false"></EditorPanel>
  </div>
</template>

<script setup lang='ts'>
import EditorPanel from '@/components/editor-panel/index.vue'
</script>

<script lang='ts'>
export default {
  name: 'index'
}
</script>

<style lang='scss' scoped>

</style>