<template>
  <div class="h-14px w-14px rounded-full" :style="{ background: color }"></div>
</template>

<script setup lang='ts'>
const props = defineProps({
  color: {
    type: String,
    default: '#fff'
  }
})
</script>

<script lang='ts'>
export default {
  name: 'CircleColor'
}
</script>
