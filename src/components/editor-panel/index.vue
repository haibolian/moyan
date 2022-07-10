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
      <p @click="() => {}" class="text-right text-xs colorvar-my-c-normal font-bold">{{ wordLimit }}</p>
      
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
      <el-button :disabled="!wordLen" type="primary" @click="publishSpeak">
        <IconifyOnline icon="uim:telegram-alt" color="#fff" />
      </el-button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { Ref } from 'vue';
import { propsInstance } from './editor-panel';
import { getCurrentCursorPosition } from '@/utils/cursor'
import { publish } from '@/api/speak';
import EmojiPicker from '@/components/emoji-picker/index.vue';
import { off } from 'process';

const props = defineProps(propsInstance)
const editorContent = ref('')

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
    selection.setPosition(selection.baseNode, selection.baseNode.length)
  }
}

const isEmojiBtnFocus = ref(false)
const editorBlur = (e: Event) => {
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
  // isEmojiBtnFocus.value = true
  // // nextTick(() => {
  //   const selection: Selection = window.getSelection() as Selection;
  //   const range: Range = selection.getRangeAt(0);
  //   range.deleteContents()
  //   range.insertNode(span);
  //   range.setStartAfter(span);
  //   range.setEndAfter(span);
  //   selection.removeAllRanges();
  //   selection.addRange(range);
  // })
}

// 显示字符数
const wordLen: Ref<number> = ref(0)
const editorInput = (e: Event) => {
  wordLen.value = (e.target).textContent.length
}
const wordLimit = computed(() => {
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

// 发送按钮状态
const publishSpeak = async () => {
  const data = {
    id: 1,
    nickname: "lingfun",
    content: editorContent.value
  }
  const result = await publish(data)
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