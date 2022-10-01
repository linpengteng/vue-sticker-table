<template>
  <div
    ref="container"
    class="s-container"
  >
    <div
      ref="nestedContainer"
      class="s-spin-nested-container"
    >
      <div
        ref="nestedContent"
        :class="['s-spin-nested-content', {
          scopes: loading && compute.nestedScrollHeight.value !== 'auto',
          spining: loading
        }]"
        :style="{ height: compute.nestedScrollHeight.value }"
        @scroll.passive="onscroll"
      >
        <div
          ref="tableWrapper"
          class="s-nested-table-wrapper"
        >
          <table
            ref="table"
            class="s-nested-table"
            :tableLayout="compute.nestedTableLayout.value"
            :style="{ width: compute.nestedTableWidth.value }"
          >
            <colgroup>
              <col
                v-for="(column, colIndex) of columns"
                :key="colIndex"
                :style="methods.renderColGroupStyle({ ...column })"
              >
            </colgroup>

            <thead class="s-table-thead">
              <tr class="s-table-thead-tr">
                <th
                  v-for="(column, colIndex) of columns"
                  :key="colIndex"
                  class="s-table-thead-th"
                  :style="methods.renderElementStyle({ ...column, fixedTop: compute.isFixedTop.value }, colIndex)"
                  :fixedLeft="colIndex <= compute.fixedLeftIndex.value"
                >
                  <span class="s-table-thead-th-cell">
                    <slot
                      :name="methods.renderScopedSlots('title', { ...column })"
                      :title="column.title"
                      :column="{ ...column }"
                      :columns="[ ...columns ]"
                      :colIndex="colIndex"
                    >{{ column.title }}</slot>
                  </span>
                </th>
              </tr>
            </thead>

            <tbody class="s-table-tbody">
              <tr
                v-for="(source, rowIndex) of sources"
                :key="source[rowKey]"
                class="s-table-tbody-tr"
                @click.stop="methods.triggerCustomRow('click', source, rowIndex)"
                @dblclick.stop="methods.triggerCustomRow('dblclick', source, rowIndex)"
              >
                <td
                  v-for="(column, colIndex) of columns"
                  :key="colIndex"
                  class="s-table-tbody-td"
                  :style="methods.renderElementStyle({ ...column, fixedTop: false }, colIndex)"
                >
                  <span class="s-table-tbody-td-cell">
                    <slot
                      :name="methods.renderScopedSlots('customRender', { ...column })"
                      :value="source[column.dataIndex]"
                      :source="{ ...source }"
                      :column="{ ...column }"
                      :sources="[ ...sources ]"
                      :columns="[ ...columns ]"
                      :colIndex="colIndex"
                      :rowIndex="rowIndex"
                    >{{ source[column.dataIndex] }}</slot>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          v-if="!sources.length"
          class="s-nested-table-empty"
        >
          <div class="s-empty-image">
            <sticker-empty />
          </div>
          <p class="s-empty-text">
            <span>暂无数据</span>
          </p>
        </div>
      </div>

      <sticker-loading
        v-if="loading"
        :loading="loading"
      />
    </div>

    <div
      v-if="paginate"
      class="s-pagination-container"
    >
      <slot
        name="pagination"
        :loading="loading"
        :pagination="pagination"
        :refresh="methods.refresh"
        :reload="methods.reload"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'StickerTable'
}
</script>

<script setup lang="ts">
import {
  Ref,
  ref,
  watch,
  nextTick,
  reactive,
  computed,
  withDefaults,
  onBeforeMount,
  onUnmounted,
  onMounted
} from 'vue'

import StickerLoading from './sticker-loading.vue'
import StickerEmpty from './sticker-empty.vue'
import Util from './index.util'

export interface TheadColums {
  width: number;
  height: number;
}

export interface Pagination {
  pageNo: number;
  pageSize: number;
  totalPage: number;
  totalCount: number;
  showPageSize: number;
}

export interface Column {
  title: string,
  dataIndex: string
  ellipsis?: boolean;
  scopedSlots?: Record<string, string>;
  fixed?: 'left' | 'right';
  minWidth?: string | number;
  maxWidth?: string | number;
  width?: string | number;
  align?: string;
}

export interface Props {
  layout?: 'fixed' | 'auto';
  rowKey: string;
  columns: Array<Column>;
  scrolls?: { x?: string | number, y?: string | number };
  customRow: (record: Record<string, any>, index: number) => { on?: Record<string, Function> };
  immediate?: boolean;
  paginate?: boolean | number | Pagination;
  loadData: (pagination: Pagination) => any;
  handleData?: (response: any, util: typeof Util) => { data: Array<any>, pageNo: number, totalPage: number, totalCount: number };
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'auto',
  rowKey: '',
  columns: () => [],
  scrolls: undefined,
  customRow: (record, index) => ({ on: {} }),
  immediate: true,
  paginate: undefined,
  loadData: () => {},
  handleData: (response, util) => {
    if (util.isObject(response)) {
      if (util.isObject(response.result)) {
        const data = response.result.data || []
        const pageNo = response.result.pageNo || 1
        const totalPage = response.result.totalPage || 0
        const totalCount = response.result.totalCount || 0

        return {
          data,
          pageNo,
          totalPage,
          totalCount
        }
      }

      if (util.isArray(response.result)) {
        const data = response.result || []
        const pageNo = 1
        const pageSize = data.length
        const totalPage = 0
        const totalCount = data.length

        return {
          data,
          pageNo,
          pageSize,
          totalPage,
          totalCount
        }
      }

      const data = response.data || []
      const pageNo = response.pageNo || 1
      const totalPage = response.totalPage || 0
      const totalCount = response.totalCount || 0

      return {
        data,
        pageNo,
        totalPage,
        totalCount
      }
    }
    if (util.isArray(response)) {
      const data = response || []
      const pageNo = 1
      const pageSize = data.length
      const totalPage = 0
      const totalCount = data.length

      return {
        data,
        pageNo,
        pageSize,
        totalPage,
        totalCount
      }
    }

    return {
      data: [],
      pageNo: 1,
      pageSize: 20,
      totalPage: 0,
      totalCount: 0
    }
  }
})

const compute = {
  isFixedTop: computed(() => {
    return /^[+-]?\d+\.?\d*(px)?$/.test(String(props.scrolls?.y))
  }),
  isFixedLeft: computed(() => {
    let isFixedLeft = false

    for (const column of props.columns) {
      if (column.fixed === 'left') {
        isFixedLeft = true
        break
      }
    }

    return isFixedLeft
  }),
  isFixedRight: computed(() => {
    let isFixedRight = false

    for (const column of props.columns) {
      if (column.fixed === 'left') {
        isFixedRight = false
      }
      if (column.fixed === 'right') {
        isFixedRight = true
      }
    }

    return isFixedRight
  }),
  fixedLeftIndex: computed(() => {
    let index = -1
    const columns = props.columns
    const length = columns.length

    for (let i = 0, l = length; i < l; i++) {
      if (columns[i].fixed === 'left') {
        index = i
      }
    }

    return index
  }),
  fixedRightIndex: computed(() => {
    let index = -1
    const columns = props.columns
    const length = columns.length

    for (let i = 0, l = length; i < l; i++) {
      if (columns[i].fixed === 'left') {
        index = -1
      }
      if (index === -1 && columns[i].fixed === 'right') {
        index = i
      }
    }

    return index
  }),
  nestedTableWidth: computed(() => {
    const x = props.scrolls?.x

    if (/^\+?\d+\.?\d*$/.test(String(x))) {
      return x + 'px'
    }

    if (typeof x === 'string') {
      return x
    }

    return '100%'
  }),
  nestedScrollHeight: computed(() => {
    const y = props.scrolls?.y
    const paginate = props.paginate

    if (/^0$|^-\d+\.?\d*(px)?$/.test(String(y))) {
      return !paginate
        ? node.innerHeight.value + parseInt(String(y)) + 'px'
        : node.innerHeight.value + parseInt(String(y)) - 44 + 'px'
    }

    if (/^\d+\.?\d*(px)?$/.test(String(y))) {
      return !paginate
        ? parseInt(String(y)) + 'px'
        : parseInt(String(y)) - 44 + 'px'
    }

    if (y === 'string') {
      return y || 'auto'
    }

    return 'auto'
  }),
  nestedTableLayout: computed(() => {
    return ['fixed', 'auto'].includes(props.layout)
      ? props.layout
      : 'auto'
  })
}

const methods = {
  renderColGroupStyle(column: Column) {
    if (Util.isObject(column)) {
      if (/^\+?\d+\.?\d*$/.test(String(column.width))) {
        return {
          width: String(column.width) + 'px',
          minWidth: String(column.width) + 'px'
        }
      }

      if (typeof column.width === 'number') {
        return {
          width: column.width,
          minWidth: column.width
        }
      }
    }

    return {
      width: 'auto',
      minWidth: 'auto'
    }
  },
  renderElementStyle(column: Column & { fixedTop: boolean }, index: number) {
    let style: Record<string, string | number> = {}

    const limitLeft = node.limitLeft.value
    const limitRight = node.limitRight.value
    const theadColumArr = node.theadColums.value
    const isFixedLeft = compute.isFixedLeft.value
    const isFixedRight = compute.isFixedRight.value
    const fixedLeftIndex = compute.fixedLeftIndex.value
    const fixedRightIndex = compute.fixedRightIndex.value
    const currentFixedLeft = isFixedLeft && index <= fixedLeftIndex
    const currentFixedRight = isFixedRight && index >= fixedRightIndex

    if (typeof column.minWidth === 'string') {
      style = {
        ...style,
        minWidth: column.minWidth
      }
    }

    if (/^\+?\d+\.?\d*$/.test(String(column.minWidth))) {
      style = {
        ...style,
        minWidth: String(column.minWidth) + 'px'
      }
    }

    if (typeof column.maxWidth === 'string') {
      style = {
        ...style,
        maxWidth: column.maxWidth
      }
    }

    if (/^\+?\d+\.?\d*$/.test(String(column.maxWidth))) {
      style = {
        ...style,
        maxWidth: column.maxWidth + 'px'
      }
    }

    if (typeof column.align === 'string') {
      style = {
        ...style,
        'text-align': column.align
      }
    }

    if (column.ellipsis === true) {
      style = {
        ...style,
        'overflow': 'hidden',
        'white-space': 'nowrap',
        'text-overflow': 'ellipsis'
      }
    }

    if (column.fixedTop === true) {
      style = {
        ...style,
        'position': 'sticky',
        'top': 0,
        'z-index': 50
      }
    }

    if (currentFixedLeft === true) {
      const leftWidth = theadColumArr.reduce((total, item, mark) => {
        return mark < index ? total + item.width : total
      }, 0)

      const boxShadow = '3px ' + (column.fixedTop === true ? '-1px' : '1px') + ' 3px 0 rgba(0, 0, 0, .15)'

      style = {
        ...style,
        'position': 'sticky',
        'left': leftWidth + 'px',
        'z-index': column.fixedTop === true ? 80 : 30,
        'box-shadow': limitLeft > 0 && index === fixedLeftIndex ? boxShadow : 'none'
      }
    }

    if (currentFixedRight === true) {
      const rightWidth = theadColumArr.reduce((total, item, mark) => {
        return mark > index ? total + item.width : total
      }, 0)

      const boxShadow = '-3px ' + (column.fixedTop === true ? '-1px' : '1px') + ' 3px 0 rgba(0, 0, 0, .15)'

      style = {
        ...style,
        'position': 'sticky',
        'right': rightWidth + 'px',
        'z-index': column.fixedTop === true ? 80 : 30,
        'box-shadow': limitRight > 0 && index === fixedRightIndex ? boxShadow : 'none'
      }
    }

    return style
  },
  renderScopedSlots(type: string, column: Column) {
    return typeof column?.scopedSlots?.[type] === 'string'
      ? column.scopedSlots?.[type]
      : 'default'
  },
  triggerCustomRow(type: string, record: Record<string, any>, index: number) {
    const customRow = props.customRow(record, index)

    if (customRow.on && customRow.on[type]) {
      customRow.on[type]()
    }
  },
  computeAttribute() {
    if (nestedContent.value) {
      const tableTheadTh = '.s-table-thead-th'
      const $nestedContent = nestedContent.value as HTMLElement
      const $tableColumns = Array.from<HTMLElement>($nestedContent.querySelectorAll(tableTheadTh))

      node.nestedContent.offsetWidth = $nestedContent.offsetWidth
      node.nestedContent.scrollWidth = $nestedContent.scrollWidth
      node.nestedContent.offsetHeight = $nestedContent.offsetHeight
      node.nestedContent.scrollHeight = $nestedContent.scrollHeight

      node.theadColums.value = [...$tableColumns].map(node => {
        return {
          width: node.offsetWidth,
          height: node.offsetHeight
        }
      })
    }
  },
  computeScroll() {
    if (nestedContent.value) {
      const $nestedContent = nestedContent.value as HTMLElement
      const scrollWidth = $nestedContent.scrollWidth || 0
      const scrollHeight = $nestedContent.scrollHeight || 0
      const offsetHeight = $nestedContent.offsetHeight || 0
      const offsetWidth = $nestedContent.offsetWidth || 0
      const scrollLeft = $nestedContent.scrollLeft || 0
      const scrollTop = $nestedContent.scrollTop || 0

      node.limitTop.value = node.scrollTop.value = scrollTop || 0
      node.limitLeft.value = node.scrollLeft.value = scrollLeft || 0
      node.limitRight.value = scrollWidth - (scrollLeft + offsetWidth) || 0
      node.limitBottom.value = scrollHeight - (scrollTop + offsetHeight) || 0
    }
  },
  ready(state: boolean) {
    loading.value = state !== false
  },
  reload(paginate?: Partial<Pagination> | number) {
    if (promise.value) {
      return promise.value
    }

    if (!loading.value) {
      loading.value = true
    }

    if (/^\d+$/.test(String(paginate))) {
      pagination.pageNo = parseInt(String(paginate)) < pagination.totalPage
        ? parseInt(String(paginate))
        : pagination.totalPage

      pagination.pageNo = pagination.pageNo > 1
        ? pagination.pageNo
        : 1
    }

    if (typeof paginate === 'object') {
      Object.assign(pagination, {
        ...pagination,
        ...paginate
      })

      pagination.pageNo = pagination.pageNo > 1
        ? pagination.pageNo
        : 1
    }

    promise.value = Promise.resolve(props.loadData(pagination))
      .then(response => {
        return Promise.resolve(props.handleData(response, Util)).then(
          ({
            data,
            pageNo,
            totalPage,
            totalCount
          }) => {
            pagination.pageNo = pageNo
            pagination.totalPage = totalPage
            pagination.totalCount = totalCount
            sources.value = [...data]
          }
        )
      })
      .finally(() => {
        promise.value = null
        loading.value = false
      })

    return promise.value.then(() => {
      nestedContent.value?.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      })
    })
  },
  refresh(paginate?: Partial<Pagination>) {
    return methods.reload({ ...paginate, pageNo: 1 })
  }
}

const node = {
  limitTop: ref(0),
  limitLeft: ref(0),
  limitRight: ref(0),
  limitBottom: ref(0),
  scrollTop: ref(0),
  scrollLeft: ref(0),
  innerWidth: ref(window.innerWidth),
  innerHeight: ref(window.innerHeight),
  theadColums: ref([] as TheadColums[]),
  nestedContent: reactive({
    offsetWidth: 0,
    scrollWidth: 0,
    offsetHeight: 0,
    scrollHeight: 0
  })
}

const pagination = reactive({
  pageNo: 1,
  pageSize: 20,
  totalPage: 0,
  totalCount: 0,
  showPageSize: 6
})

const sources: Ref<Array<any>> = ref([])
const promise: Ref<Promise<any> | null> = ref(null)
const loading: Ref<boolean> = ref(false)

const nestedContainer = ref()
const nestedContent = ref()
const tableWrapper = ref()
const container = ref()
const table = ref()

const onscroll = () => methods.computeScroll()
const onresize = () => methods.computeAttribute()

onBeforeMount(() => window.addEventListener('resize', onresize))
onUnmounted(() => window.removeEventListener('resize', onresize))
onMounted(() => props.immediate !== false && methods.refresh({}))

watch(() => sources, () => {
  nextTick(() => {
    methods.computeScroll()
    methods.computeAttribute()
  })
}, { immediate: true, deep: true })

watch(() => props.paginate, () => {
  Object.assign(pagination, {
    pageNo: 1,
    pageSize: 20,
    totalPage: 0,
    totalCount: 10,
    showPageSize: 6,
    ...(Util.isObject(pagination) ? pagination : {}),
    ...(props.paginate && typeof props.paginate === 'object' ? props.paginate : {})
  })
}, { immediate: true })
</script>

<style lang="less" scoped>
.s-container {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Microsoft YaHei, Arial;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 1px;
  box-sizing: border-box;

  & > .s-spin-nested-container {
    width: 100%;
    min-height: 130px;
    box-sizing: border-box;
    position: relative;
    z-index: 10;
    overflow: hidden;
    & > .s-spin-nested-content {
      width: 100%;
      height: auto;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      position: relative;
      overflow: auto;
      & > .s-nested-table-wrapper {
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        position: relative;
        top: 0;
        left: 0;
        z-index: 1;
        & > .s-nested-table {
          width: 100%;
          min-width: 100%;
          font-size: 12px;
          font-family: -apple-system, BlinkMacSystemFont, PingFang SC, Microsoft YaHei, Arial;
          line-height: 1.2;
          color: #303133;
          text-align: left;
          list-style: none;
          box-sizing: border-box;
          background: #ffffff;
          font-variant: tabular-nums;
          font-feature-settings: 'tnum';
          border-collapse: separate;
          box-sizing: border-box;
          table-layout: fixed;
          border-spacing: 0;
          & > colgroup {
            box-sizing: border-box;
            & > col {
              box-sizing: border-box;
            }
          }
          & > .s-table-thead > .s-table-thead-tr {
            height: 32px;
            line-height: 1.2;
            box-sizing: border-box;
            & > .s-table-thead-th {
              height: 32px;
              line-height: 1.2;
              padding: 4px 10px 3px 5px;
              font-weight: 500;
              text-align: left;
              background: #fafafa;
              box-sizing: border-box;
              border-bottom: 1px solid #e8e8e8;
              transition: background 0.3s ease;
              overflow: hidden;
              & > .s-table-thead-th-cell {
                max-width: 100%;
                vertical-align: middle;
                box-sizing: border-box;
              }
            }
          }
          & > .s-table-tbody > .s-table-tbody-tr {
            height: 36px;
            line-height: 1.2;
            box-sizing: border-box;
            & > .s-table-tbody-td {
              height: 36px;
              padding: 4px 10px 3px 5px;
              font-weight: 400;
              text-align: left;
              line-height: 1.2;
              background: #ffffff;
              box-sizing: border-box;
              border-bottom: 1px solid #e8e8e8;
              transition: background 0.3s ease;
              overflow: hidden;
              & > .s-table-tbody-td-cell {
                max-width: 100%;
                vertical-align: middle;
                box-sizing: border-box;
              }
            }
          }
        }
      }
      & > .s-nested-table-empty {
        margin-top: -1px;
        padding: 16px 16px 3px;
        color: rgba(0, 0, 0, 0.25);
        font-size: 14px;
        text-align: center;
        background: #fff;
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
        border-radius: 0 0 4px 4px;
        box-sizing: border-box;
        position: relative;
        position: sticky;
        z-index: 1;
        left: 0;
        & > .s-empty-image {
          width: 100%;
          height: 36px;
          box-sizing: border-box;
        }
        & > .s-empty-text {
          margin: 5px;
          padding: 5px;
          box-sizing: border-box;
        }
      }
      &.spining {
        &:not(.scopes) {
          max-height: 210px;
        }
        overflow: hidden;
      }
    }
  }

  & > .s-pagination-container {
    width: 100%;
    height: 38px;
    overflow: hidden;
  }
}
</style>
