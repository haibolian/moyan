<template>
  <div id="my-menu-list">
    <p :class="`text-12px mb-10px font-bold colorvar-my-c-shallow ${isCollapse && 'text-center'}`">menu: 6</p>
    <el-menu
      default-active="2"
      :collapse="isCollapse"
      background-color="none"
      class="font-bold"
    >
      <el-menu-item index="1">
        <IconifyOnline class="ml-1px" size="23px" icon="uim:apps" />
        <template #title>
          <span class="pl-10px">Navigator Two</span>
        </template>
      </el-menu-item>    
      <el-menu-item index="2">
        <IconifyOnline icon="ri:edit-box-fill" />
        <template #title>
          <span class="pl-10px">Speak Some</span>
        </template>
      </el-menu-item>
      <el-menu-item index="3">
        <IconifyOnline icon="uim:scenery" />
        <template #title>
          <span class="pl-10px">My Picture</span>
        </template>
      </el-menu-item>
      <el-menu-item index="4">
        <IconifyOnline icon="uim:check-square" />
        <template #title>
          <div class='flex-1 flex justify-between'>
            <span class="pl-10px">Add Task</span>
          </div>
        </template>
      </el-menu-item>
      <el-menu-item index="5">
        <IconifyOnline icon="ph:notebook-fill" />
        <template #title>
          <span class="pl-10px">Navigator Two</span>
        </template>
      </el-menu-item>
      <el-menu-item index="6">
        <IconifyOnline size="26px" icon="bxs:notification" />
        <template #title>
          <span class="pl-10px">Navigator Two</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang='ts'>
import { isCollapse } from '@/hooks/useCollapse'

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
</style>