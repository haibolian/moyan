<template>
  <div class="flex justify-center">
    <!-- outline -->
    <div class="">
      
    </div>
    <!-- main -->
    <div class="journal-view bg-#fff py-35px px-30px w-900px">
      <h1 class="journal-title text-center"> {{ journalInfo.title }} </h1>
      <div class="text-center">
        <span>{{ journalInfo.user?.nickname }}</span>
        <span class="mx-15px">
          <IconifyOnline align="unset" size="14px" icon="akar-icons:calendar"></IconifyOnline>
          <span class="ml-4px">{{ journalInfo.createdAt }}</span>
        </span>
        <span>
          <IconifyOnline color="#555" align="unset" size="14px" icon="fa6-solid:folder-open"></IconifyOnline>
          <span class="ml-4px">{{ journalInfo.categoryName }}</span>
        </span>
      </div>
      <div ref="containerRef" id="journal-container"/>
    </div>
    <!-- more -->
    <div class="">
      
    </div>
  </div>
</template>

<script setup lang='ts'>
import { getJournal } from '@/api/journal';
import Vditor from 'vditor'

const router = useRouter()
const { id } = router.currentRoute.value.params

const journalInfo: any = reactive({})
const containerRef = ref();


onMounted(async () => {
  const { success, message, data } = await getJournal({ id });
  Object.assign(journalInfo, data) 
  Vditor.preview(containerRef.value, journalInfo.content)
})
</script>

<script lang='ts'>
export default {
  name: 'JournalView'
}
</script>

<style lang='scss' scoped>
.journal-view {
  #journal-container {
    padding:inherit;
    margin: inherit;
  }
}
ul {
  list-style-type: unset;
}
</style>