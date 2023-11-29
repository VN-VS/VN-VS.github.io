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
                attribute: 'value',
                explain:
                    'slot中Input值，可以使用<code>  v-model </code> 双向绑定数据',
                type: 'String',
                default: '-'
            },
            {
                attribute: 'is-input-slot',
                explain: 'slot是否展示，默认展示',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'input-placeholder',
                explain: '输入框placeholder值。',
                type: 'String',
                default: '请输入'
            },
            {
                attribute: 'input-width',
                explain: '输入框width值。',
                type: 'Number',
                default: '480'
            },
            {
                attribute: 'input-type',
                explain: '输入框类型。',
                type: 'String',
                default: 'text'
            },
            {
                attribute: 'input-disabled',
                explain: '输入框禁用。',
                type: 'Boolean',
                default: 'false'
            },
            {
                attribute: 'input-border',
                explain: '输入框是否显示边框，默认显示',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'is-differ-word',
                explain: '输入的字符是否区分中英文，默认区分',
                type: 'Boolean',
                default: 'true'
            },
            {
                attribute: 'count-type',
                explain:
                    '最大可输入数量是按英文计算还是按中文计算，默认按英文为en，按中文为cn',
                type: 'String',
                default: 'en'
            },
            {
                attribute: 'max-len',
                explain: '最大可输入数量。',
                type: 'Number',
                default: '10'
            },
            {
                attribute: 'current-len',
                explain: '当isInputSlot = false,输入的长度 = currentLen。',
                type: 'Number',
                default: '0'
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
                explain: '在输入框值发生改变时触发。',
                returnValue: '返回输入框绑定的值'
            }
        ]
    }
]
