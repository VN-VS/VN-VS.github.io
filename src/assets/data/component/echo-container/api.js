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
                key: 'type',
                render: renderInnerHTML
            },
            {
                title: '默认值',
                key: 'default',
                render: renderInnerHTML
            }
        ],
        data: [
            {
                attribute: 'type',
                explain: '选项回显类型, 默认为单选框回显，<b>具体项见后文</b>',
                type: 'String',
                default: 'select'
            },
            {
                attribute: 'value',
                explain:
                    '指定当前选中的项目数据。可以使用 <code>v-model<code> 双向绑定数据。',
                type: '[String, Array, Object]',
                default: '-'
            },
            {
                attribute: 'label',
                explain: '选项回显左侧文本',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'is-label-tooltip',
                explain: '是否展示<code>label</code>的tooltip',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'label-tooltip-option',
                explain: '<code>v-tooltip</code>指令配置项',
                type: 'Object',
                default: '{}'
            },
            {
                attribute: 'is-clear',
                explain: '是否展示右侧的删除icon',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'content-width',
                explain: '中间内容区固定宽度',
                type: 'Number',
                default: '160'
            },
            {
                attribute: 'max-tag-count',
                explain: '多选时最多显示多少个tag',
                type: 'Number',
                default: '1'
            }
        ]
    },
    {
        title: 'type 选项回显类型',
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
            }
        ],
        data: [
            {
                attribute: 'type === select',
                explain:
                    '选项回显类型为选择框，支持账户选择组件accountSelect所有属性'
            },
            {
                attribute: 'type === input',
                explain: '选项回显类型为输入框，支持input所有属性'
            },
            {
                attribute: 'type === multi-cascader',
                explain:
                    '选项回显类型为下拉多级复选框，支持下拉多级复选框组件MultiCascader所有属性'
            },
            {
                attribute: 'type === indicator',
                explain:
                    '选项回显类型为数据指标，支持数据指标组件Indicator所有属性'
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
                explain: '选项绑定值发生改变时触发该事件',
                returnValue: '当前绑定值'
            },
            {
                eventName: 'on-clear',
                explain: '清空',
                returnValue: '-'
            }
        ]
    },
    {
        title: 'slots',
        columns: [
            {
                title: '名称',
                key: 'slotsName',
                render: renderInnerHTML
            },
            {
                title: '说明',
                key: 'explain',
                render: renderInnerHTML
            }
        ],
        data: [
            {
                slotsName: 'label',
                explain: '自定义label内容'
            },
            {
                slotsName: 'content',
                explain: '自定义content内容'
            }
        ]
    }
]
