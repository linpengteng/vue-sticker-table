<p align="center">
  <img 
    style="width: 98%; margin: 0 auto;" 
    src="https://linpengteng.github.io/resource/vue-sticker-table/fixed.png" 
    alt="Vue Sticker Table"
  >
</p>


>简介：基于 css sticky 特性实现的 Table 组件, 支持 Vue2.x / Vue3.x<br />
>演示：[https://linpengteng.github.io/example/vue-sticker-table](https://linpengteng.github.io/example/vue-sticker-table)<br />

<br />

# 安装
```bash
  yarn add vue-sticker-table@1.2.0 # Vue2.x

  yarn add vue-sticker-table@1.3.2 # Vue3.x
```

<br />

# 表格选项 - table
|字段|说明|类型|默认值|
|:---|:---|:---:|:---:|
| rowKey | 表格行 key 的取值 | string | '' |
| layout | 表格 table-layout | 'fixed' \| 'auto' | 'auto' |
| columns | 表格列选项 | 具体项见下表 | - |
| scrolls | 设置横向或纵向滚动 | boolean \| undefined \| { x?: string \| number, y?: string \| number} | - |
| customRow | 设置行属性, 例如: 行单击事件 | (record: Record<string, any>, index: number) => { on?: Record<string, Function> } | - |
| immediate | 是否立刻执行 loadData | boolean | true |
| paginate | 表格分页选项 | boolean \| number \| pagination | false |
| loadData | 表格数据源加载函数 | (pagination: Pagination) => any | - |
| handleData | 数据源自定义处理函数, 处理 loadData 返回的数据源 | (response: any) => { data: Array<any>, pageNo: number, totalPage: number, totalCount: number } | - |

<br />

# 表格列选项 - columns
|字段|说明|类型|默认值|
|:---|:---|:---:|:---:|
| title | 列头显示文字 | string | - |
| dataIndex | 列数据在数据项中对应的 key | string | - |
| scopedSlots | 列数据在数据项中自定义slot | { customRender: string } | - |
| ellipsis | 单元格内容根据宽度自动省略 | boolean | - |
| width | 表格列宽度 | string \| number | - |
| maxWidth | 表格列最大宽度 | string \| number | - |
| minWidth | 表格列最小宽度 | string \| number | - |
| fixed | 表格列固定方向 | 'left' \| 'right' | - |

<br />

# 表格滚动选项 - scrolls
|字段|说明|类型|默认值|
|:---|:---|:---:|:---:|
| x | 表格横向滚动 | string \| number | - |
| y | 表格竖向滚动, 当值为负值时，则为 window.innerHeight + y | string \| number | - |

<br />

# 表格分页选项 - paginate
|字段|说明|类型|默认值|
|:---|:---|:---:|:---:|
| pageNo | 当前页数 | number | 1 |
| pageSize | 每页条数 | number | 20|
| totalPage | 当前总页数 | number | - |
| totalCount | 当前总条数 | number | - |
| showPageSize | 显示的页码个数 | number | 6 |

<br />

# 表格卡槽选项 - slot
|字段|说明|类型|默认值|
|:---|:---|:---:|:---:|
| pagination | 分页卡槽, 自定义分页组件 | Component | - |

<br />

# 许可证
> MIT