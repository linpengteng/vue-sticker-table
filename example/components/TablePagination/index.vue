<template>
  <div class="van-pagination-controller">
    <van-pagination
      v-model="pagination.pageNo"
      :pageCount="pagination.totalPage"
      :totalItems="pagination.totalCount"
      :itemsPerPage="pagination.pageSize"
      :showPageSize="pagination.showPageSize"
      @change="() => onPageNoChange(pagination)"
    >
      <template #prev-text>
        <van-icon name="arrow-left" />
      </template>
      <template #page="{ text }">
        <span>{{ text }}</span>
      </template>
      <template #next-text>
        <van-icon name="arrow" />
      </template>
    </van-pagination>

    <van-dropdown-menu
      direction="up"
      :class="{ disabled: loading }"
    >
      <van-dropdown-item
        v-model="pagination.pageSize"
        :options="pageSizes"
        @change="() => onPageSizeChange(pagination)"
      />
    </van-dropdown-menu>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TablePagination'
}
</script>

<script setup lang="ts">
import { reactive, watch, withDefaults } from 'vue'

export interface Props {
  loading: boolean;
  options: {
    pageNo?: number;
    pageSize?: number;
    totalPage?: number;
    totalCount?: number;
    showPageSize?: number;
  }
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  options: () => ({
    pageNo: 1,
    pageSize: 20,
    totalPage: 0,
    totalCount: 0,
    showPageSize: 6
  })
})

const pagination = reactive({
  pageNo: 1,
  pageSize: 20,
  totalPage: 0,
  totalCount: 0,
  showPageSize: 6
})
const emit = defineEmits(['reload', 'refresh'])
const onPageSizeChange = (options: any) => emit('refresh', options)
const onPageNoChange = (options: any) => emit('reload', { ...options, pageNo: pagination.pageNo })

const pageSizes = [
  { text: '每页10条', value: 10 },
  { text: '每页15条', value: 15 },
  { text: '每页20条', value: 20 },
  { text: '每页25条', value: 25 },
  { text: '每页30条', value: 30 },
  { text: '每页50条', value: 50 },
  { text: '每页100条', value: 100 }
]

watch(() => props.options, options => {
  Object.assign(pagination, options)
}, { immediate: true, deep: true })
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
