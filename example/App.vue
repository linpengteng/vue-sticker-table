<template>
  <section>
    <h2>Vue Sticker Table </h2>

    <div class="demo A">
      <div class="title">
        示范A (无数据)
      </div>
      <div class="container">
        <sticker-table
          ref="table"
          :layout="demoA.layout"
          :columns="demoA.columns"
          :scrolls="demoA.scrolls"
          :loadData="demoA.loadData"
          :customRow="demoA.rowClick"
          :immediate="demoA.immediate"
          rowKey="uuid"
        >
          <template #serial="{ rowIndex }">
            {{ rowIndex + 1 }}
          </template>
        </sticker-table>
      </div>
    </div>

    <div class="demo B">
      <div class="title">
        示范B (正在加载)
      </div>
      <div class="container">
        <sticker-table
          :layout="demoB.layout"
          :columns="demoB.columns"
          :scrolls="demoB.scrolls"
          :loadData="demoB.loadData"
          :customRow="demoB.rowClick"
          :immediate="demoB.immediate"
          rowKey="uuid"
        >
          <template #serial="{ rowIndex }">
            {{ rowIndex + 1 }}
          </template>
        </sticker-table>
      </div>
    </div>

    <div class="demo C">
      <div class="title">
        示范C (普通)
      </div>
      <div class="container">
        <sticker-table
          :layout="demoC.layout"
          :columns="demoC.columns"
          :scrolls="demoC.scrolls"
          :loadData="demoC.loadData"
          :customRow="demoC.rowClick"
          :immediate="demoC.immediate"
          rowKey="uuid"
        >
          <template #serial="{ rowIndex }">
            {{ rowIndex + 1 }}
          </template>
        </sticker-table>
      </div>
    </div>

    <div class="demo D">
      <div class="title">
        示范D (表头固定)
      </div>
      <div class="container">
        <sticker-table
          :layout="demoD.layout"
          :columns="demoD.columns"
          :scrolls="demoD.scrolls"
          :loadData="demoD.loadData"
          :customRow="demoD.rowClick"
          :immediate="demoD.immediate"
          rowKey="uuid"
        >
          <template #serial="{ rowIndex }">
            {{ rowIndex + 1 }}
          </template>
        </sticker-table>
      </div>
    </div>

    <div class="demo E">
      <div class="title">
        示范E (左列固定)
      </div>
      <div class="container">
        <sticker-table
          :layout="demoE.layout"
          :columns="demoE.columns"
          :scrolls="demoE.scrolls"
          :loadData="demoE.loadData"
          :customRow="demoE.rowClick"
          :immediate="demoE.immediate"
          rowKey="uuid"
        >
          <template #serial="{ rowIndex }">
            {{ rowIndex + 1 }}
          </template>
        </sticker-table>
      </div>
    </div>

    <div class="demo F">
      <div class="title">
        示范F (左右列固定)
      </div>
      <div class="container">
        <sticker-table
          :layout="demoF.layout"
          :columns="demoF.columns"
          :scrolls="demoF.scrolls"
          :loadData="demoF.loadData"
          :customRow="demoF.rowClick"
          :immediate="demoF.immediate"
          rowKey="uuid"
        >
          <template #serial="{ rowIndex }">
            {{ rowIndex + 1 }}
          </template>
        </sticker-table>
      </div>
    </div>

    <div class="demo G">
      <div class="title">
        示范G (表头和左右两列固定)
      </div>
      <div class="container">
        <sticker-table
          :layout="demoG.layout"
          :columns="demoG.columns"
          :scrolls="demoG.scrolls"
          :loadData="demoG.loadData"
          :customRow="demoG.rowClick"
          :immediate="demoG.immediate"
          rowKey="uuid"
        >
          <template #serial="{ rowIndex }">
            {{ rowIndex + 1 }}
          </template>
        </sticker-table>
      </div>
    </div>

    <div class="demo H">
      <div class="title">
        示范H (表头和左右两列固定 + 分页)
      </div>
      <div class="container">
        <sticker-table
          :layout="demoH.layout"
          :columns="demoH.columns"
          :scrolls="demoH.scrolls"
          :loadData="demoH.loadData"
          :customRow="demoH.rowClick"
          :immediate="demoH.immediate"
          :paginate="demoH.paginate"
          rowKey="uuid"
        >
          <template #serial="{ rowIndex }">
            {{ rowIndex + 1 }}
          </template>

          <template #pagination="{ loading, pagination, refresh, reload }">
            <vue-pagination
              :loading="loading"
              :options="pagination"
              @refresh="refresh"
              @reload="reload"
            />
          </template>
        </sticker-table>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'TableDemo'
}
</script>

<script setup lang="ts">
import StickerTable from '../src/sticker-table.vue'
import source from './source'

// 示范A (无数据)
const demoA = {
  columns: [
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
      sorter: true,
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
  ],
  scrolls: {},
  loadData: () => {
    return []
  },
  rowClick: (record: any, index: any) => ({
    on: {
      click: () => {
        console.log(record, index)
      }
    }
  }),
  immediate: true,
  layout: 'fixed' as 'fixed'
}

// 示范B (正在加载)
const demoB = {
  columns: [
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
      sorter: true,
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
  ],
  scrolls: {},
  loadData: () => {
    return new Promise(() => {})
  },
  rowClick: (record: any, index: any) => ({
    on: {
      click: () => {
        console.log(record, index)
      }
    }
  }),
  immediate: true,
  layout: 'fixed' as 'fixed'
}

// 示范C (普通)
const demoC = {
  columns: [
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
      sorter: true,
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
  ],
  scrolls: {},
  loadData: () => {
    return [...source]
  },
  rowClick: (record: any, index: any) => ({
    on: {
      click: () => {
        console.log(record, index)
      }
    }
  }),
  immediate: true,
  layout: 'fixed' as 'fixed'
}

// 示范D (表头固定)
const demoD = {
  columns: [
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
      sorter: true,
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
  ],
  scrolls: {
    y: 200
  },
  loadData: () => {
    return [...source]
  },
  rowClick: (record: any, index: any) => ({
    on: {
      click: () => {
        console.log(record, index)
      }
    }
  }),
  immediate: true,
  layout: 'fixed' as 'fixed'
}

// 示范E (左列固定)
const demoE = {
  columns: [
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
      fixed: 'left' as 'left',
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
      sorter: true,
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
  ],
  scrolls: {},
  loadData: () => {
    return [...source]
  },
  rowClick: (record: any, index: any) => ({
    on: {
      click: () => {
        console.log(record, index)
      }
    }
  }),
  immediate: true,
  layout: 'fixed' as 'fixed'
}

// 示范F (左右两列固定)
const demoF = {
  columns: [
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
      fixed: 'left' as 'left',
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
      sorter: true,
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
      fixed: 'right' as 'right',
      width: 95
    }
  ],
  scrolls: {},
  loadData: () => {
    return [...source]
  },
  rowClick: (record: any, index: any) => ({
    on: {
      click: () => {
        console.log(record, index)
      }
    }
  }),
  immediate: true,
  layout: 'fixed' as 'fixed'
}

// 示范F (表头和左右两列固定)
const demoG = {
  columns: [
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
      fixed: 'left' as 'left',
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
      sorter: true,
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
      fixed: 'right' as 'right',
      width: 95
    }
  ],
  scrolls: {
    y: 200
  },
  loadData: () => {
    return [...source]
  },
  rowClick: (record: any, index: any) => ({
    on: {
      click: () => {
        console.log(record, index)
      }
    }
  }),
  immediate: true,
  layout: 'fixed' as 'fixed'
}

// 示范F (表头和左右两列固定 + 分页)
const demoH = {
  columns: [
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
      fixed: 'left' as 'left',
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
      sorter: true,
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
      fixed: 'right' as 'right',
      width: 95
    }
  ],
  scrolls: {
    y: 332
  },
  loadData: (options: any) => {
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
  },
  rowClick: (record: any, index: any) => ({
    on: {
      click: () => {
        console.log(record, index)
      }
    }
  }),
  immediate: true,
  paginate: true,
  layout: 'fixed' as 'fixed'
}
</script>

<style lang="less" scoped>
section {
  width: 100%;
  box-sizing: border-box;
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
}
</style>
