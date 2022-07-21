import { reactive, ref } from 'vue'
import { getList } from '@/api/comment'
import { errorMessage } from '@/utils/message';

const useComment = () => {
  const showComment = ref(false);
  const commentList = ref([])
  const clickComment = (id: string) => {
    showComment.value = !showComment.value;
    if(showComment.value) {
      fetchComment(id)
    }else{
      commentList.value = []
    }
  }
  const fetchComment = async (speakId: string) => {
    const { data, success, message } = await getList({ speakId });
    if(!success) return errorMessage(message);
    commentList.value = data.list
  }
  return {
    showComment,
    clickComment,
    commentList,
    fetchComment
  }
}

export {
  useComment
}