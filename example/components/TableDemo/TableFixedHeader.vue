<template>
  <div class="demo">
    <div class="title">
      示范D (表头固定)
    </div>

    <div class="container">
      <sticker-table
        :layout="layout"
        :columns="columns"
        :scrolls="scrolls"
        :loadData="loadData"
        :customRow="customRow"
        :immediate="immediate"
        rowKey="uuid"
      >
        <template #serial="{ rowIndex }">
          {{ rowIndex + 1 }}
        </template>
      </sticker-table>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TableFixedHeader'
}
</script>

<script setup lang="ts">
import StickerTable from '../../../src/sticker-table.vue'
import source from './source'

// 示范D (表头固定)
const columns = [
  {
    title: '序号',
    dataIndex: 'serial',
    scopedSlots: { customRender: 'serial' },
    align: 'center',
    width: 55
  },
  {
    title: '编号',
    dataIndex: 'materialNum',
    ellipsis: true,
    width: 110
  },
  {
    title: '名称',
    dataIndex: 'materialName',
    width: 130
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
    title: '审核数',
    dataIndex: 'jwspOrderQty',
    width: 95
  },
  {
    title: '使用方向',
    dataIndex: 'usedforName',
    ellipsis: true,
    width: 280
  },
  {
    title: '计划年月',
    dataIndex: 'planMonth',
    width: 100
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
  y: 200
}
const loadData = () => {
  return [...source]
}
const customRow = (record: any, index: any) => ({
  on: {
    click: () => {
      console.log(record, index)
    }
  }
})
const immediate = true
const layout = 'fixed' as 'fixed'
</script>

<style lang="less" scoped>
.demo {
  width: 100%;
  margin: 50px 0;
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
