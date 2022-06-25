<template>
    <p class="text-12px mb-10px font-bold color-#00000070">setting: 6</p>
    <ul class="bg-#fff p-10px rounded-13px flex justify-between color-#00000090">
      <li 
        v-for="setting in settings"
        class="hover:bg-#edeef2 focus:bg-#edeef2 rounded-6px p-4px"
      >
        <IconifyOnline size="22px" :icon="setting.icon" />
      </li>
    </ul>
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
</script>

<script lang='ts'>
export default {
  name: 'PlainSetting'
}
</script>

<style lang='scss' scoped>
</style>