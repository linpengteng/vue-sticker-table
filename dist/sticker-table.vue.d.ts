import Util from './index.util';
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
    title: string;
    dataIndex: string;
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
    scrolls?: {
        x?: string | number;
        y?: string | number;
    };
    customRow: (record: Record<string, any>, index: number) => {
        on?: Record<string, Function>;
    };
    immediate?: boolean;
    paginate?: boolean | number | Pagination;
    loadData: (pagination: Pagination) => any;
    handleData?: (response: any, util: typeof Util) => {
        data: Array<any>;
        pageNo: number;
        totalPage: number;
        totalCount: number;
    };
}
declare const _default: import("vue").DefineComponent<{
    layout: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    rowKey: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    columns: {
        type: ArrayConstructor;
        required: true;
        default: () => never[];
    };
    scrolls: {
        type: ObjectConstructor;
        required: false;
        default: undefined;
    };
    customRow: {
        type: FunctionConstructor;
        required: true;
        default: (record: any, index: any) => {
            on: {};
        };
    };
    immediate: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    paginate: {
        type: (ObjectConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
        default: undefined;
    };
    loadData: {
        type: FunctionConstructor;
        required: true;
        default: () => void;
    };
    handleData: {
        type: FunctionConstructor;
        required: false;
        default: (response: any, util: any) => {
            data: any;
            pageNo: any;
            totalPage: any;
            totalCount: any;
            pageSize?: undefined;
        } | {
            data: any;
            pageNo: number;
            pageSize: any;
            totalPage: number;
            totalCount: any;
        };
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    layout: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    rowKey: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    columns: {
        type: ArrayConstructor;
        required: true;
        default: () => never[];
    };
    scrolls: {
        type: ObjectConstructor;
        required: false;
        default: undefined;
    };
    customRow: {
        type: FunctionConstructor;
        required: true;
        default: (record: any, index: any) => {
            on: {};
        };
    };
    immediate: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    paginate: {
        type: (ObjectConstructor | BooleanConstructor | NumberConstructor)[];
        required: false;
        default: undefined;
    };
    loadData: {
        type: FunctionConstructor;
        required: true;
        default: () => void;
    };
    handleData: {
        type: FunctionConstructor;
        required: false;
        default: (response: any, util: any) => {
            data: any;
            pageNo: any;
            totalPage: any;
            totalCount: any;
            pageSize?: undefined;
        } | {
            data: any;
            pageNo: number;
            pageSize: any;
            totalPage: number;
            totalCount: any;
        };
    };
}>>, {
    layout: string;
    rowKey: string;
    columns: unknown[];
    scrolls: Record<string, any>;
    customRow: Function;
    immediate: boolean;
    paginate: number | boolean | Record<string, any>;
    loadData: Function;
    handleData: Function;
}>;
export default _default;
