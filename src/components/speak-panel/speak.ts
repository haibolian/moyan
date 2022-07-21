import { reactive, ref } from 'vue'

const useComment = () => {
  const showComment = ref(false);
  const clickComment = () => {
    showComment.value = !showComment.value;
  }
  return {
    showComment,
    clickComment
  }
}

export {
  useComment
}