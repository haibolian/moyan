<template>
  <div id="my-menu-list">
    <p class="text-12px font-bold color-#00000070">menu: 6</p>
    <el-menu
      default-active="2"
      :collapse="false"
      background-color="none"
      :style="elMenuThemeConfig"
    >
      <el-menu-item index="1">
        <IconifyOnline icon="uim:calender" />
        <template #title>
          <span class="pl-10px">Navigator Two</span>
        </template>
      </el-menu-item>    
      <el-menu-item index="2">
        <IconifyOnline icon="uim:calender" />
        <template #title>
          <span class="pl-10px">Navigator Two</span>
        </template>
      </el-menu-item>
      <el-menu-item index="3">
        <IconifyOnline icon="uim:calender" />
        <template #title>
          <span class="pl-10px">Navigator Two</span>
        </template>
      </el-menu-item>
      <el-menu-item index="4">
        <IconifyOnline icon="uim:calender" />
        <template #title>
          <span class="pl-10px">Navigator Two</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang='ts'>
const elMenuThemeConfig = reactive({
  '--el-menu-bg-color': 'none',
  '--el-menu-active-color' : '#fff',
  '--el-menu-active-bg-color': '#3182ff',
  '--el-menu-text-color' : '#00000070',
  '--el-menu-hover-bg-color': 'blue',
  '--el-menu-hover-text-color': '#000',
  '--el-menu-border-color': 'none',
  '--el-menu-item-height': '50px'
//   --el-menu-sub-item-height: calc(var(--el-menu-item-height) - 6px);
//   --el-menu-horizontal-sub-item-height: 36px;
//   --el-menu-item-font-size: var(--el-font-size-base);
//   --el-menu-item-hover-fill: var(--el-color-primary-light-9);
//   --el-menu-base-level-padding: 20px;
//   --el-menu-level-padding: 20px;
//   --el-menu-icon-transform-closed: none;
//   --el-menu-icon-transform-open: rotateZ(180deg)
})
</script>

<script lang='ts'>
export default {
  name: 'MenuList'
}
</script>

<style lang='scss'>
.el-menu-item * {
  vertical-align: middle;
}
.el-menu-item {
  padding-left: 12px !important;
  width: 114%;
  margin-left: -7%;
  
}
.el-menu-item.is-active {
  background-color: var(--el-menu-active-bg-color);
  border-radius: 18px;
}
.iconify-online {

}
</style>