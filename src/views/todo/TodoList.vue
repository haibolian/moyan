<template>
  <el-row
    v-for="(todo, index) in list"
    :key="todo.id"
    :gutter="20"
    class="border-b border-b-#ddd mb-10px"
    align="middle"
  >
    <el-col :span="1" @click="">
      <el-checkbox v-model="todo.done"></el-checkbox>
    </el-col>
    <el-col :span="16">
      <div
        class="min-h-32px text-16px leading-32px outline-none max-h-120px overflow-auto"
        :contenteditable="true"
        @blur="blurTitle($event, todo)"
      >
        {{ todo.title }}
      </div>
    </el-col>
    <el-col :span="2">
      <SelectColorGroup v-model="todo.category">
        <template #suffix="{ color }">
          <span class="ml-5px">{{ color.name }}</span>
        </template>
      </SelectColorGroup>
    </el-col>
    <el-col :span="5">
      {{ todo.handleTime }}
    </el-col>
  </el-row>
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
  todo.title = e.target.innerHTML
}

</script>

<script lang='ts'>
export default {
  name: 'TodoList'
}
</script>

<style lang='scss' scoped>

</style>