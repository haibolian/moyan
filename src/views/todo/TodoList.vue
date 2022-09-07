<template>
  <template v-if="list.length">
    <el-row
      v-for="(todo, index) in list"
      :key="todo.id"
      :gutter="10"
      class="border-b border-b-#ddd mb-10px"
      align="middle"
    >
      <el-col :span="1" @click="">
        <el-checkbox v-model="todo.done"></el-checkbox>
      </el-col>
      <el-col :span="17">
        <div
          :class="`min-h-32px text-16px leading-32px outline-none max-h-120px overflow-auto ${ type && 'line-through' }`"
          :contenteditable="type ? false : true"
          @blur="blurTitle($event, todo)"
        >
          {{ todo.title }}
        </div>
      </el-col>
      <el-col :span="1">
        <SelectColorGroup v-model="todo.category">
          <template #suffix="{ color }">
            <span class="ml-5px">{{ color.name }}</span>
          </template>
        </SelectColorGroup>
      </el-col>
      <el-col :span="5">
        <el-date-picker
          v-model="todo.handleTime"
          type="datetime"
          placeholder="无期限"
          format="YYYY-MM-DD HH:mm"
          value-format="YYYY-MM-DD HH:mm"
          :shortcuts="shortcuts"
        />
      </el-col>
    </el-row>
  </template>
  <template v-else>
    <el-empty image="https://iconfont.alicdn.com/p/illus/preview_image/4wGLMYecEM6j/bbbc1bb9-8252-4f78-82af-c29807dce50d.png" :description="`暂无${type ? '已完成待办' : '待办事项'}`" />
  </template>
</template>

<script setup lang='ts'>
import SelectColorGroup from '@/components/select-color-group/index.vue';
const props = defineProps({
  type: {
    type: Number,
    default: 0
  },
  list: {
    type: Array,
    default: () => []
  }
})

const blurTitle = (e, todo) => {
  todo.title = e.target.innerText
}

const oneDay = 3600 * 1000 * 24

const shortcuts = [
  {
    text: '现在',
    value: new Date()
  },
  {
    text: '明天',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() + oneDay)
      return date
    },
  },
  {
    text: '后天',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() + oneDay * 2)
      return date
    },
  },
  {
    text: '一周后',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() + oneDay * 7)
      return date
    },
  },
]

</script>

<script lang='ts'>
export default {
  name: 'TodoList'
}
</script>

<style lang='scss' scoped>
::v-deep .el-date-editor {
  --el-input-border-color: $transparentColor;
  --el-input-hover-border: $transparentColor;
  --el-input-bg-color: $transparentColor;
  --el-input-focus-border-color: $transparentColor;
  --el-input-hover-border-color: $transparentColor;
  --el-date-editor-width: unset;
  --el-input-bg-color: #ffffff00;
  .el-input__prefix {
    display: none;
  }
  .el-input__wrapper {
    padding: 0;
  }
}
.el-empty {
  --el-empty-padding: 0;
}
</style>