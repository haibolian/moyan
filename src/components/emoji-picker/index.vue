<template>
  <el-popover
    ref="popoverRef"
    placement="bottom-start"
    popper-class="emoji-picker-popover"
    :width="450"
    trigger="click"
    :hide-after="1"
  >
    <template #reference>
      <slot>
        <el-link :underline="false">表情</el-link>
      </slot>
    </template>

    <el-tabs @mousedown="mousedownPanel" @mouseup="mouseupPanel" class="emoji-pane" v-model="currentEmojiGroup" @tab-click="clickGroupTab">
      <el-tab-pane v-for="group in emojiGroup" :name="group.group" style="color:red">
        <template #label>
          <span class="text-5">{{ group.description }}</span>
        </template>
        <div class="flex flex-wrap">
          <div 
            v-for="item in emojisMap[group.group]" 
            class="text-6 mx-10px cursor-pointer"
            @click="clickEmoji(item)"
          >
            <span>{{ item.unicode }}</span>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-popover>
  
</template>

<script setup lang='ts'>
import emojiGroup from "./lib/emoji-group.json";
import emojis from "./lib/emojis.json";
const props = defineProps({

})

const emits = defineEmits(['select', 'mousedown-panel', 'mouseup-panel'])
const popoverRef = ref()

const emojisMap = {}
emojis.forEach(emojis => {
  emojisMap[emojis.group] = emojis.emojiList
})

const currentEmojiGroup = ref(0)

const clickGroupTab = () => {

}

const clickEmoji = (emoji) => {
  emits('select', emoji.unicode)
}

const mousedownPanel = () => {
  emits('mousedown-panel')
}
const mouseupPanel = () => {
  emits('mouseup-panel')
}


</script>

<script lang='ts'>
export default {
  name: 'EmojiPicker'
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
