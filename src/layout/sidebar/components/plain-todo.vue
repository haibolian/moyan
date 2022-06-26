<template>
  <div>
    <p class="text-12px mb-10px font-bold colorvar-my-c-shallow">todo: 3</p>
    <div class="bgcvar-my-bgc-deep box-border px-16px py-20px h-200px rounded-13px">
      <ul class="overflow-auto h-100%">
        <li v-for="task in tasks" class="h-40px flex justify-between items-center">
          <div class="bg-#eee rounded-50% p-5px">
            <IconifyOnline size='18px' :icon="task.icon" />
          </div>
          <h4 class="overflow-ellipsis flex-auto mx-8px inline colorvar-my-c-deep overflow-hidden">{{ task.content }}</h4>
          <el-checkbox v-model="task.done" @change="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
const tasks = reactive([
  {
    icon: 'twemoji:ballot-box-with-ballot',
    title: '',
    content: 'create a project of vue',
    done: false
  },
  {
    icon: 'twemoji:beating-heart',
    title: '',
    content: 'send son to school',
    done: false
  },
  {
    icon: 'twemoji:camping',
    title: 'Go to the store',
    content: 'buy a new phone',
    done: false
  },
  {
    icon: 'twemoji:beating-heart',
    title: '',
    content: 'send son to school',
    done: false
  },
  {
    icon: 'twemoji:camping',
    title: 'Go to the store',
    content: 'buy a new phone',
    done: false
  },
  {
    icon: 'twemoji:beating-heart',
    title: '',
    content: 'send son to school',
    done: false
  },
  {
    icon: 'twemoji:camping',
    title: 'Go to the store',
    content: 'buy a new phone',
    done: false
  },
  {
    icon: 'twemoji:camping',
    title: 'Go to the store',
    content: 'buy a new phone',
    done: false
  },
  {
    icon: 'twemoji:camping',
    title: 'Go to the store',
    content: 'buy a new phone',
    done: false
  }
])
</script>

<script lang='ts'>
export default {
  name: 'PlainTodo'
}
</script>

<style lang='scss' scoped>
</style>