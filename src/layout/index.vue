<template>
  <div class="layout">
    <nav class="sidebar">
      <SideBar></SideBar>
    </nav>
    <main class="main-container">
      <div class="layout-view">
        <router-view></router-view>
      </div>
    </main>

  </div>
</template>

<script setup lang="ts">
import SideBar from './components/sidebar.vue'
</script>
<script lang="ts">
export default {
  name: 'Layout',
}
</script>
<style scoped>
</style>
