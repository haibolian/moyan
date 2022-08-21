<template>
  <div class="new-journal__header bg-#fff p-10px pt-20px">
    <div class="flex justify-between">
      <input 
        class="journal-title text-24px pl-20px w-75% border-none bg-#ffffff00 outline-none" 
        type="text"
        v-model="title"
        placeholder="请输入文章标题"
      >
      <div class="w-30% text-right">
        <span class="text-#777 mr-5px">输入可创建分类</span>
        <el-select
          v-model="categoryId"
          @change="handleChange"
          filterable
          allow-create
          default-first-option
          placeholder="选择分类（按回车创建）"
        >
          <el-option
            v-for="item in categoryOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
        <el-button class="mx-15px" type="primary" @click="publishJournal">发布</el-button>
        <el-tooltip
        class="box-item"
        effect="light"
        :content="toggleBtnText"
        placement="bottom"
      >
        <IconifyOnline color="#777777" class="cursor-pointer" @click="toggleEditorMode" icon='icon-park-outline:switch' />
      </el-tooltip>
      <MAvatar class="align-middle ml-15px" :size="38" shape="circle" :src="userInfo.avatar"></MAvatar>
      </div>
    </div>
    <div class="">
    </div>
  </div>
  <div v-if="editorMode === 'RTF'" class="rich-text">
    <Toolbar
      class="rtf-toolbar"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      class="rtf-editor"
      style="height: 0"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
  <div v-else id="vditor" class="markdown-text"></div>

</template>

<script setup lang='ts'>
import { getJournal, publish, update } from '@/api/journal';
import { errorMessage, successMessage } from '@/utils/message';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import { useUserStore } from '@/store/modules/user';
import { useCategory } from './useCategory';
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { useVditor } from './useVditor';
import { useWangEditor } from './useWangeditor';

const { userInfo } = useUserStore()
const router = useRouter()


const handleChange = async (val: string) => {
  const one = categoryOptions.value.find(category => category.id === val)
  if(!one){
    const data = await createCategory(val)
    categoryId.value = data.id
  }
}

// 分类
const categoryId = ref(null)
const { categoryOptions, getCategoryOptions, createCategory } = useCategory()
onMounted(getCategoryOptions)


// markdown 编辑器配置
const { vditor, createVditor } = useVditor()
onMounted(() => {
  createVditor(initJournal)
});

const id = ref()
// 初始化数据
const initJournal = async () => {
  id.value = router.currentRoute.value.params.id
  if(!id.value) return vditor.value!.setValue('')
  const { message, success, data } = await getJournal({ id: id.value })
  if(!success) return errorMessage(message)
  title.value = data.title
  categoryId.value = data.categoryId
  data.editorMode == 'RTF' && toggleEditorMode()
  data.editorMode == 'MD' ? vditor.value!.setValue(data.content) : valueHtml.value = data.content
}

// 配置富文本
const { 
  editorRef,
  toolbarConfig,
  editorConfig,
  valueHtml,
  mode,
  handleCreated 
} = useWangEditor()

onBeforeUnmount(() => {
  editorRef.value?.destroy()
})

// 编辑器切换
const editorMode = ref('MD');
const toggleEditorMode = () => {
  if (editorMode.value === 'MD') {
    editorMode.value = 'RTF'
  } else {
    editorMode.value = 'MD'
    nextTick(createVditor)
  }
}
const toggleBtnText = computed(() => {
  return editorMode.value === 'MD' ? '切换为富文本' : '切换为Markdown'
})


// 发布文章
const title = ref('');
const hasTitle = () => {
  return title.value.trim() !== ''
}
const publishJournal = async () => {
  if(!hasTitle()) return errorMessage('请输入文章标题')
  if(!categoryId.value) return errorMessage('请选择分类')
  const content = editorMode.value === 'MD' ? vditor.value?.getValue() : valueHtml.value;
  const body = {
    id: id.value,
    title: title.value,
    content,
    categoryId: categoryId.value,
    editorMode: editorMode.value,
    isDraft: false
  }
  const { success, message, data } = await (id.value ? update(body) : publish(body));
  if(!success) {
    return errorMessage(message)
  }
  publishAfter({data, message})
}

const publishAfter = ({ data, message }) => {
  successMessage(message);
  router.push({
    name: 'JournalView',
    params: {
      id: data
    }
  })
}


</script> 

<script lang='ts'>
export default {
  name: 'JournalNew'
}
</script>

<style lang='scss' scoped>
.journal-title {
  // outline: none;
}
.markdown-text {
  min-height: 100vh;
}
.rich-text {
  min-height: 100vh;
}
.rtf-toolbar {
  border-bottom: 1px solid #ccc;
}
.rtf-editor {
  min-height: 90vh;
}
</style>