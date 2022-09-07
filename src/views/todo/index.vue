<template>
  <div class="todo">
    <div class="my-card">
      <el-button type="primary" @click="addTodo">+</el-button>
    </div>

    <div class="my-card min-h-20rem">
      <h2>待办</h2>
      <TodoList :list="todoList.filter(todo => !todo.done)" :type='1' />
      <h2 class="mt-50px">已完成</h2>
      <TodoList :list="todoList.filter(todo => todo.done)" :type='1'/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoList from './TodoList.vue';

const addTodo = () => {
  todoList.value.push({
    id: new Date().getTime(),
    _isNew: true,
    title: '',
    handleTime: '',
    importance: 1,
    category: 'blue',
    done: false,
    progress: 0.3,
  })
}

const todoList = ref([
  {
    id: '1',
    title: '为哥哥打榜',
    handleTime: '2020-01-01 15:23',
    importance: 1,
    category: 'red',
    done: true,
    progress: 0.3,
  },
  {
    id: '2',
    title: '抨击小黑子',
    handleTime: '2020-01-01 15:23',
    importance: 2,
    category: 'blue',
    done: false,
    progress: 0.5,
  },
  {
    id: '3',
    title: '守护坤坤',
    handleTime: '2020-01-01 15:23',
    importance: 3,
    category: 'green',
    done: false,
    progress: 0.8,
  }
])
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
  }
}
</style>
