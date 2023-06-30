<template>
  <div class="demo">
    <div class="container">
      <sticker-table
        :layout="layout"
        :columns="columns"
        :scrolls="scrolls"
        :loadData="loadData"
        :customRow="customRow"
        :immediate="immediate"
        :paginate="paginate"
        rowKey="uuid"
      >
        <template #serial="{ rowIndex }">
          {{ rowIndex + 1 }}
        </template>

        <template #pagination="{ loading, pagination, refresh, reload }">
          <table-pagination
            :loading="loading"
            :options="pagination"
            @refresh="refresh"
            @reload="reload"
          />
        </template>
      </sticker-table>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TableFixedAllAndPaginate'
}
</script>

<script setup lang="ts">
import StickerTable from '../../../src/sticker-table.vue'
import source from './source'

// 示范H (表头和左右两列固定 + 分页)
const columns = [
  {
    title: '序号',
    dataIndex: 'serial',
    scopedSlots: { customRender: 'serial' },
    align: 'center',
    width: 55
  },
  {
    title: '名称',
    dataIndex: 'materialName',
    width: 130,
    fixed: 'left' as 'left'
  },
  {
    title: '规格型号',
    dataIndex: 'jModel',
    ellipsis: true,
    width: 150
  },
  {
    title: '申请数',
    dataIndex: 'orderQty',
    width: 95
  },
  {
    title: '计划描述',
    dataIndex: 'description',
    ellipsis: true,
    width: 140
  },
  {
    title: '计划类型',
    dataIndex: 'lineType',
    width: 120
  },
  {
    title: '预估单价/元',
    dataIndex: 'unitCost',
    width: 90
  },
  {
    title: '库存数量',
    dataIndex: 'totalCurbal',
    ellipsis: true,
    width: 90
  },
  {
    title: '计量单位',
    dataIndex: 'orderUnitName',
    ellipsis: true,
    width: 85
  },
  {
    title: '采购员',
    dataIndex: 'agent',
    ellipsis: true,
    width: 110
  },
  {
    title: '申请人',
    dataIndex: 'requestedByName',
    ellipsis: true,
    width: 110
  },
  {
    title: '创建人',
    dataIndex: 'createByName',
    fixed: 'right' as 'right',
    ellipsis: true,
    width: 95
  },
  {
    title: '部门',
    dataIndex: 'departmentName',
    ellipsis: true,
    width: 95
  }
]
const scrolls = {
  y: 332
}
const loadData = (options: any) => {
  const pageNo = options.pageNo
  const pageSize = options.pageSize
  const totalPage = Math.floor(source.length / options.pageSize) + (source.length % options.pageSize ? 1 : 0)
  const totalCount = source.length
  return {
    pageNo: pageNo,
    pageSize: pageSize,
    totalPage: totalPage,
    totalCount: totalCount,
    data: source.slice((pageNo - 1) * pageSize, pageNo * pageSize)
  }
}
const customRow = (record: any, index: any) => ({
  on: {
    click: () => {
      console.log(record, index)
    }
  }
})
const immediate = true
const paginate = true
const layout = 'fixed' as 'fixed'
</script>

<style lang="less" scoped>
.demo {
  width: 100%;
  margin: 30px 0;
  box-sizing: border-box;
  & > .title {
    width: 100%;
    height: 40px;
    padding: 0 20px;
    font-size: 14px;
    line-height: 40px;
    box-sizing: border-box;
  }
  & > .container {
    max-height: 350px;
    padding: 7px;
    box-sizing: border-box;
    border: solid 1px #cccccc;
    overflow: auto;
  }
}
</style>
