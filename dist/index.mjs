import { defineComponent, openBlock, createElementBlock, createCommentVNode, createStaticVNode, computed, ref, reactive, onBeforeMount, onUnmounted, onMounted, watch, nextTick, createElementVNode, normalizeClass, normalizeStyle, Fragment, renderList, renderSlot, createTextVNode, toDisplayString, withModifiers, createVNode, createBlock, pushScopeId, popScopeId } from 'vue';

const _hoisted_1$2 = {
    key: 0,
    class: "s-spin-nested-spining"
};
const _hoisted_2$2 = /*#__PURE__*/ createStaticVNode("<span class=\"s-spin-dot-group\" data-v-21fd5be3><i class=\"s-spin-dot-item\" data-v-21fd5be3></i><i class=\"s-spin-dot-item\" data-v-21fd5be3></i><i class=\"s-spin-dot-item\" data-v-21fd5be3></i><i class=\"s-spin-dot-item\" data-v-21fd5be3></i></span><div class=\"s-spin-text\" data-v-21fd5be3><span data-v-21fd5be3>正在加载中...</span></div>", 2);
const _hoisted_4$1 = [
    _hoisted_2$2
];
const __default__$1 = {
    name: 'StickerLoading'
};
var script$2 = /*#__PURE__*/ defineComponent({
    ...__default__$1,
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(__props) {
        return (_ctx, _cache) => {
            return (__props.loading)
                ? (openBlock(), createElementBlock("div", _hoisted_1$2, _hoisted_4$1))
                : createCommentVNode("v-if", true);
        };
    }
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "@-webkit-keyframes vueSpinMove-21fd5be3 {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes vueSpinMove-21fd5be3 {\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes vueRotate-21fd5be3 {\n  to {\n    transform: rotate(405deg);\n  }\n}\n@keyframes vueRotate-21fd5be3 {\n  to {\n    transform: rotate(405deg);\n  }\n}\n.s-spin-nested-spining[data-v-21fd5be3] {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  background-color: rgba(252, 252, 252, 0.8);\n}\n.s-spin-nested-spining[data-v-21fd5be3] > .s-spin-dot-group[data-v-21fd5be3] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -20px -10px;\n  transform: rotate(45deg);\n  animation: vueRotate-21fd5be3 1.2s linear infinite;\n}\n.s-spin-nested-spining[data-v-21fd5be3] > .s-spin-dot-group[data-v-21fd5be3] > .s-spin-dot-item[data-v-21fd5be3] {\n  position: absolute;\n  display: block;\n  width: 9px;\n  height: 9px;\n  opacity: 0.3;\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  background-color: #1890ff;\n  animation: vueSpinMove-21fd5be3 1s linear infinite alternate;\n}\n.s-spin-nested-spining[data-v-21fd5be3] > .s-spin-dot-group[data-v-21fd5be3] > .s-spin-dot-item[data-v-21fd5be3][data-v-21fd5be3]:nth-child(1) {\n  top: 0;\n  left: 0;\n}\n.s-spin-nested-spining[data-v-21fd5be3] > .s-spin-dot-group[data-v-21fd5be3] > .s-spin-dot-item[data-v-21fd5be3][data-v-21fd5be3]:nth-child(2) {\n  top: 0;\n  right: 0;\n  animation-delay: 0.4s;\n}\n.s-spin-nested-spining[data-v-21fd5be3] > .s-spin-dot-group[data-v-21fd5be3] > .s-spin-dot-item[data-v-21fd5be3][data-v-21fd5be3]:nth-child(3) {\n  right: 0;\n  bottom: 0;\n  animation-delay: 0.8s;\n}\n.s-spin-nested-spining[data-v-21fd5be3] > .s-spin-dot-group[data-v-21fd5be3] > .s-spin-dot-item[data-v-21fd5be3][data-v-21fd5be3]:nth-child(4) {\n  left: 0;\n  bottom: 0;\n  animation-delay: 1.2s;\n}\n.s-spin-nested-spining[data-v-21fd5be3] > .s-spin-text[data-v-21fd5be3] {\n  display: block;\n  margin: 0;\n  padding: 5px 0 0 0;\n  font-size: 12px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  color: #1890ff;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  text-shadow: 0 1px 2px #fff;\n}\n";
styleInject(css_248z$1);

script$2.__scopeId = "data-v-21fd5be3";
script$2.__file = "src/sticker-loading.vue";

var script$1 = defineComponent({
    name: 'StickerEmpty'
});

const _hoisted_1$1 = {
  width: "64",
  height: "41",
  viewBox: "0 0 64 41",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /*#__PURE__*/createStaticVNode("<g transform=\"translate(0 1)\" fill=\"none\" fill-rule=\"evenodd\"><ellipse fill=\"#F5F5F5\" cx=\"32\" cy=\"33\" rx=\"32\" ry=\"7\"></ellipse><g fill-rule=\"nonzero\" stroke=\"#D9D9D9\"><path d=\"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z\"></path><path d=\"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z\" fill=\"#FAFAFA\"></path></g></g>", 1);
const _hoisted_3$1 = [
  _hoisted_2$1
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1))
}

script$1.render = render;
script$1.__file = "src/sticker-empty.vue";

function itType(val) {
    return Object.prototype.toString.call(val).replace(/^\[[^\s\]]+\s*([^\s\]]+)]$/, '$1');
}
function isUndef(val) {
    if (val === undefined) {
        return true;
    }
    return false;
}
function isArray(arr) {
    if (itType(arr) === 'Array') {
        return true;
    }
    return false;
}
function isObject(obj) {
    if (itType(obj) === 'Object') {
        return true;
    }
    return false;
}
function isString(str) {
    if (itType(str) === 'String') {
        return true;
    }
    return false;
}
function isNumber(num) {
    if (itType(num) === 'Number') {
        return true;
    }
    return false;
}
function isBoolean(num) {
    if (itType(num) === 'Boolean') {
        return true;
    }
    return false;
}
function isFunction(num) {
    if (itType(num) === 'Function') {
        return true;
    }
    return false;
}
function isNotEmpty(val) {
    if (isArray(val)) {
        return val.length > 0;
    }
    if (isObject(val)) {
        return Object.keys(val).length > 0;
    }
    return false;
}
var Util = {
    itType,
    isUndef,
    isArray,
    isObject,
    isString,
    isNumber,
    isBoolean,
    isFunction,
    isNotEmpty
};

const _withScopeId = n => (pushScopeId("data-v-c0dd5596"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "s-table-thead" };
const _hoisted_2 = { class: "s-table-thead-tr" };
const _hoisted_3 = ["fixedLeft"];
const _hoisted_4 = { class: "s-table-thead-th-cell" };
const _hoisted_5 = { class: "s-table-tbody" };
const _hoisted_6 = ["onClick", "onDblclick"];
const _hoisted_7 = { class: "s-table-tbody-td-cell" };
const _hoisted_8 = {
    key: 0,
    class: "s-nested-table-empty"
};
const _hoisted_9 = { class: "s-empty-image" };
const _hoisted_10 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ createElementVNode("p", { class: "s-empty-text" }, [
    /*#__PURE__*/ createElementVNode("span", null, "暂无数据")
], -1 /* HOISTED */));
const _hoisted_11 = {
    key: 0,
    class: "s-pagination-container"
};
const __default__ = {
    name: 'StickerTable'
};
var script = /*#__PURE__*/ defineComponent({
    ...__default__,
    props: {
        rowKey: { type: String, required: false, default: '' },
        layout: { type: String, required: false, default: 'auto' },
        columns: { type: Array, required: true, default: () => [] },
        scrolls: { type: Object, required: false, default: undefined },
        customRow: { type: Function, required: true, default: (record, index) => ({ on: {} }) },
        immediate: { type: Boolean, required: false, default: true },
        paginate: { type: [Boolean, Number, Object], required: false, default: undefined },
        loadData: { type: Function, required: true, default: () => { } },
        handleData: { type: Function, required: false, default: (response, util) => {
                if (util.isObject(response)) {
                    if (util.isObject(response.result)) {
                        const data = response.result.data || [];
                        const pageNo = response.result.pageNo || 1;
                        const totalPage = response.result.totalPage || 0;
                        const totalCount = response.result.totalCount || 0;
                        return {
                            data,
                            pageNo,
                            totalPage,
                            totalCount
                        };
                    }
                    if (util.isArray(response.result)) {
                        const data = response.result || [];
                        const pageNo = 1;
                        const pageSize = data.length;
                        const totalPage = 0;
                        const totalCount = data.length;
                        return {
                            data,
                            pageNo,
                            pageSize,
                            totalPage,
                            totalCount
                        };
                    }
                    const data = response.data || [];
                    const pageNo = response.pageNo || 1;
                    const totalPage = response.totalPage || 0;
                    const totalCount = response.totalCount || 0;
                    return {
                        data,
                        pageNo,
                        totalPage,
                        totalCount
                    };
                }
                if (util.isArray(response)) {
                    const data = response || [];
                    const pageNo = 1;
                    const pageSize = data.length;
                    const totalPage = 0;
                    const totalCount = data.length;
                    return {
                        data,
                        pageNo,
                        pageSize,
                        totalPage,
                        totalCount
                    };
                }
                return {
                    data: [],
                    pageNo: 1,
                    pageSize: 20,
                    totalPage: 0,
                    totalCount: 0
                };
            } }
    },
    setup(__props) {
        const props = __props;
        const compute = {
            isFixedTop: computed(() => {
                return /^[+-]?\d+\.?\d*(px)?$/.test(String(props.scrolls?.y));
            }),
            isFixedLeft: computed(() => {
                let isFixedLeft = false;
                for (const column of props.columns) {
                    if (column.fixed === 'left') {
                        isFixedLeft = true;
                        break;
                    }
                }
                return isFixedLeft;
            }),
            isFixedRight: computed(() => {
                let isFixedRight = false;
                for (const column of props.columns) {
                    if (column.fixed === 'left') {
                        isFixedRight = false;
                    }
                    if (column.fixed === 'right') {
                        isFixedRight = true;
                    }
                }
                return isFixedRight;
            }),
            fixedLeftIndex: computed(() => {
                let index = -1;
                const columns = props.columns;
                const length = columns.length;
                for (let i = 0, l = length; i < l; i++) {
                    if (columns[i].fixed === 'left') {
                        index = i;
                    }
                }
                return index;
            }),
            fixedRightIndex: computed(() => {
                let index = -1;
                const columns = props.columns;
                const length = columns.length;
                for (let i = 0, l = length; i < l; i++) {
                    if (columns[i].fixed === 'left') {
                        index = -1;
                    }
                    if (index === -1 && columns[i].fixed === 'right') {
                        index = i;
                    }
                }
                return index;
            }),
            nestedTableWidth: computed(() => {
                const x = props.scrolls?.x;
                if (/^\+?\d+\.?\d*$/.test(String(x))) {
                    return x + 'px';
                }
                if (typeof x === 'string') {
                    return x;
                }
                return '100%';
            }),
            nestedScrollHeight: computed(() => {
                const y = props.scrolls?.y;
                const paginate = props.paginate;
                if (/^0$|^-\d+\.?\d*(px)?$/.test(String(y))) {
                    return !paginate
                        ? node.innerHeight.value + parseInt(String(y)) + 'px'
                        : node.innerHeight.value + parseInt(String(y)) - 44 + 'px';
                }
                if (/^\d+\.?\d*(px)?$/.test(String(y))) {
                    return !paginate
                        ? parseInt(String(y)) + 'px'
                        : parseInt(String(y)) - 44 + 'px';
                }
                if (y === 'string') {
                    return y || 'auto';
                }
                return 'auto';
            }),
            nestedTableLayout: computed(() => {
                return ['fixed', 'auto'].includes(props.layout)
                    ? props.layout
                    : 'auto';
            })
        };
        const methods = {
            renderColGroupStyle(column) {
                if (Util.isObject(column)) {
                    if (/^\+?\d+\.?\d*$/.test(String(column.width))) {
                        return {
                            width: String(column.width) + 'px',
                            minWidth: String(column.width) + 'px'
                        };
                    }
                    if (typeof column.width === 'number') {
                        return {
                            width: column.width,
                            minWidth: column.width
                        };
                    }
                }
                return {
                    width: 'auto',
                    minWidth: 'auto'
                };
            },
            renderElementStyle(column, index) {
                let style = {};
                const limitLeft = node.limitLeft.value;
                const limitRight = node.limitRight.value;
                const theadColumArr = node.theadColums.value;
                const isFixedLeft = compute.isFixedLeft.value;
                const isFixedRight = compute.isFixedRight.value;
                const fixedLeftIndex = compute.fixedLeftIndex.value;
                const fixedRightIndex = compute.fixedRightIndex.value;
                const currentFixedLeft = isFixedLeft && index <= fixedLeftIndex;
                const currentFixedRight = isFixedRight && index >= fixedRightIndex;
                if (typeof column.minWidth === 'string') {
                    style = {
                        ...style,
                        minWidth: column.minWidth
                    };
                }
                if (/^\+?\d+\.?\d*$/.test(String(column.minWidth))) {
                    style = {
                        ...style,
                        minWidth: String(column.minWidth) + 'px'
                    };
                }
                if (typeof column.maxWidth === 'string') {
                    style = {
                        ...style,
                        maxWidth: column.maxWidth
                    };
                }
                if (/^\+?\d+\.?\d*$/.test(String(column.maxWidth))) {
                    style = {
                        ...style,
                        maxWidth: column.maxWidth + 'px'
                    };
                }
                if (typeof column.align === 'string') {
                    style = {
                        ...style,
                        'text-align': column.align
                    };
                }
                if (column.ellipsis === true) {
                    style = {
                        ...style,
                        'overflow': 'hidden',
                        'white-space': 'nowrap',
                        'text-overflow': 'ellipsis'
                    };
                }
                if (column.fixedTop === true) {
                    style = {
                        ...style,
                        'position': 'sticky',
                        'top': 0,
                        'z-index': 50
                    };
                }
                if (currentFixedLeft === true) {
                    const leftWidth = theadColumArr.reduce((total, item, mark) => {
                        return mark < index ? total + item.width : total;
                    }, 0);
                    const boxShadow = '3px ' + (column.fixedTop === true ? '-1px' : '1px') + ' 3px 0 rgba(0, 0, 0, .15)';
                    style = {
                        ...style,
                        'position': 'sticky',
                        'left': leftWidth + 'px',
                        'z-index': column.fixedTop === true ? 80 : 30,
                        'box-shadow': limitLeft > 0 && index === fixedLeftIndex ? boxShadow : 'none'
                    };
                }
                if (currentFixedRight === true) {
                    const rightWidth = theadColumArr.reduce((total, item, mark) => {
                        return mark > index ? total + item.width : total;
                    }, 0);
                    const boxShadow = '-3px ' + (column.fixedTop === true ? '-1px' : '1px') + ' 3px 0 rgba(0, 0, 0, .15)';
                    style = {
                        ...style,
                        'position': 'sticky',
                        'right': rightWidth + 'px',
                        'z-index': column.fixedTop === true ? 80 : 30,
                        'box-shadow': limitRight > 1 && index === fixedRightIndex ? boxShadow : 'none'
                    };
                }
                return style;
            },
            renderScopedSlots(type, column) {
                return typeof column?.scopedSlots?.[type] === 'string'
                    ? column.scopedSlots?.[type]
                    : 'default';
            },
            triggerCustomRow(type, record, index) {
                const customRow = props.customRow(record, index);
                if (customRow.on && customRow.on[type]) {
                    customRow.on[type]();
                }
            },
            computeAttribute() {
                if (nestedContent.value) {
                    const tableTheadTh = '.s-table-thead-th';
                    const $nestedContent = nestedContent.value;
                    const $tableColumns = Array.from($nestedContent.querySelectorAll(tableTheadTh));
                    node.nestedContent.offsetWidth = $nestedContent.offsetWidth;
                    node.nestedContent.scrollWidth = $nestedContent.scrollWidth;
                    node.nestedContent.offsetHeight = $nestedContent.offsetHeight;
                    node.nestedContent.scrollHeight = $nestedContent.scrollHeight;
                    node.theadColums.value = [...$tableColumns].map(node => {
                        return {
                            width: node.offsetWidth,
                            height: node.offsetHeight
                        };
                    });
                }
            },
            computeScroll() {
                if (nestedContent.value) {
                    const $nestedContent = nestedContent.value;
                    const scrollWidth = $nestedContent.scrollWidth || 0;
                    const scrollHeight = $nestedContent.scrollHeight || 0;
                    const offsetHeight = $nestedContent.offsetHeight || 0;
                    const offsetWidth = $nestedContent.offsetWidth || 0;
                    const scrollLeft = $nestedContent.scrollLeft || 0;
                    const scrollTop = $nestedContent.scrollTop || 0;
                    node.limitTop.value = node.scrollTop.value = scrollTop || 0;
                    node.limitLeft.value = node.scrollLeft.value = scrollLeft || 0;
                    node.limitRight.value = scrollWidth - (scrollLeft + offsetWidth) || 0;
                    node.limitBottom.value = scrollHeight - (scrollTop + offsetHeight) || 0;
                }
            },
            ready(state) {
                loading.value = state !== false;
            },
            reload(paginate) {
                if (promise.value) {
                    return promise.value;
                }
                if (!loading.value) {
                    loading.value = true;
                }
                if (/^\d+$/.test(String(paginate))) {
                    pagination.pageNo = parseInt(String(paginate)) < pagination.totalPage
                        ? parseInt(String(paginate))
                        : pagination.totalPage;
                    pagination.pageNo = pagination.pageNo > 1
                        ? pagination.pageNo
                        : 1;
                }
                if (typeof paginate === 'object') {
                    Object.assign(pagination, {
                        ...pagination,
                        ...paginate
                    });
                    pagination.pageNo = pagination.pageNo > 1
                        ? pagination.pageNo
                        : 1;
                }
                promise.value = Promise.resolve(props.loadData(pagination))
                    .then(response => {
                    return Promise.resolve(props.handleData(response, Util)).then(({ data, pageNo, totalPage, totalCount }) => {
                        pagination.pageNo = pageNo;
                        pagination.totalPage = totalPage;
                        pagination.totalCount = totalCount;
                        sources.value = [...data];
                    });
                })
                    .finally(() => {
                    promise.value = null;
                    loading.value = false;
                });
                return promise.value.then(() => {
                    nestedContent.value?.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'auto'
                    });
                });
            },
            refresh(paginate) {
                return methods.reload({ ...paginate, pageNo: 1 });
            }
        };
        const node = {
            limitTop: ref(0),
            limitLeft: ref(0),
            limitRight: ref(0),
            limitBottom: ref(0),
            scrollTop: ref(0),
            scrollLeft: ref(0),
            innerWidth: ref(window.innerWidth),
            innerHeight: ref(window.innerHeight),
            theadColums: ref([]),
            nestedContent: reactive({
                offsetWidth: 0,
                scrollWidth: 0,
                offsetHeight: 0,
                scrollHeight: 0
            })
        };
        const pagination = reactive({
            pageNo: 1,
            pageSize: 20,
            totalPage: 0,
            totalCount: 0,
            showPageSize: 6
        });
        const sources = ref([]);
        const promise = ref(null);
        const loading = ref(false);
        const nestedContainer = ref();
        const nestedContent = ref();
        const tableWrapper = ref();
        const container = ref();
        const table = ref();
        const onscroll = () => methods.computeScroll();
        const onresize = () => methods.computeAttribute();
        onBeforeMount(() => window.addEventListener('resize', onresize));
        onUnmounted(() => window.removeEventListener('resize', onresize));
        onMounted(() => props.immediate !== false && methods.refresh({}));
        watch(() => sources, () => {
            nextTick(() => {
                methods.computeScroll();
                methods.computeAttribute();
            });
        }, { immediate: true, deep: true });
        watch(() => props.paginate, () => {
            Object.assign(pagination, {
                pageNo: 1,
                pageSize: 20,
                totalPage: 0,
                totalCount: 10,
                showPageSize: 6,
                ...(Util.isObject(pagination) ? pagination : {}),
                ...(props.paginate && typeof props.paginate === 'object' ? props.paginate : {})
            });
        }, { immediate: true });
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", {
                ref_key: "container",
                ref: container,
                class: "s-container"
            }, [
                createElementVNode("div", {
                    ref_key: "nestedContainer",
                    ref: nestedContainer,
                    class: "s-spin-nested-container"
                }, [
                    createElementVNode("div", {
                        ref_key: "nestedContent",
                        ref: nestedContent,
                        class: normalizeClass(['s-spin-nested-content', {
                                scopes: loading.value && compute.nestedScrollHeight.value !== 'auto',
                                spining: loading.value
                            }]),
                        style: normalizeStyle({ height: compute.nestedScrollHeight.value }),
                        onScrollPassive: onscroll
                    }, [
                        createElementVNode("div", {
                            ref_key: "tableWrapper",
                            ref: tableWrapper,
                            class: "s-nested-table-wrapper"
                        }, [
                            createElementVNode("table", {
                                ref_key: "table",
                                ref: table,
                                class: "s-nested-table",
                                style: normalizeStyle({ width: compute.nestedTableWidth.value, tableLayout: compute.nestedTableLayout.value })
                            }, [
                                createElementVNode("colgroup", null, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (column, colIndex) => {
                                        return (openBlock(), createElementBlock("col", {
                                            key: colIndex,
                                            style: normalizeStyle(methods.renderColGroupStyle({ ...column }))
                                        }, null, 4 /* STYLE */));
                                    }), 128 /* KEYED_FRAGMENT */))
                                ]),
                                createElementVNode("thead", _hoisted_1, [
                                    createElementVNode("tr", _hoisted_2, [
                                        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (column, colIndex) => {
                                            return (openBlock(), createElementBlock("th", {
                                                key: colIndex,
                                                class: "s-table-thead-th",
                                                style: normalizeStyle(methods.renderElementStyle({ ...column, fixedTop: compute.isFixedTop.value }, colIndex)),
                                                fixedLeft: colIndex <= compute.fixedLeftIndex.value
                                            }, [
                                                createElementVNode("span", _hoisted_4, [
                                                    renderSlot(_ctx.$slots, methods.renderScopedSlots('title', { ...column }), {
                                                        title: column.title,
                                                        column: { ...column },
                                                        columns: [..._ctx.columns],
                                                        colIndex: colIndex
                                                    }, () => [
                                                        createTextVNode(toDisplayString(column.title), 1 /* TEXT */)
                                                    ])
                                                ])
                                            ], 12 /* STYLE, PROPS */, _hoisted_3));
                                        }), 128 /* KEYED_FRAGMENT */))
                                    ])
                                ]),
                                createElementVNode("tbody", _hoisted_5, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(sources.value, (source, rowIndex) => {
                                        return (openBlock(), createElementBlock("tr", {
                                            key: source[_ctx.rowKey],
                                            class: "s-table-tbody-tr",
                                            onClick: withModifiers(($event) => (methods.triggerCustomRow('click', source, rowIndex)), ["stop"]),
                                            onDblclick: withModifiers(($event) => (methods.triggerCustomRow('dblclick', source, rowIndex)), ["stop"])
                                        }, [
                                            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (column, colIndex) => {
                                                return (openBlock(), createElementBlock("td", {
                                                    key: colIndex,
                                                    class: "s-table-tbody-td",
                                                    style: normalizeStyle(methods.renderElementStyle({ ...column, fixedTop: false }, colIndex))
                                                }, [
                                                    createElementVNode("span", _hoisted_7, [
                                                        renderSlot(_ctx.$slots, methods.renderScopedSlots('customRender', { ...column }), {
                                                            value: source[column.dataIndex],
                                                            source: { ...source },
                                                            column: { ...column },
                                                            sources: [...sources.value],
                                                            columns: [..._ctx.columns],
                                                            colIndex: colIndex,
                                                            rowIndex: rowIndex
                                                        }, () => [
                                                            createTextVNode(toDisplayString(source[column.dataIndex]), 1 /* TEXT */)
                                                        ])
                                                    ])
                                                ], 4 /* STYLE */));
                                            }), 128 /* KEYED_FRAGMENT */))
                                        ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_6));
                                    }), 128 /* KEYED_FRAGMENT */))
                                ])
                            ], 4 /* STYLE */)
                        ], 512 /* NEED_PATCH */),
                        (!sources.value.length)
                            ? (openBlock(), createElementBlock("div", _hoisted_8, [
                                createElementVNode("div", _hoisted_9, [
                                    createVNode(script$1)
                                ]),
                                _hoisted_10
                            ]))
                            : createCommentVNode("v-if", true)
                    ], 38 /* CLASS, STYLE, HYDRATE_EVENTS */),
                    (loading.value)
                        ? (openBlock(), createBlock(script$2, {
                            key: 0,
                            loading: loading.value
                        }, null, 8 /* PROPS */, ["loading"]))
                        : createCommentVNode("v-if", true)
                ], 512 /* NEED_PATCH */),
                (_ctx.paginate)
                    ? (openBlock(), createElementBlock("div", _hoisted_11, [
                        renderSlot(_ctx.$slots, "pagination", {
                            loading: loading.value,
                            pagination: pagination,
                            refresh: methods.refresh,
                            reload: methods.reload
                        })
                    ]))
                    : createCommentVNode("v-if", true)
            ], 512 /* NEED_PATCH */));
        };
    }
});

var css_248z = ".s-container[data-v-c0dd5596] {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Microsoft YaHei, Arial;\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 1px;\n  box-sizing: border-box;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] {\n  width: 100%;\n  min-height: 130px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596] {\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  position: relative;\n  overflow: auto;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596] > .s-nested-table-wrapper[data-v-c0dd5596] {\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596] > .s-nested-table-wrapper[data-v-c0dd5596] > .s-nested-table[data-v-c0dd5596] {\n  width: 100%;\n  min-width: 100%;\n  font-size: 12px;\n  font-family: -apple-system, BlinkMacSystemFont, PingFang SC, Microsoft YaHei, Arial;\n  line-height: 1.2;\n  color: #303133;\n  text-align: left;\n  list-style: none;\n  background: #ffffff;\n  font-variant: tabular-nums;\n  font-feature-settings: 'tnum';\n  border-collapse: separate;\n  box-sizing: border-box;\n  table-layout: fixed;\n  border-spacing: 0;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596] > .s-nested-table-wrapper[data-v-c0dd5596] > .s-nested-table[data-v-c0dd5596] > colgroup[data-v-c0dd5596] {\n  box-sizing: border-box;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596] > .s-nested-table-wrapper[data-v-c0dd5596] > .s-nested-table[data-v-c0dd5596] > colgroup[data-v-c0dd5596] > col[data-v-c0dd5596] {\n  box-sizing: border-box;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596] > .s-nested-table-wrapper[data-v-c0dd5596] > .s-nested-table[data-v-c0dd5596] > .s-table-thead > .s-table-thead-tr[data-v-c0dd5596] {\n  height: 32px;\n  line-height: 1.2;\n  box-sizing: border-box;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596] > .s-nested-table-wrapper[data-v-c0dd5596] > .s-nested-table[data-v-c0dd5596] > .s-table-thead > .s-table-thead-tr[data-v-c0dd5596] > .s-table-thead-th[data-v-c0dd5596] {\n  height: 32px;\n  line-height: 1.2;\n  padding: 4px 10px 3px 5px;\n  font-weight: 500;\n  text-align: left;\n  background: #fafafa;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e8e8e8;\n  transition: background 0.3s ease;\n  overflow: hidden;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596] > .s-nested-table-wrapper[data-v-c0dd5596] > .s-nested-table[data-v-c0dd5596] > .s-table-thead > .s-table-thead-tr[data-v-c0dd5596] > .s-table-thead-th[data-v-c0dd5596] > .s-table-thead-th-cell[data-v-c0dd5596] {\n  max-width: 100%;\n  vertical-align: middle;\n  box-sizing: border-box;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596] > .s-nested-table-wrapper[data-v-c0dd5596] > .s-nested-table[data-v-c0dd5596] > .s-table-tbody > .s-table-tbody-tr[data-v-c0dd5596] {\n  height: 36px;\n  line-height: 1.2;\n  box-sizing: border-box;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596] > .s-nested-table-wrapper[data-v-c0dd5596] > .s-nested-table[data-v-c0dd5596] > .s-table-tbody > .s-table-tbody-tr[data-v-c0dd5596] > .s-table-tbody-td[data-v-c0dd5596] {\n  height: 36px;\n  padding: 4px 10px 3px 5px;\n  font-weight: 400;\n  text-align: left;\n  line-height: 1.2;\n  background: #ffffff;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e8e8e8;\n  transition: background 0.3s ease;\n  overflow: hidden;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596] > .s-nested-table-wrapper[data-v-c0dd5596] > .s-nested-table[data-v-c0dd5596] > .s-table-tbody > .s-table-tbody-tr[data-v-c0dd5596] > .s-table-tbody-td[data-v-c0dd5596] > .s-table-tbody-td-cell[data-v-c0dd5596] {\n  max-width: 100%;\n  vertical-align: middle;\n  box-sizing: border-box;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596] > .s-nested-table-empty[data-v-c0dd5596] {\n  margin-top: -1px;\n  padding: 16px 16px 3px;\n  color: rgba(0, 0, 0, 0.25);\n  font-size: 14px;\n  text-align: center;\n  background: #fff;\n  border-top: 1px solid #e8e8e8;\n  border-bottom: 1px solid #e8e8e8;\n  border-radius: 0 0 4px 4px;\n  box-sizing: border-box;\n  position: relative;\n  position: sticky;\n  z-index: 1;\n  left: 0;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596] > .s-nested-table-empty[data-v-c0dd5596] > .s-empty-image[data-v-c0dd5596] {\n  width: 100%;\n  height: 36px;\n  box-sizing: border-box;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596] > .s-nested-table-empty[data-v-c0dd5596] > .s-empty-text[data-v-c0dd5596] {\n  margin: 5px;\n  padding: 5px;\n  box-sizing: border-box;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596].spining[data-v-c0dd5596] {\n  overflow: hidden;\n}\n.s-container[data-v-c0dd5596] > .s-spin-nested-container[data-v-c0dd5596] > .s-spin-nested-content[data-v-c0dd5596].spining[data-v-c0dd5596][data-v-c0dd5596]:not(.scopes) {\n  max-height: 210px;\n}\n.s-container[data-v-c0dd5596] > .s-pagination-container[data-v-c0dd5596] {\n  width: 100%;\n  height: 38px;\n  overflow: hidden;\n}\n";
styleInject(css_248z);

script.__scopeId = "data-v-c0dd5596";
script.__file = "src/sticker-table.vue";

export { script as default };
