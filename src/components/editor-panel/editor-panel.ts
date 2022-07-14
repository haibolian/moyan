import { ref, computed, Ref } from 'vue'
import { useProp } from '@/hooks/use-prop'

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
