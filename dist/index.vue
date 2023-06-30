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
          scopes: loading && nestedScrollHeight !== 'auto',
          spining: loading
        }]"
        :style="{ height: nestedScrollHeight }"
        @scroll.passive="onscroll"
      >
        <div
          ref="tableWrapper"
          class="s-nested-table-wrapper"
        >
          <table
            ref="table"
            class="s-nested-table"
            :style="{ width: nestedTableWidth, tableLayout: nestedTableLayout }"
          >
            <colgroup>
              <col
                v-for="(column, colIndex) of columns"
                :key="colIndex"
                :style="renderColGroupStyle({ ...column })"
              >
            </colgroup>

            <thead class="s-table-thead">
              <tr class="s-table-thead-tr">
                <th
                  v-for="(column, colIndex) of columns"
                  :key="colIndex"
                  :style="renderElementStyle({ ...column, fixedTop: isFixedTop }, colIndex)"
                  :fixedLeft="colIndex <= fixedLeftIndex"
                  class="s-table-thead-th"
                >
                  <span class="s-table-thead-th-cell">
                    <slot
                      :name="renderScopedSlots('title', { ...column })"
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
                @click.stop="triggerCustomRow('click', source, rowIndex)"
                @dblclick.stop="triggerCustomRow('dblclick', source, rowIndex)"
              >
                <td
                  v-for="(column, colIndex) of columns"
                  :key="colIndex"
                  class="s-table-tbody-td"
                  :style="renderElementStyle({ ...column, fixedTop: false }, colIndex)"
                >
                  <span class="s-table-tbody-td-cell">
                    <slot
                      :name="renderScopedSlots('customRender', { ...column })"
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
        :refresh="refresh"
        :reload="reload"
      />
    </div>
  </div>
</template>

<script>
import Utils from './utils'
import StickerEmpty from './vue-empty.vue'
import StickerLoading from './vue-loading.vue'

export default {
  name: 'StickerTable',
  components: {
    StickerEmpty,
    StickerLoading
  },
  props: {
    layout: {
      type: String,
      default: 'auto'
    },
    rowKey: {
      type: String,
      default: ''
    },
    columns: {
      type: Array,
      default: function() {
        return []
      }
    },
    scrolls: {
      type: [Object, Boolean],
      default: false
    },
    customRow: {
      type: Function,
      default: function() {
        return {
          on: {}
        }
      }
    },
    immediate: {
      type: Boolean,
      default: true
    },
    paginate: {
      type: [String, Boolean, Object],
      default: true
    },
    loadData: {
      type: Function,
      default: function() {}
    },
    handleData: {
      type: Function,
      default: function(response, Utils) {
        if (Utils.isObject(response)) {
          if (Utils.isObject(response.result)) {
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
          if (Utils.isArray(response.result)) {
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
        if (Utils.isArray(response)) {
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
      }
    }
  },
  data() {
    return {
      nestedContent: {
        offsetWidth: 0,
        scrollWidth: 0,
        offsetHeight: 0,
        scrollHeight: 0
      },

      theadColums: [],

      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,

      scrollTop: 0,
      scrollLeft: 0,

      limitTop: 0,
      limitLeft: 0,
      limitRight: 0,
      limitBottom: 0,

      onscroll: null,
      onresize: null,

      promise: null,
      loading: false,

      sources: [],
      pagination: {}
    }
  },
  computed: {
    isFixedTop() {
      if (Utils.isNotEmpty(this.scrolls)) {
        return /^[+-]?\d+\.?\d*(px)?$/.test(this.scrolls.y)
      }
      return false
    },
    isFixedLeft() {
      let isFixedLeft = false
      for (const column of this.columns) {
        if (column.fixed === 'left') {
          isFixedLeft = true
          break
        }
      }
      return isFixedLeft
    },
    isFixedRight() {
      let isFixedRight = false
      for (const column of this.columns) {
        if (column.fixed === 'left') {
          isFixedRight = false
        }
        if (column.fixed === 'right') {
          isFixedRight = true
        }
      }
      return isFixedRight
    },
    fixedLeftIndex() {
      let index = -1
      const columns = this.columns
      const length = columns.length
      for (let i = 0, l = length; i < l; i++) {
        if (columns[i].fixed === 'left') {
          index = i
        }
      }
      return index
    },
    fixedRightIndex() {
      let index = -1
      const columns = this.columns
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
    },
    nestedTableWidth() {
      if (Utils.isNotEmpty(this.scrolls)) {
        if (/^\+?\d+\.?\d*$/.test(this.scrolls.x)) {
          return this.scrolls.x + 'px'
        }
        if (Utils.isString(this.scrolls.x)) {
          return this.scrolls.x
        }
      }
      return '100%'
    },
    nestedScrollHeight() {
      if (Utils.isNotEmpty(this.scrolls)) {
        if (/^0$|^-\d+\.?\d*(px)?$/.test(this.scrolls.y)) {
          return !this.paginate
            ? this.innerHeight + parseInt(this.scrolls.y) + 'px'
            : this.innerHeight + parseInt(this.scrolls.y) - 44 + 'px'
        }
        if (/^\+?\d+\.?\d*(px)?$/.test(this.scrolls.y)) {
          return !this.paginate
            ? parseInt(this.scrolls.y) + 'px'
            : parseInt(this.scrolls.y) - 44 + 'px'
        }
        if (Utils.isString(this.scrolls.y)) {
          return this.scrolls.y || 'auto'
        }
      }
      return 'auto'
    },
    nestedTableLayout() {
      return ['fixed', 'auto'].includes(this.layout) ? this.layout : 'auto'
    }
  },
  watch: {
    sources: {
      handler() {
        this.$nextTick(() => {
          this.computeScroll()
          this.computeAttribute()
        })
      },
      immediate: true,
      deep: true
    },
    paginate: {
      handler() {
        this.pagination = {
          pageNo: 1,
          pageSize: 20,
          totalPage: 0,
          totalCount: 0,
          showPageSize: 6,
          ...(Utils.isObject(this.pagination) ? this.pagination : {}),
          ...(Utils.isObject(this.paginate) ? this.paginate : {})
        }
      },
      immediate: true
    }
  },
  created() {
    this.innerWidth = window.innerWidth
    this.innerHeight = window.innerHeight

    this.onscroll = this.optimizeRenderEvent(() => {
      this.computeScroll()
    })

    this.onresize = this.optimizeRenderEvent(() => {
      this.computeAttribute()
      this.innerWidth = window.innerWidth
      this.innerHeight = window.innerHeight
    })

    window.addEventListener('resize', this.onresize)
  },
  mounted() {
    if (this.immediate !== false) {
      this.refresh({})
    }
  },
  unmounted() {
    window.removeEventListener('resize', this.onresize)
  },
  methods: {
    optimizeRenderEvent(func) {
      let lockedRender = false
      if (window.requestAnimationFrame) {
        return event => {
          if (lockedRender) {
            return
          }
          lockedRender = true
          window.requestAnimationFrame(() => {
            lockedRender = false
            func(event)
          })
        }
      }
      return Utils.toThrottle(func, 16.7)
    },
    renderColGroupStyle(column) {
      if (Utils.isObject(column)) {
        if (/^\+?\d+\.?\d*$/.test(column.width)) {
          return {
            width: column.width + 'px',
            minWidth: column.width + 'px'
          }
        }
        if (Utils.isString(column.width)) {
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
    renderElementStyle(column, index) {
      if (Utils.isObject(column)) {
        // 应用样式
        let style = {}

        // 元素属性
        const theadColumArr = this.theadColums

        // 是否固定
        const limitLeft = this.limitLeft
        const limitRight = this.limitRight
        const isFixedLeft = this.isFixedLeft
        const isFixedRight = this.isFixedRight
        const fixedLeftIndex = this.fixedLeftIndex
        const fixedRightIndex = this.fixedRightIndex
        const currentFixedLeft = isFixedLeft && index <= fixedLeftIndex
        const currentFixedRight = isFixedRight && index >= fixedRightIndex
        // 文本最大宽度
        if (Utils.isString(column.minWidth)) {
          style = {
            ...style,
            minWidth: column.minWidth
          }
        }
        if (/^\+?\d+\.?\d*$/.test(column.minWidth)) {
          style = {
            ...style,
            minWidth: column.minWidth + 'px'
          }
        }
        // 文本最大宽度
        if (Utils.isString(column.maxWidth)) {
          style = {
            ...style,
            maxWidth: column.maxWidth
          }
        }
        if (/^\+?\d+\.?\d*$/.test(column.maxWidth)) {
          style = {
            ...style,
            maxWidth: column.maxWidth + 'px'
          }
        }
        // 文本对齐设置
        if (Utils.isString(column.align)) {
          style = {
            ...style,
            'text-align': column.align
          }
        }
        // 文本省略设置
        if (column.ellipsis === true) {
          style = {
            ...style,
            'overflow': 'hidden',
            'white-space': 'nowrap',
            'text-overflow': 'ellipsis'
          }
        }
        // 顶部固定设置
        if (column.fixedTop === true) {
          style = {
            ...style,
            'position': 'sticky',
            'top': 0,
            'z-index': 50
          }
        }
        // 左侧固定设置
        if (currentFixedLeft === true) {
          const leftWidth = theadColumArr.reduce((total, item, mark) => {
            return mark < index ? total + item.width : total
          }, 0)
          const boxShadow =
            '3px ' +
            (column.fixedTop === true ? '-1px' : '1px') +
            ' 3px 0 rgba(0, 0, 0, .15)'
          style = {
            ...style,
            'position': 'sticky',
            'left': leftWidth + 'px',
            'z-index': column.fixedTop === true ? 80 : 30,
            'box-shadow':
              limitLeft > 0 && index === fixedLeftIndex ? boxShadow : 'none'
          }
        }
        // 右侧固定设置
        if (currentFixedRight === true) {
          const rightWidth = theadColumArr.reduce((total, item, mark) => {
            return mark > index ? total + item.width : total
          }, 0)
          const boxShadow =
            '-3px ' +
            (column.fixedTop === true ? '-1px' : '1px') +
            ' 3px 0 rgba(0, 0, 0, .15)'
          style = {
            ...style,
            'position': 'sticky',
            'right': rightWidth + 'px',
            'z-index': column.fixedTop === true ? 80 : 30,
            'box-shadow':
              limitRight > 0 && index === fixedRightIndex ? boxShadow : 'none'
          }
        }
        return style
      }
      return {}
    },
    renderScopedSlots(type, column) {
      if (Utils.isObject(column)) {
        if (Utils.isObject(column.scopedSlots)) {
          return Utils.isString(column.scopedSlots[type])
            ? column.scopedSlots[type]
            : 'default'
        }
      }
      return 'default'
    },
    triggerCustomRow(...rest) {
      const [type, ...args] = rest
      const customRow = this.customRow(...args)
      if (Utils.isObject(customRow.on)) {
        if (Utils.isFunction(customRow.on[type])) {
          customRow.on[type]()
        }
      }
    },
    computeAttribute() {
      // 获取 ref元素
      const tableTheadTh = '.s-table-thead-th'
      const $nestedContent = this.$refs.nestedContent
      const $tableColumns = $nestedContent.querySelectorAll(tableTheadTh)

      // nested 容器属性
      this.nestedContent.offsetWidth = $nestedContent.offsetWidth
      this.nestedContent.scrollWidth = $nestedContent.scrollWidth
      this.nestedContent.offsetHeight = $nestedContent.offsetHeight
      this.nestedContent.scrollHeight = $nestedContent.scrollHeight

      // thead 每列属性
      this.theadColums = [...$tableColumns].map(node => {
        return {
          width: node.offsetWidth,
          height: node.offsetHeight
        }
      })
    },
    computeScroll() {
      // 获取 元素属性
      const $nestedContent = this.$refs.nestedContent
      const scrollWidth = $nestedContent.scrollWidth || 0
      const scrollHeight = $nestedContent.scrollHeight || 0
      const offsetHeight = $nestedContent.offsetHeight || 0
      const offsetWidth = $nestedContent.offsetWidth || 0
      const scrollLeft = $nestedContent.scrollLeft || 0
      const scrollTop = $nestedContent.scrollTop || 0

      // 计算 边界距离
      this.limitTop = this.scrollTop = scrollTop || 0
      this.limitLeft = this.scrollLeft = scrollLeft || 0
      this.limitRight = scrollWidth - (scrollLeft + offsetWidth) || 0
      this.limitBottom = scrollHeight - (scrollTop + offsetHeight) || 0
    },
    ready(state) {
      this.loading = state !== false
    },
    reload(paginate = {}) {
      if (this.promise) {
        return this.promise
      }

      if (!this.loading) {
        this.loading = true
      }

      if (/^\d+$/.test(paginate)) {
        this.pagination.pageNo =
          paginate > this.pagination.totalPage
            ? this.pagination.totalPage || 1
            : paginate
      }

      if (Utils.isObject(paginate)) {
        this.pagination = {
          ...this.pagination,
          ...paginate
        }
      }

      const pagination = this.pagination
      const pageSize = pagination.pageSize

      this.promise = Promise.resolve(this.loadData(this.pagination))
        .then(response => {
          return Promise.resolve(this.handleData(response, Utils)).then(
            ({
              data,
              pageNo,
              totalPage,
              totalCount
            }) => {
              if (![null, undefined].includes(pageNo)) {
                this.pagination.pageNo = pageNo
              }
              if (![null, undefined].includes(totalPage)) {
                this.pagination.totalPage = totalPage
              }
              if (![null, undefined].includes(totalCount)) {
                this.pagination.totalCount = totalCount
              }

              this.sources = this.paginate
                ? data.slice(0, pageSize)
                : [...data]
            }
          )
        })
        .finally(() => {
          this.promise = null
          this.loading = false
        })

      return this.promise.then(sources => {
        const $nestedContent = this.$refs.nestedContent

        $nestedContent.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto'
        })
      })
    },
    refresh(paginate) {
      return this.reload({ ...paginate, pageNo: 1 })
    }
  }
}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
