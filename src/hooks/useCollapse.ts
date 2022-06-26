import { ref, reactive } from 'vue';

export function useCollapse (){
  const isCollapse = ref(false);
  function toggleCollapse (){
    isCollapse.value = !isCollapse.value;
  }

  return {
    isCollapse,
    toggleCollapse
  }
}

export const { isCollapse, toggleCollapse } = useCollapse();
