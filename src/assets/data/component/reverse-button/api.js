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
                attribute: 'selectText',
                explain: '选择状态时的文本',
                type: 'Sring',
                default: '请选择'
            },
            {
                attribute: 'prefixEditText',
                explain: '编辑状态时的前缀文本',
                type: 'String',
                default: '已选择'
            },
            {
                attribute: 'suffixEditText',
                explain: '编辑状态时的后缀文本',
                type: 'String',
                default: '编辑'
            },
            {
                attribute: 'status',
                explain: '按钮状态',
                type: 'String',
                default: 'select'
            },
            {
                attribute: 'customIcon',
                explain: 'iconfont名称',
                type: 'String',
                default: 'icon-xinjian'
            },
            {
                attribute: 'disabled',
                explain: '是否冻结',
                type: 'Boolean',
                default: 'false'
            }
        ]
    },
    {
        title: 'status 字段',
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
                attribute: 'select',
                explain: '选择状态',
                type: 'Sring'
            },
            {
                attribute: 'edit',
                explain: '编辑状态',
                type: 'Sring'
            },
            {
                attribute: 'loading',
                explain: '加载状态',
                type: 'Sring'
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
                eventName: 'on-click',
                explain: '点击按钮时触发',
                returnValue: '当前状态'
            }
        ]
    }
]
