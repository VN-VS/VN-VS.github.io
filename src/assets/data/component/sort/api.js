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
                attribute: 'value',
                explain: '当前选中的项，可以使用 v-model 双向绑定数据',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'type',
                explain: '类型 default | label',
                type: 'String',
                default: 'default'
            },
            {
                attribute: 'data',
                explain: '下拉列表集合',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'disabled',
                explain: '禁用选项',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'width',
                explain: '组件宽度',
                type: 'Number | String',
                default: '102'
            },
            {
                attribute: 'panel-width',
                explain: '组件下拉面板宽度',
                type: 'Number | String',
                default: '200'
            },
            {
                attribute: 'render-format',
                explain: '下拉菜单项副标题渲染函数，该函数的入参为 data 中的项',
                type: 'Function',
                default: '默认显示 subtitle'
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
            },
            {
                title: '默认值',
                key: 'default',
                render: renderInnerHTML
            }
        ],
        data: [
            {
                attribute: 'value',
                explain: '值',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'label',
                explain: '文本',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'subtitle',
                explain: '副标题',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'sort',
                explain: '排序类型',
                type: 'String',
                default: 'desc | asc'
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
                explain: '选择项',
                returnValue: 'value'
            }
        ]
    }
]
