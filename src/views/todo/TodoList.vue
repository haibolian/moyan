<template>
  <div v-if="list.length" class="min-h-200px">
    <el-row
      v-for="(todo, index) in list"
      :key="todo.id"
      :gutter="10"
      :class="`border-b border-b-#ddd mb-10px ${ type && 'text-#aaa'}`"
      align="middle"
    >
      <el-col :span="1">
        <el-checkbox @click.once="changeTodoDone(todo)" :true-label="1" :false-label="0" v-model="todo.done"></el-checkbox>
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
        <SelectColorGroup v-if="!type" v-model="todo.category" @change="changeTodoCategory(todo)">
          <template #suffix="{ color }">
            {{ color.name }}
          </template>
        </SelectColorGroup>
        <CircleColor v-else :color="todo.category"></CircleColor>
      </el-col>
      <el-col :span="5">
        <el-date-picker
          v-if="!type"
          v-model="todo.handleTime"
          type="datetime"
          placeholder="无期限"
          format="YYYY-MM-DD HH:mm"
          value-format="YYYY-MM-DD HH:mm"
          :shortcuts="shortcuts"
          @change="changeTodoHandleTime(todo)"
        />
        <span v-else>{{ todo.handleTime || '无期限' }}</span>
      </el-col>
    </el-row>
  </div>
  <div v-else>
    <el-empty image="https://listen-wind-1308522723.cos.ap-shanghai.myqcloud.com/common/svg/no-record.svg" :description="`暂无${type ? '已完成事项' : '待办事项'}`" />
  </div>
</template>

<script setup lang='ts'>
import SelectColorGroup from '@/components/select-color-group/index.vue';
import CircleColor from '@/components/select-color-group/circle-color.vue';
import { update } from '@/api/todo';
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
  if(todo.title === e.target.innerText) return
  todo.title = e.target.innerText
  update(todo)
}
const changeTodoDone = ({ id, done }) => {
  update({
    id,
    done: !done ? 1 : 0
  })
}
const changeTodoCategory = (todo) => {
  update(todo)
}
const changeTodoHandleTime = (todo) => {
  update(todo)
}
// const updateTodo = async (todo) => {
//   const { success, message, data } = update(todo)
// }

const oneDay = 3600 * 1000 * 24

const shortcuts = [
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