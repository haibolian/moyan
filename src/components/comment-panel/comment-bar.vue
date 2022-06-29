<template>
  <div :class="`comment-bar flex ${props.to && 'mt-10px'}`">
    <el-avatar :size="40" class="mr-10px" src="https://i9.taou.com/maimai/p/26144/2472_33_4mHTtMrzppqUJcNb-a160" />
    <div class="flex-1">
      <Commentator :name="props.name" :time="props.time" :to="props.to"/>
      <CommentContent class="mt-2px mb-4px" :content="props.content"/>
      <CommentTools />
      <el-link v-if="!to">查看 1 条回复</el-link>
      <!-- <span>{{ reply }}</span> -->
      <template v-if="props.reply">
        <CommentBar v-for="rep in reply" v-bind="rep" /> 
      </template>
    </div>
  </div>
  <el-divider v-if="!props.to" class="my-10px"></el-divider>
</template>

<script setup lang='tsx'>
import { Commentator, CommentContent, CommentTools } from './widget'
const props = defineProps({
  id: Number,
  name: String,
  time: String,
  to: String,
  content: String,
  reply: Array,
})
provide('message','Hello World!')

</script>

<script lang='tsx'>
export default {
  name: 'CommentBar'
}
</script>

<style lang='scss' scoped>

</style>