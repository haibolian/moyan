<template>
  <div class="layout flex">
    <div class="w-30% flex justify-end">
      <nav class="sidebar">
        <!-- transition-width-300  ease-in-out -->
        <SideBar></SideBar>
      </nav>
    </div>
    <main class="main-container w-40%">
      <div class="layout-view">
        <router-view></router-view>
      </div>
    </main>
    

  </div>
</template>

<script setup lang="ts">
import SideBar from './sidebar/index.vue'
import { isCollapse } from "@/hooks/useCollapse"
const sidebarWidth = ref('330px');

watch(isCollapse, (val) => {
  sidebarWidth.value = val ? '146px' : '330px'
})

</script>
<script lang="ts">
export default {
  name: 'Layout',
}
</script>
<style scoped>
.layout {
  position: relative;
  height: 100%;
  --sidebar-width: v-bind(sidebarWidth);
}

.sidebar {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  /* left: 0; */
  width: var(--sidebar-width);
  height: 100vh;
  padding: 20px;
}

.main-container {
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  top: 0;
  /* left: var(--sidebar-width); */
  /* width: calc(100% - var(--sidebar-width)); */
  min-height: 100vh;
}
</style>
