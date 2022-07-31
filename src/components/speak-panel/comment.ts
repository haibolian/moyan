import { reactive, ref, unref } from 'vue'
import { getList, publish } from '@/api/comment'
import { errorMessage } from '@/utils/message';
import { useUserStore } from '@/store/modules/user'
import { useProp } from '@/hooks/use-prop'

const { userInfo } = useUserStore()
const useComment = (props) => {
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

  const afterPublishComment = async ({ data, message, success }) => {
    if(!success) return errorMessage(message);
    // const body = {
    //   content,
    //   fromId: userInfo.id,
    //   originType: 'speak',
    //   originId: props.id
    // }
    // const { success, message, data } = await publish(body);
    // if(!success) return errorMessage(message);
    // data.from = {
    //   id: userInfo.id,
    //   avatar: userInfo.avatar,
    //   nickname: userInfo.nickname
    // };
    commentList.value.unshift(data)
  }

  return {
    showComment,
    clickComment,
    commentList,
    fetchComment,
    afterPublishComment
  }
}

export {
  useComment
}