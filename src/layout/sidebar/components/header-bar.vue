<template>
  <div class="py-20px pt-0 flex">
    <!-- <div class="w-11px h-11px bg-#ff4a3e rounded-50%"></div>
    <div class="w-11px h-11px bg-#ffb51f rounded-50% mx-7px"></div>
    <div class="w-11px h-11px bg-#4eea33 rounded-50%" @click="toggleCollapse"></div> -->
  </div>
</template>

<script setup lang='ts'>
const isCollapse = ref(false)
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<script lang='ts'>
export default {
  name: 'HeaderBar'
}
</script>

<style lang='scss' scoped>
</style>