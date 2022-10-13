<template>
  <div class="todo flex">
    <div class="todo-left w-700px">
      <div class="my-card">
        <div class="w-100% flex justify-between">
          <span class="text-26px color-#3f9eff font-medium">{{ showDate }}</span>
          <el-button type="primary" @click="addTodo">
            新增
          </el-button>
        </div>
      </div>
  
      <div class="my-card min-h-20rem pb-50px">
        <h2>待办</h2>
        <TodoList
        :list="todoList.filter(todo => !todo.done)"
        :type='0'
        @change-category="changeTodoCategory"
        @change-done="changeTodoDone"
        />
        <div class="flex justify-between items-center mt-50px">
          <h2>已完成</h2>
          <el-button @click="clearDonwTodo" type="primary">清空</el-button>
        </div>
        <TodoList  @change-done="changeTodoDone" :list="todoList.filter(todo => todo.done)" :type='1'/>
      </div>
    </div>
    <div class="todo-right flex-1 ml-40px">
      <el-calendar class="w-300px" v-model="currentDate">
        <template #dateCell="{ data }">
          <span class="">{{ Number(data.day.split('-')[2]) }}</span>
          <div
            v-if="todoTagMap[data.day]"
            class="w-100% h-10px absolute bottom-0 left-0 flex justify-evenly px-5px box-border"
          >
            <div
              v-for="todo in todoTagMap[data.day].filter(t => !t.done).slice(0, 5)"
              :style="{ backgroundColor: todo.category }"
              :class="`inline-block rounded w-4px h-4px`"
            >
            </div>
          </div>
        </template>
      </el-calendar>
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoList from './TodoList.vue';
import dayjs, { showDay } from '@/utils/day';
import SmallCalendar from '@/components/small-calendar/index.vue';
import { getTodoTagMap, getList, create, del } from '@/api/todo';
import { errorMessage, successMessage } from '@/utils/message';
import { MessageConfirm } from '@/utils/message-box';
    
const todoList = ref([])

const addTodo = async () => {
  const { success, message, data } = await create({
    day: dayjs(currentDate.value).format('YYYY-MM-DD')
  })
  if(!success) return errorMessage(message)
  todoList.value.push(data)
}


// 日历日期
const currentDate = ref(new Date())
const showDate = computed(() => {
  return showDay(currentDate.value)
})
watchEffect(async () => {
  const { success, message, data } = await getList({ day: dayjs(currentDate.value).format('YYYY-MM-DD')})
  if(!success) return errorMessage(message)
  todoList.value = data
})

// 修改日历组件待办显示表示
const todoTagMap = ref({})
const getTagMap = async (day) => {
  const { success, message, data } = await getTodoTagMap({ day })
  if(!success) return errorMessage(message)
  todoTagMap.value = data
}
watch(currentDate, (newVal, oldVal) => {
  if(oldVal && newVal.getMonth() === oldVal.getMonth()) return
  getTagMap(dayjs(newVal).format('YYYY-MM-DD'))
}, { immediate: true })

const changeTodoCategory = ({ id, day, category }) => {
  const todoTag = todoTagMap.value[day].find(todoTag => todoTag.id === id)
  if(todoTag) todoTag.category = category
}
const changeTodoDone = ({ id, day, done }) => {
  const todoTag = todoTagMap.value[day].find(todoTag => todoTag.id === id)
  if(todoTag) todoTag.done = done
}

// 情况已完成
const clearDonwTodo = () => {
  MessageConfirm('提示', '确定要清空已完成的待办吗？', async () => {
    const ids = todoList.value.filter(todo => todo.done).map(todo => todo.id).join(',')
    const { success, message, data } = await del({ id: ids})
    if(!success) return errorMessage(message)
    successMessage(message)
    todoList.value = todoList.value.filter(todo => !todo.done)
  })
}

</script>


<script lang="ts">
export default {
  name: "Todo",
}
</script>

<style lang="scss" scoped>
$transparentColor: #ffffff00;
.todo {
  color: var(--my-c-normal);
  .el-calendar {
    --el-calendar-cell-width: 46px;
    ::v-deep .el-calendar-table .el-calendar-day {
      position: relative;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
  }
}

.el-input {
  --el-font-size-base: 16px;

}
::v-deep .el-checkbox {
  --el-checkbox-input-border: 1px solid #ccc;
  --el-checkbox-bg-color: $transparentColor;
  --el-checkbox-input-width: 16px;
  --el-checkbox-input-height: 16px;
  .el-checkbox__inner::after {
    top: 2px;
    left: 5px;
  }
}
</style>
