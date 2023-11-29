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
                attribute: 'data',
                explain: '列表展示数据',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'dataConfig',
                explain: '配置原数据键值',
                type: 'Object',
                default: '{label: "label", key: "key"}'
            },
            {
                attribute: 'height',
                explain: '操作内容的高度',
                type: 'Number',
                default: '400'
            },
            {
                attribute: 'isClear',
                explain: '显示清空按钮',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'isUpdate',
                explain: '是否修改原数据',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'disabledOnTop',
                explain: '禁用项置顶',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'beforeRemove',
                explain: '删除(清空)之前,接受一个promise.',
                type: 'Function',
                default: '() => true'
            },
            {
                attribute: 'clearAllFunc',
                explain: '清空的过滤函数',
                type: 'Function',
                default: 'res => res.disabled(保留禁用项)'
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
                attribute: 'label',
                explain: '显示字段名称',
                type: 'Sring'
            },
            {
                attribute: 'key',
                explain: '唯一ID',
                type: 'Sring'
            },
            {
                attribute: 'disabled',
                explain: '是否禁用',
                type: 'Boolean'
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
                explain: '在选项状态发生改变时触发，返回当前选中的项',
                returnValue: '每一项的value'
            }
        ]
    }
]
