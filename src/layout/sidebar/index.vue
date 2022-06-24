<template>
  <div class="sidebar-wapper bg-#ffffff90 rounded-28px backdrop-filter backdrop-blur-xl h-100%">
    <HeaderBar></HeaderBar>
    <PlainUser></PlainUser>
    <MenuList></MenuList>
    <PlainTodo></PlainTodo>
    <PlainSetting></PlainSetting>
    <CreateTodoButton></CreateTodoButton>
  </div>
</template>

<script setup lang='ts'>
import HeaderBar from "./components/header-bar.vue";
import PlainUser from "./components/plain-user.vue";
import CreateTodoButton from "./components/create-todo-button.vue";
import PlainSetting from "./components/plain-setting.vue";
import PlainTodo from "./components/plain-todo.vue";
import MenuList from "./components/menu-list.vue";

</script>

<script lang='ts'>
export default {
  name: 'SideBar'
}
</script>

<style lang='scss' scoped>
</style>