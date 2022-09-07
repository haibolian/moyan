import { ref } from 'vue';
import Vditor from 'vditor';
import 'vditor/dist/index.css';
import { storageLocal } from '@/utils/storage';


export const useVditor = () => {
  const vditor = ref<Vditor | null>(null);

  const createVditor = (after: () => void) => {
    vditor.value = new Vditor('vditor', {
      after,
      upload: {
        url: 'http://localhost:3000/api/upload/vditor',
        token: 'test',
        fieldName: 'images',
        linkToImgUrl: 'http://localhost:3000/api/upload/vditor',
        headers: {
          Authorization: `Bearer ${storageLocal.getItem('token')}`
        },
        accept: 'image/*',
        success(editor, msg) {
          const { data: { succMap } } = JSON.parse(msg)
          const urls = succMap.map(([filename, url]) => `![${filename}](${url})`).join('\n')
          vditor.value?.insertValue(urls)
        }
      }
    });
  }

  return {
    vditor,
    createVditor
  }
}
