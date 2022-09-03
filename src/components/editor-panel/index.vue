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
        <MAvatar class="" :src="avatarSrc || userInfo.avatar" />
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
          
          <div v-if="showWordLimit" @click="() => {}" :class="`flex flex-row-reverse justify-between items-end text-xs ${isOverLimit ? 'colorvar-el-color-error' : 'colorvar-my-c-normal'} font-bold mt-30px`">
            <span>{{ wordLimitText }}</span>
            <!-- <ImagePicker ref="imagePickerRef" v-show="imageList.length" :imageList="imageList"></ImagePicker> -->
            <el-upload
              ref="uploadRef"
              v-show="imageList.length"
              class="editor-image-picker"
              v-model:file-list="imageList"
              action="#"
              multiple
              :disabled="isDisabledUpload"
              :on-exceed="handleExceed"
              name="files"
              :limit="9"
              :auto-upload="false"
              list-type="picture-card"
            >
              <IconifyOnline class="" ref="addRef" size="24px" icon="ant-design:plus-outlined"></IconifyOnline>
              <template #file="{ file }">
                <div>
                  <IconifyOnline
                    class="absolute z-99 right-0 top-1px cursor-pointer hover:text-#888888"
                    icon="ph:x-circle-fill"
                    @click="deleteImage(file)"
                  />
                  <el-image
                    style="width: 80px; height: 80px"
                    :src="file.url"
                    :initial-index="4"
                    fit="cover"
                  />
                </div>
              </template>
            </el-upload>
          </div>
          
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
            <el-link :disabled="isDisabledUpload" :underline="false" class="ml-20px" @click="selectImage">
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
import { useWordLimit, useRows, useUploadImage } from './editor-panel'
import { useUserStore } from '@/store/modules/user'
import MAvatar from '../MAvatar.vue';
import { VueInstance } from '@vueuse/core';
import { Ref } from 'vue';

// imageList
const addRef: Ref<VueInstance> = ref() as Ref<VueInstance>
const uploadRef = ref()
const {
  imageList,
  selectImage,
  isDisabledUpload,
  deleteImage,
  handleExceed
} = useUploadImage(uploadRef, addRef)


const { minRows } = useRows()
const { userInfo } = useUserStore()

const props = defineProps(propsInstance)
const emits = defineEmits(['publish'])

// focus样式切换
const isFocus = ref(false);
const editorWapperFocusStyle = 'bgcvar-my-bgc-deep border-#3182ff';
const editorWapperBlurStyle = 'bgcvar-my-bgc-deep border-transparent';
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
  imageList.splice(0)
}

// 发送按钮状态
const publish = () => {
  emits(
    'publish', 
    { content: editorContent.value, images: imageList },
    clearEditor
  )
}

const focus = () => {
  console.log('cao');
  
  editorAreaRef.value.focus()
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