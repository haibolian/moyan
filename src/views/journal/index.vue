
<template>
  <div>
    <div class="p-15px bgcvar-my-bgc-normal rounded-2xl">
      <el-button type="primary" @click="writeJournal">写文章</el-button>
    </div>
    <div class="journal-content p-15px bgcvar-my-bgc-normal rounded-2xl mt-20px">
      <el-table :data="journalList" size="" highlight-current-row>
        <el-table-column prop='createdAt' :formatter="formatDate" label="时间" width="150"></el-table-column>
        <el-table-column prop='title' label="标题" show-overflow-tooltip min-width="200">
          <template #="scope">
            <el-link
              class="colorvar-my-c-normal"
              :underline="false"
              @click="previewJournal(scope.row)"
              target="_blank"
            >
              {{ scope.row.title }}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column prop='categoryName' label="分类" width="150">
          <template #="scope">
            <el-tag effect="dark" type="warning">{{scope.row.categoryName}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template #="scope">
            <el-button type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { Journal } from './types';
import { getList, del as delJournal } from '@/api/journal';
import journal from '@/router/modules/journal';
import { errorMessage, successMessage } from '@/utils/message';
import { MessageConfirm } from '@/utils/message-box';

const formatDate = function(row){
  const date = /\d\d\d\d-\d\d-\d\d/.exec(row.createdAt)[0]
  return date.replace(/-/, '年').replace('-', '月') + '日'
}

const journalList = ref([])
const getJournalList = async () => {
  const { success, message, data } = await getList();
  if(!success)  return errorMessage(message);
  journalList.value = data.list;
  
}
getJournalList()

const writeJournal = () => {
  window.open('/journal/new')
}

const previewJournal = (journal:Journal) => {
  window.open(`/journal/view/${journal.id}`)
}

const handleEdit = (journal: Journal) => {
  window.open(`/journal/new/${journal.id}`)
}
const handleDelete = (journal: Journal) => {
  MessageConfirm('确定删除该日志吗?', '删除后将不能恢复', async () => {
    const { success, data, message } = await delJournal({ id: journal.id });
    if(!success) return errorMessage(message);
    successMessage(message);
    getJournalList()
  })
}


</script>

<script lang="ts">
export default {
  name: "Journal",
}
</script>

<style lang="scss" scoped></style>
