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
                    '指定当前选中的项目数据。可以使用 v-model 双向绑定数据',
                type: 'Sring | Number | Boolean',
                default: 'null'
            },
            {
                attribute: 'type',
                explain: '可选值为 button 或不填，为 button 时使用按钮样式',
                type: 'String',
                default: 'button'
            },
            {
                attribute: 'defaultList',
                explain: 'radio数据',
                type: 'Array',
                default: '[]'
            },
            {
                attribute: 'isDisabledAll',
                explain: '是否禁用全部项',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'isDisabledItemFun',
                explain: '当前项是否禁用',
                type: 'Function',
                default: '-'
            },
            {
                attribute: 'iconIview',
                explain: 'iview字体图标',
                type: 'String',
                default: 'ios-help-circle-outline'
            },
            {
                attribute: 'maxWidth',
                explain:
                    '气泡最大宽度，超出最大值后，文本将自动换行，并两端对齐',
                type: 'String | Number',
                default: '300'
            },
            {
                attribute: 'placement',
                explain: '气泡提示框出现的位置',
                type: 'String',
                default: 'top'
            },
            {
                attribute: 'delay',
                explain: '气泡延迟显示，单位毫秒',
                type: 'Number',
                default: '1000'
            },
            {
                attribute: 'isCustom',
                explain: '是否取消自动定位',
                type: 'Boolean',
                default: 'false'
            }
        ]
    },
    {
        title: 'defaultList 字段参数',
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
                explain: '当前项对应的name',
                type: 'Sring | Number'
            },
            {
                attribute: 'value',
                explain: '当前项的label',
                type: 'Sring | Number | Boolean'
            },
            {
                attribute: 'tooltip',
                explain: '气泡文案',
                type: 'Sring | Array'
            },
            {
                attribute: 'disabled',
                explain: '是否禁用',
                type: 'Boolean'
            },
            {
                attribute: 'disabledTooltip',
                explain: '禁用后悬浮提示(气泡)',
                type: 'Sring | Array'
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
