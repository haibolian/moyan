import { ref } from 'vue';
import Vditor from 'vditor';
import 'vditor/dist/index.css';



export const useVditor = () => {
  const vditor = ref<Vditor | null>(null);

  const createVditor = (after: () => void) => {
    vditor.value = new Vditor('vditor', {
      after,
    });
  }

  return {
    vditor,
    createVditor
  }
}
