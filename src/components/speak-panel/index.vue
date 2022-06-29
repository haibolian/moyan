<template>
  <article class="p-15px bg-white rounded-2xl">
    <header class="flex justify-between">
      <el-avatar :size="40" src="https://i9.taou.com/maimai/p/26144/2472_33_4mHTtMrzppqUJcNb-a160" class="mr-10px"/>
      <div role="speaker-information" class="flex-1">
        <h4 role="speaker-name" class="colorvar-my-c-deep">凌凡</h4>
        <span role="speak-time" class="colorvar-my-c-normal">2022年6月28日  11:22</span>
      </div>
      <span role="tool" class="w-40px text-center">...</span>
    </header>
    <div role="speech-content" class="my-10px mx-2px text-16px leading-relaxed">
      <p>凌凡，你好！</p>
      <p> 欢迎来到这里 </p>
      <p> 尽情发言吧！ </p>
    </div>
    <footer>
      <el-divider class="mt-15px mb-10px" />
      <div role="speech-tolls" class="flex justify-around">
        <el-link class="">点赞</el-link>
        <el-link class="">评论</el-link>
        <el-link class="">转发</el-link>
      </div>
    </footer>
  </article>
  <CommentPanel :data="commentList"/>
</template>

<script setup lang='ts'>
import CommentPanel from '@/components/comment-panel/index.vue'
const commentList = reactive([{
  id: 1,
  name: '凌凡',
  time: '2022年6月28日  11:22',
  to: null,
  content: '博主，你好！',
  reply: [
    {
      id: 1,
      name: '博主',
      time: '2022年6月28日  11:22',
      to: '凌凡',
      content: '凌凡，你好！'
    },
    {
      id: 2,
      name: '凌凡',
      time: '2022年6月28日  11:22',
      to: '博主',
      content: '你竟然回复我了，好开心'
    }
  ]
},{
  id: 1,
  name: '凌凡',
  time: '2022年6月28日  11:22',
  to: null,
  content: '博主，你好！',
  reply: [
    {
      id: 1,
      name: '博主',
      time: '2022年6月28日  11:22',
      to: '凌凡',
      content: '凌凡，你好！'
    },
    {
      id: 2,
      name: '凌凡',
      time: '2022年6月28日  11:22',
      to: '博主',
      content: '你竟然回复我了，好开心'
    }
  ]
},{
  id: 1,
  name: '凌凡',
  time: '2022年6月28日  11:22',
  to: null,
  content: '博主，你好！',
  reply: [
    {
      id: 1,
      name: '博主',
      time: '2022年6月28日  11:22',
      to: '凌凡',
      content: '凌凡，你好！'
    },
    {
      id: 2,
      name: '凌凡',
      time: '2022年6月28日  11:22',
      to: '博主',
      content: '你竟然回复我了，好开心'
    }
  ]
}])
</script>

<script lang='ts'>
export default {
  name: 'SpeakPanel'
}
</script>

<style lang='scss' scoped>

</style>