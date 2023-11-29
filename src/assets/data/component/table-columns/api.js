import { renderInnerHTML } from '@/util/util'
export default [
    {
        title: 'props',
        columns: [
            {
                title: '属性',
                key: 'attribute',
                render: renderInnerHTML
            },
            {
                title: '说明',
                key: 'explain',
                render: renderInnerHTML
            },
            {
                title: '类型',
                key: 'type'
            },
            {
                title: '默认值',
                key: 'default',
                render: renderInnerHTML
            }
        ],
        data: [
            {
                attribute: 'v-model/value',
                explain: '选中项key',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'data',
                explain: '列表展示数据',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'editCallBack',
                explain: '编辑指标名称回调函数，接受一个promise',
                type: 'Function',
                default: '-'
            }
        ]
    },
    {
        title: 'data 字段参数',
        columns: [
            {
                title: '属性',
                key: 'attribute',
                render: renderInnerHTML
            },
            {
                title: '说明',
                key: 'explain',
                render: renderInnerHTML
            },
            {
                title: '类型',
                key: 'type'
            }
        ],
        data: [
            {
                attribute: 'title',
                explain: '显示字段名称',
                type: 'Sring'
            },
            {
                attribute: 'tooltip',
                explain: '自定义提示，默认使用title',
                type: 'Sring'
            },
            {
                attribute: 'key',
                explain: '唯一ID',
                type: 'Sring'
            },
            {
                attribute: 'slot',
                explain: '插槽 iview-table一致',
                type: 'String'
            },
            {
                attribute: 'sortable',
                explain: '排序 iview-table一致',
                type: 'String'
            },
            {
                attribute: 'minWidth',
                explain: '最小宽度 iview-table一致',
                type: 'String'
            },
            {
                attribute: 'fixed',
                explain: '浮动方向 iview-table一致',
                type: 'String'
            },
            {
                attribute: 'hide',
                explain: '* 是否隐藏',
                type: 'Boolean'
            },
            {
                attribute: 'check',
                explain: '* 是否选中',
                type: 'Boolean'
            },
            {
                attribute: 'disabled',
                explain: '* 是否禁用',
                type: 'Boolean'
            },
            {
                attribute: 'edit',
                explain: '* 是否可编辑',
                type: 'Boolean'
            },
            {
                attribute: 'prefix',
                explain: '前缀 {icon: "unlock",content: "提示"}',
                type: 'Object'
            },
            {
                attribute: 'suffix',
                explain: '后缀 {icon: "unlock",content: "提示"}',
                type: 'Object'
            }
        ]
    },
    {
        title: 'events',
        columns: [
            {
                title: '事件名',
                key: 'eventName',
                render: renderInnerHTML
            },
            {
                title: '说明',
                key: 'explain',
                render: renderInnerHTML
            },
            {
                title: '返回值',
                key: 'returnValue',
                render: renderInnerHTML
            }
        ],
        data: [
            {
                eventName: 'on-change',
                explain: '在选项状态发生改变时触发',
                returnValue: '只返回key 列表'
            },
            {
                eventName: 'on-sort-data',
                explain: '在选项状态发生改变时触发',
                returnValue: '获取完整数据 列表'
            }
        ]
    }
]
