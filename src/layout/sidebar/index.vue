<template>
  <div class="sidebar-wapper bg-#ffffff90 rounded-28px backdrop-filter backdrop-blur-xl h-100%">
    <div class="p-28px">
      <HeaderBar></HeaderBar>
      <PlainUser></PlainUser>
      <MyBar px="2px" py="28px"></MyBar>
      <MenuList></MenuList>
      <MyBar p="15px 2px 28px"></MyBar>
      <PlainTodo></PlainTodo>
      <MyBar px="2px" py="8px" height="0"></MyBar>
      <PlainSetting></PlainSetting>
      <MyBar px="2px" py="8px" height="0"></MyBar>
      <CreateTodoButton></CreateTodoButton>
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