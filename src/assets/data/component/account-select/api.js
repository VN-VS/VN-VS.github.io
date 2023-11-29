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
                explain:
                    '指定选中项目的 value 值，可以使用 v-model 双向绑定数据。只接受 Array',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'data',
                explain: '显示的结构化数据',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'grouping',
                explain: '分组',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'crossSubject',
                explain: '跨主体',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'maxTagCount',
                explain: '多选时最多显示多少个 tag',
                type: 'Number',
                default: 1
            },
            {
                attribute: 'placeholder',
                explain: '选择框默认文字',
                type: 'String',
                default: '请搜索或选择媒体账户'
            },
            {
                attribute: 'disabled',
                explain: '是否禁用',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'transfer',
                explain:
                    '是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果',
                type: 'Boolean',
                default: 'false'
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
                explain: '默认返回 value',
                returnValue: '当前选中项'
            },
            {
                eventName: 'on-query-change',
                explain: '搜索词改变时触发',
                returnValue: 'query'
            },
            {
                eventName: 'on-open-change',
                explain: '下拉框展开或收起时触发',
                returnValue: 'true / false'
            }
        ]
    }
]
