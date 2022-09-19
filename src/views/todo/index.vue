<template>
  <div class="todo flex">
    <div class="todo-left w-700px">
      <div class="my-card">
        <el-button type="primary" @click="addTodo">+</el-button>
      </div>
  
      <div class="my-card min-h-20rem pb-50px">
        <h2>待办</h2>
        <TodoList :list="todoList.filter(todo => !todo.done)" :type='0' />
        <h2 class="mt-50px">已完成</h2>
        <TodoList :list="todoList.filter(todo => todo.done)" :type='1'/>
      </div>
    </div>
    <div class="todo-right flex-1 ml-40px">
      <el-calendar class="w-300px" v-model="currentDate">
        <template #dateCell="{ data }">
          <span class="h-7px">{{ Number(data.day.split('-')[2]) }}</span>
          <span class="h-5px">·</span>
        </template>
      </el-calendar>
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoList from './TodoList.vue';
import SmallCalendar from '@/components/small-calendar/index.vue';

const addTodo = () => {
  todoList.value.push({
    id: new Date().getTime(),
    _isNew: true,
    title: '',
    handleTime: '',
    importance: 1,
    category: 'blue',
    done: 0,
    progress: 0.3,
  })
}

const todoList = ref([])

const currentDate = ref()
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
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
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
