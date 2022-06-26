<template>
    <div>
      <p class="text-12px mb-10px font-bold colorvar-my-c-shallow">setting: 6</p>
      <ul class="bgcvar-my-bgc-deep p-10px rounded-13px flex justify-between colorvar-my-c-normal">
        <li 
          v-for="setting in settings"
          class="hover:bg-#edeef2 focus:bg-#edeef2 rounded-6px p-4px"
        >
          <IconifyOnline size="22px" :icon="setting.icon"/>
        </li>
      </ul>
    <el-button @click="toggleDark()">切换</el-button>
    </div>
</template>

<script setup lang='ts'>
const settings = reactive([
  {icon: 'uim:airplay'},
  {icon: 'uim:layer-group'},
  {icon: 'uim:lock'},
  {icon: 'uim:telegram-alt'},
  {icon: 'uim:user-nurse'},
  {icon: 'carbon:light-filled'},
])

const isDark = useDark()
const toggleDark = useToggle(isDark)


</script>

<script lang='ts'>
export default {
  name: 'PlainSetting'
}
</script>

<style lang='scss' scoped>
</style>