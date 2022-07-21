<template>
  <article class="p-15px bgcvar-my-bgc-normal rounded-2xl mt-20px" @mouseenter="isMouseEnterPanel = true" @mouseleave="isMouseEnterPanel = false">
    <header class="flex justify-between">
      <el-avatar :size="40" :src="speaker?.avatar" class="mr-10px"/>
      <div role="speaker-information" class="flex-1">
        <h4 role="speaker-name" class="colorvar-my-c-deep">{{ speaker?.nickname }}</h4>
        <span role="speak-time" class="colorvar-my-c-normal">{{ time }}</span>
      </div>
      <!-- <span role="tool" class="w-40px text-center">...</span> -->
      <el-dropdown placement="bottom-end" :hide-on-click="false">
        <div class="h-fit">
          <IconifyOnline class="" icon="system-uicons:menu-vertical" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="deleteSpeak">
              <IconifyOnline class="mr-6px" font-size="20px" icon="fa6-solid:trash-can" />删除
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </header>
    <div role="speech-content" class="my-10px mx-2px text-16px leading-relaxed">
      <!-- whitespace-pre-wrap 用来支持 \n 换行, 不加这个是不会换行的 -->
      <p class="whitespace-pre-wrap" v-html="content"></p>
    </div>
    <footer>
      <el-divider class="mt-15px mb-10px" />
      <div role="speech-tolls" class="flex justify-around">
        <el-link :underline="false" class="">点赞</el-link>
        <el-link :underline="false" class="" @click="clickComment">评论</el-link>
        <el-link :underline="false" class="">收藏</el-link>
      </div>
    </footer>
  </article>
  <CommentPanel v-if="showComment" :data="commentList"/>
</template>

<script setup lang='ts'>
import CommentPanel from '@/components/comment-panel/index.vue'
import { del } from '@/api/speak'
import { MessageConfirm } from '@/utils/message-box';
import { errorMessage, successMessage } from '@/utils/message';
import { useComment } from './speak'
const props = defineProps({
  id: [String, Number],
  index: Number,
  content: String,
  time: String,
  speaker: Object
})
const emits = defineEmits(['before-delete', 'after-delete'])

const isMouseEnterPanel = ref(false)

const deleteSpeak = () => {
  MessageConfirm('提示', '确定删除吗?', async () => {
    const id = props.id
    emits('before-delete', id)
    const { success, message, data } = await del({ id });
    if(!success) return errorMessage(message);
    successMessage(message);
    emits('after-delete', id)
  })
}

const { showComment, clickComment } = useComment()
const commentList = reactive([])

// const commentList = reactive([{
//   id: 1,
//   name: '凌凡',
//   time: '2022年6月28日  11:22',
//   to: null,
//   content: '博主，你好！',
//   reply: [
//     {
//       id: 1,
//       name: '博主',
//       time: '2022年6月28日  11:22',
//       to: '凌凡',
//       content: '凌凡，你好！'
//     },
//     {
//       id: 2,
//       name: '凌凡',
//       time: '2022年6月28日  11:22',
//       to: '博主',
//       content: '你竟然回复我了，好开心'
//     }
//   ]
// },{
//   id: 1,
//   name: '凌凡',
//   time: '2022年6月28日  11:22',
//   to: null,
//   content: '博主，你好！',
//   reply: [
//     {
//       id: 1,
//       name: '博主',
//       time: '2022年6月28日  11:22',
//       to: '凌凡',
//       content: '凌凡，你好！'
//     },
//     {
//       id: 2,
//       name: '凌凡',
//       time: '2022年6月28日  11:22',
//       to: '博主',
//       content: '你竟然回复我了，好开心'
//     }
//   ]
// },{
//   id: 1,
//   name: '凌凡',
//   time: '2022年6月28日  11:22',
//   to: null,
//   content: '博主，你好！'
// }])
</script>

<script lang='ts'>
export default {
  name: 'SpeakPanel'
}
</script>

<style lang='scss' scoped>

</style>