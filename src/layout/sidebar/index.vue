<template>
  <div :class="`sidebar-wapper bgcvar-my-bgc-normal rounded-28px backdrop-filter backdrop-blur-xl h-100%`">
    <div :class="`px-28px py-20px relative ${isCollapse && 'px-20px!'}`">
      <HeaderBar></HeaderBar>
      <PlainUser
        :nickname="userStore.userInfo.nickname"
        :avatar="userStore.userInfo.avatar"
        :motto="userStore.userInfo.motto"
      />
      <el-divider class="border-color-#d0d9e2 dark:border-color-#ffffff30"/>
      <MenuList></MenuList>
      <el-divider class="border-color-#d0d9e2 dark:border-color-#ffffff30 mt-18px"/>
      <PlainTodo></PlainTodo>
      <PlainSetting class="mt-20px"></PlainSetting>
      <CreateTodoButton class="mt-20px"></CreateTodoButton>
    </div>
  </div>
</template>

<script setup lang='tsx'>
import HeaderBar from "./components/header-bar.vue";
import PlainUser from "./components/plain-user.vue";
import CreateTodoButton from "./components/create-todo-button.vue";
import PlainSetting from "./components/plain-setting.vue";
import PlainTodo from "./components/plain-todo.vue";
import MenuList from "./components/menu-list.vue";
import { isCollapse } from '@/hooks/useCollapse';
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore()

</script>

<script lang='tsx'>
export default {
  name: 'SideBar'
}
</script>

<style lang='scss' scoped>
.el-divider--horizontal {
  margin: 12px 0;
}
</style>