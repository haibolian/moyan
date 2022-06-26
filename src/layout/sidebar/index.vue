<template>
  <div class="sidebar-wapper bgcvar-my-bgc-normal rounded-28px backdrop-filter backdrop-blur-xl h-100%">
    <div class="p-28px">
      <HeaderBar></HeaderBar>
      <PlainUser></PlainUser>
      <el-divider class="border-color-#d0d9e2 dark:border-color-#ffffff30"/>
      <MenuList></MenuList>
      <el-divider class="border-color-#d0d9e2 dark:border-color-#ffffff30"/>
      <PlainTodo></PlainTodo>
      <PlainSetting class="mt-20px"></PlainSetting>
      <CreateTodoButton class="mt-20px"></CreateTodoButton>
    </div>
  </div>
</template>

<script setup lang='ts'>
import HeaderBar from "./components/header-bar.vue";
import PlainUser from "./components/plain-user.vue";
import CreateTodoButton from "./components/create-todo-button.vue";
import PlainSetting from "./components/plain-setting.vue";
import PlainTodo from "./components/plain-todo.vue";
import MenuList from "./components/menu-list.vue";
import MyBar from '@/components/my-bar'

</script>

<script lang='ts'>
export default {
  name: 'SideBar'
}
</script>

<style lang='scss' scoped>
</style>