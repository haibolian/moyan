<template>
  <el-dropdown class="block!" trigger="click">
    <div class="cursor-pointer p-3px text-center">
      <CircleColor class="m-auto" :color="modelValue"></CircleColor>
    </div>
      <!-- <IconifyOnline icon="uim:angle-down" /> -->
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          class="py-8px! px-20px!"
          v-for="color in options"
          @click="clickColor(color)"
        >
          <CircleColor :color="color.value"></CircleColor>
          <slot name="suffix" :color="color"></slot>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang='ts'>
import CircleColor from './circle-color.vue';
const props = defineProps({
  modelValue: {
    type: String,
    default: '#000'
  },
  options: {
    type: Array,
    default: () => [
      {
        value: '#ff675d',
        name: '红色'
      },
      {
        value: '#ffaa4f',
        name: '橙色'
      },
      {
        value: '#a5a5a9',
        name: '灰色'
      },
      {
        value: '#4c95ff',
        name: '蓝色'
      },
      {
        value: '#64d86c',
        name: '绿色'
      },
      {
        value: '#c076e5',
        name : '紫色'
      }
    ]
  },

})
const emits = defineEmits(['update:modelValue'])

const clickColor = ({ value }) => {
  emits('update:modelValue', value)
}


</script>

<script lang='ts'>
export default {
  name: 'SelectColorGroup'
}
</script>