import { ref } from 'vue';
import Vditor from 'vditor';
import 'vditor/dist/index.css';



export const useVditor = () => {
  const vditor = ref<Vditor | null>(null);

  const createVditor = () => {
    vditor.value = new Vditor('vditor', {
      after: () => {
        // vditor.value is a instance of Vditor now and thus can be safely used here
        vditor.value!.setValue('# hi, here');
      },
    });
  }

  return {
    vditor,
    createVditor
  }
}
