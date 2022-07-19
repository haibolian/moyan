<template>
  <div>
    <EditorPanel :rows="1" plain show-avatar avatar-src="https://avatars.githubusercontent.com/u/51857421?v=4" :show-word-limit="false"></EditorPanel>
    <h1>asdnkajd</h1>
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