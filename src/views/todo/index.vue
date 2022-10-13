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
        <TodoList :list="todoList.filter(todo => !todo.done)" :type='0' />
        <div class="flex justify-between items-center mt-50px">
          <h2>已完成</h2>
          <el-button type="primary">清空</el-button>
        </div>
        <TodoList :list="todoList.filter(todo => todo.done)" :type='1'/>
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
              v-for="todo in todoTagMap[data.day]"
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
import { getTodoTagMap, getList, create } from '@/api/todo';
import { errorMessage } from '@/utils/message';

const colors = [
      {
        value: '#ff675d',
        name: '红色'
      },
      {
        value: '#ffaa4f',
        name: '橙色'
      },
      {
        value: '#a5a5a9',
        name: '灰色'
      },
      {
        value: '#4c95ff',
        name: '蓝色'
      },
      {
        value: '#64d86c',
        name: '绿色'
      },
      {
        value: '#c076e5',
        name : '紫色'
      }
    ]
    
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
const todoTagMap = ref({})
watchEffect(async () => {
  // const { success, message, data } = await getTodoTagMap({ day: currentDate.value.toLocaleDateString })
  // if(!success) return errorMessage(message)
  todoTagMap.value = {
    '2022-10-09': [
      {
        category: '#ff675d',
      },
      {
        category: '#64d86c',
      },
      {
        category: '#c076e5',
      }
    ]
  }
})

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
