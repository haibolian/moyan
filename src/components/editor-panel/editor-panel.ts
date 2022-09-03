import { ref, computed, Ref } from 'vue'
import { useProp } from '@/hooks/use-prop'
import { errorMessage } from '@/utils/message'

export const useWordLimit = () => {
  const maxlength = useProp('maxlength')
  const wordLen: Ref<number> = ref(0)
  const isOverLimit = ref(false)
  const wordLimitText = computed(() => {
    isOverLimit.value = wordLen.value > maxlength.value;
    return `${wordLen.value}/${maxlength.value}`
  })
  return {
    wordLen,
    isOverLimit,
    wordLimitText
  }
}

export const useRows = () => {
  const rows = useProp('rows')
  const minRows = computed(() => {
    if(rows.value === 1) return '';
    if(rows.value as number >= 6) return '120px';
    return (120 - (6 - rows.value) * 20) + 'px'
  })
  return {
    minRows
  }
}

export const useUploadImage = (uploadRef, addRef) => {
  const imageList = reactive([])
  const isDisabledUpload = computed(() => {
    return imageList.length >= 9
  })
  const handleExceed = () => {
    errorMessage('最多允许上传 9 张图片')
  }
  const selectImage = () => {
    addRef.value.$el.click()
  }
  const deleteImage = (file) => {
    uploadRef.value.handleRemove(file)
  }
  return {
    imageList,
    isDisabledUpload,
    handleExceed,
    selectImage,
    deleteImage
  }
}