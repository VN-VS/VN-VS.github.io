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
                explain:
                    '数据源，根据 <code>data</code> 长度渲染穿梭框数量，长度不限。',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: '<code>data</code> 中的title',
                explain: '标题文案',
                type: 'String',
                default: '标题'
            },
            {
                attribute: 'targetKeys',
                explain: 'key集合，数组长度和 <code>data</code> 一致',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'render-format',
                explain:
                    '每行数据渲染函数，该函数的入参为 <code>data</code> 中的项',
                type: 'Function',
                default: '默认显示label，没有时显示key'
            },
            {
                attribute: 'operations',
                explain: '操作文案集合，顺序从上至下',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'filterable',
                explain: '是否显示搜索框',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'filter-placeholder',
                explain: '搜索框的占位',
                type: 'String',
                default: '请输入搜索内容'
            },
            {
                attribute: 'filter-method',
                explain:
                    '自定义搜索函数，入参为 data 和 query，data 为项，query 为当前输入的搜索词	',
                type: 'Function',
                default: '默认搜索label'
            },
            {
                attribute: 'not-found-text',
                explain: '当列表为空时显示的内容',
                type: 'String',
                default: '列表为空'
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
                eventName: 'on-keys-change',
                explain: '选项在多栏之间转移时的回调函数，key集合',
                returnValue: '[[key1,key2],[key3,key4]]'
            },
            {
                eventName: 'on-data-change',
                explain: '选项在多栏之间转移时的回调函数，整体数据集合',
                returnValue: '和 <code>data</code> 结构保持一致'
            }
        ]
    }
]
