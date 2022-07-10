import { ref, onMounted } from 'vue'
import { useProp } from '@/hooks/use-prop'

export const propsInstance = {
  maxlength: {
    type: [Number, String],
    default: 1000
  },
  showWordLimit: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: '分享你的想法'
  },
}

