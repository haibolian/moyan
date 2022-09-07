import { InputInstance } from 'element-plus';
import { ref } from 'vue';

const currentInputIndex = ref()

const setTitleRefs = (index: number) => {
  return function(component: InputInstance) {
    index === currentInputIndex.value ? component.focus() : ''
  }
}
const clickTitle = (index: number) => {
  currentInputIndex.value = index
}

const blurTitle = () => {
  currentInputIndex.value = null
}

export {
  currentInputIndex,
  setTitleRefs,
  clickTitle,
  blurTitle
}