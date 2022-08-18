import { ref, shallowRef } from 'vue';


export const useWangEditor = () => {
  const editorRef = shallowRef()
  const valueHtml = ref('<p>hello</p>')
  const toolbarConfig = {}
  const editorConfig = { placeholder: '请输入内容...' }
  const handleCreated = (editor: any) => {
    editorRef.value = editor // 记录 editor 实例，重要！
  }
  return {
    editorRef,
    valueHtml,
    toolbarConfig,
    editorConfig,
    mode: 'simple', // 或 'simple'
    handleCreated
  }
}