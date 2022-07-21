<!-- 表情参考文章
  https://segmentfault.com/a/1190000039359624 
-->
<template>
  <div 
    class="editor-panel p-20px bgcvar-my-bgc-normal rounded-2xl mb-20px" 
    @mousedown="clickingPanelSelf = true" 
    @mouseup="clickingPanelSelf = false"
  >
    <div class="editor-wapper flex">
      <div v-if="showAvatar" class="editor-avatar w-58px">
        <el-avatar class="" :src="avatarSrc" />
      </div>
      <div class="editor-main flex-1">
        <div
          :class="`
            ${isFocus ? editorWapperFocusStyle : editorWapperBlurStyle}
            border
            border-2px
            bg-#f2f3f5
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
            :style="{ minHeight: minRows }"
            :class="['editor__inner', 'outline-none', 'max-h-120px', minRows, 'overflow-auto']"
            contenteditable="true"
            spellcheck="false"
          />
          <p v-if="showWordLimit" @click="() => {}" :class="`text-right text-xs ${isOverLimit ? 'colorvar-el-color-error' : 'colorvar-my-c-normal'} font-bold`">{{ wordLimitText }}</p>
          
        </div>
        <!-- assist -->
        <div v-show="showAssist" class="pt-20px flex justify-between">
          <div class="flex-.7">
            <EmojiPicker
              @select="insertEmoji"
            >
              <el-link
                :underline="false"
                @click="clickSelectEmojiBtn"
              >
                <IconifyOnline class="mr-3px" size="18px" icon="fa-regular:smile"></IconifyOnline>表情
              </el-link>
            </EmojiPicker>
            <el-link :underline="false" class="ml-20px">
              <IconifyOnline icon="material-symbols:imagesmode" size="18px" class="mr-3px" />
              图片
            </el-link>
          </div>
          <el-button :disabled="!wordLen || isOverLimit" type="primary" @click="publish">
            <IconifyOnline icon="uim:telegram-alt" color="#fff" />
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import propsInstance from './props';
import EmojiPicker from '@/components/emoji-picker/index.vue';
import { useWordLimit, useRows } from './editor-panel'
const { minRows } = useRows()

const props = defineProps(propsInstance)
const emits = defineEmits(['publish'])

// focus样式切换
const isFocus = ref(false);
const editorWapperFocusStyle = 'bgcvar-my-bgc-deep border-#3182ff';
const editorWapperBlurStyle = 'bg-#f2f3f5 border-transparent';
const rangeOfEditorArea = ref<Range>()

const selectionChangeEvent = () => {
  let selection: Selection = document.getSelection() as Selection;

  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);

    if (editorAreaRef.value?.contains(range.commonAncestorContainer)) {
      rangeOfEditorArea.value = range;
    }
  }
}
onMounted(() => {
  document.addEventListener('selectionchange', selectionChangeEvent);
})
onUnmounted(() => {
  document.removeEventListener('selectionchange', selectionChangeEvent);
})

// editorArea 行为
const editorAreaRef = ref()
const focusEditorArea = () => editorAreaRef.value.focus();

// 鼠标光标处理
const clickSelectEmojiBtn = () => {
  const isf = isFocus.value
  focusEditorArea()
  if(!isf){
    // 光标移动到最后
    const selection: Selection = window.getSelection() as Selection;
    const range = document.createRange()
    range.selectNodeContents(editorAreaRef.value);
    range.collapse(false);
    if(selection.anchorOffset!=0){
      return;
    };
    selection.removeAllRanges();
    selection.addRange(range);
  }
}


const editorContent = ref()
const clickingPanelSelf = ref(false)
const editorBlur = (e: Event) => {
  editorContent.value = (e.target as HTMLDivElement).innerText
  if(clickingPanelSelf.value){
    focusEditorArea()
    return
  }
  isFocus.value = false;
}
const insertEmoji = (emoji: string) => {
  const span: HTMLSpanElement = document.createElement('span');
  span.textContent = emoji;
  let range = rangeOfEditorArea.value
  console.log('range', range);
  
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

const { wordLen, isOverLimit, wordLimitText } = useWordLimit();
const editorInput = (e: Event) => {
  wordLen.value = (e.target).textContent.length
}

const showAssist = computed(() => {
  if(!props.plain) return true
  return isFocus.value
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