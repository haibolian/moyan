<!-- 表情参考文章
  https://segmentfault.com/a/1190000039359624 
-->
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
        id="editor"
        ref="editorAreaRef"
        @focus="isFocus = true"
        @blur="editorBlur"
        @input="editorInput"
        class="editor__inner outline-none max-h-120px min-h-40px overflow-auto"
        contenteditable="true"
        spellcheck="false"
      />
      <p @click="() => {}" :class="`text-right text-xs ${overLimit ? 'colorvar-el-color-error' : 'colorvar-my-c-normal'} font-bold`">{{ wordLimit }}</p>
      
    </div>
    <!-- assist -->
    <div class="pt-20px flex justify-between">
      <div class="flex-.7">
        <EmojiPicker
          @select="insetEmoji"
          @mousedown-panel="isEmojiBtnFocus = true"
          @mouseup-panel="isEmojiBtnFocus = false"
        >
          <el-link @mousedown="isEmojiBtnFocus = true" @mouseup="isEmojiBtnFocus = false" @click="clickSelectEmojiBtn">表情</el-link>
        </EmojiPicker>
        <el-link :underline="false" class="mr-30px">
          <IconifyOnline icon="flat-color-icons:picture" size="18px" class="mr-2px" />
          图片
        </el-link>
      </div>
      <el-button :disabled="!wordLen || overLimit" type="primary" @click="publish">
        <IconifyOnline icon="uim:telegram-alt" color="#fff" />
      </el-button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { Ref } from 'vue';
import { propsInstance } from './editor-panel';
import EmojiPicker from '@/components/emoji-picker/index.vue';

const props = defineProps(propsInstance)
const emits = defineEmits(['publish'])

// focus样式切换
const isFocus = ref(false);
const editorWapperFocusStyle = 'bgcvar-my-bgc-deep border-#3182ff';
const editorWapperBlurStyle = 'bg-#f2f3f5 border-transparent';
const rangeOfEditorArea = ref<Range>()

// editorArea 行为
const editorAreaRef = ref()
const focusEditorArea = () => editorAreaRef.value.focus();

// 鼠标光标处理
const clickSelectEmojiBtn = () => {
  const isf = isFocus.value
  focusEditorArea()
  if(!isf){
    const selection: Selection = window.getSelection() as Selection;
    const range = new Range()
    range.selectNodeContents(editorAreaRef.value)
    range
    selection.addRange(range)
    // debugger
  }
}

const editorContent = ref()
const isEmojiBtnFocus = ref(false)
const editorBlur = (e: Event) => {
  editorContent.value = (e.target as HTMLDivElement).innerText
  if(isEmojiBtnFocus.value){
    focusEditorArea()
    return
  }
  isFocus.value = false;
}
const insetEmoji = (emoji: string) => {
  const span: HTMLSpanElement = document.createElement('span');
  span.textContent = emoji;
  let range = rangeOfEditorArea.value
  if(!range) {
    range = new Range()
    range.selectNodeContents(editorAreaRef.value)
  }
  if(range.collapsed) {
    range.insertNode(span)
  } else {
    range.deleteContents()
    range.insertNode(span)
  }
  range.collapse(false)
}

// 显示字符数
const wordLen: Ref<number> = ref(0)
const overLimit = ref(false)
const editorInput = (e: Event) => {
  wordLen.value = (e.target).textContent.length
}
const wordLimit = computed(() => {
  overLimit.value = wordLen.value > props.maxlength;
  return `${wordLen.value}/${props.maxlength}`
})

onMounted(() => {
  document.onselectionchange = () => {
    let selection: Selection = document.getSelection() as Selection;

    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);

      if (editorAreaRef.value.contains(range.commonAncestorContainer)) {
        rangeOfEditorArea.value = range;
      }
    }
  }
})

const clearEditor = () => {
  editorAreaRef.value.innerText = ''
  editorContent.value = ''
  wordLen.value = 0
}

// 发送按钮状态
const publish = () => {
  emits('publish', editorContent.value, clearEditor)
}
</script>

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