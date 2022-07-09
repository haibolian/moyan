<script setup lang='ts'>
import { Ref } from 'vue';
import { propsInstance } from './editor-panel';
import { publish } from '@/api/speak'

const props = defineProps(propsInstance)

// focus样式切换
const isFocus = ref(false);
const editorWapperFocusStyle = 'bgcvar-my-bgc-deep border-#3182ff';
const editorWapperBlurStyle = 'bg-#f2f3f5 border-transparent';

// 双向绑定
const editorContent = ref('')

const editorBlur = (e: Event) => {
  editorContent.value = (e.target as HTMLInputElement).innerHTML;
  isFocus.value = false;
}

// 显示字符数
const wordLen: Ref<number> = ref(0)
const editorInput = (e: Event) => {
  wordLen.value = (e.target).textContent.length
}
const wordLimit = computed(() => {
  return `${wordLen.value}/${props.maxlength}`
})

// 发送按钮状态
const publishSpeak = async () => {
  const data = {
    id: 1,
    nickname: "lingfun",
    content: editorContent.value
  }
  const result = await publish(data)
  console.log(result);
  
}
</script>

<template>
  <div class="editor-panel p-20px bgcvar-my-bgc-deep rounded-2xl mb-20px">
    <div 
      :class="`
        ${isFocus ? editorWapperFocusStyle : editorWapperBlurStyle}
        border
        border-2px
        p-10px
        rounded-lg
      `"
    >
      <div
        @focus="isFocus = true"
        @blur="editorBlur"
        @input="editorInput"
        v-html="editorContent"
        class="editor__inner outline-none max-h-120px min-h-40px overflow-auto"
        contenteditable="true" 
        spellcheck="false" 
      />
      <p class="text-right text-xs colorvar-my-c-normal font-bold">{{ wordLimit }}</p>
    </div>
    <!-- assist -->
    <div class="pt-20px flex justify-between">
      <div class="flex-.7">
        <el-link :underline="false" class="mr-30px">
          <IconifyOnline icon="twemoji:slightly-smiling-face" size="16px" class="mr-2px" />表情
        </el-link>
        <el-link :underline="false" class="mr-30px">
          <IconifyOnline icon="flat-color-icons:picture" size="18px" class="mr-2px" />
          图片
        </el-link>
      </div>
      <el-button :disabled="!wordLen" type="primary" @click="publishSpeak">
        <IconifyOnline icon="uim:telegram-alt" color="#fff" />
      </el-button>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'EditorPanel'
}
</script>

<style lang='scss' scoped>
.editor__inner:empty::before {
  content: '在这里发表你的内容吧！';
  color: #bbbbbb;
}
</style>