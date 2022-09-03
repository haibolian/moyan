<template>
  <div id="my-menu-list">
    <p :class="`text-12px mb-10px font-bold colorvar-my-c-shallow ${isCollapse && 'text-center'}`">menu: 6</p>
    <el-menu
      :default-active="defaultActive"
      :collapse="isCollapse"
      background-color="none"
      :collapse-transition="false"
      class="font-bold"
      router
    >
      <el-menu-item index="home">
        <IconifyOnline icon="uim:apps" />
        <template #title>
          <span class="pl-10px">首页</span>
        </template>
      </el-menu-item>    
      <el-menu-item index="speak">
        <IconifyOnline icon="ri:edit-box-fill" />
        <template #title>
          <span class="pl-10px">说说</span>
        </template>
      </el-menu-item>
      <el-menu-item index="album">
        <IconifyOnline icon="uim:scenery" />
        <template #title>
          <span class="pl-10px">相册</span>
        </template>
      </el-menu-item>
      <el-menu-item index="journal">
        <IconifyOnline icon="ph:notebook-fill" />
        <template #title>
          <span class="pl-10px">日志</span>
        </template>
      </el-menu-item>
      <el-menu-item index="todo">
        <IconifyOnline icon="uim:check-square" />
        <template #title>
          <span class="pl-10px">待办</span>
        </template>
      </el-menu-item>
      <el-menu-item index="message">
        <IconifyOnline class="message-menu" icon="fa6-solid:square-pen" />
        <template #title>
          <div class='flex-1 flex justify-between'>
            <span class="pl-10px">留言板</span>
          </div>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang='ts'>
import { isCollapse } from '@/hooks/useCollapse'
const router = useRouter()
const defaultActive = ref(router.currentRoute.value.name)

const w = ref('114%')
const ml = ref('-7%')

watch(isCollapse, () =>{ 
  w.value = isCollapse.value ? '80%' : '114%';
  ml.value = isCollapse.value ? '10%' : '-7%';
})

</script>

<script lang='ts'>
export default {
  name: 'MenuList'
}
</script>

<style lang='scss' scoped>
.el-menu-item * {
  vertical-align: middle;
}
.el-menu-item {
  width: v-bind(w);
  margin-left: v-bind(ml);
  border-radius: 13px;
}
:deep(.el-menu-tooltip__trigger) {
  justify-content: center;

}
.el-menu-item.is-active {
  background-color: var(--el-menu-active-bg-color);
}
::v-deep .message-menu {
  svg {
    width: 22px;
  }
}
</style>