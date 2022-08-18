<template>
    <div>
      <p :class="`text-12px mb-10px font-bold colorvar-my-c-shallow ${isCollapse && 'text-center'}`">setting: 6</p>
      <ul :class="`bgcvar-my-bgc-deep p-10px list-none rounded-13px flex justify-between colorvar-my-c-normal
        ${isCollapse && 'h-128px overflow-scroll flex-col items-center'}
        `">
        <li 
          v-for="setting in settings"
          :class="liStyle"
        >
          <IconifyOnline size="22px" :icon="setting.icon" />
        </li>
        <li 
          :class="liStyle"
        >
          <IconifyOnline
            size="22px" 
            icon="carbon:asleep-filled" 
            dark-icon="carbon:light-filled"
            @click="toggleDark()"/>
        </li>
      </ul>
    </div>
</template>

<script setup lang='ts'>
import { isCollapse } from '@/hooks/useCollapse'
import { toggleDark } from '@/utils/dark'
const liStyle = 'hover:bgcvar-my-bgc-shallow rounded-6px p-4px'
const settings = reactive([
  {icon: 'uim:airplay'},
  {icon: 'uim:layer-group'},
  {icon: 'uim:lock'},
  {icon: 'uim:telegram-alt'},
  {icon: 'uim:user-nurse'},
])



</script>

<script lang='ts'>
export default {
  name: 'PlainSetting'
}
</script>

<style lang='scss' scoped>
</style>